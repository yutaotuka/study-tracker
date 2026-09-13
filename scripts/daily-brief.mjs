// 毎朝の学習ブリーフを組み立てて外部へ送る（GitHub Actions から実行）
//
// 読むもの:
//   計画  … このリポジトリの js/data.js（公開情報）
//   進捗  … 非公開Gist の study-progress-v2.json（GIST_TOKEN が必要）
//
// 送り先（設定されているものすべてに送る。無ければログ出力だけ）:
//   SLACK_WEBHOOK_URL    … Slack Incoming Webhook
//   DISCORD_WEBHOOK_URL  … Discord Webhook
//
// 進捗が読めない場合でも、今日の予定だけは送る（壊れないことを優先）。

import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const GIST_FILENAME = "study-progress-v2.json";
// 分野の短縮表示（Slack/Discordの1行に収めるため）
const TRACK_LABEL = {
  JS基礎: "JS",
  TypeScript: "TS",
  React: "React",
  "Next.js": "Next",
  コンバート: "コンバート",
  "Claude Code": "CC",
  振り返り: "振",
};

// 分野が無い古いデータでも落ちないよう、カテゴリからの対応も残す
const CAT_LABEL = {
  JS基礎: "JS",
  "TS/React/Next": "TRN",
  "Claude Code": "CC",
  振り返り: "振",
};

function label(item) {
  return TRACK_LABEL[item.track] || CAT_LABEL[item.cat] || item.cat;
}

