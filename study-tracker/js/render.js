// 画面描画（DOM組み立てのみ。イベント登録は main.js 側）
import { PLAN } from "./data.js";
import * as store from "./storage.js";
import {
  CATS,
  CAT_CLASS,
  sum,
  round1,
  pct,
  fmtDate,
  todayIso,
  el,
} from "./utils.js";

// ---------- 集計 ----------
export function weekStats(weekNo) {
  const days = PLAN.days.filter((d) => d.week === weekNo);
  const target = sum(days, (d) => d.target);
  const actual = sum(days, (d) => {
    const l = store.getLog(d.date);
    return l.js + l.cc + l.other + l.review;
  });
  const steps = PLAN.steps.filter((s) => s.week === weekNo);
  const stepsDone = steps.filter((s) => store.isStepDone(s.id)).length;
  return {
    target: round1(target),
    actual: round1(actual),
    ratio: target ? actual / target : 0,
    steps: steps.length,
    stepsDone,
  };
}

export function totalStats() {
  const target = sum(PLAN.days, (d) => d.target);
  const actual = sum(PLAN.days, (d) => {
    const l = store.getLog(d.date);
    return l.js + l.cc + l.other + l.review;
  });
  const byCat = {};
  for (const c of CATS) {
    byCat[c.key] = round1(
      sum(PLAN.days, (d) => store.getLog(d.date)[c.key] || 0)
    );
  }
  return {
    target: round1(target),
    actual: round1(actual),
    byCat,
    steps: PLAN.steps.length,
    stepsDone: PLAN.steps.filter((s) => store.isStepDone(s.id)).length,
    tasks: PLAN.tasks.length,
    tasksDone: PLAN.tasks.filter((t) => store.isTaskDone(t.id)).length,
  };
}

// ---------- 部品 ----------
function bar(ratio, cls = "") {
  const outer = el("div", { class: `bar ${cls}` });
  const inner = el("div", { class: "bar-fill" });
  inner.style.width = `${Math.min(100, Math.round(ratio * 100))}%`;
  outer.appendChild(inner);
  return outer;
}

function statCard(label, value, sub) {
  return el("div", {
    class: "stat",
    children: [
      el("div", { class: "stat-label", text: label }),
      el("div", { class: "stat-value", text: value }),
      sub ? el("div", { class: "stat-sub", text: sub }) : null,
    ],
  });
}

// ---------- サマリー ----------
// 今日（期間外なら初日）の目安パネル
export function renderToday(root) {
  const iso = todayIso();
  const today = PLAN.days.find((d) => d.date === iso);
  const day = today || PLAN.days[0];
  const outOfRange = !today;

  const items = day.plan.map((p) =>
    el("li", {
      children: [
        el("span", { class: `chip ${CAT_CLASS[p.cat]}`, text: p.cat }),
        el("span", { class: "todo", text: p.todo }),
        el("span", { class: "hh", text: `${p.h}h` }),
      ],
    })
  );

  const log = store.getLog(day.date);
  const done = round1(log.js + log.cc + log.other + log.review);

  root.appendChild(
    el("section", {
      class: "today-panel",
      children: [
        el("header", {
          children: [
            el("h2", {
              text: outOfRange ? "初日の目安" : "今日やることの目安",
            }),
            el("span", {
              class: "meta",
              text: `${fmtDate(day.date)}（${day.wd}） ${day.week}週目 ・ 目標${
                day.target
              }h ・ 実施${done}h`,
            }),
          ],
        }),
        outOfRange
          ? el("p", {
              class: "muted",
              text: "今日は学習期間（8/6〜10/15）の範囲外なので、初日の内容を表示しています。",
            })
          : null,
        el("ul", { class: "today-list", children: items }),
        el("p", {
          class: "muted",
          text: "目安なので前後に1〜2日ずれても問題ありません。週の合計が合っていればOKです。",
        }),
      ],
    })
  );
}

