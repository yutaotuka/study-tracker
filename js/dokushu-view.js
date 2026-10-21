// 独習JSタブ（2周目・3周目の問題）。計画とは別枠なので、達成率・日次ログには数えない。
// 問題データ（dokushu.js・約650KB）は、このタブを開いたときだけ読み込む。
import * as store from "./storage.js?v=22";
import { el } from "./utils.js?v=22";

export const ROUNDS = [
  { key: "r2", label: "2周目（予想する）" },
  { key: "r3", label: "3周目（白紙から書く）" },
];

const RESULTS = [
  { key: "o", label: "○", note: "見ないでできた・予想が当たった" },
  { key: "d", label: "△", note: "一部外した・途中で本を開いた" },
  { key: "x", label: "×", note: "外した・書けなかった" },
];

export const SHOWS = [
  { value: "all", label: "すべて" },
  { value: "todo", label: "未回答だけ" },
  { value: "weak", label: "△と×だけ" },
  { value: "star", label: "★だけ" },
];

function allItems(data) {
  return data.chapters.flatMap((c) => c.items);
}

function counts(items, round) {
  const c = { o: 0, d: 0, x: 0, none: 0 };
  for (const it of items) c[store.getDokushu(it.id, round) || "none"]++;
  return c;
}

function matches(it, round, show) {
  const r = store.getDokushu(it.id, round);
  if (show === "todo") return !r;
  if (show === "weak") return r === "d" || r === "x";
  if (show === "star") return it.star;
  return true;
}

function statLine(data, round) {
  const items = allItems(data);
  const c = counts(items, round);
  const done = items.length - c.none;
  const label = ROUNDS.find((r) => r.key === round).label;
  const bar = el("div", { class: "dk-bar" });
  for (const k of ["o", "d", "x"]) {
    const seg = el("span", { class: `dk-seg dk-${k}` });
    seg.style.width = `${(c[k] / items.length) * 100}%`;
    bar.appendChild(seg);
  }
  return el("div", {
    class: "dk-stat",
    attrs: { "data-dk-stat": round },
    children: [
      el("span", { class: "dk-stat-label", text: label }),
      el("span", {
        class: "dk-stat-num",
        text: `${done} / ${items.length}項（○${c.o} △${c.d} ×${c.x}）`,
      }),
      bar,
    ],
  });
}

function html(cls, markup) {
  const div = el("div", { class: cls });
  div.innerHTML = markup; // build_dokushu.py でエスケープ済みのHTML
  return div;
}

/** 1項分。round の問題と答え、○△×ボタンを出す */
export function itemCard(it, round, open = false) {
  const cur = store.getDokushu(it.id, round);
  const pills = el("span", {
    class: "dk-pills",
    children: ROUNDS.map((r) => {
      const v = store.getDokushu(it.id, r.key);
      const mark = RESULTS.find((x) => x.key === v)?.label || "－";
      return el("span", {
        class: `dk-pill${v ? ` dk-${v}` : ""}${r.key === round ? " cur" : ""}`,
        text: `${r.key === "r2" ? "2周" : "3周"} ${mark}`,
      });
    }),
  });

  const summary = el("summary", {
    children: [
      el("span", { class: "dk-id", text: it.id }),
      el("span", { class: "dk-title", text: it.title }),
      it.star ? el("span", { class: "chip dk-star", text: "★" }) : null,
      ...it.marks.map((m) => el("span", { class: "chip dk-mark", text: m })),
      pills,
    ],
  });

  const body = it[round];
  const buttons = el("div", {
    class: "ck-buttons",
    children: RESULTS.map((r) =>
      el("button", {
        class: `ck-btn ck-${r.key}${cur === r.key ? " on" : ""}`,
        text: r.label,
        attrs: {
          type: "button",
          "data-dk": it.id,
          "data-dk-round": round,
          "data-result": r.key,
          title: `${r.note}（もう一度押すと取り消し）`,
        },
      })
    ),
  });

  const ans = el("details", {
    class: "dk-ans",
    children: [el("summary", { text: "答えを見る" }), html("dk-md", body.a)],
  });

  const det = el("details", {
    class: `dk-item${cur ? ` dk-r-${cur}` : ""}`,
    attrs: { "data-dk-item": it.id },
    children: [
      summary,
      el("div", {
        class: "dk-body",
        children: [html("dk-md", body.q), ans, buttons],
      }),
    ],
  });
  det.open = open;
  return det;
}

