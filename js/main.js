// 初期化・ルーティング・イベント登録
import * as store from "./storage.js?v=11";
import * as view from "./render.js?v=11";
import * as sync from "./sync.js?v=11";
import { debounce, todayIso, weekOf, periodLabel } from "./utils.js?v=11";
import { PLAN } from "./data.js?v=11";

const main = document.querySelector("#main");
const nav = document.querySelector("#nav");

const VIEWS = ["summary", "steps", "tasks", "logs", "refs", "rules"];

const filters = {
  steps: { week: "all", cat: "all", q: "", hideDone: false, coreOnly: false },
  tasks: { track: "all", week: "all", scope: "active" },
  logs: { week: "all" },
  refs: { track: "all" },
};

function currentView() {
  const hash = location.hash.replace("#", "");
  return VIEWS.includes(hash) ? hash : "summary";
}

function render() {
  const v = currentView();
  for (const btn of nav.querySelectorAll("a")) {
    btn.classList.toggle("active", btn.dataset.view === v);
  }
  if (v === "summary") view.renderSummary(main);
  else if (v === "steps") view.renderSteps(main, filters.steps);
  else if (v === "tasks") view.renderTasks(main, filters.tasks);
  else if (v === "logs") view.renderLogs(main, filters.logs);
  else if (v === "refs") view.renderRefs(main, filters.refs);
  else view.renderRules(main);
}

// ---------- イベント委譲（main配下のクリックを1箇所で処理） ----------
main.addEventListener("click", (e) => {
  // 手順のチェック
  const stepRow = e.target.closest("tr[data-id]");
  if (stepRow && e.target.matches('input[type="checkbox"]')) {
    store.toggleStep(stepRow.dataset.id);
    stepRow.classList.toggle("done", e.target.checked);
    if (filters.steps.hideDone) render();
    return;
  }

  // JS課題のチェック
  const card = e.target.closest(".task-card");
  if (card && e.target.matches('input[type="checkbox"]')) {
    store.toggleTask(card.dataset.id);
    card.classList.toggle("done", e.target.checked);
    // 件数表示だけ更新する（カード全体は再描画しない）
    const counter = main.querySelector("p.count");
    if (counter) {
      const sc =
        view.TASK_SCOPES.find((x) => x.value === filters.tasks.scope) ||
        view.TASK_SCOPES[0];
      const rows = PLAN.tasks.filter(
        (t) =>
          sc.match(t) &&
          (filters.tasks.track === "all" || t.track === filters.tasks.track) &&
          (filters.tasks.week === "all" ||
            t.week === Number(filters.tasks.week))
      );
      const d = rows.filter((t) => store.isTaskDone(t.id)).length;
      const h = Math.round(rows.reduce((a, t) => a + t.h, 0) * 10) / 10;
      counter.textContent = `${rows.length} 件（完了 ${d}） ／ 目安 ${h} h`;
    }
    return;
  }

  // ★理解度チェックの○△×
  const ckBtn = e.target.closest("button.ck-btn");
  if (ckBtn) {
    const id = ckBtn.dataset.check;
    store.setCheck(id, ckBtn.dataset.result);
    refreshCheckCards(id);
    return;
  }

  // ×の一覧をMarkdownでコピー（weak-points.md へ貼る）
  if (e.target.matches("button.weak-copy")) {
    const md = view.weakMarkdown();
    if (!md) {
      alert("×が付いた項目はありません。");
      return;
    }
    copyText(e.target, md, "コピーしました（weak-points.md に貼れます）");
    return;
  }

  // レビュー依頼文のコピー
  if (e.target.matches("button.copy")) {
    copyText(e.target, e.target.dataset.copy, "コピーしました");
  }
});

function copyText(btn, text, done) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const before = btn.textContent;
      btn.textContent = done;
      setTimeout(() => (btn.textContent = before), 2000);
    })
    .catch(() => alert("コピーに失敗しました。手動で選択してください。"));
}

/**
 * ★チェックのカードだけを差し替える。
 * 画面全体を描き直すと、textareaのカーソルやスクロールが飛ぶため。
 * 同じ手順のカードはサマリーと手順タブの両方に出ることがあるので、全部更新する。
 */