// ---------- 日付（JST固定） ----------
export function todayJst(now = new Date()) {
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function logHours(log) {
  if (!log) return 0;
  return (log.js || 0) + (log.trn || 0) + (log.cc || 0) + (log.review || 0);
}

// ---------- 本文の組み立て ----------
export function buildMessage(plan, progress, dateIso) {
  const day = plan.days.find((d) => d.date === dateIso);
  const lines = [];

  if (!day) {
    const first = plan.days[0].date;
    const last = plan.days.at(-1).date;
    if (dateIso < first) {
      lines.push(`学習期間は ${first} から始まります。今日はまだ範囲外です。`);
    } else {
      lines.push(`学習期間（${first}〜${last}）は終了しました。おつかれさまでした。`);
    }
    return lines.join("\n");
  }

  const [, m, d] = day.date.split("-");
  const week = plan.weeks.find((w) => w.no === day.week);

  lines.push(`*学習ブリーフ ${Number(m)}/${Number(d)}（${day.wd}）・${day.week}週目*`);
  if (week) {
    const topic = [week.js, week.other, week.cc]
      .filter((x) => x && x !== "―")
      .join(" ／ ");
    if (topic) lines.push(`今週: ${topic}`);
  }
  lines.push(`今日の目標 ${day.target}h`);
  lines.push("");

  // --- 今日やること ---
  if (day.plan.length === 0 && day.done) {
    lines.push("*この日の学習は完了しています*");
    lines.push("割り当てはありません。実施時間の記録だけ残してください。");
  } else if (day.plan.length === 0) {
    lines.push("*今日は予備日です*");
    lines.push("割り当てはありません。積み残しがあればここで片付けてください。");
  } else {
    lines.push("*今日やること*");
  }
  for (const p of day.plan) {
    lines.push(`• [${label(p)}] ${p.todo} — ${p.h}h`);
  }

  // 余力枠は日付を持たない。今週のぶんをまとめて出す
  const weekOpt = plan.steps.filter(
    (s) => s.week === day.week && s.tier === "余力"
  );
  const weekOptLeft = weekOpt.filter((s) => !progress?.steps?.[s.id]);
  if (weekOptLeft.length) {
    lines.push("");
    lines.push(`_今週の余力枠（コアが終わったら）_`);
    for (const s of weekOptLeft) {
      lines.push(`◦ [${label(s)}] ${s.todo} — ${s.h}h`);
    }
  }

  // --- 進捗 ---
  if (!progress) {
    lines.push("");
    lines.push("_進捗は取得できませんでした（トークン未設定か、まだ同期していません）_");
    return lines.join("\n");
  }

  const past = plan.days.filter((x) => x.date < day.date);
  const targetSoFar = past.reduce((a, x) => a + x.target, 0);
  const actualSoFar = past.reduce(
    (a, x) => a + logHours(progress.logs?.[x.date]),
    0
  );
  const rate = targetSoFar ? Math.round((actualSoFar / targetSoFar) * 100) : 0;

  const coreSteps = plan.steps.filter((s) => s.tier === "コア");
  const coreDone = coreSteps.filter((s) => progress.steps?.[s.id]).length;
  const coreLeft = round1(
    coreSteps
      .filter((s) => !progress.steps?.[s.id])
      .reduce((a, s) => a + s.h, 0)
  );
  const daysLeft = plan.days.filter((x) => x.date >= day.date);
  const capLeft = round1(daysLeft.reduce((a, x) => a + x.target, 0));
  const doneSteps = plan.steps.filter((s) => progress.steps?.[s.id]).length;
  const doneTasks = plan.tasks.filter((t) => progress.tasks?.[t.id]).length;

  lines.push("");
  lines.push("*進捗*");
  lines.push(
    `• 昨日まで ${round1(actualSoFar)}h / ${round1(targetSoFar)}h（${rate}%）`
  );
  lines.push(
    `• コア ${coreDone} / ${coreSteps.length} 完了（残り ${coreLeft}h / 使える時間 ${capLeft}h）`
  );
  lines.push(`• 手順 ${doneSteps} / ${plan.steps.length} 完了（コア＋余力）`);
  lines.push(`• 課題 ${doneTasks} / ${plan.tasks.length} 完了`);

  // 今週どの分野をやっているか
  const weekTracks = [
    ...new Set(
      plan.steps
        .filter((s) => s.week === day.week && s.tier === "コア" && s.track)
        .map((s) => s.track)
    ),
  ];
  if (weekTracks.length) {
    const parts = weekTracks.map((tr) => {
      const all = plan.steps.filter(
        (s) => s.week === day.week && s.track === tr && s.tier === "コア"
      );
      const d = all.filter((s) => progress.steps?.[s.id]).length;
      return `${TRACK_LABEL[tr] || tr} ${d}/${all.length}`;
    });
    lines.push(`• 今週の分野: ${parts.join(" ／ ")}`);
  }

  // --- 遅れ ---
  // 今週分: 今日より前の日に割り当てられているのに未完了のもの
  const thisWeekLate = [];
  for (const d of plan.days) {
    if (d.week !== day.week || d.date >= day.date) continue;
    for (const item of d.plan) {
      if (item.id && item.tier !== "余力" && !progress.steps?.[item.id]) {
        thisWeekLate.push({ ...item, date: d.date });
      }
    }
  }

  // 過去の週: 週ごと未完了（日付までは問わない）
  const pastWeeks = plan.steps.filter(
    (s) => s.week < day.week && s.tier === "コア" && !progress.steps?.[s.id]
  );

  const listLine = (s) => `• [${label(s)}] ${s.todo} — ${s.h}h`;

  if (thisWeekLate.length || pastWeeks.length) {
    lines.push("");
    lines.push(`*コアの遅れ ${thisWeekLate.length + pastWeeks.length}件*`);

    if (thisWeekLate.length) {
      lines.push(`今週（${day.week}週目）の積み残し ${thisWeekLate.length}件`);
      for (const s of thisWeekLate.slice(0, 5)) {
        const [, m2, d2] = s.date.split("-");
        lines.push(`${listLine(s)}（${Number(m2)}/${Number(d2)}分）`);
      }
      if (thisWeekLate.length > 5) {
        lines.push(`• …ほか ${thisWeekLate.length - 5}件`);
      }
    }

    if (pastWeeks.length) {
      lines.push(`過去の週 ${pastWeeks.length}件`);
      for (const s of pastWeeks.slice(0, 5)) {
        lines.push(`• ${s.week}週目 ${listLine(s).slice(2)}`);
      }
      if (pastWeeks.length > 5) {
        lines.push(`• …ほか ${pastWeeks.length - 5}件`);
      }
    }

    lines.push(
      "_ここに出るのはコアだけです。余力枠は落として構いません_"
    );
  }

  // --- 今週の重点 ---
  const key = plan.steps.filter(
    (s) => s.week === day.week && s.todo.includes("★")
  );
  if (key.length) {
    lines.push("");
    lines.push("*今週の★*");
    for (const s of key) lines.push(`• ${s.todo}`);
  }

  return lines.join("\n");
}

// ---------- Gistから進捗を取る ----------
export async function fetchProgress(gistId, token, fetchImpl = fetch) {
  if (!gistId || !token) return null;
  try {
    const res = await fetchImpl(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    if (!res.ok) {
      console.error(`Gistの取得に失敗しました (HTTP ${res.status})`);
      return null;
    }
    const json = await res.json();
    const file = json.files?.[GIST_FILENAME];
    if (!file) {
      console.error(`Gistに ${GIST_FILENAME} がありません`);
      return null;
    }
    let content = file.content;
    if (file.truncated && file.raw_url) {
      content = await (await fetchImpl(file.raw_url)).text();
    }
    return JSON.parse(content);
  } catch (e) {
    console.error("進捗の取得中にエラー:", e.message);
    return null;
  }
}

// ---------- 送信 ----------
export async function send(text, env = process.env, fetchImpl = fetch) {
  const targets = [];
  if (env.SLACK_WEBHOOK_URL) {
    targets.push({ name: "Slack", url: env.SLACK_WEBHOOK_URL, body: { text } });
  }
  if (env.DISCORD_WEBHOOK_URL) {
    targets.push({
      name: "Discord",
      url: env.DISCORD_WEBHOOK_URL,
      body: { content: text.replace(/\*/g, "**") },
    });
  }

  if (targets.length === 0) {
    console.log("--- 送信先が未設定のためログ出力のみ ---");
    console.log(text);
    return { sent: 0 };
  }

  let sent = 0;
  for (const t of targets) {
    const res = await fetchImpl(t.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t.body),
    });
    if (res.ok) {
      console.log(`${t.name} へ送信しました`);
      sent += 1;
    } else {
      console.error(`${t.name} への送信に失敗 (HTTP ${res.status})`);
    }
  }
  return { sent };
}

// ---------- 実行 ----------
async function main() {
  const { PLAN } = await import(path.join(HERE, "..", "js", "data.js"));
  const progress = await fetchProgress(
    process.env.GIST_ID,
    process.env.GIST_TOKEN
  );
  const text = buildMessage(PLAN, progress, todayJst());
  await send(text);
}

if (process.argv[1] && process.argv[1].endsWith("daily-brief.mjs")) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
