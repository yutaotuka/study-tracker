// 画面描画（DOM組み立てのみ。イベント登録は main.js 側）
import { PLAN } from "./data.js?v=3";
import * as store from "./storage.js?v=3";
import {
  CATS,
  CAT_CLASS,
  sum,
  round1,
  pct,
  fmtDate,
  todayIso,
  periodLabel,
  el,
  TIER_CLASS,
  weekLabel,
} from "./utils.js?v=3";

// ---------- 集計 ----------
export function weekStats(weekNo) {
  const days = PLAN.days.filter((d) => d.week === weekNo);
  const target = sum(days, (d) => d.target);
  const actual = sum(days, (d) => {
    const l = store.getLog(d.date);
    return l.js + l.trn + l.cc + l.review;
  });
  const steps = PLAN.steps.filter((s) => s.week === weekNo);
  const stepsDone = steps.filter((s) => store.isStepDone(s.id)).length;
  const core = steps.filter((s) => s.tier === "コア");
  return {
    target: round1(target),
    actual: round1(actual),
    ratio: target ? actual / target : 0,
    steps: steps.length,
    stepsDone,
    core: core.length,
    coreDone: core.filter((s) => store.isStepDone(s.id)).length,
    coreHours: round1(sum(core, (x) => x.h)),
  };
}

export function totalStats() {
  const coreSteps = PLAN.steps.filter((s) => s.tier === "コア");
  const target = sum(PLAN.days, (d) => d.target);
  const actual = sum(PLAN.days, (d) => {
    const l = store.getLog(d.date);
    return l.js + l.trn + l.cc + l.review;
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
    core: coreSteps.length,
    coreDone: coreSteps.filter((s) => store.isStepDone(s.id)).length,
    coreHours: round1(sum(coreSteps, (s) => s.h)),
    coreLeftHours: round1(
      sum(coreSteps.filter((s) => !store.isStepDone(s.id)), (s) => s.h)
    ),
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
        el("span", { class: `chip ${TIER_CLASS[p.tier]}`, text: p.tier }),
        el("span", { class: `chip ${CAT_CLASS[p.cat]}`, text: p.cat }),
        el("span", { class: "todo", text: p.todo }),
        el("span", { class: "hh", text: `${p.h}h` }),
      ],
    })
  );

  const log = store.getLog(day.date);
  const done = round1(log.js + log.trn + log.cc + log.review);

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
              text: `今日は学習期間（${periodLabel(PLAN.days)}）の範囲外なので、初日の内容を表示しています。`,
            })
          : null,
        el("ul", { class: "today-list", children: items }),
        el("p", {
          class: "muted",
          text: "「コア」を先に片付けてください。時間が足りない日は「余力」を落として構いません。前後1〜2日のずれは問題ありません。",
        }),
        outOfRange ? null : todayLog(day),
      ],
    })
  );
}

// 今日の記録欄。日次ログのタブを開かなくてもここで書ける
export const MEMO_TEMPLATES = [
  { label: "詰まった", text: "詰まった: " },
  { label: "分かった", text: "分かった: " },
  { label: "明日", text: "明日: " },
];

function todayLog(day) {
  const l = store.getLog(day.date);
  const total = round1(l.js + l.trn + l.cc + l.review);

  const nums = CATS.map((c) => {
    const inp = el("input", {
      class: "num",
      attrs: {
        type: "number", min: "0", max: "24", step: "0.5",
        "data-field": c.key,
        value: l[c.key] ? String(l[c.key]) : "",
      },
    });
    return el("label", {
      class: "num-field",
      children: [el("span", { text: c.label }), inp],
    });
  });

  const memo = el("textarea", {
    class: "memo-big",
    attrs: {
      "data-field": "memo",
      rows: "4",
      placeholder:
        "例）詰まった: varのループで3,3,3になる理由が腑に落ちない\n分かった: クロージャは作られた場所の変数を覚えている\n明日: Ch8のthisから",
    },
  });
  memo.value = l.memo || "";

  const tpl = el("div", {
    class: "memo-tpl",
    children: [
      el("span", { class: "muted", text: "書き出し:" }),
      ...MEMO_TEMPLATES.map((t) =>
        el("button", {
          class: "tpl",
          text: t.label,
          attrs: { type: "button", "data-tpl": t.text },
        })
      ),
    ],
  });

  return el("div", {
    class: "today-log",
    attrs: { "data-date": day.date },
    children: [
      el("h3", { text: "今日の記録" }),
      el("div", { class: "num-row", children: nums }),
      el("p", {
        class: "total-line",
        children: [
          el("span", { class: "muted", text: "計 " }),
          el("span", { class: `total ${total ? "" : "muted"}`, text: `${total}h` }),
          el("span", { class: "muted", text: ` / 目標 ${day.target}h` }),
        ],
      }),
      tpl,
      memo,
      el("p", {
        class: "muted",
        text: "自動保存されます。1〜3行で十分です。書けない日は時間だけでも入れてください。",
      }),
    ],
  });
}