export function renderDokushu(root, filters, data) {
  root.replaceChildren();
  const { round, ch, show } = filters;

  root.appendChild(
    el("p", {
      class: "lead",
      text:
        "独習JavaScriptの2周目・3周目です。計画とは別枠なので、サマリーの達成率や日次ログには数えません。" +
        "本の項を読んだら、その項の問題を解いて○△×を付けます。外したものは weak-points.md に1行。",
    })
  );

  root.appendChild(
    el("div", {
      class: "dk-stats",
      children: ROUNDS.map((r) => statLine(data, r.key)),
    })
  );

  const bar = el("div", { class: "toolbar" });
  const rSel = el("select", { class: "dk-round" });
  for (const r of ROUNDS) rSel.appendChild(el("option", { text: r.label, attrs: { value: r.key } }));
  rSel.value = round;
  const cSel = el("select", { class: "dk-ch" });
  cSel.appendChild(el("option", { text: "全章", attrs: { value: "all" } }));
  for (const c of data.chapters) {
    cSel.appendChild(
      el("option", { text: `第${c.no}章 ${c.title}（${c.items.length}）`, attrs: { value: String(c.no) } })
    );
  }
  cSel.value = ch;
  const sSel = el("select", { class: "dk-show" });
  for (const s of SHOWS) sSel.appendChild(el("option", { text: s.label, attrs: { value: s.value } }));
  sSel.value = show;
  bar.append(rSel, cSel, sSel);
  root.appendChild(bar);

  const how = el("details", {
    class: "dk-how",
    children: [el("summary", { text: "やり方" }), html("dk-md", data.intro[round] || "")],
  });
  root.appendChild(how);

  const chapters = ch === "all" ? data.chapters : data.chapters.filter((c) => String(c.no) === ch);
  let shown = 0;
  for (const c of chapters) {
    const items = c.items.filter((it) => matches(it, round, show));
    if (!items.length) continue;
    const cc = counts(c.items, round);
    root.appendChild(
      el("h3", {
        class: "dk-ch-title",
        children: [
          el("span", { text: `第${c.no}章 ${c.title}` }),
          el("span", {
            class: "muted dk-ch-count",
            attrs: { "data-dk-ch": String(c.no) },
            text: `${c.items.length - cc.none} / ${c.items.length}`,
          }),
        ],
      })
    );
    const list = el("div", { class: "dk-list" });
    for (const it of items) list.appendChild(itemCard(it, round));
    root.appendChild(list);
    shown += items.length;
  }
  if (!shown) root.appendChild(el("p", { class: "empty", text: "当てはまる項はありません。" }));
}

/** ボタンを押したあと、その項と件数表示だけを描き直す（開いている状態を保つ） */
export function refreshItem(root, data, id, round) {
  const chapter = data.chapters.find((c) => c.items.some((it) => it.id === id));
  const it = chapter.items.find((x) => x.id === id);
  const old = root.querySelector(`[data-dk-item="${id}"]`);
  if (old) old.replaceWith(itemCard(it, round, old.open));
  for (const r of ROUNDS) {
    const s = root.querySelector(`[data-dk-stat="${r.key}"]`);
    if (s) s.replaceWith(statLine(data, r.key));
  }
  const chCount = root.querySelector(`[data-dk-ch="${chapter.no}"]`);
  if (chCount) {
    const cc = counts(chapter.items, round);
    chCount.textContent = `${chapter.items.length - cc.none} / ${chapter.items.length}`;
  }
}
