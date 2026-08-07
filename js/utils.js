// 汎用ユーティリティ
export const CATS = [
  { key: "js", label: "JS基礎", cat: "JS基礎" },
  { key: "trn", label: "TS/React/Next", cat: "TS/React/Next" },
  { key: "cc", label: "Claude Code", cat: "Claude Code" },
  { key: "review", label: "振り返り", cat: "振り返り" },
];

export const CAT_CLASS = {
  JS基礎: "cat-js",
  "TS/React/Next": "cat-trn",
  "Claude Code": "cat-cc",
  振り返り: "cat-review",
};

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