export function renderSummary(root) {
  root.replaceChildren();
  const t = totalStats();

  if (PLAN.meta) {
    root.appendChild(
      el("section", {
        class: "notice revision",
        children: [
          el("p", {
            text: `${PLAN.meta.revisedOn} 再設計版（${PLAN.meta.period}・${PLAN.meta.totalHours}h）。コア ${PLAN.meta.coreHours}h ＋ 余力 ${PLAN.meta.optionalHours}h の2階建てです。`,
          }),
          el("p", {
            class: "muted",
            text: "コアだけ終われば、参画時に「ReactアプリをNext.jsへコンバートした経験がある」状態になります。余力は、コアが予定どおり進んだときだけ手を付けてください。",
          }),
        ],
      })
    );
  }

  renderToday(root);

  root.appendChild(
    el("div", {
      class: "stats",
      children: [
        statCard("実施時間", `${t.actual} h`, `目標 ${t.target} h`),
        statCard("達成率", `${pct(t.actual, t.target)} %`, "全期間"),
        statCard(
          "コアの消化",
          `${t.coreDone} / ${t.core}`,
          `残り ${t.coreLeftHours} h（コア全体 ${t.coreHours} h）`
        ),
        statCard("手順の消化", `${t.stepsDone} / ${t.steps}`, "コア＋余力"),
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
              el("dt", { class: "cat-trn", text: "TRN" }),
              el("dd", { text: w.other }),
              el("dt", { class: "cat-cc", text: "CC" }),
              el("dd", { text: w.cc }),
            ],
          }),
          el("footer", {
            text: `${s.actual} / ${s.target} h ・ コア ${s.coreDone}/${s.core}（${s.coreHours}h） ・ 全手順 ${s.stepsDone}/${s.steps}`,
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
  const { week, cat, q, hideDone, coreOnly } = filters;

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
  const cb2 = el("label", {
    class: "toggle",
    children: [
      el("input", { attrs: { type: "checkbox", id: "core-only" } }),
      el("span", { text: "コアのみ" }),
    ],
  });
  cb2.querySelector("input").checked = !!coreOnly;
  bar1.appendChild(cb2);
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
  if (coreOnly) rows = rows.filter((s) => s.tier === "コア");

  const coreH = round1(sum(rows.filter((r) => r.tier === "コア"), (r) => r.h));
  root.appendChild(
    el("p", {
      class: "count",
      text: `${rows.length} 件 ／ 目安 ${round1(
        sum(rows, (r) => r.h)
      )} h（うちコア ${coreH} h）`,
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
          children: [
            "",
            "週",
            "階層",
            "カテゴリ",
            "やること",
            "成果物・確認",
            "目安",
          ].map((h) => el("th", { text: h })),
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
      class: `${done ? "done" : ""} ${s.tier === "余力" ? "optional" : ""}`.trim(),
      attrs: { "data-id": s.id },
      children: [
        el("td", { children: [box] }),
        el("td", { text: String(s.week) }),
        el("td", {
          children: [
            el("span", { class: `chip ${TIER_CLASS[s.tier]}`, text: s.tier }),
          ],
        }),
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
export const TRACKS = ["JS基礎", "TypeScript", "React", "Next.js", "コンバート", "Claude Code"];

// 中身がある項目だけ「見出し＋リスト」を返す（空なら何も出さない）
function section(title, items, make, cls = "") {
  if (!items || items.length === 0) return [];
  const tag = title.startsWith("進め方") ? "ol" : "ul";
  return [
    el("h4", { text: title }),
    el(tag, {
      class: `task-sub ${cls}`.trim(),
      children: items.map(make),
    }),
  ];
}

// 課題タブの表示範囲
export const TASK_SCOPES = [
  { value: "active", label: "今回やる分", match: (t) => t.week > 0 },
  { value: "core", label: "コアのみ", match: (t) => t.tier === "コア" },
  { value: "done", label: "完了済み", match: (t) => t.tier === "済" },
  { value: "out", label: "今回は対象外", match: (t) => t.tier === "対象外" },
  { value: "all", label: "全て", match: () => true },
];

export function renderTasks(root, filters) {
  root.replaceChildren();
  const { track, week, scope = "active" } = filters;

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
            "青い枠の「身につくこと」は先に読めます。必ず、自分で書く → 詰まる → 書き終わってからAIにレビューさせる。「完了済み」は8/23までに終えたもの、「今回は対象外」は9/30までの計画から外して参画後に回したものです。目安(h)は週別タスク手順に含まれる時間で、追加で必要な時間ではありません。",
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

  const ssel = el("select", { class: "scope-filter" });
  for (const sc of TASK_SCOPES) {
    const n = PLAN.tasks.filter(sc.match).length;
    ssel.appendChild(
      el("option", {
        text: `${sc.label}（${n}）`,
        attrs: { value: sc.value },
      })
    );
  }
  ssel.value = scope;
  bar1.appendChild(ssel);
  root.appendChild(bar1);

  let rows = PLAN.tasks;
  const sc = TASK_SCOPES.find((x) => x.value === scope) || TASK_SCOPES[0];
  rows = rows.filter(sc.match);
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
  {
    const hidden = PLAN.tasks.length - PLAN.tasks.filter(sc.match).length;
    if (hidden > 0) {
      const done = PLAN.tasks.filter((t) => t.tier === "済" && !sc.match(t)).length;
      const out = PLAN.tasks.filter((t) => t.tier === "対象外" && !sc.match(t)).length;
      const parts = [];
      if (done) parts.push(`完了済み${done}本`);
      if (out) parts.push(`今回は対象外${out}本`);
      const other = hidden - done - out;
      if (other > 0) parts.push(`ほか${other}本`);
      root.appendChild(
        el("p", {
          class: "muted hidden-note",
          text: `${parts.join("・")}を隠しています（左の切り替えで「全て」にすると出ます）`,
        })
      );
    }
  }

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
        class: `task-card track-${TRACKS.indexOf(t.track)} ${
          done ? "done" : ""
        } ${t.tier === "対象外" ? "out" : ""} ${
          t.tier === "余力" ? "optional" : ""
        }`.replace(/\s+/g, " ").trim(),
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
                  el("span", {
                    class: `chip ${TIER_CLASS[t.tier]}`,
                    text: t.tier,
                  }),
                  el("span", {
                    text: ` ${weekLabel(t.week)} ・ 目安${t.h}h`,
                  }),
                ],
              }),
            ],
          }),
          el("h4", { text: "この課題で身につくこと" }),
          el("p", { class: "goal", text: t.goal }),
          ...section("作るファイル", t.files, (f) =>
            el("li", {
              children: [
                el("code", { text: f.path }),
                el("span", { class: "muted", text: ` … ${f.note}` }),
              ],
            })
          ),
          ...section("進め方（この順で手を動かす）", t.steps, (x) =>
            el("li", { text: x })
          ),
          el("h4", { text: "要件（できたか自分で判定する）" }),
          reqs,
          el("h4", { text: "使う主な機能" }),
          el("p", { class: "muted", text: t.feats }),
          el("h4", { text: "完成の判定基準" }),
          el("p", { class: "judge", text: t.judge }),
          ...section("詰まったときのヒント（答えではない）", t.hints, (x) =>
            el("li", { text: x })
          ),
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
  bar1.appendChild(
    el("button", {
      class: "copy md-copy",
      text: "この範囲をMarkdownでコピー",
      attrs: { type: "button" },
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
            "JS基礎",
            "TS/React/Next",
            "Claude Code",
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
    const total = round1(l.js + l.trn + l.cc + l.review);
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
    const memo = el("textarea", {
      class: "memo",
      attrs: { "data-field": "memo", rows: l.memo ? "3" : "1" },
    });
    memo.value = l.memo || "";

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
    return l.js + l.trn + l.cc + l.review;
  });
  root.appendChild(
    el("p", {
      class: "count",
      text: `合計 ${round1(t)} h ／ 目標 ${round1(sum(days, (d) => d.target))} h`,
    })
  );
}

// ---------- 教材 ----------
export function renderRefs(root, filters) {
  root.replaceChildren();
  const track = filters.track;
  const refs = PLAN.references || [];
  const tracks = [...new Set(refs.map((r) => r.track))];

  if (refs.length === 0) {
    root.appendChild(
      el("p", {
        class: "empty",
        text:
          "教材データが読み込めませんでした。js/data.js が古い可能性があります。" +
          "最新のファイルに差し替えたうえで、Cmd+Shift+R で再読み込みしてください。",
      })
    );
    return;
  }

  root.appendChild(
    el("p", {
      class: "lead",
      text:
        "各テーマで使う教材と、読む範囲です。★が付いているものは課題に直結します。" +
        "書籍以外はすべて無料で、追加購入は不要です。",
    })
  );

  const bar1 = el("div", { class: "toolbar" });
  const sel = el("select", { class: "ref-filter" });
  sel.appendChild(el("option", { text: "全分野", attrs: { value: "all" } }));
  for (const t of tracks) {
    const n = refs.filter((r) => r.track === t).length;
    sel.appendChild(el("option", { text: `${t}（${n}）`, attrs: { value: t } }));
  }
  sel.value = track;
  bar1.appendChild(sel);
  root.appendChild(bar1);

  const rows = track === "all" ? refs : refs.filter((r) => r.track === track);

  const wrap = el("div", { class: "ref-list" });
  let lastTrack = null;
  for (const r of rows) {
    if (r.track !== lastTrack) {
      wrap.appendChild(el("h3", { class: "ref-track", text: r.track }));
      lastTrack = r.track;
    }
    const title = r.url
      ? el("a", {
          class: "ref-name",
          text: r.name,
          attrs: { href: r.url, target: "_blank", rel: "noopener noreferrer" },
        })
      : el("span", { class: "ref-name", text: r.name });

    wrap.appendChild(
      el("article", {
        class: `ref-card ${r.scope.includes("★") || r.note.includes("★") ? "key" : ""}`,
        children: [
          el("header", {
            children: [
              title,
              el("span", { class: "chip ref-week", text: r.week }),
              el("span", { class: "chip ref-cost", text: r.cost }),
            ],
          }),
          el("p", { class: "ref-scope", text: r.scope }),
          r.note ? el("p", { class: "ref-note muted", text: r.note }) : null,
          r.url ? el("p", { class: "ref-url muted", text: r.url }) : null,
        ],
      })
    );
  }
  root.appendChild(wrap);
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
  const totalTarget = round1(sum(PLAN.days, (d) => d.target));
  const info = [
    [
      "期間",
      `${periodLabel(PLAN.days, "long")} 全${PLAN.weeks.length}週・${
        PLAN.days.length
      }日`,
    ],
    ["ペース", "週15時間（平日2.0h／土日2.5h）※10週目は8日間で17h"],
    ["内訳", "独習JavaScript 7h ／ Claude Code Academy 3h ／ その他技術 3h ／ 振り返り 2h"],
    ["総時間", `${totalTarget}時間`],
    ["ゴール", "JSの土台を作り直す＋学習トラッカーを自作して公開＋周辺3技術の概要把握"],
    ["教材", "独習JavaScript 新版 ／ 独習PHP 第4版 ／ Claude Code Academy（iOS開発はスキップ）"],
  ];
  const dl = el("dl", { class: "info" });
  for (const [k, v] of info) {
    dl.appendChild(el("dt", { text: k }));
    dl.appendChild(el("dd", { text: v }));
  }
  root.appendChild(dl);
}


// ---------- 日次ログを Markdown にする（Obsidianへ貼るため） ----------
export function logsMarkdown(week) {
  const days =
    week === "all" ? PLAN.days : PLAN.days.filter((d) => d.week === Number(week));
  if (!days.length) return "";

  const target = round1(sum(days, (d) => d.target));
  const actual = round1(
    sum(days, (d) => {
      const l = store.getLog(d.date);
      return l.js + l.trn + l.cc + l.review;
    })
  );
  const head =
    week === "all"
      ? `# 学習ログ ${fmtDate(days[0].date)}〜${fmtDate(days.at(-1).date)}`
      : `# ${week}週目（${fmtDate(days[0].date)}〜${fmtDate(days.at(-1).date)}）`;

  const lines = [head, "", `実施 ${actual}h / 目標 ${target}h`, ""];

  for (const d of days) {
    const l = store.getLog(d.date);
    const t = round1(l.js + l.trn + l.cc + l.review);
    if (!t && !l.memo) continue;
    lines.push(`## ${fmtDate(d.date)}（${d.wd}） ${t}h`);
    const parts = CATS.filter((c) => l[c.key]).map(
      (c) => `${c.label} ${l[c.key]}h`
    );
    if (parts.length) lines.push(parts.join(" / "));
    if (l.memo) {
      lines.push("");
      for (const line of l.memo.split("\n")) {
        lines.push(line.trim() ? `- ${line.trim()}` : "");
      }
    }
    lines.push("");
  }

  const done = PLAN.steps.filter(
    (s) => (week === "all" || s.week === Number(week)) && store.isStepDone(s.id)
  );
  if (done.length) {
    lines.push("## 終えた手順");
    for (const s of done) lines.push(`- [${s.tier}][${s.cat}] ${s.todo}`);
    lines.push("");
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}