function refreshCheckCards(id) {
  const step = PLAN.steps.find((s) => s.id === id);
  if (!step) return;
  for (const old of main.querySelectorAll(`[data-check-card="${id}"]`)) {
    const next = view.checkCard(step);
    if (next) old.replaceWith(next);
  }
  // 「今日のチェック 1/3」の件数と、手順タブの見出しも直す
  const day = PLAN.days.find((d) => d.date === todayIso());
  if (day) {
    const items = (day.plan || []).filter((p) => p.check);
    const counter = main.querySelector(".today-checks .ck-count");
    if (counter && items.length) {
      const n = items.filter((p) => store.getCheck(p.id)).length;
      counter.textContent = `${n} / ${items.length}`;
    }
  }
  const cur = store.getCheck(id);
  for (const det of main.querySelectorAll("details.row-check")) {
    if (!det.querySelector(`[data-check-card="${id}"]`)) continue;
    det.className = `row-check${cur ? ` answered ck-r-${cur.r}` : ""}`;
    const label = det.querySelector("summary span:last-child");
    if (label) {
      const mark = view.CHECK_RESULTS.find((r) => r.key === cur?.r)?.label;
      label.textContent = cur
        ? `理解度チェック（${mark}）`
        : "理解度チェック（未回答）";
    }
  }
}

// ---------- メモの書き出しテンプレ ----------
main.addEventListener("click", (e) => {
  const btn = e.target.closest("button.tpl");
  if (!btn) return;
  const box = btn.closest("[data-date]");
  const ta = box?.querySelector("textarea[data-field='memo']");
  if (!ta) return;
  const cur = ta.value;
  const needsBreak = cur && !cur.endsWith("\n");
  ta.value = cur + (needsBreak ? "\n" : "") + btn.dataset.tpl;
  ta.focus();
  ta.setSelectionRange(ta.value.length, ta.value.length);
  store.setLog(box.dataset.date, { memo: ta.value });
});

// ---------- 日次ログを Markdown でコピー ----------
main.addEventListener("click", (e) => {
  const btn = e.target.closest("button.md-copy");
  if (!btn) return;
  const md = view.logsMarkdown(filters.logs.week);
  if (!md) {
    alert("コピーする記録がありません。");
    return;
  }
  navigator.clipboard
    .writeText(md)
    .then(() => {
      const before = btn.textContent;
      btn.textContent = "コピーしました（Obsidianに貼れます）";
      setTimeout(() => (btn.textContent = before), 2000);
    })
    .catch(() => alert("コピーに失敗しました。手動で選択してください。"));
});

// ---------- 入力系 ----------
const saveLog = debounce((date, field, value) => {
  store.setLog(date, { [field]: value });
  // 合計表示だけ更新する（全体再描画は避ける）。
  // 日次ログの行と、サマリーの「今日の記録」の両方が対象。
  const l = store.getLog(date);
  const total = Math.round((l.js + l.trn + l.cc + l.review) * 10) / 10;
  for (const box of main.querySelectorAll(`[data-date="${date}"]`)) {
    const cell = box.querySelector(".total");
    if (cell) {
      cell.textContent = `${total}h`;
      cell.classList.toggle("muted", !total);
    }
  }
}, 250);

// ★×のときの答え（自動保存）
const saveCheckNote = debounce((id, text) => {
  store.setCheckNote(id, text);
}, 400);

main.addEventListener("input", (e) => {
  // 理解度チェックの答え
  if (e.target.matches("textarea.ck-note")) {
    saveCheckNote(e.target.dataset.checkNote, e.target.value);
    return;
  }

  // 日次ログの入力
  const logRow = e.target.closest("[data-date]");
  if (logRow && e.target.dataset.field) {
    const field = e.target.dataset.field;
    const value =
      field === "memo" ? e.target.value : Number(e.target.value) || 0;
    saveLog(logRow.dataset.date, field, value);
    return;
  }

  // 手順の検索
  if (e.target.matches("input.search")) {
    filters.steps.q = e.target.value;
    debouncedRenderSteps();
  }
});