export function renderSummary(root) {
  root.replaceChildren();
  const t = totalStats();

  renderToday(root);

  root.appendChild(
    el("div", {
      class: "stats",
      children: [
        statCard("実施時間", `${t.actual} h`, `目標 ${t.target} h`),
        statCard("達成率", `${pct(t.actual, t.target)} %`, "全期間"),
        statCard("手順の消化", `${t.stepsDone} / ${t.steps}`, "週別タスク手順"),
        statCard("課題", `${t.tasksDone} / ${t.tasks}`, "全分野・自分でやる課題"),
      ],
    })
  );

  const catWrap = el("div", { class: "cat-summary" });
  for (const c of CATS) {
    catWrap.appendChild(
      el("div", {
        class: `chip ${CAT_CLASS[c.cat]}`,
        text: `${c.label} ${t.byCat[c.key]} h`,
      })
    );
  }
  root.appendChild(catWrap);

  root.appendChild(el("h2", { text: "週別の進捗" }));
  const list = el("div", { class: "week-list" });
  for (const w of PLAN.weeks) {
    const s = weekStats(w.no);
    list.appendChild(
      el("article", {
        class: "week-card",
        children: [
          el("header", {
            children: [
              el("span", { class: "week-no", text: `${w.no}週目` }),
              el("span", {
                class: "week-range",
                text: `${fmtDate(w.start)}〜${fmtDate(w.end)}`,
              }),
              el("span", {
                class: "week-pct",
                text: `${pct(s.actual, s.target)}%`,
              }),
            ],
          }),
          bar(s.ratio),
          el("dl", {
            class: "week-detail",
            children: [
              el("dt", { class: "cat-js", text: "JS" }),
              el("dd", { text: w.js }),
              el("dt", { class: "cat-cc", text: "CC" }),
              el("dd", { text: w.cc }),
              el("dt", { class: "cat-other", text: "他" }),
              el("dd", { text: w.other }),
            ],
          }),
          el("footer", {
            text: `${s.actual} / ${s.target} h ・ 手順 ${s.stepsDone}/${s.steps}`,
          }),
        ],
      })
    );
  }
  root.appendChild(list);
}

