// 進捗データの保存・読み込み（localStorage + JSONエクスポート/インポート）
// v3でも保存先はv2と同じ。手順IDに v3s… という接頭辞を付けたので、
// 日次ログと課題の完了はそのまま引き継がれ、手順のチェックだけが混ざらない。
const KEY = "study-tracker-v2";

const EMPTY = {
  version: 1,
  steps: {},   // { "s1": true }
  tasks: {},   // { "t1": true }
  logs: {},    // { "2026-08-07": { js: 1, trn: 0.5, cc: 0.5, review: 0, memo: "" } }
  // ★理解度チェック。手順IDごとに { r: "o"|"d"|"x", note: "×のときだけ書く答え" }
  // 「終わった(steps)」と「分かった(checks)」を分けて持つ。ここが今回の肝
  checks: {},
  updatedAt: null,
};

let state = load();
const listeners = new Set();

/** 保存が起きたら通知する（同期の未保存表示などに使う） */
export function onChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(EMPTY);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(EMPTY), ...parsed };
  } catch (e) {
    console.error("保存データの読み込みに失敗しました。初期状態で開始します。", e);
    return structuredClone(EMPTY);
  }
}

function persist({ notify = true } = {}) {
  state.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    console.error("保存に失敗しました。ブラウザの保存容量を確認してください。", e);
    alert("保存に失敗しました。ブラウザの設定（プライベートモード等）を確認してください。");
  }
  if (notify) for (const fn of listeners) fn(state);
}

/** 同期で受け取った内容で丸ごと置き換える */
export function replaceState(next) {
  state = { ...structuredClone(EMPTY), ...next };
  persist();
}

export function getState() {
  return state;
}

export function isStepDone(id) {
  return !!state.steps[id];
}

export function toggleStep(id) {
  if (state.steps[id]) delete state.steps[id];
  else state.steps[id] = true;
  persist();
}

/** 理解度チェックの判定を取る。未回答なら null */
export function getCheck(id) {
  return state.checks[id] || null;
}

/**
 * 判定を付ける。同じ判定をもう一度押すと未回答に戻る。
 * ×以外に変えたときは、書いてあった答えも一緒に消す。
 */
export function setCheck(id, result) {
  const cur = state.checks[id];
  if (cur && cur.r === result) delete state.checks[id];
  else if (result === "x") state.checks[id] = { r: "x", note: cur?.note || "" };
  else state.checks[id] = { r: result };
  persist();
}

/** ×のときの答えを書き残す（weak-points.md の材料になる） */
export function setCheckNote(id, note) {
  const cur = state.checks[id];
  if (!cur) return;
  if (!note.trim()) delete cur.note;
  else cur.note = note;
  persist();
}

export function isTaskDone(id) {
  return !!state.tasks[id];
}

export function toggleTask(id) {
  if (state.tasks[id]) delete state.tasks[id];
  else state.tasks[id] = true;
  persist();
}

export function getLog(date) {
  return state.logs[date] || { js: 0, trn: 0, cc: 0, review: 0, memo: "" };
}

export function setLog(date, patch) {
  const cur = getLog(date);
  const next = { ...cur, ...patch };
  const empty =
    !next.js && !next.trn && !next.cc && !next.review && !next.memo.trim();
  if (empty) delete state.logs[date];
  else state.logs[date] = next;
  persist();
}

export function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `study-progress-${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function importJson(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  if (typeof parsed !== "object" || parsed === null) {
    throw new Error("形式が正しくありません");
  }
  state = { ...structuredClone(EMPTY), ...parsed };
  persist();
}

export function resetAll() {
  state = structuredClone(EMPTY);
  persist();
}