const debouncedRenderSteps = debounce(() => {
  const pos = window.scrollY;
  view.renderSteps(main, filters.steps);
  const input = main.querySelector("input.search");
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
  window.scrollTo(0, pos);
}, 250);

main.addEventListener("change", (e) => {
  if (e.target.matches("select.week-filter")) {
    const v = currentView();
    if (v === "steps") {
      filters.steps.week = e.target.value;
      view.renderSteps(main, filters.steps);
    } else if (v === "tasks") {
      filters.tasks.week = e.target.value;
      view.renderTasks(main, filters.tasks);
    } else if (v === "logs") {
      filters.logs.week = e.target.value;
      view.renderLogs(main, filters.logs);
    }
  }
  if (e.target.matches("select.ref-filter")) {
    filters.refs.track = e.target.value;
    view.renderRefs(main, filters.refs);
  }
  if (e.target.matches("select.track-filter")) {
    filters.tasks.track = e.target.value;
    view.renderTasks(main, filters.tasks);
  } else if (e.target.classList.contains("scope-filter")) {
    filters.tasks.scope = e.target.value;
    view.renderTasks(main, filters.tasks);
  }
  if (e.target.matches("select.cat-filter")) {
    filters.steps.cat = e.target.value;
    view.renderSteps(main, filters.steps);
  }
  if (e.target.matches("#hide-done")) {
    filters.steps.hideDone = e.target.checked;
    view.renderSteps(main, filters.steps);
  } else if (e.target.id === "core-only") {
    filters.steps.coreOnly = e.target.checked;
    view.renderSteps(main, filters.steps);
  }
});

// ---------- ヘッダーのボタン ----------
document.querySelector("#export").addEventListener("click", () => {
  store.exportJson();
});

document.querySelector("#import-file").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    await store.importJson(file);
    alert("読み込みました。");
    render();
  } catch (err) {
    console.error(err);
    alert("読み込みに失敗しました。ファイル形式を確認してください。");
  } finally {
    e.target.value = "";
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  if (confirm("入力した進捗を全て消します。よろしいですか？")) {
    store.resetAll();
    render();
  }
});

document.querySelector("#jump-today").addEventListener("click", () => {
  const iso = todayIso();
  const wk = weekOf(PLAN.days, iso);
  if (wk == null) {
    alert(`今日は学習期間（${periodLabel(PLAN.days)}）の範囲外です。`);
    return;
  }
  filters.logs.week = String(wk);
  location.hash = "#logs";
  render();
  const row = main.querySelector(`tr[data-date="${iso}"]`);
  if (row) {
    row.classList.add("today");
    row.scrollIntoView({ block: "center", behavior: "smooth" });
    row.querySelector('input[data-field="js"]')?.focus();
  }
});

// ---------- JSONのドラッグ＆ドロップ読み込み ----------
document.addEventListener("dragover", (e) => {
  if (e.dataTransfer?.types.includes("Files")) {
    e.preventDefault();
    document.body.classList.add("dragging");
  }
});
document.addEventListener("dragleave", (e) => {
  if (e.relatedTarget === null) document.body.classList.remove("dragging");
});
document.addEventListener("drop", async (e) => {
  const file = e.dataTransfer?.files?.[0];
  if (!file) return;
  e.preventDefault();
  document.body.classList.remove("dragging");
  if (!file.name.endsWith(".json")) {
    alert("JSONファイルをドロップしてください。");
    return;
  }
  try {
    await store.importJson(file);
    render();
    setStatus("読み込みました", "ok");
  } catch (err) {
    console.error(err);
    alert("読み込みに失敗しました。ファイル形式を確認してください。");
  }
});

// ---------- 同期 ----------
const statusEl = document.querySelector("#sync-status");
const dialog = document.querySelector("#sync-dialog");
const tokenInput = document.querySelector("#token-input");
const gistInput = document.querySelector("#gist-input");
const rememberBox = document.querySelector("#remember-token");

let dirty = false;

function setStatus(text, kind = "") {
  statusEl.textContent = text;
  statusEl.className = `sync-status ${kind}`;
}