// ---------- 週別タスク手順 ----------
export function renderSteps(root, filters) {
  root.replaceChildren();
  const { week, cat, q, hideDone } = filters;

  const bar1 = el("div", { class: "toolbar" });
  bar1.appendChild(weekSelect(week));
  bar1.appendChild(catSelect(cat));
  bar1.appendChild(
    el("input", {
      class: "search",
      attrs: { type: "search", placeholder: "手順を検索", value: q || "" },
    })
  );
  const cb = el("label", {
    class: "toggle",
    children: [
      el("input", { attrs: { type: "checkbox", id: "hide-done" } }),
      el("span", { text: "完了を隠す" }),
    ],
  });
  cb.querySelector("input").checked = !!hideDone;
  bar1.appendChild(cb);
  root.appendChild(bar1);

  let rows = PLAN.steps;
  if (week !== "all") rows = rows.filter((s) => s.week === Number(week));
  if (cat !== "all") rows = rows.filter((s) => s.cat === cat);
  if (q) {
    const k = q.toLowerCase();
    rows = rows.filter(
      (s) =>
        s.todo.toLowerCase().includes(k) || s.out.toLowerCase().includes(k)
    );
  }
  if (hideDone) rows = rows.filter((s) => !store.isStepDone(s.id));

  root.appendChild(
    el("p", {
      class: "count",
      text: `${rows.length} 件 ／ 目安 ${round1(sum(rows, (r) => r.h))} h`,
    })
  );

  if (rows.length === 0) {
    root.appendChild(
      el("p", { class: "empty", text: "条件に合う手順がありません。" })
    );
    return;
  }

  const table = el("table", { class: "steps" });
  table.appendChild(
    el("thead", {
      children: [
        el("tr", {
          children: ["", "週", "カテゴリ", "やること", "成果物・確認", "目安"].map(
            (h) => el("th", { text: h })
          ),
        }),
      ],
    })
  );
  const tbody = el("tbody");
  for (const s of rows) {
    const done = store.isStepDone(s.id);
    const box = el("input", { attrs: { type: "checkbox" } });
    box.checked = done;
    const tr = el("tr", {
      class: done ? "done" : "",
      attrs: { "data-id": s.id },
      children: [
        el("td", { children: [box] }),
        el("td", { text: String(s.week) }),
        el("td", {
          children: [
            el("span", { class: `chip ${CAT_CLASS[s.cat]}`, text: s.cat }),
          ],
        }),
        el("td", { text: s.todo }),
        el("td", { class: "muted", text: s.out }),
        el("td", { text: `${s.h}h` }),
      ],
    });
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  root.appendChild(table);
}

function weekSelect(value) {
  const sel = el("select", { class: "week-filter" });
  sel.appendChild(el("option", { text: "全ての週", attrs: { value: "all" } }));
  for (const w of PLAN.weeks) {
    sel.appendChild(
      el("option", { text: `${w.no}週目`, attrs: { value: String(w.no) } })
    );
  }
  sel.value = value;
  return sel;
}

function catSelect(value) {
  const sel = el("select", { class: "cat-filter" });
  sel.appendChild(
    el("option", { text: "全カテゴリ", attrs: { value: "all" } })
  );
  for (const c of CATS) {
    sel.appendChild(el("option", { text: c.cat, attrs: { value: c.cat } }));
  }
  sel.value = value;
  return sel;
}

// ---------- 課題 ----------
export const TRACKS = ["JS", "Claude Code", "PHP", "Shopify", "kintone"];

export function renderTasks(root, filters) {
  root.replaceChildren();
  const { track, week } = filters;

  root.appendChild(
    el("div", {
      class: "notice",
      children: [
        el("p", {
          text:
            "要件の意味が今わからないのは正常です。教材で学ぶ用語で書いてあるので、読んだあとに見てください。",
        }),
        el("p", {
          class: "muted",
          text:
            "青い枠の「身につくこと」は先に読めます。JSは必ず、自分で書く → 詰まる → 書き終わってからClaude Codeにレビューさせる。目安(h)は週別タスク手順に含まれる時間で、追加で必要な時間ではありません。",
        }),
      ],
    })
  );

  const bar1 = el("div", { class: "toolbar" });
  const tsel = el("select", { class: "track-filter" });
  tsel.appendChild(el("option", { text: "全分野", attrs: { value: "all" } }));
  for (const tr of TRACKS) {
    const n = PLAN.tasks.filter((x) => x.track === tr).length;
    tsel.appendChild(
      el("option", { text: `${tr}（${n}）`, attrs: { value: tr } })
    );
  }
  tsel.value = track;
  bar1.appendChild(tsel);
  bar1.appendChild(weekSelect(week));
  root.appendChild(bar1);

  let rows = PLAN.tasks;
  if (track !== "all") rows = rows.filter((t) => t.track === track);
  if (week !== "all") rows = rows.filter((t) => t.week === Number(week));

  const doneCount = rows.filter((t) => store.isTaskDone(t.id)).length;
  root.appendChild(
    el("p", {
      class: "count",
      text: `${rows.length} 件（完了 ${doneCount}） ／ 目安 ${round1(
        sum(rows, (t) => t.h)
      )} h`,
    })
  );

  if (rows.length === 0) {
    root.appendChild(
      el("p", { class: "empty", text: "条件に合う課題がありません。" })
    );
    return;
  }

  const wrap = el("div", { class: "task-list" });
  for (const t of rows) {
    const done = store.isTaskDone(t.id);
    const box = el("input", { attrs: { type: "checkbox" } });
    box.checked = done;

    const reqs = el("ol", {
      children: t.reqs.map((r) => el("li", { text: r })),
    });

    const copyBtn = el("button", {
      class: "copy",
      text: "レビュー依頼文をコピー",
      attrs: { type: "button", "data-copy": t.review },
    });

    wrap.appendChild(
      el("article", {
        class: `task-card track-${TRACKS.indexOf(t.track)} ${done ? "done" : ""}`,
        attrs: { "data-id": t.id },
        children: [
          el("header", {
            children: [
              el("label", {
                class: "task-title",
                children: [
                  box,
                  el("span", { class: "ch", text: t.code }),
                  el("span", { text: t.name }),
                ],
              }),
              el("span", {
                class: "meta",
                children: [
                  el("span", {
                    class: `chip track-chip-${TRACKS.indexOf(t.track)}`,
                    text: t.track,
                  }),
                  el("span", { text: ` ${t.week}週目 ・ 目安${t.h}h` }),
                ],
              }),
            ],
          }),
          el("h4", { text: "この課題で身につくこと" }),
          el("p", { class: "goal", text: t.goal }),
          el("h4", { text: "要件（この通りに作る）" }),
          reqs,
          el("h4", { text: "使う主な機能" }),
          el("p", { class: "muted", text: t.feats }),
          el("h4", { text: "完成の判定基準" }),
          el("p", { class: "judge", text: t.judge }),
          el("h4", { text: "レビュー依頼文" }),
          el("p", { class: "review", text: t.review }),
          copyBtn,
        ],
      })
    );
  }
  root.appendChild(wrap);
}

// ---------- 日次ログ ----------
export function renderLogs(root, filters) {
  root.replaceChildren();
  const week = filters.week;

  const bar1 = el("div", { class: "toolbar" });
  bar1.appendChild(weekSelect(week));
  bar1.appendChild(
    el("span", {
      class: "hint",
      text:
        "「その日の目安」に沿って進め、実施時間とメモを入力します（自動保存・前後1〜2日のずれはOK）",
    })
  );
  root.appendChild(bar1);

  let days = PLAN.days;
  if (week !== "all") days = days.filter((d) => d.week === Number(week));

  const table = el("table", { class: "logs" });
  table.appendChild(
    el("thead", {
      children: [
        el("tr", {
          children: [
            "日付",
            "曜",
            "週",
            "目標",
            "その日の目安",
            "JS",
            "Claude Code",
            "その他",
            "振り返り",
            "計",
            "メモ",
          ].map((h) => el("th", { text: h })),
        }),
      ],
    })
  );

  const tbody = el("tbody");
  for (const d of days) {
    const l = store.getLog(d.date);
    const total = round1(l.js + l.cc + l.other + l.review);
    const cells = CATS.map((c) => {
      const inp = el("input", {
        class: "num",
        attrs: {
          type: "number",
          min: "0",
          max: "24",
          step: "0.5",
          "data-field": c.key,
          value: l[c.key] ? String(l[c.key]) : "",
        },
      });
      return el("td", { children: [inp] });
    });
    const memo = el("input", {
      class: "memo",
      attrs: { type: "text", "data-field": "memo", value: l.memo || "" },
    });

    tbody.appendChild(
      el("tr", {
        class: d.wd === "土" || d.wd === "日" ? "weekend" : "",
        attrs: { "data-date": d.date },
        children: [
          el("td", { text: fmtDate(d.date) }),
          el("td", { text: d.wd }),
          el("td", { text: String(d.week) }),
          el("td", { class: "muted", text: `${d.target}h` }),
          el("td", {
            class: "plan",
            children: d.plan.map((p) =>
              el("span", {
                class: "plan-item",
                children: [
                  el("span", { class: `chip ${CAT_CLASS[p.cat]}`, text: p.cat }),
                  el("span", { text: p.todo }),
                ],
              })
            ),
          }),
          ...cells,
          el("td", { class: `total ${total ? "" : "muted"}`, text: `${total}h` }),
          el("td", { children: [memo] }),
        ],
      })
    );
  }
  table.appendChild(tbody);
  root.appendChild(table);

  const t = sum(days, (d) => {
    const l = store.getLog(d.date);
    return l.js + l.cc + l.other + l.review;
  });
  root.appendChild(
    el("p", {
      class: "count",
      text: `合計 ${round1(t)} h ／ 目標 ${round1(sum(days, (d) => d.target))} h`,
    })
  );
}

// ---------- ルール ----------
export function renderRules(root) {
  root.replaceChildren();
  root.appendChild(el("h2", { text: "守るルール" }));
  root.appendChild(
    el("ol", {
      class: "rules",
      children: PLAN.rules.map((r) => el("li", { text: r })),
    })
  );
  root.appendChild(
    el("h2", { text: "前提" })
  );
  const info = [
    ["期間", "2026年8月6日（木）〜10月15日（木） 全10週・71日"],
    ["ペース", "週15時間（平日2.0h／土日2.5h）※10週目は8日間で17h"],
    ["内訳", "独習JavaScript 7h ／ Claude Code Academy 3h ／ その他技術 3h ／ 振り返り 2h"],
    ["総時間", "152時間"],
    ["ゴール", "JSの土台を作り直す＋成果物1本＋周辺3技術の概要把握"],
    ["教材", "独習JavaScript 新版 ／ 独習PHP 第4版 ／ Claude Code Academy（iOS開発はスキップ）"],
  ];
  const dl = el("dl", { class: "info" });
  for (const [k, v] of info) {
    dl.appendChild(el("dt", { text: k }));
    dl.appendChild(el("dd", { text: v }));
  }
  root.appendChild(dl);
}
