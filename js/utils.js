// 汎用ユーティリティ
export const CATS = [
  { key: "js", label: "JS", cat: "JS" },
  { key: "cc", label: "Claude Code", cat: "Claude Code" },
  { key: "other", label: "その他技術", cat: "その他技術" },
  { key: "review", label: "振り返り", cat: "振り返り" },
];

export const CAT_CLASS = {
  JS: "cat-js",
  "Claude Code": "cat-cc",
  その他技術: "cat-other",
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