function fmtTime(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getMonth() + 1}/${d.getDate()} ${p(d.getHours())}:${p(
    d.getMinutes()
  )}`;
}

function refreshStatus() {
  if (!sync.isConfigured()) {
    setStatus(
      "未接続：進捗はこのブラウザにのみ保存されます。端末をまたぐには「同期設定」から接続してください。",
      "warn"
    );
    return;
  }
  const last = sync.getLastSynced();
  const remembered = sync.isTokenRemembered() ? "" : "（このタブ限り）";
  setStatus(
    dirty
      ? `未同期の変更があります。最終同期 ${fmtTime(last)}${remembered}`
      : `同期済み ${fmtTime(last)}${remembered}`,
    dirty ? "warn" : "ok"
  );
}

async function doPush(manual = false) {
  if (!sync.isConfigured()) {
    if (manual) openDialog();
    return;
  }
  try {
    setStatus("同期中…");
    const res = await sync.push(store.getState(), {
      confirmOverwrite: (remoteAt) =>
        confirm(
          `別の端末で ${fmtTime(remoteAt)} に更新されています。\n` +
            "OKでこの端末の内容を反映、キャンセルで中止します。\n" +
            "（相手の内容を取り込みたい場合は中止して「同期」をもう一度押してください）"
        ),
    });
    if (res.skipped) {
      dirty = true;
      setStatus("同期を中止しました。相手の内容を取り込むには再読み込みしてください。", "warn");
      return;
    }
    dirty = false;
    refreshStatus();
  } catch (err) {
    console.error(err);
    setStatus(`同期できませんでした：${err.message}`, "error");
  }
}

async function doPull() {
  if (!sync.isConfigured()) return;
  try {
    setStatus("読み込み中…");
    const remote = await sync.pullIfNewer();
    if (remote) {
      store.replaceState(remote);
      render();
    }
    dirty = false;
    refreshStatus();
  } catch (err) {
    console.error(err);
    setStatus(`同期できませんでした：${err.message}`, "error");
  }
}

const pushSoon = debounce(() => doPush(), 4000);

store.onChange(() => {
  if (!sync.isConfigured()) return;
  dirty = true;
  refreshStatus();
  pushSoon();
});

function openDialog() {
  tokenInput.value = "";
  gistInput.value = sync.getGistId();
  rememberBox.checked = sync.isTokenRemembered();
  dialog.showModal();
}

document.querySelector("#sync-settings").addEventListener("click", openDialog);
document.querySelector("#sync-cancel").addEventListener("click", () => {
  dialog.close();
});

document.querySelector("#sync-connect").addEventListener("click", async () => {
  const token = tokenInput.value.trim();
  if (!token && !sync.getToken()) {
    alert("トークンを入力してください。");
    return;
  }
  if (token) sync.setToken(token, rememberBox.checked);
  sync.setGistId(gistInput.value.trim());
  dialog.close();

  try {
    if (!sync.getGistId()) {
      setStatus("Gistを作成中…");
      const id = await sync.createGist(store.getState());
      alert(
        `Gistを作成しました。\nGist ID: ${id}\n` +
          "別の端末ではこのIDを同期設定に貼ってください。"
      );
    } else {
      await doPull();
    }
    dirty = false;
    refreshStatus();
  } catch (err) {
    console.error(err);
    setStatus(`接続できませんでした：${err.message}`, "error");
  }
});

document.querySelector("#sync-disconnect").addEventListener("click", () => {
  if (!confirm("この端末の接続を解除します。進捗自体は残ります。")) return;
  sync.disconnect();
  dialog.close();
  refreshStatus();
});

document.querySelector("#sync-now").addEventListener("click", async () => {
  if (!sync.isConfigured()) {
    openDialog();
    return;
  }
  await doPull();
  await doPush(true);
});

// 離脱時に未同期があれば警告
window.addEventListener("beforeunload", (e) => {
  if (dirty && sync.isConfigured()) {
    e.preventDefault();
    e.returnValue = "";
  }
});

// ヘッダーに期間を表示（日付をずらしても自動で追従する）
document.querySelector("#period").textContent =
  `TypeScript / React / Next.js ／ ${periodLabel(PLAN.days, "dot")}`;

window.addEventListener("hashchange", render);
render();
refreshStatus();
doPull();
