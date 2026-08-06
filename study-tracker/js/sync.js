// GitHub Gist を使った端末間の同期
//
// 設計の前提:
//   - 共用端末でも開く可能性があるため、トークンは既定で sessionStorage に置く
//     （タブを閉じれば消える）。自分専用の端末でのみ「この端末に記憶する」を選べる。
//   - Gist ID は秘密ではないので localStorage に置く。
//   - 競合は「相手が新しければ確認する」方式。勝手に上書きしない。

const TOKEN_KEY = "study-tracker-token";
const GIST_KEY = "study-tracker-gist-id";
const SYNCED_KEY = "study-tracker-last-synced";
const FILENAME = "study-progress.json";
const API = "https://api.github.com";

// ---------- トークン ----------
export function getToken() {
  return (
    sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY) || ""
  );
}

export function isTokenRemembered() {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function setToken(token, remember) {
  clearToken();
  if (!token) return;
  if (remember) localStorage.setItem(TOKEN_KEY, token);
  else sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
}

// ---------- Gist ID ----------
export function getGistId() {
  return localStorage.getItem(GIST_KEY) || "";
}

export function setGistId(id) {
  if (id) localStorage.setItem(GIST_KEY, id);
  else localStorage.removeItem(GIST_KEY);
}

// ---------- 最終同期時刻 ----------
export function getLastSynced() {
  return localStorage.getItem(SYNCED_KEY) || "";
}

function markSynced(iso) {
  localStorage.setItem(SYNCED_KEY, iso || new Date().toISOString());
}

export function isConfigured() {
  return !!getToken() && !!getGistId();
}

// ---------- API 呼び出し ----------
async function call(path, options = {}) {
  const token = getToken();
  if (!token) throw new SyncError("トークンが設定されていません", "no-token");

  let res;
  try {
    res = await fetch(`${API}${path}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(options.body ? { "Content-Type": "application/json" } : {}),
      },
    });
  } catch (e) {
    throw new SyncError("ネットワークに接続できませんでした", "network");
  }

  if (res.status === 401) {
    throw new SyncError(
      "トークンが無効か期限切れです。設定し直してください",
      "auth"
    );
  }
  if (res.status === 403) {
    throw new SyncError(
      "権限がありません。トークンに gist スコープが付いているか確認してください",
      "forbidden"
    );
  }
  if (res.status === 404) {
    throw new SyncError("Gistが見つかりません", "not-found");
  }
  if (!res.ok) {
    throw new SyncError(`GitHubがエラーを返しました (${res.status})`, "http");
  }
  return res.json();
}

export class SyncError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "SyncError";
    this.code = code;
  }
}

// ---------- 同期本体 ----------

/** 新しい非公開Gistを作り、そのIDを保存する */
export async function createGist(state) {
  const json = await call("/gists", {
    method: "POST",
    body: JSON.stringify({
      description: "学習トラッカーの進捗（自動生成・非公開）",
      public: false,
      files: { [FILENAME]: { content: JSON.stringify(state, null, 2) } },
    }),
  });
  setGistId(json.id);
  markSynced(json.updated_at);
  return json.id;
}

/** Gistから進捗を取得する。無ければ null */
export async function pull() {
  const id = getGistId();
  if (!id) throw new SyncError("Gist IDが設定されていません", "no-gist");

  const json = await call(`/gists/${id}`);
  const file = json.files && json.files[FILENAME];
  if (!file) {
    throw new SyncError(`Gistに ${FILENAME} がありません`, "no-file");
  }
  // 1MBを超えると content が truncated になり raw_url からの取得が必要になる
  let content = file.content;
  if (file.truncated && file.raw_url) {
    const res = await fetch(file.raw_url);
    content = await res.text();
  }

  let state;
  try {
    state = JSON.parse(content);
  } catch (e) {
    throw new SyncError("Gistの中身がJSONとして読めませんでした", "parse");
  }
  return { state, updatedAt: json.updated_at };
}

/** 進捗をGistへ書き込む。remote が新しい場合は confirmOverwrite で確認する */
export async function push(state, { confirmOverwrite } = {}) {
  const id = getGistId();
  if (!id) return { created: true, id: await createGist(state) };

  // 競合チェック: 前回同期以降に他端末が書いていないか
  const remote = await call(`/gists/${id}`);
  const lastSynced = getLastSynced();
  if (
    lastSynced &&
    remote.updated_at &&
    new Date(remote.updated_at) > new Date(lastSynced)
  ) {
    const ok = confirmOverwrite
      ? await confirmOverwrite(remote.updated_at)
      : false;
    if (!ok) return { skipped: true, remoteUpdatedAt: remote.updated_at };
  }

  const json = await call(`/gists/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      files: { [FILENAME]: { content: JSON.stringify(state, null, 2) } },
    }),
  });
  markSynced(json.updated_at);
  return { pushed: true, updatedAt: json.updated_at };
}

/** 読み込み時に呼ぶ。リモートが新しければ state を返す */
export async function pullIfNewer() {
  if (!isConfigured()) return null;
  const { state, updatedAt } = await pull();
  const lastSynced = getLastSynced();
  if (!lastSynced || new Date(updatedAt) > new Date(lastSynced)) {
    markSynced(updatedAt);
    return state;
  }
  return null;
}

export function disconnect() {
  clearToken();
  setGistId("");
  localStorage.removeItem(SYNCED_KEY);
}
