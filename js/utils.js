// 汎用ユーティリティ
export const CATS = [
  { key: "js", label: "JS基礎", cat: "JS基礎" },
  { key: "trn", label: "TS/React/Next", cat: "TS/React/Next" },
  { key: "cc", label: "Claude Code", cat: "Claude Code" },
  { key: "review", label: "振り返り", cat: "振り返り" },
];

// 分野（今どの技術をやっているか）。時間の入力単位ではなく表示用
export const TRACK_LIST = [
  "JS基礎",
  "TypeScript",
  "React",
  "Next.js",
  "コンバート",
  "テスト",
  "Claude Code",
  "振り返り",
];

export const TRACK_CLASS = {
  JS基礎: "tr-js",
  TypeScript: "tr-ts",
  React: "tr-react",
  "Next.js": "tr-next",
  コンバート: "tr-conv",
  テスト: "tr-test",
  "Claude Code": "tr-cc",
  振り返り: "tr-rv",
};

export const CAT_CLASS = {
  JS基礎: "cat-js",
  "TS/React/Next": "cat-trn",
  "Claude Code": "cat-cc",
  振り返り: "cat-review",
};

// 2階建て（コア／余力）の表示用
export const TIER_CLASS = {
  コア: "tier-core",
  余力: "tier-opt",
  済: "tier-done",
  対象外: "tier-out",
};

// 課題の週ラベル。0=8/23までに完了、-1=今回の計画から外した
export function weekLabel(week) {
  if (week === 0) return "完了済み";
  if (week < 0) return "今回は対象外";
  return `${week}週目`;
}

export function sum(arr, fn = (x) => x) {
  return arr.reduce((a, b) => a + fn(b), 0);
}

export function round1(n) {
  return Math.round(n * 10) / 10;
}

export function pct(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

export function fmtDate(iso) {
  const [, m, d] = iso.split("-");
  return `${Number(m)}/${Number(d)}`;
}

// ISO日付から曜日を出す（計画に無い過去の日でも使えるように）
export function wdOf(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return ["日", "月", "火", "水", "木", "金", "土"][
    new Date(y, m - 1, d).getDay()
  ];
}

export function todayIso() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// 指定日が属する週番号を返す（範囲外なら null）
export function weekOf(days, iso) {
  const hit = days.find((d) => d.date === iso);
  return hit ? hit.week : null;
}

export function debounce(fn, ms = 300) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
}

// テキストを安全に要素へ入れる（innerHTML を使わない）
export function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.text != null) node.textContent = opts.text;
  if (opts.attrs) {
    for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
  }
  if (opts.children) {
    for (const c of opts.children) if (c) node.appendChild(c);
  }
  return node;
}

// 学習期間のラベルを days から作る（日付をずらしても文字列を直す必要がない）
export function periodLabel(days, style = "short") {
  if (!days.length) return "";
  const a = days[0].date;
  const b = days.at(-1).date;
  const [ay, am, ad] = a.split("-");
  const [, bm, bd] = b.split("-");
  if (style === "short") {
    return `${Number(am)}/${Number(ad)}〜${Number(bm)}/${Number(bd)}`;
  }
  if (style === "dot") return `${ay}.${am}.${ad} – ${bm}.${bd}`;
  if (style === "long") {
    return `${ay}年${Number(am)}月${Number(ad)}日〜${Number(bm)}月${Number(bd)}日`;
  }
  return `${a}〜${b}`;
}
