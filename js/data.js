// 学習計画v6（2026/9/10〜2027/1/10・全18週）の静的データ
// 目標 242.0h ／ コア 174.0h ／ 余力 17.5h ／ バッファ 68.0h
export const PLAN = {
  "meta": {
    "version": "v6",
    "revisedOn": "2026-09-17",
    "period": "9/10〜1/10",
    "coreHours": 174.0,
    "optionalHours": 17.5,
    "totalHours": 191.5,
    "targetHours": 242.0,
    "bufferHours": 68.0,
    "assignedHours": 174.0,
    "note": "案件開始が来年になる見込みのため、10/19〜2027/1/10 にフェーズA（自作）・B（テストとレビュー運用）・C（棚卸しと案件対応）を追加。第1期の締め切り10/18は動かしていない"
  },
  "phases": [
    {
      "key": "p1",
      "name": "第1期",
      "weeks": [
        1,
        5
      ],
      "title": "TypeScript → React → Next.js → コンバートして公開",
      "deadline": "2026-10-18",
      "aim": "型付きのReact/Next.jsアプリを1本、公開した状態にする",
      "note": "★この締め切りは動かさない。期間が延びても前倒しで終わらせる",
      "start": "2026-09-14",
      "end": "2026-10-18",
      "target": 75.0,
      "core": 58.0,
      "optional": 9.0,
      "buffer": 17.0
    },
    {
      "key": "pa",
      "name": "フェーズA",
      "weeks": [
        6,
        9
      ],
      "title": "学習トラッカーを白紙から自作する",
      "deadline": "2026-11-15",
      "aim": "要件定義から自分でやったアプリを1本、公開した状態にする",
      "note": "★一番重要。第1期は写経がベース、ここは白紙から。配布版は9週目まで開かない",
      "start": "2026-10-19",
      "end": "2026-11-15",
      "target": 60.0,
      "core": 42.5,
      "optional": 5.0,
      "buffer": 17.5
    },
    {
      "key": "pb",
      "name": "フェーズB",
      "weeks": [
        10,
        13
      ],
      "title": "テストとレビュー運用",
      "deadline": "2026-12-13",
      "aim": "テストが通り、CIが緑で、PRで進める状態を作る",
      "note": "次の案件が何であっても腐らない部分。実装担当から一段上がる要素",
      "start": "2026-11-16",
      "end": "2026-12-13",
      "target": 60.0,
      "core": 41.5,
      "optional": 3.5,
      "buffer": 18.5
    },
    {
      "key": "pc",
      "name": "フェーズC",
      "weeks": [
        14,
        17
      ],
      "title": "棚卸しと、案件が見えたらそこへ寄せる",
      "deadline": "2027-01-10",
      "aim": "作ったものを説明できる状態にし、JSの穴を自分で把握する",
      "note": "16週目（12/28〜1/3）は年末年始。目標0hの休む週として組んである",
      "start": "2026-12-14",
      "end": "2027-01-10",
      "target": 47.0,
      "core": 32.0,
      "optional": 0,
      "buffer": 15.0
    }
  ],
  "weeks": [
    {
      "no": 0,
      "start": "2026-09-10",
      "end": "2026-09-13",
      "js": "【完了済み 9/10〜9/13】Ch11を読み切った（6.0h）",
      "cc": "―",
      "other": "―",
      "phase": "",
      "phaseName": ""
    },
    {
      "no": 1,
      "start": "2026-09-14",
      "end": "2026-09-20",
      "js": "【積み残し】配列メソッド総当たり ＋ 分割代入・スプレッド",
      "cc": "―",
      "other": "★TypeScriptに入る。基本の型・型注釈・型推論・union・interface/type",
      "phase": "p1",
      "phaseName": "第1期"
    },
    {
      "no": 2,
      "start": "2026-09-21",
      "end": "2026-09-27",
      "js": "Ch13 非同期処理 ＋ fetch課題 ★これでJS基礎は終わり",
      "cc": "CLAUDE.mdを書く（余力枠）",
      "other": "ジェネリクス・絞り込み ／ data.tsのTS化 ／ React入門（★写経）",
      "phase": "p1",
      "phaseName": "第1期"
    },
    {
      "no": 3,
      "start": "2026-09-28",
      "end": "2026-10-04",
      "js": "―",
      "cc": "―",
      "other": "React基礎：props・state・リスト描画・フォーム・絞り込み・型・useState",
      "phase": "p1",
      "phaseName": "第1期"
    },
    {
      "no": 4,
      "start": "2026-10-05",
      "end": "2026-10-11",
      "js": "―",
      "cc": "Cursorの使い分け（余力枠）",
      "other": "useEffect ★依存配列のバグ ／ 小アプリ完成 ／ Next.js入門（★写経）",
      "phase": "p1",
      "phaseName": "第1期"
    },
    {
      "no": 5,
      "start": "2026-10-12",
      "end": "2026-10-18",
      "js": "―",
      "cc": "―",
      "other": "★Next.jsへコンバート → Vercel公開 → 説明の準備（第1期の締め 10/18）",
      "phase": "p1",
      "phaseName": "第1期"
    },
    {
      "no": 6,
      "start": "2026-10-19",
      "end": "2026-10-25",
      "js": "―",
      "cc": "―",
      "other": "【A①】要件定義 → 型を先に決める → create-next-app → 一覧表示",
      "phase": "pa",
      "phaseName": "フェーズA"
    },
    {
      "no": 7,
      "start": "2026-10-26",
      "end": "2026-11-01",
      "js": "★Ch10を回収：Date と 正規表現",
      "cc": "―",
      "other": "【A②】絞り込み・検索・日付での並べ替え・URLクエリ・一度公開する",
      "phase": "pa",
      "phaseName": "フェーズA"
    },
    {
      "no": 8,
      "start": "2026-11-02",
      "end": "2026-11-08",
      "js": "★Ch15を回収：preventDefault とイベント伝播",
      "cc": "―",
      "other": "【A③】フォーム追加・モーダル・Escキー・localStorage・境界の引き直し",
      "phase": "pa",
      "phaseName": "フェーズA"
    },
    {
      "no": 9,
      "start": "2026-11-09",
      "end": "2026-11-15",
      "js": "―",
      "cc": "―",
      "other": "【A④】集計と可視化 ／ ★配布版を初めて開いて読み比べる（9週目まで開かない）",
      "phase": "pa",
      "phaseName": "フェーズA"
    },
    {
      "no": 10,
      "start": "2026-11-16",
      "end": "2026-11-22",
      "js": "―",
      "cc": "―",
      "other": "【B①】Vitest導入・ロジックの切り出し・赤から始める・npm scripts",
      "phase": "pb",
      "phaseName": "フェーズB"
    },
    {
      "no": 11,
      "start": "2026-11-23",
      "end": "2026-11-29",
      "js": "―",
      "cc": "―",
      "other": "【B②】Testing Library・操作のテスト・非同期・テストしづらい箇所を直す",
      "phase": "pb",
      "phaseName": "フェーズB"
    },
    {
      "no": 12,
      "start": "2026-11-30",
      "end": "2026-12-06",
      "js": "―",
      "cc": "Lint/Formatter（余力枠）",
      "other": "【B③】GitHub ActionsでCI・PR運用・★自分のPRを自分でレビューする",
      "phase": "pb",
      "phaseName": "フェーズB"
    },
    {
      "no": 13,
      "start": "2026-12-07",
      "end": "2026-12-13",
      "js": "―",
      "cc": "―",
      "other": "【B④】緑を保ったままリファクタ・any潰し・テスト方針を1枚に",
      "phase": "pb",
      "phaseName": "フェーズB"
    },
    {
      "no": 14,
      "start": "2026-12-14",
      "end": "2026-12-20",
      "js": "★JSの棚卸し。目次に「説明できる/できない」を付け、できない節だけ読む（上限2h）",
      "cc": "―",
      "other": "Ch9をTS視点で読む ／ 弱点リストと想定Q&Aの作り直し",
      "phase": "pc",
      "phaseName": "フェーズC"
    },
    {
      "no": 15,
      "start": "2026-12-21",
      "end": "2026-12-27",
      "js": "―",
      "cc": "―",
      "other": "【C②】作った2本の説明資料・技術選定の理由・スキルシート更新",
      "phase": "pc",
      "phaseName": "フェーズC"
    },
    {
      "no": 16,
      "start": "2026-12-28",
      "end": "2027-01-03",
      "js": "―",
      "cc": "―",
      "other": "★年末年始。12/28に1件だけ。あとは休む（目標0h）",
      "phase": "pc",
      "phaseName": "フェーズC"
    },
    {
      "no": 17,
      "start": "2027-01-04",
      "end": "2027-01-10",
      "js": "―",
      "cc": "―",
      "other": "【C③】案件が決まればそこへ全振り。未定なら3本目を要件から",
      "phase": "pc",
      "phaseName": "フェーズC"
    }
  ],
  "steps": [
    {
      "id": "v5s1",
      "week": 1,
      "cat": "JS基礎",
      "no": 1,
      "todo": "【積み残し】課題「配列メソッド総当たり」。商品データ20件をdata.jsとして保存する",
      "out": "data.js（最後まで使い回す）",
      "h": 2.5,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "filter / map / reduce を1つずつ選び、実行する前に出力を紙かメモに書く。それから node で動かして見比べる。",
        "judge": "3つとも、予測が実際の出力と一致した"
      }
    },
    {
      "id": "v5s2",
      "week": 1,
      "cat": "JS基礎",
      "no": 2,
      "todo": "【積み残し】分割代入とスプレッド構文を書く ★Reactのstate更新で必須",
      "out": "組み替えが書ける",
      "h": 1.0,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "教材を閉じて、見ないで3つ書く。①オブジェクトから2つのプロパティを取り出す ②配列の先頭と残りを分ける ③既存オブジェクトの1つのキーだけ変えた新しいオブジェクトを作る",
        "judge": "3つとも見ずに書けて、エラーなく動いた"
      }
    },
    {
      "id": "v5s3",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "サバイバルTypeScriptの続き。「なぜ型が必要か」と基本の型を読み終える",
      "out": "読了メモ",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "穴埋め",
        "q": "型があると ____ の段階でバグが見つかる。型が無いと、見つかるのは ____ のとき。だから型は ____ を早める仕組みだと言える。",
        "judge": "本の言葉ではなく、自分の言葉で3つ埋められた"
      }
    },
    {
      "id": "v5s4",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "TS: 型注釈を書いてみる。わざと型エラーを出して読み方に慣れる",
      "out": "エラーを自力で読める",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "出した型エラーを1つ選ぶ。エラーメッセージを閉じて、「TypeScriptは何に文句を言っているのか」を1行で書く。書いてからメッセージを開く。",
        "judge": "自分の説明とメッセージの内容が食い違っていなかった"
      }
    },
    {
      "id": "v5s5",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "TS: 型推論が効く場所を確認し、注釈を書く場所を決める(課題TS-1)",
      "out": "書く場所の基準をメモ",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "ts_typescript/yosoku.ts に20行作る。各行に「// 予測: 〇〇」と先に書いてから、エディタでホバーして実際の型を見る。違ったら「// ×」と実際の型を足す。",
        "judge": "× が3個以下だった（4個以上なら、その行が今週の穴）"
      }
    },
    {
      "id": "v5s6",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "TS: ユニオン型・リテラル型・オプショナルを使う",
      "out": "絞り込みが書ける",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "見ないで書く。状態を 'loading' | 'success' | 'error' で表す型と、それを受け取って3つに分岐する関数。",
        "judge": "各分岐の中で、その状態にしか無いプロパティへ安全に触れた"
      }
    },
    {
      "id": "v5s7",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "TS: interface と type の使い分けを整理する(課題TS-2)",
      "out": "使い分けの基準を書ける",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "見ないでコードで書く。①type にしかできないこと1つ ②interface にしかできないこと1つ。",
        "judge": "両方書けて、片方を逆の書き方にするとエラーになることを確認した"
      }
    },
    {
      "id": "v5s8",
      "week": 1,
      "cat": "振り返り",
      "no": 1,
      "todo": "週の振り返りと日次ログ。learning-log.md へ貼る",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s9",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "TS: ジェネリクスを使う。型を引数として渡す感覚を掴む",
      "out": "汎用関数が書ける",
      "h": 2.0,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "見ないで書く。配列の最初の要素を返す関数を、any を使わずに。string[] を渡した結果をホバーで見る。",
        "judge": "戻り値の型が自動で string になった（any でも unknown でもない）"
      }
    },
    {
      "id": "v5s10",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "TS: 型の絞り込み(typeof / in / タグ付きユニオン)を書く",
      "out": "絞り込みで型が確定する",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "typeof / in / タグ付きユニオン の3パターンで、絞り込んだ直後の型を予測してからホバーで確認する。",
        "judge": "3つとも予測と一致した"
      }
    },
    {
      "id": "v5s11",
      "week": 2,
      "cat": "JS基礎",
      "no": 1,
      "todo": "Ch13(非同期処理)を読む。イベントループの図をメモに描く",
      "out": "読了 + 図",
      "h": 1.5,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "setTimeout(f, 0) と Promise.resolve().then(f) は、どちらが先に動くか。実行する前に予測を書く。",
        "judge": "予測が当たり、なぜそうなるかをイベントループの言葉で言えた"
      }
    },
    {
      "id": "v5s12",
      "week": 2,
      "cat": "JS基礎",
      "no": 2,
      "todo": "課題「fetchで一覧取得」。通信中/成功/失敗の3状態を作る ★これでJS基礎は終わり",
      "out": "3状態が画面に出る",
      "h": 1.5,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "見ないで3状態を書く。失敗は、URLをわざと壊して実際に出す。",
        "judge": "通信中・成功・失敗の3つとも、実際に画面で見た"
      }
    },
    {
      "id": "v5s13",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "TS: 1週目のdata.jsに型を付けてTS化する(課題TS-3)",
      "out": "型付きのdata.ts",
      "h": 2.0,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "型を付けて最初に出たエラーを1つ選び、「データ自体が間違っている」のか「型の書き方が間違っている」のかを判定して1行。",
        "judge": "判定どおりに直したら、意図した形になった"
      }
    },
    {
      "id": "v5s14",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "React環境を作る。★まずクイックスタートを写経する（自作しない）",
      "out": "画面が出る",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "写経したファイルを閉じて、useState を使うカウンターを見ないで書く。",
        "judge": "見ずに、動くところまで書けた"
      }
    },
    {
      "id": "v5s15",
      "week": 2,
      "cat": "Claude Code",
      "no": 1,
      "todo": "CLAUDE.mdを書く(課題CC-1)",
      "out": "CLAUDE.md",
      "h": 1.5,
      "tier": "余力",
      "track": "Claude Code",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s16",
      "week": 2,
      "cat": "振り返り",
      "no": 1,
      "todo": "週の振り返りと日次ログ",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s17",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "props と state を理解する(課題R-1)",
      "out": "親子でデータが渡せる",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "props と state の違いを1行ずつ。「変わる／変わらない」ではなく「誰が持っているか」で書く。",
        "judge": "その説明で、今の画面のデータを全部どちらかに分類できた"
      }
    },
    {
      "id": "v5s18",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "props に TypeScript の型を付ける",
      "out": "型付きpropsが動く",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "props の型をわざと1つ間違えて渡す。エラーが出るのは親側か子側か、予測してから確認する。",
        "judge": "予測どおりの場所に出た"
      }
    },
    {
      "id": "v5s19",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "リスト描画と key、条件分岐を書く(1週目のデータを使う)",
      "out": "配列から一覧が出る",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "key に index を使うと壊れる場面を1つ挙げ、実際にその操作をして壊して見せる。",
        "judge": "並べ替えか削除で、実際に表示がずれるのを見た"
      }
    },
    {
      "id": "v5s20",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "フォームとイベント処理を書く",
      "out": "入力が状態に反映される",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [
        "form"
      ],
      "check": {
        "type": "予測",
        "q": "preventDefault を消したら何が起きるか予測してから、実際に消す。",
        "judge": "予測が当たり、なぜそうなるかを1行で言えた"
      }
    },
    {
      "id": "v5s21",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "絞り込みUIを作る(配列メソッドがそのまま使えることを確認)",
      "out": "絞り込みが効く",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "絞り込みのロジックだけを、Reactを使わない普通の関数として見ないで書き直す。",
        "judge": "同じ結果が出て、その関数を画面から呼ぶ形にできた"
      }
    },
    {
      "id": "v5s22",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "Reactでよく使う型を覚える(ReactNode/イベント型/ComponentProps)(課題TS-4)",
      "out": "型付きで書ける",
      "h": 1.0,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "穴埋め",
        "q": "子要素を受け取る props の型は ____。ボタンのクリックイベントの型は ____。既存要素と同じ props を受け取りたいときは ____ を使う。",
        "judge": "見ないで3つ書けて、実際にコンパイルが通った"
      }
    },
    {
      "id": "v5s23",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "useState を掘る。再レンダリングがいつ起きるか確認する",
      "out": "説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "setState を「今と同じ値」で呼んだとき、再レンダリングは起きるか。予測してから console.log で数える。",
        "judge": "予測が当たった"
      }
    },
    {
      "id": "v5s24",
      "week": 3,
      "cat": "振り返り",
      "no": 1,
      "todo": "ReactとJSの対応関係を整理する(どこがJSの知識で説明できるか)",
      "out": "対応メモ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s25",
      "week": 3,
      "cat": "振り返り",
      "no": 2,
      "todo": "週の振り返りと日次ログ",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s26",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "useEffect の基本と実行タイミングを確認する",
      "out": "いつ動くか説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "依存配列が ①無し ②[] ③[x] の3パターンで、それぞれ何回動くか予測してからconsole.log で数える。",
        "judge": "3つとも予測と一致した"
      }
    },
    {
      "id": "v5s27",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "★依存配列を空にして古い値を掴むバグを再現し、直す(課題R-2)",
      "out": "バグの再現と修正",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "直したコードを閉じて、古い値を掴むバグをもう一度自分で再現させる。直す前に「なぜ古い値なのか」を1行書く。",
        "judge": "再現できて、説明がクロージャの話になっていた"
      }
    },
    {
      "id": "v5s28",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "useEffect + fetch でデータ取得を書く(Ch13と比べる)",
      "out": "3状態が動く",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "Ch13で書いた fetch と、useEffect の中の fetch で何が変わったかを2行。",
        "judge": "「いつ動くか」と「後片付け（中断）」の両方に触れられた"
      }
    },
    {
      "id": "v5s29",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "状態をどこに置くか(リフトアップ)を設計する(課題R-3)",
      "out": "置き場を説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "state を1つ選び「なぜそこに置いたか」を1行。上げすぎたときの弊害と、下げすぎたときの弊害も1つずつ。",
        "judge": "実際に1段上げてみて、書いた弊害が実際に出た"
      }
    },
    {
      "id": "v5s30",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "コンポーネントを責務で分割し、理由を書く(課題R-4)",
      "out": "分割の理由を書ける",
      "h": 1.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "分けたコンポーネントを1つ選び「何を知らなくてよくなったか」を1行。",
        "judge": "props の数が減ったか、他の画面でも使える形になった"
      }
    },
    {
      "id": "v5s31",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "localStorage保存を足して小アプリを完成させる(課題CONV-1)",
      "out": "リロードしても残る",
      "h": 2.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "保存された JSON を手で壊してからリロードすると何が起きるか、予測してからやる。",
        "judge": "予測が当たり、落ちないように直せた"
      }
    },
    {
      "id": "v5s32",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "Next.js公式Learnで環境構築。★ここも写経から入る",
      "out": "アプリが起動する",
      "h": 1.5,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "写経を閉じて、新しいページを1つ見ないで追加する。",
        "judge": "URLを打って開けた"
      }
    },
    {
      "id": "v5s33",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 8,
      "todo": "ルーティング、layout と page を書く(課題N-1)",
      "out": "複数ページを行き来できる",
      "h": 1.5,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "穴埋め",
        "q": "____ という名前のファイルがページになる。____ は全ページ共通の枠になる。フォルダ名を ____ にすると動的ルートになる。",
        "judge": "3つとも見ないで埋められ、実際にその通りに動いた"
      }
    },
    {
      "id": "v5s34",
      "week": 4,
      "cat": "Claude Code",
      "no": 1,
      "todo": "Cursorをインストールし、Claude Codeとの使い分けを決める(課題CC-6)",
      "out": "使い分けメモ",
      "h": 2.0,
      "tier": "余力",
      "track": "Claude Code",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s35",
      "week": 4,
      "cat": "振り返り",
      "no": 1,
      "todo": "週の振り返りと日次ログ",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s36",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "Server ComponentでuseStateを使いエラーを出す。違いを体感する",
      "out": "エラーを再現・理解",
      "h": 1.0,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "出たエラーメッセージを閉じて、なぜ動かないのかを1行で書く。",
        "judge": "「サーバー側で実行されるから」に相当することが言えた"
      }
    },
    {
      "id": "v5s37",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "★4週目のReactアプリをNext.jsへコンバートする計画を書く",
      "out": "移行計画メモ",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "移す順番を決めた理由を1行。なぜその順番か。",
        "judge": "「依存が少ない方から」など、順番そのものに理由があった"
      }
    },
    {
      "id": "v5s38",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "コンポーネントを App Router の構成へ移す(課題CONV-2)",
      "out": "同じ画面が出る",
      "h": 2.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "移したとき最初に壊れるのはどこか、予測してから動かす。",
        "judge": "予測した箇所が実際に壊れた。外れたなら、外れた理由が分かった"
      }
    },
    {
      "id": "v5s39",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "'use client' の境界を決めて分ける(課題N-2)",
      "out": "境界の理由を書ける",
      "h": 2.0,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "'use client' を1つ消したらどうなるか予測してから消す。",
        "judge": "予測が当たり、なぜかを1行で言えた"
      }
    },
    {
      "id": "v5s40",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "サーバー側でのデータ取得に置き換える(課題N-3)",
      "out": "サーバーで取得できる",
      "h": 1.0,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "この fetch はブラウザのNetworkタブに出るか。予測してから開いて確認する。",
        "judge": "予測が当たり、理由を言えた"
      }
    },
    {
      "id": "v5s41",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "★コンバートで詰まった点と判断理由を convert-log.md に記録する",
      "out": "コンバート記録",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "記録した判断を1つ選び「別の選択肢は何で、なぜ選ばなかったか」を書き足す。",
        "judge": "選ばなかった案を1つ以上書けた"
      }
    },
    {
      "id": "v5s42",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "Vercelにデプロイして公開URLを用意する(課題CONV-3)",
      "out": "公開URL",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "手順を見ないで、デプロイを最初からもう一度やる。",
        "judge": "詰まらずに公開できた"
      }
    },
    {
      "id": "v5s43",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 8,
      "todo": "READMEを書く(何を作ったか/技術選定/学んだこと)",
      "out": "README",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "READMEを、何も知らない人になったつもりで読み返す。説明なしでは伝わらない箇所を1つ見つけて直す。",
        "judge": "直した箇所を挙げられた"
      }
    },
    {
      "id": "v5s44",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 9,
      "todo": "React版とNext.js版の違いを言語化する",
      "out": "説明メモ",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "穴埋め",
        "q": "Reactだけのときは ____ で動いていたものが、Next.jsでは ____ でも動くようになる。そのぶん ____ が使えない場所ができる。",
        "judge": "見ないで3つ埋められた"
      }
    },
    {
      "id": "v5s45",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 10,
      "todo": "想定質問への回答を準備する(Server/Client、型設計、AI活用)",
      "out": "想定Q&A",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "Q&Aを閉じて、1問を声に出して答える。",
        "judge": "詰まらずに30秒話せた"
      }
    },
    {
      "id": "v5s46",
      "week": 5,
      "cat": "振り返り",
      "no": 1,
      "todo": "Server/Clientの判断基準を自分の言葉で書く",
      "out": "判断基準メモ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s47",
      "week": 5,
      "cat": "振り返り",
      "no": 2,
      "todo": "5週間を1枚に総括し、スキルシートに書ける形にする",
      "out": "総括メモ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s48",
      "week": 5,
      "cat": "振り返り",
      "no": 3,
      "todo": "最終の日次ログ記入と達成率の確認",
      "out": "全期間の記録",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s49",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "★配布版は開かない。作りたいものを箇条書きで書き出す(課題A-1)",
      "out": "requirements.md",
      "h": 2.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "「作らない」と決めたものを1つ選び、無くても困らない理由を1行。",
        "judge": "「使っていないから」より一段具体的な理由になった"
      }
    },
    {
      "id": "v5s50",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "画面とデータを設計する。★型を先に決めて types.ts に書く",
      "out": "types.ts",
      "h": 2.5,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "サンプルデータのプロパティ名をわざと1つ間違える。どこに赤線が出るか予測してから見る。",
        "judge": "予測どおりの場所に出た"
      }
    },
    {
      "id": "v5s51",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "create-next-app でプロジェクトを作る(TypeScript / App Router)",
      "out": "起動する",
      "h": 1.5,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "穴埋め",
        "q": "生成されたファイルのうち ____ がページ、____ が全ページ共通、____ が設定ファイル。",
        "judge": "見ないで3つ言えて、実際のファイルで確認が取れた"
      }
    },
    {
      "id": "v5s52",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "ディレクトリ構成を自分で決めて、理由を design-log.md に書く",
      "out": "構成と理由",
      "h": 1.5,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "新しい機能を1つ足すとしたら、どのフォルダに何を置くか。迷わず言えるか試す。",
        "judge": "迷わず言えた（迷ったら、それは構成の方を直すサイン）"
      }
    },
    {
      "id": "v5s53",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "GitHubにリポジトリを作り、最初のコミットとpushをする",
      "out": "リポジトリ",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "再現",
        "q": ".gitignore に何が入っているか、見ないで3つ挙げてから開いて確認する。",
        "judge": "3つとも入っていた"
      }
    },
    {
      "id": "v5s54",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "一覧表示を作る。ダミーデータを型付きで描画する",
      "out": "一覧が出る",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "型に無いプロパティを画面で使ったらどうなるか予測してから書く。",
        "judge": "予測が当たった"
      }
    },
    {
      "id": "v5s55",
      "week": 6,
      "cat": "振り返り",
      "no": 1,
      "todo": "第1期(9/14〜10/18)の総括と、フェーズAの週の進め方を決める",
      "out": "総括メモ",
      "h": 1.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s56",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "絞り込みUIを作る。状態をどこに持つかは自分で決める",
      "out": "絞り込みが効く",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "絞り込みの状態をどこに持ったか、その理由を1行。",
        "judge": "別の場所に置いた場合の弊害を1つ言えた"
      }
    },
    {
      "id": "v5s57",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "★キーワード検索。部分一致・大文字小文字を無視する(課題A-2)",
      "out": "検索が効く",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [
        "search"
      ],
      "check": {
        "type": "説明",
        "q": "正規表現を使ったか、使わなかったか。その判断の理由を1行。",
        "judge": "「includes で足りた／足りなかった」の根拠が具体的だった"
      }
    },
    {
      "id": "v5s58",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "★日付での絞り込みと並べ替えを作る(課題A-3)",
      "out": "期間で絞れる",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [
        "date"
      ],
      "check": {
        "type": "予測",
        "q": "new Date('2026-10-19') と new Date('2026/10/19') は同じ時刻になるか。予測してから両方 console.log する。",
        "judge": "予測が当たった。違ったなら、なぜ違うのかを言えた"
      }
    },
    {
      "id": "v5s59",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "絞り込み条件をURLのクエリに持たせる(リロードしても残る)",
      "out": "URLで共有できる",
      "h": 2.0,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "絞り込んだ状態でリロードしたら、何が残って何が消えるか予測してからやる。",
        "judge": "予測どおりになるまで直せた"
      }
    },
    {
      "id": "v5s60",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "ここまでをVercelにデプロイして一度公開する",
      "out": "公開URL",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "手元では動くのに公開後に壊れる箇所を1つ探す。",
        "judge": "見つけて直したか、無いことを確認できた"
      }
    },
    {
      "id": "v5s61",
      "week": 7,
      "cat": "振り返り",
      "no": 1,
      "todo": "週の振り返り。詰まった箇所を weak-points.md に1件だけ書く",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s62",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "★フォームで記録を追加する。送信でページが再読み込みされる問題を直す(課題A-4)",
      "out": "追加できる",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [
        "form"
      ],
      "check": {
        "type": "説明",
        "q": "preventDefault を書く前に一度送信した。そのとき何が起きたかを1行。",
        "judge": "「ページが再読み込みされた」に相当することが書け、なぜかも言えた"
      }
    },
    {
      "id": "v5s63",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "★モーダルを作る。外側をクリックしたら閉じるようにする(課題A-5)",
      "out": "モーダルが動く",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [
        "modal"
      ],
      "check": {
        "type": "説明",
        "q": "中身をクリックしても閉じてしまったのはなぜか。stopPropagation を書く前に、自分の言葉で1行。",
        "judge": "クリックが親まで伝わることに触れられた"
      }
    },
    {
      "id": "v5s64",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "Escキーでも閉じられるようにする。後片付け(クリーンアップ)まで書く",
      "out": "キーでも閉じる",
      "h": 1.5,
      "tier": "コア",
      "track": "React",
      "refs": [
        "keyboard"
      ],
      "check": {
        "type": "予測",
        "q": "後片付けを書かずに5回開け閉めしたら、リスナーは何個になるか。予測してから数える。",
        "judge": "予測が当たり、直したあと1個になった"
      }
    },
    {
      "id": "v5s65",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "localStorageに保存して復元する。壊れたデータが入っていても落ちないようにする",
      "out": "リロードしても残る",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "保存データを手で壊してリロードしたらどうなるか予測してからやる。",
        "judge": "予測が当たり、落ちないように直せた"
      }
    },
    {
      "id": "v5s66",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "Server / Client の境界を引き直す。'use client' が必要な場所を減らす",
      "out": "境界の理由を書ける",
      "h": 2.0,
      "tier": "コア",
      "track": "Next.js",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "'use client' を減らせた箇所を1つ挙げ、なぜ不要だったかを1行。",
        "judge": "「状態もイベントも使っていなかった」に相当することが言えた"
      }
    },
    {
      "id": "v5s67",
      "week": 8,
      "cat": "振り返り",
      "no": 1,
      "todo": "キーボード操作とフォーカスの扱いを見直す(余力)",
      "out": "アクセシビリティメモ",
      "h": 1.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s68",
      "week": 9,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "集計を作る。週別の合計と達成率を出す",
      "out": "集計が出る",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "データが0件のとき達成率の表示はどうなるか、予測してから0件にする。",
        "judge": "予測が当たった（NaN や Infinity が出たなら直した）"
      }
    },
    {
      "id": "v5s69",
      "week": 9,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "進捗バーかグラフで見えるようにする",
      "out": "視覚化できた",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "100%を超えたときどう表示されるか。実際に超えさせて確認し、1行で書く。",
        "judge": "実際に超えさせて目で見た"
      }
    },
    {
      "id": "v5s70",
      "week": 9,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "READMEと設計判断メモを書く(何を作ったか / なぜそう作ったか)",
      "out": "README",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "初めて見る人が最初に詰まるのはどこか予測して、そこに1行足す。",
        "judge": "足した箇所を挙げられた"
      }
    },
    {
      "id": "v5s71",
      "week": 9,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "★配布版のトラッカーを初めて開き、自分の設計と読み比べる(課題A-6)",
      "out": "読み比べメモ",
      "h": 2.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "★配布版を開く前に「相手はここが自分と違うはず」を1つ書いてから開く。",
        "judge": "開く前に予測を書けた（当たり外れは問わない）"
      }
    },
    {
      "id": "v5s72",
      "week": 9,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "差分を言語化して design-log.md に書く。どちらが良いかも自分で判断する",
      "out": "差分メモ",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "取り込まないと決めた点を1つ選び、その理由を1行。",
        "judge": "「好みだから」以外の理由になった"
      }
    },
    {
      "id": "v5s73",
      "week": 9,
      "cat": "振り返り",
      "no": 1,
      "todo": "フェーズAの総括。スキルシートに書ける形にする",
      "out": "総括メモ",
      "h": 1.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s74",
      "week": 10,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "Vitest を入れて、最初の1本を書く(課題B-1)",
      "out": "テストが通る",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "実装をわざと1箇所壊す。何本のテストが落ちるか予測してから実行する。",
        "judge": "予測が当たった"
      }
    },
    {
      "id": "v5s75",
      "week": 10,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "絞り込みと集計のロジックを関数に切り出し、テストを書く",
      "out": "純粋な関数＋テスト",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "切り出す前と後で、テストが書きやすくなった理由を1行。",
        "judge": "「画面を描かなくてよくなった」に相当することが言えた"
      }
    },
    {
      "id": "v5s76",
      "week": 10,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "★落ちるテストを先に書いてから直す(レッドから始める)",
      "out": "赤→緑の経験",
      "h": 2.0,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "新しい関数を1つ、テストを先に書いてから実装する。",
        "judge": "赤 → 緑 の順で進められた（先に実装していない）"
      }
    },
    {
      "id": "v5s77",
      "week": 10,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "テストの名前の付け方と粒度を決めて、test-policy.md に書く",
      "out": "テスト方針",
      "h": 1.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "自分のテスト名を1つ選び、実装を見ずに「何を確かめているか」が分かるか試す。",
        "judge": "分かった。分からなければ名前を直した"
      }
    },
    {
      "id": "v5s78",
      "week": 10,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "npm scripts を整える(test / test:watch / build)",
      "out": "コマンドが揃う",
      "h": 1.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [
        "npm"
      ],
      "check": {
        "type": "穴埋め",
        "q": "____ は本番でも必要なもの、____ は開発中だけ必要なもの。^1.2.3 は ____ までの更新を許す。",
        "judge": "見ないで3つ言えて、package.json で確認が取れた"
      }
    },
    {
      "id": "v5s79",
      "week": 10,
      "cat": "振り返り",
      "no": 1,
      "todo": "カバレッジを出して眺める。数字を目標にはしない(余力)",
      "out": "カバレッジメモ",
      "h": 1.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s80",
      "week": 11,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "React Testing Library を入れて、描画のテストを書く",
      "out": "描画テスト",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "要素をどうやって取ったか。クラス名や id で取っていないか確認して1行。",
        "judge": "役割か文言で取れていた"
      }
    },
    {
      "id": "v5s81",
      "week": 11,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "ユーザー操作(入力・クリック)のテストを書く(課題B-2)",
      "out": "操作テスト",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "必須項目を空にして送信したら、テストは通るか落ちるか。予測してから実行。",
        "judge": "予測が当たった"
      }
    },
    {
      "id": "v5s82",
      "week": 11,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "データ取得など非同期のテストを書く",
      "out": "非同期テスト",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "getBy だと失敗して findBy なら通る理由を1行。",
        "judge": "「その時点ではまだ描画されていない」に相当することが言えた"
      }
    },
    {
      "id": "v5s83",
      "week": 11,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "★テストが書きにくい箇所を見つけて、設計の方を直す",
      "out": "直した理由のメモ",
      "h": 2.0,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "テストが書きにくかった箇所を1つ、何が原因だったかを1行。",
        "judge": "実装側を直して、テストが書けるようになった"
      }
    },
    {
      "id": "v5s84",
      "week": 11,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "何をテストしないかを決めて、理由を test-policy.md に書く",
      "out": "書かない理由",
      "h": 1.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "テストしないと決めたものを1つ、その理由を1行。",
        "judge": "「面倒だから」以外の理由になった"
      }
    },
    {
      "id": "v5s85",
      "week": 11,
      "cat": "振り返り",
      "no": 1,
      "todo": "週の振り返り。テストで気づいたバグを weak-points.md に書く",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s86",
      "week": 12,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "GitHub Actions でテストを自動実行する(課題B-3)",
      "out": "CIが緑になる",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "手元で通るのにCIで落ちる原因を1つ予測して、わざとその状態を起こす。",
        "judge": "実際に赤いCIを1回出せた"
      }
    },
    {
      "id": "v5s87",
      "week": 12,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "ブランチを切ってPRを出す運用にする。mainに直接コミットしない",
      "out": "PRが出せる",
      "h": 2.0,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "ブランチを切る → push → PRを出す、を見ないで1周する。",
        "judge": "詰まらずにできた"
      }
    },
    {
      "id": "v5s88",
      "week": 12,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "PRの説明文のテンプレートを作る(何を・なぜ・どう確認したか)",
      "out": "PRテンプレート",
      "h": 1.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "自分のPRを読み返し、レビュアーが最初に聞くことを1つ予測して先に書いておく。",
        "judge": "予測した質問を1つ、説明文に先回りして書き足せた"
      }
    },
    {
      "id": "v5s89",
      "week": 12,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "★自分のPRを自分でレビューする。指摘を5件書き出す(課題B-4)",
      "out": "自己レビューメモ",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "自分の指摘5件のうち、直さないと決めたものの理由を1行。",
        "judge": "理由が具体的だった（「時間が無い」以外）"
      }
    },
    {
      "id": "v5s90",
      "week": 12,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "AIにもレビューさせ、採用/不採用を1件ずつ理由付きで決める(ルール8)",
      "out": "判断の記録",
      "h": 2.0,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "不採用にしたAIの指摘を1つ選び、なぜ不採用かを1行。",
        "judge": "★不採用が1件以上あり、理由が自分のコードの文脈に基づいていた"
      }
    },
    {
      "id": "v5s91",
      "week": 12,
      "cat": "Claude Code",
      "no": 1,
      "todo": "Lint と Formatter を入れて、CIで走らせる(余力)",
      "out": "自動整形",
      "h": 1.5,
      "tier": "余力",
      "track": "Claude Code",
      "refs": [],
      "check": null
    },
    {
      "id": "v5s92",
      "week": 13,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "テストが通る状態のままリファクタする。緑を保ったまま直す",
      "out": "緑のままの変更",
      "h": 2.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "リファクタ中に何回テストが落ちるか予測してから始める。",
        "judge": "落ちた回数を数えられた（0回でなくてよい）"
      }
    },
    {
      "id": "v5s93",
      "week": 13,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "型を締める。any を潰して、なぜ必要だったかを1行書く",
      "out": "any の削減",
      "h": 2.0,
      "tier": "コア",
      "track": "TypeScript",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "残した any を1つ選び、なぜ残したかを1行。",
        "judge": "「消し方が分からない」ではなく、残す理由があった"
      }
    },
    {
      "id": "v5s94",
      "week": 13,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "エラー処理とローディング表示を見直す。失敗したときに何が出るか確認する",
      "out": "失敗時の画面",
      "h": 2.0,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "通信を切ってリロードしたら画面に何が出るか、予測してから切る。",
        "judge": "予測が当たった（真っ白になったなら直した）"
      }
    },
    {
      "id": "v5s95",
      "week": 13,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "テスト方針を1枚にまとめ直す(人に説明できる形に)",
      "out": "test-policy.md",
      "h": 1.5,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "方針の文書を閉じて、人に説明するつもりで30秒話す。",
        "judge": "詰まらずに話せた"
      }
    },
    {
      "id": "v5s96",
      "week": 13,
      "cat": "振り返り",
      "no": 1,
      "todo": "フェーズBの総括とスキルシートの更新",
      "out": "スキルシート",
      "h": 2.0,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "11/16の自分と今の自分で、できるようになったことを1つ。",
        "judge": "具体的な作業で言えた（「テストが分かった」のような言い方は×）"
      }
    },
    {
      "id": "v5s97",
      "week": 14,
      "cat": "JS基礎",
      "no": 1,
      "todo": "★JSの棚卸し。飛ばした章の目次に「説明できる/できない」を付ける(課題C-1)",
      "out": "自己チェック表",
      "h": 2.0,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "「なんとなく」を付けた節を1つ選び、なぜ○でないのかを1行。",
        "judge": "説明できない点を具体的に挙げられた"
      }
    },
    {
      "id": "v5s98",
      "week": 14,
      "cat": "JS基礎",
      "no": 2,
      "todo": "説明できなかった節だけを読む。★上限2時間。全部読もうとしない",
      "out": "穴を埋めた記録",
      "h": 2.0,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [],
      "check": {
        "type": "予測",
        "q": "読む前に「たぶんこうだろう」を1行書いてから読む。",
        "judge": "読んだあと、自分の予測との差分を書けた"
      }
    },
    {
      "id": "v5s99",
      "week": 14,
      "cat": "JS基礎",
      "no": 3,
      "todo": "Ch9(クラス)をTypeScript視点で読む。class / extends / implements",
      "out": "読了メモ",
      "h": 2.0,
      "tier": "コア",
      "track": "JS基礎",
      "refs": [
        "class"
      ],
      "check": {
        "type": "穴埋め",
        "q": "class は ____ の設計図。extends は ____ を引き継ぐ。TypeScriptの implements は ____ を約束する。",
        "judge": "見ないで3つ埋められた"
      }
    },
    {
      "id": "v5s100",
      "week": 14,
      "cat": "振り返り",
      "no": 1,
      "todo": "weak-points.md を整理する。二度出たものだけ詳しい形に書き直す",
      "out": "弱点リスト",
      "h": 1.5,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "二度出た項目を1つ選び、一度目と二度目で何が違ったかを1行。",
        "judge": "違いを言えた（同じなら、まだ直っていないサイン）"
      }
    },
    {
      "id": "v5s101",
      "week": 14,
      "cat": "振り返り",
      "no": 2,
      "todo": "想定質問への回答を作り直す(第1期のQ&Aを今の実力で書き直す)",
      "out": "想定Q&A",
      "h": 2.0,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "1問を見ないで、声に出して答える。",
        "judge": "第1期のときより具体例が増えていた"
      }
    },
    {
      "id": "v5s102",
      "week": 15,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "作った2本(コンバート版・自作版)を説明する資料を作る",
      "out": "説明資料",
      "h": 2.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "資料を閉じて、2本の違いを60秒で話す。",
        "judge": "詰まらずに話せた"
      }
    },
    {
      "id": "v5s103",
      "week": 15,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "技術選定の理由を書く。なぜNext.jsか、なぜその構成か",
      "out": "選定理由",
      "h": 2.0,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "Next.jsを選ばなかった場合に何が困ったかを1行。",
        "judge": "具体的に言えた"
      }
    },
    {
      "id": "v5s104",
      "week": 15,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "自分のコードを読み返し、今なら直す箇所を直す",
      "out": "直した記録",
      "h": 2.0,
      "tier": "コア",
      "track": "テスト",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "直した箇所を1つ選び、当時なぜそう書いたのかを1行。",
        "judge": "当時の判断を思い出せた"
      }
    },
    {
      "id": "v5s105",
      "week": 15,
      "cat": "振り返り",
      "no": 1,
      "todo": "スキルシートを更新する(キャリア/スキル/スキルセット)",
      "out": "スキルシート",
      "h": 2.0,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "書いた項目を1つ選び「それは何をしたことですか」と聞かれた前提で答える。",
        "judge": "30秒で答えられた"
      }
    },
    {
      "id": "v5s106",
      "week": 15,
      "cat": "振り返り",
      "no": 2,
      "todo": "年内の総括を1枚に書く",
      "out": "総括メモ",
      "h": 1.5,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "9/14の自分にひと言アドバイスするなら何か、1行。",
        "judge": "具体的な行動で書けた（「頑張れ」は×）"
      }
    },
    {
      "id": "v5s107",
      "week": 16,
      "cat": "振り返り",
      "no": 1,
      "todo": "12/28に1件だけ。今年やったことを1枚にまとめる。★あとは休む",
      "out": "1年の記録",
      "h": 2.0,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "今年一番時間をかけたことと、一番効いたことは一致しているか。",
        "judge": "一致／不一致を判定できた"
      }
    },
    {
      "id": "v5s108",
      "week": 17,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "★案件が決まっていれば、その技術の公式チュートリアルを写経する(ルール13)",
      "out": "写経が動く",
      "h": 2.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "再現",
        "q": "写経を閉じて、同じものを見ないで書き始める。どこで止まるか記録する。",
        "judge": "止まった箇所を記録できた"
      }
    },
    {
      "id": "v5s109",
      "week": 17,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "★案件の技術で小さく1つ作る。未定ならこの枠も下の3本目に回す",
      "out": "小さい成果物",
      "h": 2.5,
      "tier": "コア",
      "track": "コンバート",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "作ったものについて、公式のどのページを見たか言えるか。",
        "judge": "言えた（AIに聞いただけなら×）"
      }
    },
    {
      "id": "v5s110",
      "week": 17,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "未定なら：小さいアプリをもう1本、要件定義から作り始める",
      "out": "3本目の着手",
      "h": 2.5,
      "tier": "コア",
      "track": "React",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "要件を書く前に「作らないもの」を先に3つ挙げられたか。",
        "judge": "3つ挙げられた"
      }
    },
    {
      "id": "v5s111",
      "week": 17,
      "cat": "振り返り",
      "no": 1,
      "todo": "参画初日・初週の準備リストを見直す",
      "out": "準備リスト",
      "h": 1.5,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "初日に一番不安なことを1つ、その対策を1行。",
        "judge": "対策が具体的だった"
      }
    },
    {
      "id": "v5s112",
      "week": 17,
      "cat": "振り返り",
      "no": 2,
      "todo": "次の3ヶ月の学習の仕組みを組み直す",
      "out": "次の計画",
      "h": 1.5,
      "tier": "コア",
      "track": "振り返り",
      "refs": [],
      "check": {
        "type": "説明",
        "q": "この3ヶ月で一番効いた仕組みを1つ。次も残すか。",
        "judge": "残す／やめるを理由付きで決められた"
      }
    }
  ],
  "tasks": [
    {
      "id": "t16",
      "track": "JS基礎",
      "code": "Ch14",
      "name": "DOMとXSSの確認",
      "goal": "innerHTMLの危険性が分かる。ReactとJSXが既定でエスケープする理由の土台。",
      "files": [],
      "steps": [],
      "reqs": [
        "innerHTML にスクリプトタグを含む文字列を入れて発火させる",
        "textContent に変えて防げることを確認する",
        "何が違うのかを1行で書く"
      ],
      "feats": "innerHTML, textContent, XSS",
      "judge": "XSSを再現し、textContentで防げる",
      "hints": [],
      "review": "ReactのJSXがどうエスケープしているか教えて",
      "h": 1.0,
      "week": -1,
      "tier": "対象外",
      "status": "ReactとJSXは既定でエスケープするため優先度を下げた",
      "refs": []
    },
    {
      "id": "t25",
      "track": "Claude Code",
      "code": "CC-5",
      "name": "レビュー役に自分のコードを見せる",
      "goal": "AIのレビューを取捨選択して使えるようになる。丸呑みしないことが実力になる。",
      "files": [
        {
          "path": ".claude/agents/reviewer.md",
          "note": "レビュー専用サブエージェントの定義"
        },
        {
          "path": "notes/learning-log.md",
          "note": "指摘と、採用・不採用の判断理由"
        }
      ],
      "steps": [
        "R-1 で書いたReactコードが手元にある状態で始める",
        "reviewer.md を作り、観点を4つ書く",
        "レビューさせる。出た指摘を notes/learning-log.md に全部書き出す",
        "★1つずつ「なぜそう言われたか」を理解してから、自分の手で直す",
        "納得できない指摘は直さず、理由を書く"
      ],
      "reqs": [
        "コードレビュー専用のサブエージェントを作る",
        "観点を明示する（型設計／責務の分割／フックの使い方／エラー処理の抜け）",
        "「修正版を丸ごと出さない。問題点と方向だけ示す」ことを定義に書く",
        "自分が書いたReactコードをレビューさせる",
        "★指摘を1つずつ理解し、自分の手で直す。コピペで直さない",
        "採用しなかった指摘は、理由を1行で書く（例: 今の規模では過剰、など）",
        "「言われて初めて気づいた」ものを notes/weak-points.md に追記する"
      ],
      "feats": "サブエージェント, コードレビュー, 指摘の取捨選択",
      "judge": "全指摘に採否の判断理由が書けている／直した箇所を自分で説明できる",
      "hints": [
        "指摘が多すぎて手が止まるときは、影響の大きいものから3つだけ選んで直す",
        "「不採用」の判断ができるようになることがこの課題の本題。全部直すのが正解ではない"
      ],
      "review": "私が採用しなかった指摘について、見送って良い判断か意見を聞かせて",
      "h": 3.0,
      "week": -1,
      "tier": "対象外",
      "status": "★v4で外した。通常のレビュー依頼で代替する",
      "refs": []
    },
    {
      "id": "t9",
      "track": "Claude Code",
      "code": "CC-2",
      "name": "学習ログをまとめるSkillを自作する",
      "goal": "繰り返す作業を型にして呼び出せるようになる。",
      "files": [],
      "steps": [],
      "reqs": [
        "Skillの雛形を作る",
        "日次ログを読んで週次サマリーを出す処理を書く",
        "実際に呼び出して動くことを確認する"
      ],
      "feats": "Skills, 自動化",
      "judge": "Skillが呼び出せて出力が出る",
      "hints": [],
      "review": "このSkillの粒度は妥当か、分けるべきか意見を聞かせて",
      "h": 2.0,
      "week": -1,
      "tier": "対象外",
      "status": "講座枠を削ったため",
      "refs": []
    },
    {
      "id": "t14",
      "track": "Claude Code",
      "code": "CC-3",
      "name": "ハーネスを1つ組む",
      "goal": "AIに自律的に作業させる仕組みの型が分かる。",
      "files": [],
      "steps": [],
      "reqs": [
        "Planner / Generator / Evaluator の3役を用意する",
        "小さな題材で1周回す",
        "評価が効いているか確認する"
      ],
      "feats": "ハーネス設計, Plan Mode",
      "judge": "3役が連携して1周する",
      "hints": [],
      "review": "この構成で評価役が機能しているか見て",
      "h": 1.0,
      "week": -1,
      "tier": "対象外",
      "status": "同上",
      "refs": []
    },
    {
      "id": "t20",
      "track": "Claude Code",
      "code": "CC-4",
      "name": "セキュリティ設定を自分の環境に入れる",
      "goal": "AIツールを安全に使うための設定が分かる。",
      "files": [],
      "steps": [],
      "reqs": [
        "パーミッション設定を確認する",
        "許可する操作を絞る",
        "prompt injection のリスクを理解する"
      ],
      "feats": "パーミッション, injection対策, MCP",
      "judge": "設定が反映されている",
      "hints": [],
      "review": "この設定で緩すぎる箇所があれば指摘して",
      "h": 1.0,
      "week": -1,
      "tier": "対象外",
      "status": "業務環境で設定済みのため後回し",
      "refs": []
    },
    {
      "id": "t1",
      "track": "JS基礎",
      "code": "Ch1-2",
      "name": "開発環境の動作確認ページ",
      "goal": "HTMLとJSをファイルで分けて書けるようになり、開発者ツールでコードの動きを追えるようになる。",
      "files": [],
      "steps": [],
      "reqs": [
        "index.html と main.js を別ファイルに分け、defer で読み込む",
        "console.log / warn / error を1回ずつ出す",
        "DevToolsのSourcesでブレークポイントを置き、止まることを確認する",
        "変数の中身をブレークポイントで止めて確認する"
      ],
      "feats": "script要素, console API, DevTools",
      "judge": "3種のログが出る／ブレークポイントで止まる",
      "hints": [],
      "review": "deferとasyncの違いと、この読み込み方が適切か説明して",
      "h": 0.5,
      "week": 0,
      "tier": "済",
      "status": "完了済み",
      "refs": []
    },
    {
      "id": "t2",
      "track": "JS基礎",
      "code": "Ch3",
      "name": "型判定チートシート",
      "goal": "値が何者なのかを確かめる方法が分かり、型による定番の落とし穴を避けられるようになる。TypeScriptの土台になる。",
      "files": [],
      "steps": [],
      "reqs": [
        "数値/文字列/真偽値/null/undefined/配列/オブジェクト/関数 の8種を配列に入れる",
        "各値に typeof、Array.isArray、Object.prototype.toString.call を適用する",
        "結果を console.table で一覧表示する",
        "nullのtypeofがobjectになる理由を自分の言葉でコメントに書く"
      ],
      "feats": "typeof, Array.isArray, console.table, let/const/var",
      "judge": "8種すべての判定結果が表で出る／nullと配列の挙動を説明できる",
      "hints": [],
      "review": "TypeScriptを使う場合、実行時の型判定はどこまで必要になるか教えて",
      "h": 1.0,
      "week": 0,
      "tier": "済",
      "status": "完了済み（Ch11後にもう一度見直す）",
      "refs": []
    },
    {
      "id": "t3",
      "track": "JS基礎",
      "code": "Ch4",
      "name": "等価比較クイズ",
      "goal": "「等しい」の判定でハマる典型パターンを先に体験し、比較の書き方を迷わず選べるようになる。",
      "files": [],
      "steps": [],
      "reqs": [
        "== と === を比べるペアを15組用意する",
        "実行前に自分の予想をコメントで書く",
        "実行して答え合わせをし、外れた組に印を付ける",
        "falsy値を ?? と || で処理し違いを出す"
      ],
      "feats": "比較演算子(==／===), ??, ||, ?., falsy",
      "judge": "15組中12組以上を予想できる",
      "hints": [],
      "review": "実務で == を使ってよい場面があるか、あるなら条件を教えて",
      "h": 1.0,
      "week": 0,
      "tier": "済",
      "status": "完了済み",
      "refs": []
    },
    {
      "id": "t4",
      "track": "JS基礎",
      "code": "Ch5",
      "name": "FizzBuzz 3実装くらべ",
      "goal": "同じ処理を複数の書き方で表現でき、読みやすさで選べるようになる。",
      "files": [],
      "steps": [],
      "reqs": [
        "if文版・switch版・配列とmap版の3通りで実装する",
        "3つの出力が完全に一致することを確認する",
        "それぞれの読みやすさを1行ずつコメントに書く"
      ],
      "feats": "if/else, switch, for, map, テンプレート文字列",
      "judge": "3実装の出力が一致する",
      "hints": [],
      "review": "この3つのうち実務で選ぶならどれか、理由つきで教えて",
      "h": 1.0,
      "week": 0,
      "tier": "済",
      "status": "完了済み",
      "refs": []
    },
    {
      "id": "t6",
      "track": "JS基礎",
      "code": "Ch6",
      "name": "関数の書き方ラボ ★",
      "goal": "関数の書き方の違いを説明でき、Reactのフックで必要になるクロージャの感覚が掴める。",
      "files": [],
      "steps": [],
      "reqs": [
        "関数宣言・関数式・アロー関数で同じ処理を書く",
        "巻き上げの違いを、実際にエラーを出して確認する",
        "デフォルト引数と可変長引数を使う",
        "クロージャで擬似プライベート変数を持つカウンタを作る"
      ],
      "feats": "関数宣言/関数式/アロー関数, 巻き上げ, デフォルト引数, クロージャ",
      "judge": "巻き上げのエラーを再現できる／カウンタが動く",
      "hints": [],
      "review": "クロージャがReactのuseStateとどう関係するか、概要だけ教えて",
      "h": 2.0,
      "week": 0,
      "tier": "済",
      "status": "完了済み",
      "refs": []
    },
    {
      "id": "t7",
      "track": "JS基礎",
      "code": "Ch7",
      "name": "スコープ可視化 ★",
      "goal": "変数がどこから見えるかを説明できるようになり、「なぜかこの変数が古い」で止まらなくなる。4週目にやるuseEffectの「古い値を掴むバグ」は、原因がここにある。",
      "files": [
        {
          "path": "ch07/index.html",
          "note": "main.js を defer で読み込むだけの器。Ch1-2と同じ形でよい"
        },
        {
          "path": "ch07/main.js",
          "note": "1〜3の実験。結果はすべて console.log で出す"
        },
        {
          "path": "ch07/counter.js",
          "note": "4のカウンタ。export して main.js から import する"
        },
        {
          "path": "notes/learning-log.md",
          "note": "5のスコープチェーンの図と気づき"
        }
      ],
      "steps": [
        "ch07/ フォルダを作り、index.html と main.js を置く",
        "実験1〜3を main.js に上から順に書く。1つ書くたびにブラウザで開いて出力を見る",
        "実験2は必ず「先に予想をコメントに書いてから」実行する",
        "カウンタは counter.js に分けて書き、main.js から import して使う",
        "最後に notes/learning-log.md へ図とハマった点を書く"
      ],
      "reqs": [
        "【実験1】name という同じ名前の変数を、グローバル・関数の中・ブロック({})の中の3か所で宣言する。関数の中から3つとも見えるか、ブロックの外から見えるかを console.log で確かめる",
        "【実験2】for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100) } を書く。0,1,2 ではなく 3,3,3 と出ることを再現する。実行前に予想をコメントで書く",
        "【実験3】実験2の var を let に変えるだけで 0,1,2 になることを確認する。なぜ変わったのかを1行コメントで書く",
        "【実験4】counter.js に createCounter() を書く。返り値は { increment, decrement, getValue } の3つ。内部の count は外から直接書き換えられないこと（counter.count が undefined になること）を確認する",
        "【実験5】notes/learning-log.md に、実験1の3つの変数がどう探索されるかを図で描く。手書き撮影でもよい"
      ],
      "feats": "スコープ, var/let/const, クロージャ, スコープチェーン, TDZ",
      "judge": "varとletのループ挙動の差を再現し、なぜ違うのかを自分の言葉で言える",
      "hints": [
        "3,3,3 になる理由が分からないときは、setTimeout が「あとで」実行されることと、var の i がループ全体で1つしかないことを結びつけて考える",
        "TDZ（Temporal Dead Zone／一時的死角）は Ch7 の let/const の節にある。let は宣言前に触るとエラーになる、という話",
        "counter.count が undefined になるのは、count が createCounter の中だけで生きているため"
      ],
      "review": "この「古い値を掴む」現象が、ReactのuseEffectでどう再現するか例を挙げて説明して。コードは書かないで",
      "h": 1.5,
      "week": 0,
      "tier": "済",
      "status": "完了済み（9/2）",
      "refs": []
    },
    {
      "id": "t8",
      "track": "JS基礎",
      "code": "Ch8",
      "name": "this早見表を実験で作る ★",
      "goal": "thisが何を指すか状況ごとに言えるようになる。React関数コンポーネントではthisを使わないが、既存のクラスコンポーネントや他人のコードを読むときに必要。",
      "files": [
        {
          "path": "ch08/index.html",
          "note": "main.js を読み込む器。ボタンを1つ置く（実験6で使う）"
        },
        {
          "path": "ch08/main.js",
          "note": "6パターンの実験。予想コメント → 実行 → 答え合わせの順で書く"
        },
        {
          "path": "notes/learning-log.md",
          "note": "早見表（6行の表）とハマった点"
        }
      ],
      "steps": [
        "まず obj = { name: 'obj', show() { console.log(this.name) } } のような土台を1つ作る",
        "同じ show を6通りの呼び方で呼ぶ。1パターンごとに「予想: 〜」をコメントで先に書く",
        "6つ書き終えてから実行し、外れたものに印を付ける",
        "外れたパターンだけ教材のCh8を読み直す",
        "最後に notes/learning-log.md へ6行の早見表としてまとめる"
      ],
      "reqs": [
        "【1】obj.show() のように、オブジェクトのメソッドとして呼ぶ",
        "【2】const f = obj.show; f() のように、取り出してから呼ぶ",
        "【3】show をアロー関数で定義した場合",
        "【4】obj.show.call(other) と obj.show.bind(other)() の2通り",
        "【5】function Person(name){ this.name = name } を new で呼ぶ",
        "【6】ボタンの addEventListener に obj.show を直接渡し、thisが失われることを再現する。そのあと bind を使う方法と、アロー関数で包む方法の2通りで直す",
        "6パターンすべて、実行前の予想をコメントで残しておく"
      ],
      "feats": "this, call/apply/bind, アロー関数, new, イベントハンドラ",
      "judge": "6パターンを事前予想して4つ以上当てられる／実験6のバグを2通りで直せる",
      "hints": [
        "「誰が呼んだか」で決まるのが基本。ドットの左側を見る癖をつける",
        "アロー関数だけは例外で、書かれた場所の this をそのまま使う",
        "実験6で this が undefined になるのは、addEventListener が関数だけを受け取ってobj との繋がりが切れるため"
      ],
      "review": "React関数コンポーネントでthisが不要になった理由を説明して",
      "h": 2.0,
      "week": 0,
      "tier": "済",
      "status": "完了済み（9/6）",
      "refs": []
    },
    {
      "id": "t10",
      "track": "JS基礎",
      "code": "Ch11",
      "name": "配列メソッド総当たり演習 ★",
      "goal": "一覧データの絞り込み・並べ替え・集計を自在に書けるようになる。Reactのリスト描画はほぼこれなので、実務で一番使う。ここで作るデータは最後まで使い回す。",
      "files": [
        {
          "path": "ch11/data.js",
          "note": "★商品データ20件。export const PRODUCTS = [...] の形。2週目にTS化し、3〜5週目のアプリでもこれを使う"
        },
        {
          "path": "ch11/index.html",
          "note": "main.js を読み込む器"
        },
        {
          "path": "ch11/main.js",
          "note": "data.js を import して各メソッドを試す"
        },
        {
          "path": "notes/learning-log.md",
          "note": "使ったメソッドと結果のメモ"
        }
      ],
      "steps": [
        "先に data.js を作る。ここが以降すべての土台になるので丁寧にやる",
        "カテゴリは4種類くらいに絞る（例: 'キーボード' / 'マウス' / 'モニター' / 'ケーブル'）",
        "在庫0の商品を3件、価格が同じ商品を2件わざと混ぜておく（絞り込みや並べ替えの確認用）",
        "main.js で上から順にメソッドを試す。1つ書くたびに console.log で結果を見る",
        "最後に notes へ「どのメソッドが何を返すか」を1行ずつ書く"
      ],
      "reqs": [
        "data.js に商品20件を作る。1件は { id, name, category, price, stock } の5項目。id は 1〜20、price は 1000〜30000 くらいでばらつかせる",
        "filter … 在庫が1以上の商品だけ取り出す",
        "map … 商品名と税込価格（price * 1.1）だけの配列に変換する",
        "sort … 価格の安い順に並べる。★元の配列が変わってしまうことを確認し、[...PRODUCTS].sort(...) で防ぐ",
        "reduce … 全商品の在庫数の合計を出す",
        "find / some / every … 「idが7の商品」「1万円超の商品があるか」「全部在庫があるか」を出す",
        "Set … カテゴリの一覧を重複なしで取り出す（絞り込みUIの選択肢になる）",
        "Map … id から商品を引ける索引を作り、Map.get(7) で取り出せることを確認する",
        "reduce（応用）… { キーボード: 3, マウス: 5, ... } のようなカテゴリ別件数のオブジェクトを作る"
      ],
      "feats": "filter, map, sort, reduce, find, some/every, Set, Map, スプレッド",
      "judge": "8種類以上のメソッドを使い結果を確認できている／data.js が20件で保存されている",
      "hints": [
        "reduce が難しければ、まず for 文で書いてから reduce に置き換えると流れが見える",
        "sort が元の配列を壊すのは Ch11 の配列の節に書いてある。ここは4週目のReactで効いてくる",
        "カテゴリ別集計の reduce は、初期値を {} にして「あれば+1、なければ1」を書く形"
      ],
      "review": "sortの破壊的変更がReactの再レンダリングで問題になる理由を教えて",
      "h": 2.5,
      "week": 1,
      "tier": "コア",
      "status": "【積み残し】商品データ20件は最後まで使い回す",
      "refs": []
    },
    {
      "id": "t11",
      "track": "JS基礎",
      "code": "Ch12",
      "name": "分割代入とスプレッド ★Reactで毎日使う",
      "goal": "配列やオブジェクトを組み替える書き方が身につく。Reactのstate更新は「元を壊さず新しい値を作る」書き方が基本なので、ここができないと3週目で必ず詰まる。",
      "files": [
        {
          "path": "ch12/main.js",
          "note": "6つの実験。Ch11の data.js を import して題材にする"
        },
        {
          "path": "ch12/index.html",
          "note": "main.js を読み込む器"
        }
      ],
      "steps": [
        "Ch11 の data.js を import して、実データで練習する（新しくデータを作らない）",
        "実験1〜4を書く。毎回 console.log で「元」と「新しい方」の両方を出す",
        "実験5で push とスプレッドを比べ、元が変わるかどうかを目で見る",
        "実験6のネストは、浅いコピーの限界を体感するのが目的。直せなくてよい"
      ],
      "reqs": [
        "【1】const { name, price } = PRODUCTS[0] で値を取り出す。配列も const [first, second] = PRODUCTS で取り出す",
        "【2】function show({ name, price }) { ... } のように、引数で直接分割代入する（Reactのpropsとまったく同じ書き方）",
        "【3】const added = [...PRODUCTS, newItem] で商品を1件足す。元の PRODUCTS.length が変わっていないことを確認する",
        "【4】const updated = { ...PRODUCTS[0], price: 9999 } で価格だけ変えた新しい商品を作る。元の PRODUCTS[0].price が変わっていないことを確認する",
        "【5】arr.push(x) と [...arr, x] を並べて実行し、元の配列の length を毎回出す。どちらが元を壊すかを目で確認する",
        "【6】{ id: 1, detail: { color: 'black' } } のようなネストしたオブジェクトをスプレッドでコピーし、コピー先の detail.color を変えると元も変わってしまうことを確認する"
      ],
      "feats": "分割代入, スプレッド構文, 非破壊的な更新, 浅いコピー",
      "judge": "元の配列・オブジェクトを変えずに新しい値を作れる／実験6で浅いコピーの限界を再現できる",
      "hints": [
        "分割代入とスプレッドの解説がCh11(コレクション)とCh12(反復処理)のどちらにあるかは、手元の本の索引で「スプレッド」を引いて確認する",
        "実験6で「元も変わる」のは、スプレッドが1階層しかコピーしないため。detail は同じ物を指したままになる",
        "深くコピーしたい場合の手段（structuredClone など）は、名前だけ知っておけば今は十分"
      ],
      "review": "この非破壊的な更新が、ReactのuseStateでなぜ必須なのか説明して",
      "h": 1.0,
      "week": 1,
      "tier": "コア",
      "status": "【積み残し】",
      "refs": []
    },
    {
      "id": "t12",
      "track": "TypeScript",
      "code": "TS-1",
      "name": "型注釈と型推論を体で覚える",
      "goal": "型を書く場所と、書かなくていい場所の判断がつくようになる。案件の必須スキル。",
      "files": [
        {
          "path": "ts_typescript/01_annotation.ts",
          "note": "実験1〜4"
        },
        {
          "path": "ts_typescript/02_union.ts",
          "note": "実験5〜6"
        },
        {
          "path": "notes/learning-log.md",
          "note": "出したエラーメッセージと読み方のメモ"
        }
      ],
      "steps": [
        "1週目に作った ts_typescript/ フォルダをそのまま使う（tsconfig.json は作成済みのはず）",
        "01_annotation.ts を作り、npx tsc --noEmit で型チェックだけ回す（毎回これで確認する）",
        "実験3のエラーは、消さずにコメントアウトして残しておく。あとで読み返す材料になる",
        "エラーメッセージは英語のまま notes に貼り、日本語で1行要約を添える"
      ],
      "reqs": [
        "変数・関数の引数・戻り値に型注釈を付ける（例: function add(a: number, b: number): number）",
        "const n = 3 のように推論が効く場所であえて注釈を消し、エディタでホバーして型が付いていることを確認する",
        "★わざと型エラーを5種類出す。例: 数値に文字列を代入／引数の数が足りない／存在しないプロパティへのアクセス／戻り値の型違い／undefinedかもしれない値の使用",
        "any を付けた変数に何を代入してもエラーが出ないことを確認し、何が失われたかをコメントで書く",
        "string | number を受け取る関数を書き、typeof で分岐しないとエラーになることを確認する",
        "type Order = 'asc' | 'desc' を定義し、'up' を渡すとエラーになることを確認する"
      ],
      "feats": "型注釈, 型推論, union型, リテラル型, any, tsc",
      "judge": "5種類のエラーを自力で読んで直せる／anyを避ける理由を自分の言葉で言える",
      "hints": [
        "エラーメッセージは長いが、最初の1行と Type 'X' is not assignable to type 'Y' の X と Y だけ見れば大体わかる",
        "union型でいきなりプロパティを触るとエラーになるのは正しい挙動。分岐して型を絞る必要がある",
        "サバイバルTypeScript の「値・型・変数」章がこの課題の教材"
      ],
      "review": "型注釈を書くべき場所と推論に任せる場所の基準を、実務の観点で教えて",
      "h": 1.5,
      "week": 1,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t13",
      "track": "TypeScript",
      "code": "TS-2",
      "name": "interface・type・ジェネリクス",
      "goal": "他人が書いた型定義を読めるようになる。3週目に書くReactのpropsの型もここが土台になる。",
      "files": [
        {
          "path": "ts_typescript/03_interface.ts",
          "note": "実験1〜2"
        },
        {
          "path": "ts_typescript/04_generics.ts",
          "note": "実験3〜4"
        },
        {
          "path": "ts_typescript/05_narrowing.ts",
          "note": "実験5"
        },
        {
          "path": "notes/learning-log.md",
          "note": "使い分けの基準を自分の言葉で"
        }
      ],
      "steps": [
        "同じ「商品」の型を interface と type の両方で書いてみる",
        "それぞれを拡張してみて（extends と &）、書き味の違いを体感する",
        "ジェネリクスは first<T> から始める。T が何になるかをホバーで確認しながら進める",
        "最後に notes へ「自分はこう使い分ける」を3行で書く"
      ],
      "reqs": [
        "商品の型を interface Product と type ProductT の両方で定義する",
        "interface は extends で、type は & で、それぞれ「在庫情報を足した型」を作る",
        "★ジェネリクスで function first<T>(arr: T[]): T | undefined を書く。first([1,2,3]) の戻り値が number、first(['a']) が string と推論されることをホバーで確認する",
        "Partial / Pick / Omit / Record をそれぞれ1回ずつ使う。例: Partial<Product>（全部省略可）、Pick<Product,'id'|'name'>、Record<string, number>",
        "型の絞り込みを3通り書く。typeof（string か number か）／in（プロパティがあるか）／タグ付きユニオン（{ status: 'ok', data } | { status: 'error', message }）"
      ],
      "feats": "interface, type, ジェネリクス, ユーティリティ型, 型の絞り込み",
      "judge": "ジェネリック関数が型安全に動く／絞り込みを書くと型エラーが消えることを確認できている",
      "hints": [
        "T は「呼ぶときに決まる型」を入れる箱。最初は「配列の中身の型」と読み替えると分かりやすい",
        "タグ付きユニオンは、APIレスポンスの成功/失敗を表すのに実務で頻出する",
        "使い分けの結論は「どちらでも動く。チームの慣習に従う」で構わない。理由が言えることが大事"
      ],
      "review": "interfaceとtypeの使い分けについて、私のメモが実務の感覚と合っているか見て",
      "h": 1.5,
      "week": 1,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t15",
      "track": "JS基礎",
      "code": "Ch13",
      "name": "公開APIビューア ★",
      "goal": "外部からデータを取ってきて画面に出せるようになる。通信の待ち時間と失敗の扱いが分かる。4週目のuseEffect+fetchはこれとほぼ同じことをReactでやる。",
      "files": [
        {
          "path": "ch13/index.html",
          "note": "一覧を出す ul と、状態表示用の div を置く"
        },
        {
          "path": "ch13/main.js",
          "note": "取得・表示・エラー処理"
        },
        {
          "path": "ch13/sleep.js",
          "note": "実験6の sleep 関数"
        },
        {
          "path": "notes/learning-log.md",
          "note": "イベントループの図と、404の扱いのメモ"
        }
      ],
      "steps": [
        "使うAPIを決める。https://jsonplaceholder.typicode.com/posts が題材として扱いやすい",
        "まず取得して console.log するところまで作る",
        "次に画面（ul）へ出す。ここまでで一度動かす",
        "ローディング表示 → エラー処理 の順で足していく",
        "最後に実験4〜6と notes を書く"
      ],
      "reqs": [
        "fetch で公開APIから一覧を取得し、ul にリスト表示する（10件程度に絞ってよい）",
        "async/await で書く。通信中は「読み込み中…」を画面に出し、終わったら消す",
        "try/catch でエラーを捕まえ、失敗時は画面に赤字でメッセージを出す",
        "★存在しないURL（.../postsX など）を叩き、fetchが404では catch に入らないことを確認する。res.ok を見て自分で throw する必要があることを体感する",
        "Promise.all で posts と users の2つを並列取得し、順番に取るより速いことを確認する",
        "sleep.js に sleep(ms) を自作する。setTimeout を Promise で包む形。await sleep(1000) で1秒待てることを確認する",
        "通信中／成功／失敗の3状態が、必ず画面のどこかに出ていること"
      ],
      "feats": "fetch, async/await, Promise, try/catch, Promise.all, res.ok",
      "judge": "3状態が画面に出る／404で catch に入らない理由を説明できる",
      "hints": [
        "fetch は「サーバーに繋がらなかった」ときだけ reject する。404や500は「繋がって返事が来た」扱いなので成功に見える",
        "3状態の管理が煩雑だと感じたら、それは正しい感覚。4週目にReactでどう整理するかを見る",
        "Promise.all は Ch13 の後半にある。1つでも失敗すると全体が失敗する点に注意"
      ],
      "review": "この3状態の管理が、Reactではどう変わるか概要だけ教えて",
      "h": 3.0,
      "week": 2,
      "tier": "コア",
      "status": "ここでJS基礎は終わり",
      "refs": []
    },
    {
      "id": "t17",
      "track": "TypeScript",
      "code": "TS-3",
      "name": "既存のJSコードに型を付ける",
      "goal": "型のない既存コードをTS化する感覚が掴める。案件のコンバート作業に直結する。",
      "files": [
        {
          "path": "ts_typescript/data.ts",
          "note": "★Ch11の data.js を型付きにしたもの。3〜5週目のアプリで使う"
        },
        {
          "path": "ts_typescript/06_usage.ts",
          "note": "data.ts を import して配列メソッドを試す"
        },
        {
          "path": "notes/learning-log.md",
          "note": "型を付けて気づいたことのメモ"
        }
      ],
      "steps": [
        "ch11/data.js をコピーして ts_typescript/data.ts にする",
        "拡張子を .ts に変えただけの状態で npx tsc --noEmit を回し、まずエラーを見る",
        "Product 型を定義して付ける",
        "06_usage.ts で filter や map を書き、戻り値の型がホバーで確認できることを見る",
        "最後にカテゴリをリテラル型に絞る"
      ],
      "reqs": [
        "Ch11の data.js を data.ts に変える（中身のデータは作り直さない）",
        "interface Product { id: number; name: string; category: ...; price: number; stock: number } を定義する",
        "export const PRODUCTS: Product[] = [...] のように配列に型を付ける",
        "filter の戻り値が Product[]、map の戻り値が string[] などと推論されることをホバーで確認する",
        "★category を 'キーボード' | 'マウス' | 'モニター' | 'ケーブル' のリテラル型ユニオンにする。存在しないカテゴリを書くとエラーになることを確認する",
        "型を付けて見つかった打ち間違いや曖昧さを notes に書く（1つも無ければ「無かった」と書く）"
      ],
      "feats": "型定義, .js→.ts移行, 型付き配列メソッド, リテラル型ユニオン",
      "judge": "型エラーゼロで tsc --noEmit が通る／気づいた点が書けている",
      "hints": [
        "いきなり厳密にしない。まず any でも通る状態にして、そこから1つずつ具体的な型に置き換える",
        "これが実務のTS化の手順そのもの。案件で最初に任されるのもこの作業になりやすい"
      ],
      "review": "既存JSをTS化するときの進め方（どこから手を付けるか）を教えて",
      "h": 1.0,
      "week": 2,
      "tier": "コア",
      "status": "1週目のdata.jsに型を付ける",
      "refs": []
    },
    {
      "id": "t5",
      "track": "Claude Code",
      "code": "CC-1",
      "name": "CLAUDE.mdを書く",
      "goal": "AIに毎回同じ説明をしなくて済むようになる。案件の必須スキル「AI駆動での開発経験」の土台。",
      "files": [
        {
          "path": "CLAUDE.md",
          "note": "学習用リポジトリのルートに置く。20〜40行程度で十分"
        }
      ],
      "steps": [
        "リポジトリのルートで touch CLAUDE.md して開く",
        "見出しを4つ立てる（このリポジトリについて／守ってほしいこと／レビューの観点／回答の好み）",
        "書き終えたら Claude Code を起動し、わざと「この課題のコードを書いて」と頼んでみる",
        "断られてレビューを提案されたら成功。書き始めたら指示を書き直す"
      ],
      "reqs": [
        "「このリポジトリは何か」を3行で書く（独習JavaScriptとTS/Reactの学習用、など）",
        "★「コードを書かせない。自分で書いたものへのレビューだけ頼む」を明記する",
        "レビューしてほしい観点を3つ書く（例: 命名／責務の分け方／エラー処理の抜け）",
        "「修正版を丸ごと出さず、何が問題かと直す方向だけ示す」ことを書く",
        "回答は日本語で、専門用語には一言説明を付けてほしいことを書く",
        "実際に起動して、コードを書かせようとしても方針が守られることを確認する"
      ],
      "feats": "CLAUDE.md, プロジェクト設定",
      "judge": "コードを書かせようとしてもレビュー方針が守られる",
      "hints": [
        "抽象的に書くと効かない。「丁寧にレビューして」ではなく「命名の一貫性を見て」のように具体で書く",
        "効かない指示があったら、その場で1行足して試す。育てていくもの"
      ],
      "review": "このCLAUDE.mdで意図が伝わるか、曖昧で解釈が割れそうな指示があれば指摘して",
      "h": 1.5,
      "week": 2,
      "tier": "余力",
      "status": "",
      "refs": []
    },
    {
      "id": "t18",
      "track": "TypeScript",
      "code": "TS-4",
      "name": "Reactでよく使う型を覚える",
      "goal": "Reactを書くときに毎回出てくる型を先に押さえる。ここを知らないと型エラーのたびに手が止まる。実務で一番効く。",
      "files": [
        {
          "path": "react_基礎/src/types-lab.tsx",
          "note": "型の実験だけを集めた場所。画面に出なくてよい"
        },
        {
          "path": "notes/learning-log.md",
          "note": "詰まった型と解決した書き方のメモ"
        }
      ],
      "steps": [
        "R-1 でReactプロジェクトを作ったあと、その中に types-lab.tsx を作る",
        "1つずつ書いて、エディタのホバーで型を確認しながら進める",
        "any を書きたくなったら、そこを notes にメモしてから正しい型を調べる"
      ],
      "reqs": [
        "children を受け取る props に ReactNode を使う（type Props = { children: ReactNode }）",
        "★input の onChange に型を付ける。e.target.value が string と推論されることを確認する（React.ChangeEvent<HTMLInputElement>）",
        "button の onClick に型を付ける（React.MouseEvent<HTMLButtonElement>）",
        "ComponentProps<'button'> を使って、標準のbutton属性をそのまま受け取れるpropsを書く",
        "useState<Product | null>(null) のように、初期値がnullの状態に型を渡す",
        "型が分からないときの調べ方を1つ決めて notes に書く（ホバー／定義へジャンプ／公式のCheatsheet）"
      ],
      "feats": "ReactNode, イベント型, ComponentProps, useState<T>",
      "judge": "イベントハンドラの型をanyなしで書ける／型定義を自力で調べる手段が決まっている",
      "hints": [
        "イベント型が思い出せないときは、いったんハンドラをJSXに直接書いてホバーすると正解の型が出る。それをコピーして関数に切り出すのが実務的な近道",
        "React TypeScript Cheatsheet に頻出パターンが全部載っている。ブックマークしておく"
      ],
      "review": "Reactの型で初心者がanyに逃げがちな箇所と、その正しい書き方を教えて",
      "h": 1.0,
      "week": 3,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t19",
      "track": "React",
      "code": "R-1",
      "name": "props と state",
      "goal": "Reactの基本単位が分かる。データが上から下へ流れる感覚を掴む。",
      "files": [
        {
          "path": "react_基礎/",
          "note": "npm create vite@latest で作る。テンプレートは React + TypeScript"
        },
        {
          "path": "react_基礎/src/data.ts",
          "note": "TS-3で作った data.ts をコピーして置く"
        },
        {
          "path": "react_基礎/src/components/ProductList.tsx",
          "note": "一覧。PRODUCTS を map して並べる"
        },
        {
          "path": "react_基礎/src/components/ProductCard.tsx",
          "note": "商品1件の表示。props を受け取るだけ"
        },
        {
          "path": "react_基礎/src/App.tsx",
          "note": "状態を持つ親"
        },
        {
          "path": "notes/learning-log.md",
          "note": "propsとstateの違いを自分の言葉で"
        }
      ],
      "steps": [
        "npm create vite@latest react_基礎 -- --template react-ts でプロジェクトを作る",
        "TS-3 の data.ts を src/ にコピーする（新しくデータを作らない）",
        "まず ProductCard を作り、App から1件だけ渡して表示する",
        "次に ProductList を作り、map で20件並べる",
        "最後に App に useState を足して、ボタンで表示が変わるようにする"
      ],
      "reqs": [
        "コンポーネントを3つ以上に分ける（App / ProductList / ProductCard）",
        "App → ProductList → ProductCard の順に props でデータを渡す",
        "★props に型を付ける（type Props = { product: Product } のように。any にしない）",
        "PRODUCTS を map して一覧を描画する。key には product.id を渡す（index を渡さない。理由は notes に書く）",
        "useState を使い、「在庫がある商品だけ表示」を切り替えるボタンを付ける",
        "props と state の違いを notes に3行で書く（誰が持つか／変えられるか／変わると何が起きるか）"
      ],
      "feats": "コンポーネント, props, useState, JSX, key",
      "judge": "一覧が20件描画され、ボタンで表示が絞り込まれる／propsとstateの違いを説明できる",
      "hints": [
        "★ゼロから書こうとしない。まずReact公式のクイックスタートを写経して動かし、そのあと自分のデータに差し替える。写経→改造→自作の順（ルール3b）",
        "画面が真っ白なときは、まずブラウザのコンソールを見る。JSXの閉じ忘れが多い",
        "「絞り込んだ結果」は state にしない。PRODUCTS と「絞り込むかどうかのbool」から計算で出す。これは R-3 で詳しくやる",
        "key に index を使うと、並べ替えたときに表示が壊れる。Ch11の sort と繋がる話"
      ],
      "review": "propsとstateの境界の引き方を、判断に迷う具体例つきで教えて",
      "h": 2.0,
      "week": 3,
      "tier": "コア",
      "status": "★写経 → 改造 → 自作の順で（ルール5b）",
      "refs": []
    },
    {
      "id": "t21",
      "track": "React",
      "code": "R-2",
      "name": "useEffectと依存配列 ★",
      "goal": "Reactで一番ハマる箇所を先に潰す。1週目のCh7で書いたクロージャの知識がここで効く。",
      "files": [
        {
          "path": "react_フック/src/StaleClosure.tsx",
          "note": "★実験3〜4。古い値を掴むバグの再現と修正"
        },
        {
          "path": "react_フック/src/Cleanup.tsx",
          "note": "実験5。クリーンアップの発火タイミング"
        },
        {
          "path": "react_フック/src/PostList.tsx",
          "note": "実験6。Ch13のAPI取得をReactで書く"
        },
        {
          "path": "notes/learning-log.md",
          "note": "バグの原因と直し方を図で"
        }
      ],
      "steps": [
        "react_基礎 のプロジェクトをそのまま使ってよい（新規に作らなくてよい）",
        "実験1〜2で useEffect の発火回数を console.log で数える",
        "★実験3は「バグを直さずに再現するところまで」を1つの区切りにする",
        "再現できたら notes に原因を書いてから、実験4で直す",
        "実験6は Ch13 のコードを見ながら書き、何が減ったかを比べる"
      ],
      "reqs": [
        "useEffect(() => {...}, []) でマウント時に一度だけログを出す",
        "依存配列を [] / [count] / 省略 の3通りで書き、発火回数の違いを console.log で数える",
        "★StaleClosure.tsx を作る。count の state と、setInterval で1秒ごとに count をconsole.log する useEffect を書く。依存配列を [] にすると、ボタンで count を増やしてもログはずっと 0 のままになる。これを再現する",
        "★そのバグを直す。依存配列に count を入れる方法と、setCount(c => c + 1) の関数形式を使う方法の2通りを試し、違いを notes に書く",
        "クリーンアップ関数（return () => {...}）を書き、いつ呼ばれるかを console.log で確認する。実験3の setInterval を止めるのにも必要",
        "Ch13でやったAPI取得を useEffect の中で行い、通信中／成功／失敗の3状態を画面に出す"
      ],
      "feats": "useEffect, 依存配列, クリーンアップ, クロージャ, 非同期",
      "judge": "古い値を掴むバグを再現・修正できる／クリーンアップの発火タイミングを説明できる",
      "hints": [
        "ログが 0 のままになるのは、[] のときエフェクトが最初の1回しか作られず、その中の count が最初のレンダー時の値のまま固定されるため。Ch7 の setTimeout と同じ構造",
        "React 18 の開発モードでは useEffect が2回発火する。バグではないので驚かなくてよい",
        "setInterval を止め忘れるとログが増え続ける。クリーンアップを書く動機がここにある"
      ],
      "review": "依存配列の書き忘れで起きる問題のパターンを整理して教えて",
      "h": 2.5,
      "week": 4,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t22",
      "track": "React",
      "code": "R-3",
      "name": "状態の置き場所を設計する",
      "goal": "「この状態はどこに持つべきか」を判断できるようになる。設計の話ができると評価が変わる。",
      "files": [
        {
          "path": "react_フック/src/hooks/useProductFilter.ts",
          "note": "実験4のカスタムフック"
        },
        {
          "path": "notes/learning-log.md",
          "note": "自分の設計判断とその理由"
        }
      ],
      "steps": [
        "R-1 のアプリに「カテゴリ絞り込み」と「キーワード検索」を足す形で進める",
        "最初はわざと子コンポーネントそれぞれに状態を持たせ、噛み合わなくなることを体験する",
        "そのうえで共通の親へ持ち上げる（リフトアップ）",
        "絞り込み結果を state にしていたら、計算で出す形に直す",
        "最後にロジックをカスタムフックへ切り出す"
      ],
      "reqs": [
        "カテゴリ選択と検索キーワードの2つの状態を、共通の親へリフトアップする",
        "どこまで上げるべきか、上げすぎると何が困るか（無関係な再レンダリングなど）を notes に書く",
        "★絞り込んだ結果を state にしない。PRODUCTS・カテゴリ・キーワードから計算で出す。もし state にしていたら、なぜダメかを書いてから直す",
        "useProductFilter.ts にカスタムフックを切り出す。戻り値は { keyword, setKeyword, category, setCategory, filtered } のような形",
        "自分の設計判断を3行で説明できるようにする（何をどこに置いたか／なぜか／代案は何か）"
      ],
      "feats": "リフトアップ, 派生state, カスタムフック, 単一責任",
      "judge": "状態の置き場所を理由付きで説明できる／カスタムフックが動き、App がすっきりしている",
      "hints": [
        "「派生state」は、他の状態から計算できるのに別途持ってしまっている状態のこと。同期がずれてバグになるので避ける",
        "カスタムフックは「use」で始まる普通の関数。中で他のフックを呼べるだけ",
        "迷ったら「この状態を使うコンポーネント全部の、一番近い共通の親」に置く"
      ],
      "review": "私の状態設計をレビューして。持ちすぎ・上げすぎがあれば指摘だけお願いします",
      "h": 2.0,
      "week": 4,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t23",
      "track": "React",
      "code": "R-4",
      "name": "コンポーネントを責務で分割する",
      "goal": "大きな画面を責務で切れるようになる。参画後に画面設計を任される可能性があるので、分割の理由を語れると評価が変わる。",
      "files": [
        {
          "path": "react_フック/src/components/",
          "note": "分割後のコンポーネント3〜5個"
        },
        {
          "path": "notes/learning-log.md",
          "note": "各コンポーネントの責務を1行ずつ"
        }
      ],
      "steps": [
        "R-3 までで大きくなった App.tsx を見て、責務の切れ目に線を引く",
        "「表示だけの部品」と「状態を持つ部品」に色分けして考える",
        "分けたら、それぞれの props の型を書く",
        "最後に、わざと細かく分けすぎた版も1つ作って読み比べる"
      ],
      "reqs": [
        "1つの大きなコンポーネントを責務で3〜5個に分ける（例: FilterBar / ProductList / ProductCard / EmptyState）",
        "★表示だけのコンポーネント（propsを受け取って描くだけ）と、状態を持つコンポーネントを分ける",
        "各コンポーネントの props の型を定義する",
        "分割の理由を1行ずつ書く（例: FilterBar は絞り込みUIだけを持ち、データを知らない）",
        "わざと分割しすぎた版を1つ作り、読みにくくなることを確認して粒度の感覚を掴む"
      ],
      "feats": "コンポーネント設計, 責務分割, props設計, 表示と状態の分離",
      "judge": "分割の理由を全コンポーネントについて1行で書けている",
      "hints": [
        "迷ったら「このコンポーネントを一言で説明できるか」で判断する。「〜と〜をする」になったら分ける候補",
        "表示だけの部品は再利用しやすく、テストもしやすい。分ける価値がある"
      ],
      "review": "この分割粒度は実務として妥当か、過不足を指摘して",
      "h": 1.0,
      "week": 4,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t26",
      "track": "Next.js",
      "code": "N-1",
      "name": "App Routerのルーティング",
      "goal": "Next.jsのファイル構成のルールが分かる。案件のコンバート先がこれ。",
      "files": [
        {
          "path": "nextjs_approuter/",
          "note": "npx create-next-app@latest で作る練習用。App Router / TypeScript を選ぶ"
        },
        {
          "path": "nextjs_approuter/app/layout.tsx",
          "note": "共通ヘッダー"
        },
        {
          "path": "nextjs_approuter/app/products/[id]/page.tsx",
          "note": "動的ルート"
        },
        {
          "path": "notes/learning-log.md",
          "note": "ファイル名と役割の対応表"
        }
      ],
      "steps": [
        "npx create-next-app@latest でプロジェクトを作る（App Router / TypeScript / Tailwindなしでよい）",
        "app/ の中を見て、page.tsx と layout.tsx の関係を確認する",
        "ページを2つ足してリンクで行き来する",
        "動的ルートを作り、URLのidが取れることを確認する",
        "loading.tsx と error.tsx を置いて、わざと遅くしたり失敗させたりする"
      ],
      "reqs": [
        "app/page.tsx（トップ）、app/products/page.tsx（一覧）、app/about/page.tsx（説明）の3ページを作る",
        "next/link の Link で3ページを行き来できるようにする（a タグではなく Link を使う）",
        "app/layout.tsx に共通のヘッダーを置き、全ページに出ることを確認する",
        "★app/products/[id]/page.tsx を作り、params から id を受け取って画面に出す。/products/7 にアクセスして 7 が表示されることを確認する",
        "loading.tsx を置き、await new Promise(r => setTimeout(r, 2000)) でわざと遅くして出ることを確認する",
        "error.tsx を置き、わざと throw して出ることを確認する",
        "ファイル名と役割の対応表を notes に書く（page / layout / loading / error）"
      ],
      "feats": "App Router, layout/page, 動的ルート, Link, loading/error",
      "judge": "3ページ以上を行き来でき、/products/7 で id が取れる",
      "hints": [
        "★Next.js Learn の手順どおりに写経してから、自分のページを足す。いきなり構成を考えない（ルール3b）",
        "app/ の中では、フォルダ名がそのままURLになる。[id] のような角括弧が動的部分",
        "error.tsx は 'use client' が必須。理由は N-2 で分かる",
        "Next.js Learn の第1〜4章がこの課題の教材"
      ],
      "review": "App RouterのファイルベースルーティングとReact Routerの違いを整理して",
      "h": 2.0,
      "week": 4,
      "tier": "コア",
      "status": "★写経から入る（ルール5b）",
      "refs": []
    },
    {
      "id": "t24",
      "track": "コンバート",
      "code": "CONV-1",
      "name": "小さなReactアプリを完成させる",
      "goal": "ここまでの知識を1つのアプリに統合できるようになる。次週コンバートするための土台。規模は小さくてよい。動くものを完成させることが目的。",
      "files": [
        {
          "path": "app_react版/",
          "note": "★これが5週目にコンバートする対象。ここまでの成果をまとめる"
        },
        {
          "path": "app_react版/src/data.ts",
          "note": "TS-3の型付きデータ"
        },
        {
          "path": "app_react版/README.md",
          "note": "何を作ったかを3行で"
        }
      ],
      "steps": [
        "react_フック の内容を app_react版 として整える（作り直さなくてよい）",
        "一覧 → 絞り込み → 検索 の順に動作確認する",
        "データ取得を fetch に置き換える（public/products.json を置いて自分で取りに行く形でよい）",
        "お気に入り機能を足して localStorage に保存する",
        "★動いたら止める。デザインや機能を足さない"
      ],
      "reqs": [
        "Ch11の商品データ20件を題材にする（新しく作らない）",
        "一覧表示・カテゴリ絞り込み・キーワード検索が動く",
        "props と state の型が TypeScript で定義されている（any がない）",
        "useEffect + fetch でデータを外部から取得する形にする（public/products.json を置いて fetch('/products.json') でよい）",
        "お気に入りのオン/オフを localStorage に保存し、リロードしても残る",
        "★動く状態で一度止める。作り込みすぎない（次週まるごと移すため）"
      ],
      "feats": "React, TypeScript, useState/useEffect, localStorage",
      "judge": "絞り込みと検索が効き、リロードしてもお気に入りが残る",
      "hints": [
        "localStorage の読み書きは Client 側でしか動かない。5週目の 'use client' の話に直結する",
        "完成度を上げたくなるが、ここでの目的は「移せる状態を作ること」。機能追加は我慢する"
      ],
      "review": "このアプリはNext.jsへ移しやすい構造になっているか、事前に指摘して",
      "h": 6.5,
      "week": 4,
      "tier": "コア",
      "status": "ここまでに動くReactアプリを完成させる",
      "refs": []
    },
    {
      "id": "t30",
      "track": "Claude Code",
      "code": "CC-6",
      "name": "Cursorを試して使い分けを決める",
      "goal": "案件の推奨スキルであるCursorを触っておき、Claude Codeとの使い分けを言語化できるようになる。",
      "files": [
        {
          "path": "notes/learning-log.md",
          "note": "使い分けの基準3行と、面談で話す想定の説明"
        }
      ],
      "steps": [
        "Cursorをインストールし、学習用リポジトリを開く",
        "小さな変更（変数名の一括変更など）を Cmd+K で試す",
        "同じことを Claude Code でもやってみる",
        "手数と待ち時間の違いをメモする",
        "最後に3行でまとめる"
      ],
      "reqs": [
        "Cursorをインストールし、学習用リポジトリを開く",
        "インライン編集（Cmd+K）とチャットの違いを試す",
        "Tab補完がどこまで先読みするか確認する",
        "同じ小さな機能を Claude Code と Cursor の両方で作ってみる",
        "★どちらがどの作業に向くか、自分の言葉で3行にまとめる（例: 局所的な修正はCursor、複数ファイルにまたがる作業はClaude Code）",
        "「AI駆動開発の経験は？」と聞かれた想定で、話す内容を用意する"
      ],
      "feats": "Cursor, インライン編集, Tab補完, AIツールの使い分け",
      "judge": "両方で同じ機能を作り、使い分けを3行で説明できる",
      "hints": [
        "会社アカウントと個人の学習を混ぜないよう、ログイン先に注意する",
        "結論は「どちらが優れているか」ではなく「どの作業に向くか」。そこを語れると強い"
      ],
      "review": "AI駆動開発の経験について、面談で話す内容としてこれで足りるか意見が欲しい",
      "h": 3.0,
      "week": 4,
      "tier": "余力",
      "status": "",
      "refs": []
    },
    {
      "id": "t27",
      "track": "Next.js",
      "code": "N-2",
      "name": "Server ComponentsとClient Components ★",
      "goal": "Next.jsで一番の分岐点。どちらで書くかを判断できると、コンバート作業の質が変わる。案件で「なぜそこに 'use client' を置いたか」を聞かれる場面が必ず来る。",
      "files": [
        {
          "path": "nextjs_approuter/app/lab/page.tsx",
          "note": "実験1〜3。Server Component のまま書く"
        },
        {
          "path": "nextjs_approuter/app/lab/Counter.tsx",
          "note": "'use client' を付けた側"
        },
        {
          "path": "notes/convert-log.md",
          "note": "★判断基準3行。5週目の成果物のうち最重要"
        }
      ],
      "steps": [
        "app/lab/page.tsx に console.log('server') と書き、ブラウザではなくターミナルに出ることを確認する",
        "★そこに useState を足してエラーを出す。エラーメッセージを notes に貼る",
        "Counter.tsx を作って 'use client' を付け、そちらへ state を移す",
        "page.tsx から Counter を呼び、動くことを確認する",
        "最後に「どちらで書くか」の判断基準を3行で書く"
      ],
      "reqs": [
        "app/lab/page.tsx に console.log を書き、出力がブラウザではなくサーバー側（ターミナル）に出ることを確認する",
        "★その page.tsx に useState を書き、エラーが出ることを再現する。エラーメッセージをそのまま notes に貼る",
        "Counter.tsx を作り、先頭に 'use client' を書いて state をそちらへ移す。page.tsx から <Counter /> を呼んで動くことを確認する",
        "★Client Component の境界をなるべく葉（末端）に近づける。ページ全体に 'use client' を付けた場合と比べ、何が変わるかを notes に書く",
        "Server Component から Client Component へ props を渡す。文字列や数値は渡せるが、関数を渡すとエラーになることを確認する",
        "★判断基準を自分の言葉で3行にまとめる（例: state・イベント・ブラウザAPIが要るならClient、それ以外はServer）"
      ],
      "feats": "Server/Client Components, 'use client', 境界設計, シリアライズ",
      "judge": "エラーを再現・理解できる／どちらで書くかを理由付きで判断できる",
      "hints": [
        "既定は Server Component。'use client' を書いたファイルとその配下がClientになる",
        "関数が渡せないのは、サーバーからブラウザへ送るときにJSONに変換されるため。関数はJSONにできない",
        "「境界を葉に近づける」とは、ページ全体をClientにせず、ボタンなど必要な部品だけをClientにすること"
      ],
      "review": "Server/Clientの境界の引き方について、私の判断基準が実務と合っているか見て",
      "h": 2.5,
      "week": 5,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t28",
      "track": "Next.js",
      "code": "N-3",
      "name": "データ取得とServer Actions",
      "goal": "サーバー側でデータを取る書き方が分かる。2週目のCh13で書いたfetchとの違いを体感する。",
      "files": [
        {
          "path": "nextjs_approuter/app/products/page.tsx",
          "note": "Server Component の中で直接 fetch する"
        },
        {
          "path": "notes/learning-log.md",
          "note": "Ch13のクライアント取得と比べて何が減ったか"
        }
      ],
      "steps": [
        "Ch13 のコードを横に開いた状態で始める",
        "Server Component を async 関数にして、その中で直接 await fetch を書く",
        "useState も useEffect も要らないことを確認する",
        "Ch13 と見比べて、消えた行を数える",
        "キャッシュの挙動を確認してから Server Actions を試す"
      ],
      "reqs": [
        "★Server Component を async にして、中で直接 await fetch する。useState / useEffect / ローディング状態が不要になることを確認する",
        "Ch13でクライアント側に書いた取得処理と並べ、何行減ったかを notes に書く",
        "同じページを再読み込みし、毎回取りに行くのかキャッシュされるのかを確認する（fetch の cache オプションを変えて挙動の違いを見る）",
        "Server Actions でフォーム送信を処理する（'use server' を付けた関数を form の action に渡す）",
        "取得に失敗したときの表示を用意する"
      ],
      "feats": "Server Componentでのfetch, キャッシュ, Server Actions, revalidate",
      "judge": "サーバー側取得で一覧が出る／フォーム送信が動く／Ch13との差を説明できる",
      "hints": [
        "Server Component は async にできる。Client Component はできない",
        "キャッシュの既定はNext.jsのバージョンで変わってきた歴史がある。自分が使っているバージョンの公式ドキュメントで確認する",
        "Server Actions は 'use server' を付けた関数。フォームから直接呼べる"
      ],
      "review": "Server ActionsとAPI Routesの使い分けを、実務の判断基準で教えて",
      "h": 1.0,
      "week": 5,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t29",
      "track": "コンバート",
      "code": "CONV-2",
      "name": "Next.jsへコンバートする ★本命",
      "goal": "案件の推奨スキル「アーキテクチャコンバートの経験」を実際に作る。参画後に最初に任される作業がこれと同じ形になる。",
      "files": [
        {
          "path": "app_nextjs版/",
          "note": "★コンバート先。app_react版 は消さずに残す（読み比べるため）"
        },
        {
          "path": "notes/convert-log.md",
          "note": "★移行計画・詰まった点・判断理由。この課題の最重要成果物"
        }
      ],
      "steps": [
        "★先に notes/convert-log.md へ移行計画を書く。手を動かす前に書く",
        "create-next-app で app_nextjs版 を作る",
        "まず全部を Client Component として移し、とにかく動く状態にする",
        "★動いてから、'use client' を1つずつ剥がしていく。剥がせない理由が出たらその場で記録する",
        "データ取得を Server Component へ移せる部分を移す",
        "最後に convert-log.md を読み返し、判断理由が書けているか確認する"
      ],
      "reqs": [
        "★移行計画を先に書く（何を・どの順で移すか。想定される詰まりどころも）",
        "create-next-app で App Router 構成のプロジェクトを作る",
        "コンポーネントをそのまま移し、まず動く状態にする（この段階では全部Clientでよい）",
        "★'use client' をどこに置くか決め、境界をなるべく葉に近づける。剥がせなかったコンポーネントは、なぜ剥がせないかを1行ずつ書く",
        "データ取得を Server Component へ移せる部分は移す",
        "★localStorage を使う部分は Client Component に閉じ込める（サーバー側には localStorage が無いため）",
        "★詰まった点と「なぜそう判断したか」を convert-log.md に記録する。参画後に「コンバート経験は？」と聞かれたときに読み返す材料になる"
      ],
      "feats": "App Router, Server/Client境界, 'use client', 段階的移行",
      "judge": "React版と同じ機能がNext.jsで動く／境界の判断理由を全コンポーネントについて説明できる",
      "hints": [
        "いきなり理想形を目指さない。「全部Clientで動かす」→「1つずつ剥がす」が安全な手順",
        "サーバー側に window や localStorage は無い。参照するとビルド時にエラーになる",
        "動かすことより記録を優先する。完璧に動かなくても、判断の記録があれば課題としては成立する"
      ],
      "review": "私のコンバート手順をレビューして。移行の順番として妥当か指摘だけお願いします",
      "h": 7.0,
      "week": 5,
      "tier": "コア",
      "status": "求人でよく求められる「コンバート経験」の実体",
      "refs": []
    },
    {
      "id": "t31",
      "track": "コンバート",
      "code": "CONV-3",
      "name": "仕上げ・公開・説明の準備",
      "goal": "人に見せられる状態に整え、参画後に語れる形にする。スキルシートと初回の打ち合わせで使う材料になる。",
      "files": [
        {
          "path": "app_nextjs版/README.md",
          "note": "何を作ったか／技術選定／学んだこと"
        },
        {
          "path": "notes/qa.md",
          "note": "★想定質問と自分の回答。参画前に読み返す"
        },
        {
          "path": "（Vercelの公開URL）",
          "note": "README に書いておく"
        }
      ],
      "steps": [
        "まず any を検索して潰す。1つも無ければそれでよい",
        "命名と重複処理を見直す（AIの提案は採否を自分で判断する）",
        "README を書く",
        "Vercel にデプロイする（GitHubリポジトリを繋ぐだけ）",
        "★最後に想定Q&Aを書く。ここが参画準備の本体"
      ],
      "reqs": [
        "any を潰し、共通の型を切り出す",
        "命名を見直し、重複した処理をまとめる",
        "README を書く（何を作ったか／なぜNext.jsにしたか／学んだこと。各3行程度）",
        "★Vercelにデプロイして公開URLを用意する",
        "React版とNext.js版の違いを、人に説明できる形で言語化する（データ取得がどう変わったか／ファイル構成／何が楽になり何が面倒になったか）",
        "★想定質問への回答を用意する。最低この3つ:「'use client' はどう決めましたか」「型はどう設計しましたか」「AIはどこまで使いましたか」"
      ],
      "feats": "リファクタ, 型整理, Vercel, 説明力",
      "judge": "公開URLで動く／想定質問3つに口頭で答えられる",
      "hints": [
        "Vercel は GitHub リポジトリを繋ぐだけでデプロイできる。ビルドエラーが出たらローカルで npm run build を先に通す",
        "想定Q&Aは暗記しなくてよい。convert-log.md を見ながら話せる状態にしておく",
        "「分からなかったこと」も正直に言えるように準備しておく方が信用される"
      ],
      "review": "「コンバート経験を教えて」と聞かれた想定で私の説明を聞き、改善点を指摘して",
      "h": 6.0,
      "week": 5,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t33",
      "track": "TypeScript",
      "code": "A-7",
      "name": "型を先に決める",
      "goal": "データの形を先に決めてから作る進め方が身につく。型から書くと、画面を作る前に矛盾に気づける。",
      "files": [
        {
          "path": "tracker-app/src/types.ts",
          "note": "アプリで扱うデータの型"
        },
        {
          "path": "tracker-app/src/lib/sample.ts",
          "note": "型に沿ったサンプルデータを10件"
        }
      ],
      "steps": [
        "requirements.md を見て、扱うデータを名詞で書き出す",
        "それぞれの型を書く。まず必須のフィールドだけ",
        "「あってもなくてもよい」フィールドをオプショナルにする",
        "取りうる値が決まっているものはユニオン型にする（文字列にしない）",
        "型に沿ったサンプルデータを10件書く。型エラーが出ないところまで直す"
      ],
      "reqs": [
        "アプリの主要なデータに型が付いている",
        "状態を表すフィールドが string ではなくユニオン型になっている",
        "サンプルデータ10件が型エラーなしで通る",
        "any を1つも使っていない"
      ],
      "feats": "type/interface, ユニオン型, オプショナルプロパティ, リテラル型",
      "judge": "サンプルデータのフィールド名をわざと間違えると、エディタで赤くなる",
      "hints": [
        "ユニオン型にするか迷ったら、取りうる値を実際に並べてみる。5個以内なら型にする",
        "日付は Date と string のどちらで持つか、ここで決めて design-log.md に理由を書く"
      ],
      "review": "私が書いた型定義です。後で困りそうな設計を指摘してください。直したコードは書かず、何が問題かだけ教えてください",
      "h": 2.5,
      "week": 6,
      "tier": "コア",
      "status": "型を先に決めてから作る",
      "refs": []
    },
    {
      "id": "t32",
      "track": "コンバート",
      "code": "A-1",
      "name": "作るものを自分で決める（要件定義）★フェーズAの起点",
      "goal": "要件定義の経験ができる。実務で「実装だけ」から一段出るのはここ。何を作らないかを決められるようになる。",
      "files": [
        {
          "path": "tracker-app/docs/requirements.md",
          "note": "要件。箇条書きでよい"
        },
        {
          "path": "tracker-app/docs/design-log.md",
          "note": "設計の判断と、その理由を書き足していく"
        }
      ],
      "steps": [
        "★配布版のトラッカーは開かない。9週目まで封をしておく",
        "今の学習トラッカーで自分が実際に使っている機能だけを書き出す",
        "使っていない機能に線を引く。これが「作らないもの」",
        "残った機能を「無いと困る」「あると嬉しい」の2つに分ける",
        "「無いと困る」だけで4週間の計画に収まるか見積もる。溢れたらさらに削る",
        "画面を3つ以内に決めて、紙かテキストで並べる"
      ],
      "reqs": [
        "requirements.md に「作るもの」と「作らないもの」が両方書いてある",
        "作らないと決めたものに理由が1行ずつ付いている",
        "画面が3つ以内に収まっている",
        "各機能に目安時間が書いてあり、合計が4週間のコア時間（約42h）を超えていない"
      ],
      "feats": "要件定義, スコープの決め方, 見積もり",
      "judge": "第三者が読んで「何を作るのか」が分かり、作らないものの理由も分かる",
      "hints": [
        "全部作ろうとすると必ず溢れる。削ることが仕事だと思って進める",
        "迷ったら「これが無い状態で1週間使えるか」で判断する",
        "AIに要件を作らせない。自分の使い方を知っているのは自分だけ"
      ],
      "review": "私が書いた要件定義です。スコープが広すぎる箇所と、「作らない」の判断が甘い箇所を指摘してください。要件は書き直さないでください",
      "h": 2.0,
      "week": 6,
      "tier": "コア",
      "status": "★配布版は開かない。要件定義から自分でやる",
      "refs": []
    },
    {
      "id": "t34",
      "track": "React",
      "code": "A-2",
      "name": "キーワード検索 ★Ch10を回収する",
      "goal": "文字列の照合を自分で設計できるようになる。正規表現を「使うべきか」から判断できるようになる。",
      "files": [
        {
          "path": "tracker-app/src/lib/search.ts",
          "note": "検索のロジックだけ。画面から切り離す"
        },
        {
          "path": "tracker-app/src/components/SearchBox.tsx",
          "note": "入力欄"
        }
      ],
      "steps": [
        "まず toLowerCase() と includes() だけで書く。これで足りるか確かめる",
        "大文字小文字が無視できることを実際に試す",
        "スペース区切りで複数語のAND検索に広げる",
        "ここで正規表現が必要かを判断する。不要なら使わない。その判断を1行メモする",
        "検索対象のフィールドを複数にする（名前だけでなくメモも）",
        "検索ロジックを search.ts の関数に切り出す。画面の中に書かない"
      ],
      "reqs": [
        "大文字小文字を区別せずに部分一致する",
        "スペース区切りで複数語を入力すると、全部含むものだけ残る",
        "検索ロジックが画面から独立した関数になっている（10週目でテストを書く）",
        "正規表現を使ったか使わなかったか、理由がメモにある"
      ],
      "feats": "String.toLowerCase, includes, split, filter, 正規表現（必要なら）",
      "judge": "「ノート」と「のーと」のような表記ゆれをどう扱うか決めてあり、その挙動どおりに動く",
      "hints": [
        "★Ch10「正規表現」の節を先に読まない。includes で詰まってから開く",
        "正規表現をユーザー入力から組み立てるときは、記号のエスケープを忘れると落ちる",
        "全角・半角やひらがな・カタカナまで対応するかは、要件で決めたことに従う"
      ],
      "review": "私が書いた検索処理です。正規表現を使う/使わないの判断が妥当か、見落としている入力パターンがないか指摘してください",
      "h": 2.5,
      "week": 7,
      "tier": "コア",
      "status": "★Ch10の正規表現を、詰まってから読む",
      "refs": [
        "search"
      ]
    },
    {
      "id": "t35",
      "track": "React",
      "code": "A-3",
      "name": "日付で絞り込む・並べ替える ★Ch10を回収する",
      "goal": "日付の扱いが分かる。実務で一番事故が多いところを、事故る前に一度通る。",
      "files": [
        {
          "path": "tracker-app/src/lib/date.ts",
          "note": "日付の変換と比較。ここに閉じ込める"
        },
        {
          "path": "tracker-app/src/components/DateFilter.tsx",
          "note": "期間の指定UI"
        }
      ],
      "steps": [
        "サンプルデータの日付をどう持っているか確認する（string か Date か）",
        "「今週」「今月」「全期間」の3つで絞れるようにする",
        "開始日と終了日を指定する形にも広げる",
        "日付の新しい順・古い順で並べ替えられるようにする",
        "★境界を確かめる。指定した日そのものは含まれるのか、自分で決めて統一する",
        "日付の変換と比較を date.ts に閉じ込める。画面には書かない"
      ],
      "reqs": [
        "「今週」「今月」「全期間」で正しく絞れる",
        "開始日と終了日の両端を含むかどうかが決まっていて、そのとおりに動く",
        "並べ替えが両方向で動く",
        "日付の変換が date.ts の関数に閉じ込められている"
      ],
      "feats": "Date, getTime, toISOString, sort, 比較演算子",
      "judge": "月初・月末・今日そのものを指定したときに、意図どおりの件数が出る",
      "hints": [
        "★比較は getTime() で数値にしてから。文字列比較は 'YYYY-MM-DD' のときだけ偶然うまくいく",
        "new Date('2026-10-19') はUTC、new Date('2026/10/19') はローカル。ずれる原因の大半がこれ",
        "詰まったらCh10のDateの節だけ開く。章全体は読まない"
      ],
      "review": "私が書いた日付処理です。タイムゾーンと境界値で問題が起きそうな箇所を指摘してください。直し方の方向だけで結構です",
      "h": 2.5,
      "week": 7,
      "tier": "コア",
      "status": "★Ch10のDateを、詰まってから読む",
      "refs": [
        "date"
      ]
    },
    {
      "id": "t36",
      "track": "React",
      "code": "A-4",
      "name": "フォームで追加する ★Ch15を回収する",
      "goal": "フォーム送信の既定動作が分かる。Reactでも素のJSでも同じ話だと分かる。",
      "files": [
        {
          "path": "tracker-app/src/components/RecordForm.tsx",
          "note": "入力フォーム"
        },
        {
          "path": "tracker-app/src/lib/validate.ts",
          "note": "入力チェック"
        }
      ],
      "steps": [
        "★まず e.preventDefault() を書かずに送信してみる。何が起きるか目で見る",
        "何が起きたのかを1行で書いてから直す",
        "入力値を state で持ち、送信で一覧に1件追加されるようにする",
        "空欄や不正な値のときに追加されないようにする",
        "エラーメッセージを画面に出す",
        "Enterキーでも送信できることを確認する"
      ],
      "reqs": [
        "送信してもページが再読み込みされない",
        "必須項目が空のときは追加されず、理由が画面に出る",
        "追加後にフォームが初期化される",
        "Enterキーでの送信も同じように動く"
      ],
      "feats": "onSubmit, preventDefault, controlled component, バリデーション",
      "judge": "空欄・全角スペースだけ・極端に長い文字列を入れても壊れない",
      "hints": [
        "★preventDefault を書く前に一度壊すこと。これがCh15の回収になる",
        "onSubmit に付けるのか onClick に付けるのかで挙動が変わる。両方試す",
        "入力チェックを画面の中に書くとテストしづらい。validate.ts に出す"
      ],
      "review": "私が書いたフォームです。バリデーションの漏れと、state の持ち方で後で困りそうな箇所を指摘してください",
      "h": 2.5,
      "week": 8,
      "tier": "コア",
      "status": "★Ch15のpreventDefault。まず一度壊す",
      "refs": [
        "form"
      ]
    },
    {
      "id": "t37",
      "track": "React",
      "code": "A-5",
      "name": "モーダルを作る ★Ch15の本丸",
      "goal": "イベント伝播が体で分かる。Reactでも素のJSでも同じ仕組みだと分かる。後片付け（クリーンアップ）の意味がここで腑に落ちる。",
      "files": [
        {
          "path": "tracker-app/src/components/Modal.tsx",
          "note": "モーダル本体"
        },
        {
          "path": "notes/weak-points.md",
          "note": "Obsidianの常設ノート。詰まった箇所を1件書く"
        }
      ],
      "steps": [
        "まず開く・閉じるだけのモーダルを作る",
        "★背景をクリックしたら閉じるようにする。ここで中身をクリックしても閉じるはず",
        "なぜ中身のクリックでも閉じるのかを、自分の言葉で1行書いてから直す",
        "Escキーでも閉じられるようにする（document にリスナーを付ける）",
        "★モーダルを5回開け閉めして、リスナーが増えていないか確認する",
        "増えていたら、後片付けを書く"
      ],
      "reqs": [
        "背景クリックで閉じ、中身のクリックでは閉じない",
        "Escキーで閉じる",
        "開閉を繰り返してもリスナーが増えない",
        "開いている間、背後がスクロールしない",
        "なぜ中身のクリックで閉じてしまったのかを説明できる"
      ],
      "feats": "イベント伝播, stopPropagation, addEventListener/removeEventListener, useEffect のクリーンアップ",
      "judge": "開いた直後に勝手に閉じることがなく、開閉を10回繰り返しても挙動が変わらない",
      "hints": [
        "★これが今回のJS回収で一番大事な課題。Ch15のイベント伝播の節を、詰まってから開く",
        "開くボタンのクリックが document まで伝わって即座に閉じる、も定番のハマり方",
        "useEffect の戻り値で解除する。これが「後片付け」",
        "stopPropagation を書く前に、なぜ必要かを言えるようにする"
      ],
      "review": "私が書いたモーダルです。イベントの扱いとクリーンアップで問題がある箇所を指摘してください。コードは書き直さないでください",
      "h": 2.5,
      "week": 8,
      "tier": "コア",
      "status": "★Ch15のイベント伝播。今回のJS回収の本丸",
      "refs": [
        "modal",
        "keyboard"
      ]
    },
    {
      "id": "t38",
      "track": "コンバート",
      "code": "A-6",
      "name": "★配布版と読み比べる（9週目まで開かない）",
      "goal": "自分の設計を他人の設計と比べて、違いを言葉にできるようになる。面接で「設計の話ができる人」かどうかは、ここで決まる。",
      "files": [
        {
          "path": "tracker-app/docs/design-log.md",
          "note": "差分と、自分の判断を書き足す"
        }
      ],
      "steps": [
        "★自作が一通り動くまで配布版を開かない。ここまで来て初めて開く",
        "配布版のディレクトリ構成を見て、自分のものと並べて書く",
        "データの持ち方を比べる。どこに何を置いているか",
        "状態管理のやり方を比べる",
        "自分の方が良いと思う点を3つ、相手の方が良いと思う点を3つ書く",
        "★相手が良い点のうち1つだけ、自分のコードに取り込む。全部は取り込まない"
      ],
      "reqs": [
        "構成・データの持ち方・状態管理の3点で差分が書いてある",
        "自分が良い点と相手が良い点が、それぞれ3つずつ挙がっている",
        "取り込んだ1点と、取り込まなかった理由が書いてある",
        "「配布版の方が正しい」という結論になっていない（判断を放棄していない）"
      ],
      "feats": "設計の比較, ディレクトリ構成, 状態管理",
      "judge": "差分を人に説明できる。「なぜそう作ったか」を両方について言える",
      "hints": [
        "配布版が正解ではない。作られた時期も目的も違う",
        "全部真似すると、自分で設計した意味が消える",
        "取り込まないと決めた理由の方が、面接では価値がある"
      ],
      "review": "自作版と配布版の差分をこう整理しました。見落としている観点があれば教えてください。どちらが正しいかの判定は求めていません",
      "h": 2.5,
      "week": 9,
      "tier": "コア",
      "status": "★ここで初めて配布版を開く",
      "refs": []
    },
    {
      "id": "t39",
      "track": "テスト",
      "code": "B-1",
      "name": "最初のテストを書く",
      "goal": "テストの書き方と、テストしやすい形が分かる。「テスト書けます」と言えるようになる第一歩。",
      "files": [
        {
          "path": "tracker-app/vitest.config.ts",
          "note": "設定"
        },
        {
          "path": "tracker-app/src/lib/search.test.ts",
          "note": "A-2で切り出した検索のテスト"
        },
        {
          "path": "tracker-app/src/lib/date.test.ts",
          "note": "A-3で切り出した日付のテスト"
        },
        {
          "path": "tracker-app/docs/test-policy.md",
          "note": "テストの方針"
        }
      ],
      "steps": [
        "Vitest を入れて、1 + 1 = 2 のテストを1本だけ書いて通す",
        "npm scripts に test と test:watch を足す",
        "search.ts のテストを書く。まず正常系を1本",
        "★わざと落ちるテストを書いて、落ちることを確認する",
        "date.ts の境界値のテストを書く（月初・月末・今日そのもの）",
        "テストの名前の付け方を決めて test-policy.md に書く"
      ],
      "reqs": [
        "npm test でテストが走り、全部緑になる",
        "検索と日付のテストが合わせて10本以上ある",
        "境界値のテストが入っている",
        "テスト名を読めば、何を確かめているか分かる"
      ],
      "feats": "Vitest, describe/it/expect, npm scripts",
      "judge": "わざと実装を壊すと、対応するテストだけが赤くなる",
      "hints": [
        "★通るテストより、落ちるテストを先に見ること。緑だけ見ていると信用できない",
        "A-2とA-3でロジックを関数に切り出しておいたのが、ここで効く",
        "画面のテストは次の週。まずは純粋な関数から"
      ],
      "review": "私が書いたテストです。テストになっていない（常に通ってしまう）ものと、抜けている観点を指摘してください",
      "h": 2.5,
      "week": 10,
      "tier": "コア",
      "status": "A-2/A-3で切り出した関数がここで効く",
      "refs": [
        "npm"
      ]
    },
    {
      "id": "t40",
      "track": "テスト",
      "code": "B-2",
      "name": "ユーザー操作のテストを書く",
      "goal": "画面のテストが書けるようになる。「使う人の目線で確かめる」形が分かる。",
      "files": [
        {
          "path": "tracker-app/src/components/RecordForm.test.tsx",
          "note": "フォームのテスト"
        },
        {
          "path": "tracker-app/src/components/Modal.test.tsx",
          "note": "モーダルのテスト"
        }
      ],
      "steps": [
        "React Testing Library を入れて、画面が出ることだけを確かめるテストを1本書く",
        "フォームに入力して送信し、一覧に増えることを確かめる",
        "必須項目が空のときに追加されないことを確かめる",
        "モーダルが背景クリックで閉じ、中身のクリックでは閉じないことを確かめる",
        "★テストが書きにくい箇所が出たら、実装の方を直す。テストを諦めない",
        "直した理由を test-policy.md に1行書く"
      ],
      "reqs": [
        "フォームの正常系と異常系が両方テストされている",
        "モーダルの2つの挙動（閉じる／閉じない）がテストされている",
        "要素の取得に、見た目ではなく役割や文言を使っている",
        "テストのために実装を直した箇所が1つ以上ある"
      ],
      "feats": "Testing Library, screen, userEvent, findBy/getBy の違い",
      "judge": "実装のクラス名を変えてもテストが落ちない（見た目に依存していない）",
      "hints": [
        "クラス名やid で要素を取るとすぐ壊れる。ユーザーが見ているもので取る",
        "非同期のときは getBy ではなく findBy",
        "テストしづらい＝設計が良くないサイン。実装を直す方を選ぶ"
      ],
      "review": "私が書いた画面テストです。壊れやすい書き方になっている箇所と、確かめられていない挙動を指摘してください",
      "h": 2.5,
      "week": 11,
      "tier": "コア",
      "status": "",
      "refs": []
    },
    {
      "id": "t41",
      "track": "テスト",
      "code": "B-3",
      "name": "CIでテストを自動実行する",
      "goal": "CIが分かる。チーム開発で当たり前に使われている仕組みを自分で作れる。",
      "files": [
        {
          "path": "tracker-app/.github/workflows/ci.yml",
          "note": "GitHub Actions の設定"
        }
      ],
      "steps": [
        "ブランチを切ってから作業する運用に変える",
        "push でテストが走るワークフローを書く",
        "★わざとテストを落としてpushし、CIが赤くなることを確認する",
        "PRを出して、CIの結果がPR画面に出ることを確認する",
        "型チェックとビルドもCIに足す",
        "mainへの直接pushをやめる"
      ],
      "reqs": [
        "pushするとCIが自動で走る",
        "テストが落ちるとCIが赤くなり、PRにそれが出る",
        "テスト・型チェック・ビルドの3つが走っている",
        "mainに直接コミットしていない（履歴がPR経由になっている）"
      ],
      "feats": "GitHub Actions, ブランチ, Pull Request",
      "judge": "赤いCIのPRと緑のCIのPRを、両方1回ずつ作れている",
      "hints": [
        "★緑になることより、赤くなることを先に確認する",
        "Node のバージョンを固定しておかないと、手元と結果が変わる",
        "Secretsに入れるものと入れないものを区別する。トークンをymlに直書きしない"
      ],
      "review": "私が書いたCIの設定です。抜けている検査と、セキュリティ上まずい書き方があれば指摘してください",
      "h": 2.5,
      "week": 12,
      "tier": "コア",
      "status": "★赤くなることを先に確認する",
      "refs": []
    },
    {
      "id": "t42",
      "track": "テスト",
      "code": "B-4",
      "name": "★自分のPRを自分でレビューする",
      "goal": "レビューの目が育つ。AIのレビューを評価できるようになる（ルール8の実践）。求人の「レビュー経験」は、これができるかどうか。",
      "files": [
        {
          "path": "tracker-app/docs/review-log.md",
          "note": "自己レビューの記録"
        },
        {
          "path": "tracker-app/.github/pull_request_template.md",
          "note": "PRのテンプレート"
        }
      ],
      "steps": [
        "PRの説明文のテンプレートを作る（何を・なぜ・どう確認したか）",
        "★自分のPRを、他人のコードだと思って上から読む",
        "指摘を5件書き出す。粗探しでよい",
        "5件それぞれに「直す／直さない」と理由を付ける",
        "次に同じPRをAIにレビューさせる",
        "★AIの指摘を1件ずつ、採用/不採用と理由を書く。丸呑みしない",
        "自分が気づけなかった指摘と、AIが的外れだった指摘を分けて記録する"
      ],
      "reqs": [
        "自分の指摘が5件以上あり、それぞれに判断と理由が付いている",
        "AIの指摘に対して1件ずつ採用/不採用の判断がある",
        "不採用にした理由が書いてある",
        "自分が気づけなかった観点が言語化されている"
      ],
      "feats": "コードレビュー, PRの書き方, AIレビューの評価",
      "judge": "AIの指摘のうち少なくとも1件を、理由を持って不採用にできている",
      "hints": [
        "★全部採用したらこの課題は失敗。AIは文脈を知らないので必ず的外れが混ざる",
        "自分が5件挙げられないうちは、まだコードを読めていない",
        "「読みにくい」は指摘になっていない。どう読みにくいかまで書く"
      ],
      "review": "自己レビューとAIレビューの判断記録です。私の判断が甘い箇所を指摘してください。コードの修正案ではなく、判断の観点について教えてください",
      "h": 2.5,
      "week": 12,
      "tier": "コア",
      "status": "★AIの指摘を丸呑みしない（ルール8）",
      "refs": []
    },
    {
      "id": "t43",
      "track": "JS基礎",
      "code": "C-1",
      "name": "★JSの棚卸し（読み直しではない）",
      "goal": "自分の穴の場所が分かる。読んでいない章があること自体は問題ではなく、どこが分かっていないか把握できていないことが問題。",
      "files": [
        {
          "path": "notes/js-checklist.md",
          "note": "この課題限りの一時ファイル。終わったら weak-points.md に反映して消してよい（ルール10）"
        }
      ],
      "steps": [
        "★本文は読まない。目次だけを開く",
        "飛ばした章（Ch9・Ch10・Ch14・Ch16・Ch17）の節を、目次から書き写す",
        "1節ずつ「説明できる／なんとなく／できない」を付ける",
        "「できない」が付いた節だけを数える",
        "★そのうち、実務で出そうなものを上から5つだけ選ぶ",
        "選んだ5つだけ読む。上限2時間。読み終わったら止める",
        "Ch9（クラス）はTypeScript視点で読む。class / extends / implements"
      ],
      "reqs": [
        "飛ばした章の節がすべてチェック表に並んでいる",
        "3段階の判定が全節に付いている",
        "読むと決めた5つと、読まないと決めた理由が書いてある",
        "読んだ時間が2時間以内に収まっている"
      ],
      "feats": "自己評価, 学習の棚卸し",
      "judge": "「独習JavaScriptのどこが分かっていないか」を聞かれて、具体的に答えられる",
      "hints": [
        "★これは読み直しの課題ではない。穴の場所を知るための課題",
        "「なんとなく」が一番危ない。実務で止まるのはここ",
        "全部読もうとすると、また9月と同じことになる（ルール3）"
      ],
      "review": "JSの自己チェック表です。フロントエンドの実務で優先度が高い節を見落としていないか教えてください",
      "h": 2.0,
      "week": 14,
      "tier": "コア",
      "status": "★読み直しではなく、穴の場所を知る課題",
      "refs": [
        "class"
      ]
    }
  ],
  "days": [
    {
      "date": "2026-09-10",
      "wd": "木",
      "week": 0,
      "target": 0.0,
      "done": true,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-09-11",
      "wd": "金",
      "week": 0,
      "target": 0.0,
      "done": true,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-09-12",
      "wd": "土",
      "week": 0,
      "target": 0.0,
      "done": true,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-09-13",
      "wd": "日",
      "week": 0,
      "target": 0.0,
      "done": true,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-09-14",
      "wd": "月",
      "week": 1,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s3",
          "cat": "TS/React/Next",
          "todo": "サバイバルTypeScriptの続き。「なぜ型が必要か」と基本の型を読み終える",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "穴埋め",
            "q": "型があると ____ の段階でバグが見つかる。型が無いと、見つかるのは ____ のとき。だから型は ____ を早める仕組みだと言える。",
            "judge": "本の言葉ではなく、自分の言葉で3つ埋められた"
          }
        }
      ]
    },
    {
      "date": "2026-09-15",
      "wd": "火",
      "week": 1,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s1",
          "cat": "JS基礎",
          "todo": "【積み残し】課題「配列メソッド総当たり」。商品データ20件をdata.jsとして保存する",
          "h": 2.5,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "filter / map / reduce を1つずつ選び、実行する前に出力を紙かメモに書く。それから node で動かして見比べる。",
            "judge": "3つとも、予測が実際の出力と一致した"
          }
        }
      ]
    },
    {
      "date": "2026-09-16",
      "wd": "水",
      "week": 1,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-09-17",
      "wd": "木",
      "week": 1,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s4",
          "cat": "TS/React/Next",
          "todo": "TS: 型注釈を書いてみる。わざと型エラーを出して読み方に慣れる",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "出した型エラーを1つ選ぶ。エラーメッセージを閉じて、「TypeScriptは何に文句を言っているのか」を1行で書く。書いてからメッセージを開く。",
            "judge": "自分の説明とメッセージの内容が食い違っていなかった"
          }
        }
      ]
    },
    {
      "date": "2026-09-18",
      "wd": "金",
      "week": 1,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s5",
          "cat": "TS/React/Next",
          "todo": "TS: 型推論が効く場所を確認し、注釈を書く場所を決める(課題TS-1)",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "ts_typescript/yosoku.ts に20行作る。各行に「// 予測: 〇〇」と先に書いてから、エディタでホバーして実際の型を見る。違ったら「// ×」と実際の型を足す。",
            "judge": "× が3個以下だった（4個以上なら、その行が今週の穴）"
          }
        }
      ]
    },
    {
      "date": "2026-09-19",
      "wd": "土",
      "week": 1,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s6",
          "cat": "TS/React/Next",
          "todo": "TS: ユニオン型・リテラル型・オプショナルを使う",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "見ないで書く。状態を 'loading' | 'success' | 'error' で表す型と、それを受け取って3つに分岐する関数。",
            "judge": "各分岐の中で、その状態にしか無いプロパティへ安全に触れた"
          }
        },
        {
          "id": "v5s2",
          "cat": "JS基礎",
          "todo": "【積み残し】分割代入とスプレッド構文を書く ★Reactのstate更新で必須",
          "h": 1.0,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "教材を閉じて、見ないで3つ書く。①オブジェクトから2つのプロパティを取り出す ②配列の先頭と残りを分ける ③既存オブジェクトの1つのキーだけ変えた新しいオブジェクトを作る",
            "judge": "3つとも見ずに書けて、エラーなく動いた"
          }
        }
      ]
    },
    {
      "date": "2026-09-20",
      "wd": "日",
      "week": 1,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s7",
          "cat": "TS/React/Next",
          "todo": "TS: interface と type の使い分けを整理する(課題TS-2)",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "見ないでコードで書く。①type にしかできないこと1つ ②interface にしかできないこと1つ。",
            "judge": "両方書けて、片方を逆の書き方にするとエラーになることを確認した"
          }
        }
      ]
    },
    {
      "date": "2026-09-21",
      "wd": "月",
      "week": 2,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s9",
          "cat": "TS/React/Next",
          "todo": "TS: ジェネリクスを使う。型を引数として渡す感覚を掴む",
          "h": 2.0,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "見ないで書く。配列の最初の要素を返す関数を、any を使わずに。string[] を渡した結果をホバーで見る。",
            "judge": "戻り値の型が自動で string になった（any でも unknown でもない）"
          }
        }
      ]
    },
    {
      "date": "2026-09-22",
      "wd": "火",
      "week": 2,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s11",
          "cat": "JS基礎",
          "todo": "Ch13(非同期処理)を読む。イベントループの図をメモに描く",
          "h": 1.5,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "setTimeout(f, 0) と Promise.resolve().then(f) は、どちらが先に動くか。実行する前に予測を書く。",
            "judge": "予測が当たり、なぜそうなるかをイベントループの言葉で言えた"
          }
        }
      ]
    },
    {
      "date": "2026-09-23",
      "wd": "水",
      "week": 2,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-09-24",
      "wd": "木",
      "week": 2,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s10",
          "cat": "TS/React/Next",
          "todo": "TS: 型の絞り込み(typeof / in / タグ付きユニオン)を書く",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "typeof / in / タグ付きユニオン の3パターンで、絞り込んだ直後の型を予測してからホバーで確認する。",
            "judge": "3つとも予測と一致した"
          }
        }
      ]
    },
    {
      "date": "2026-09-25",
      "wd": "金",
      "week": 2,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s13",
          "cat": "TS/React/Next",
          "todo": "TS: 1週目のdata.jsに型を付けてTS化する(課題TS-3)",
          "h": 2.0,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "型を付けて最初に出たエラーを1つ選び、「データ自体が間違っている」のか「型の書き方が間違っている」のかを判定して1行。",
            "judge": "判定どおりに直したら、意図した形になった"
          }
        }
      ]
    },
    {
      "date": "2026-09-26",
      "wd": "土",
      "week": 2,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s12",
          "cat": "JS基礎",
          "todo": "課題「fetchで一覧取得」。通信中/成功/失敗の3状態を作る ★これでJS基礎は終わり",
          "h": 1.5,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "見ないで3状態を書く。失敗は、URLをわざと壊して実際に出す。",
            "judge": "通信中・成功・失敗の3つとも、実際に画面で見た"
          }
        }
      ]
    },
    {
      "date": "2026-09-27",
      "wd": "日",
      "week": 2,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s14",
          "cat": "TS/React/Next",
          "todo": "React環境を作る。★まずクイックスタートを写経する（自作しない）",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "写経したファイルを閉じて、useState を使うカウンターを見ないで書く。",
            "judge": "見ずに、動くところまで書けた"
          }
        }
      ]
    },
    {
      "date": "2026-09-28",
      "wd": "月",
      "week": 3,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s17",
          "cat": "TS/React/Next",
          "todo": "props と state を理解する(課題R-1)",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "props と state の違いを1行ずつ。「変わる／変わらない」ではなく「誰が持っているか」で書く。",
            "judge": "その説明で、今の画面のデータを全部どちらかに分類できた"
          }
        }
      ]
    },
    {
      "date": "2026-09-29",
      "wd": "火",
      "week": 3,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s18",
          "cat": "TS/React/Next",
          "todo": "props に TypeScript の型を付ける",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "props の型をわざと1つ間違えて渡す。エラーが出るのは親側か子側か、予測してから確認する。",
            "judge": "予測どおりの場所に出た"
          }
        }
      ]
    },
    {
      "date": "2026-09-30",
      "wd": "水",
      "week": 3,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s19",
          "cat": "TS/React/Next",
          "todo": "リスト描画と key、条件分岐を書く(1週目のデータを使う)",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "key に index を使うと壊れる場面を1つ挙げ、実際にその操作をして壊して見せる。",
            "judge": "並べ替えか削除で、実際に表示がずれるのを見た"
          }
        }
      ]
    },
    {
      "date": "2026-10-01",
      "wd": "木",
      "week": 3,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-10-02",
      "wd": "金",
      "week": 3,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s20",
          "cat": "TS/React/Next",
          "todo": "フォームとイベント処理を書く",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [
            "form"
          ],
          "check": {
            "type": "予測",
            "q": "preventDefault を消したら何が起きるか予測してから、実際に消す。",
            "judge": "予測が当たり、なぜそうなるかを1行で言えた"
          }
        }
      ]
    },
    {
      "date": "2026-10-03",
      "wd": "土",
      "week": 3,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s21",
          "cat": "TS/React/Next",
          "todo": "絞り込みUIを作る(配列メソッドがそのまま使えることを確認)",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "絞り込みのロジックだけを、Reactを使わない普通の関数として見ないで書き直す。",
            "judge": "同じ結果が出て、その関数を画面から呼ぶ形にできた"
          }
        },
        {
          "id": "v5s22",
          "cat": "TS/React/Next",
          "todo": "Reactでよく使う型を覚える(ReactNode/イベント型/ComponentProps)(課題TS-4)",
          "h": 1.0,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "穴埋め",
            "q": "子要素を受け取る props の型は ____。ボタンのクリックイベントの型は ____。既存要素と同じ props を受け取りたいときは ____ を使う。",
            "judge": "見ないで3つ書けて、実際にコンパイルが通った"
          }
        }
      ]
    },
    {
      "date": "2026-10-04",
      "wd": "日",
      "week": 3,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s23",
          "cat": "TS/React/Next",
          "todo": "useState を掘る。再レンダリングがいつ起きるか確認する",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "setState を「今と同じ値」で呼んだとき、再レンダリングは起きるか。予測してから console.log で数える。",
            "judge": "予測が当たった"
          }
        }
      ]
    },
    {
      "date": "2026-10-05",
      "wd": "月",
      "week": 4,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s26",
          "cat": "TS/React/Next",
          "todo": "useEffect の基本と実行タイミングを確認する",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "依存配列が ①無し ②[] ③[x] の3パターンで、それぞれ何回動くか予測してからconsole.log で数える。",
            "judge": "3つとも予測と一致した"
          }
        }
      ]
    },
    {
      "date": "2026-10-06",
      "wd": "火",
      "week": 4,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s27",
          "cat": "TS/React/Next",
          "todo": "★依存配列を空にして古い値を掴むバグを再現し、直す(課題R-2)",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "直したコードを閉じて、古い値を掴むバグをもう一度自分で再現させる。直す前に「なぜ古い値なのか」を1行書く。",
            "judge": "再現できて、説明がクロージャの話になっていた"
          }
        }
      ]
    },
    {
      "date": "2026-10-07",
      "wd": "水",
      "week": 4,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s28",
          "cat": "TS/React/Next",
          "todo": "useEffect + fetch でデータ取得を書く(Ch13と比べる)",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "Ch13で書いた fetch と、useEffect の中の fetch で何が変わったかを2行。",
            "judge": "「いつ動くか」と「後片付け（中断）」の両方に触れられた"
          }
        }
      ]
    },
    {
      "date": "2026-10-08",
      "wd": "木",
      "week": 4,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s29",
          "cat": "TS/React/Next",
          "todo": "状態をどこに置くか(リフトアップ)を設計する(課題R-3)",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "state を1つ選び「なぜそこに置いたか」を1行。上げすぎたときの弊害と、下げすぎたときの弊害も1つずつ。",
            "judge": "実際に1段上げてみて、書いた弊害が実際に出た"
          }
        }
      ]
    },
    {
      "date": "2026-10-09",
      "wd": "金",
      "week": 4,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s30",
          "cat": "TS/React/Next",
          "todo": "コンポーネントを責務で分割し、理由を書く(課題R-4)",
          "h": 1.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "分けたコンポーネントを1つ選び「何を知らなくてよくなったか」を1行。",
            "judge": "props の数が減ったか、他の画面でも使える形になった"
          }
        }
      ]
    },
    {
      "date": "2026-10-10",
      "wd": "土",
      "week": 4,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s31",
          "cat": "TS/React/Next",
          "todo": "localStorage保存を足して小アプリを完成させる(課題CONV-1)",
          "h": 2.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "保存された JSON を手で壊してからリロードすると何が起きるか、予測してからやる。",
            "judge": "予測が当たり、落ちないように直せた"
          }
        }
      ]
    },
    {
      "date": "2026-10-11",
      "wd": "日",
      "week": 4,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s32",
          "cat": "TS/React/Next",
          "todo": "Next.js公式Learnで環境構築。★ここも写経から入る",
          "h": 1.5,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "写経を閉じて、新しいページを1つ見ないで追加する。",
            "judge": "URLを打って開けた"
          }
        },
        {
          "id": "v5s33",
          "cat": "TS/React/Next",
          "todo": "ルーティング、layout と page を書く(課題N-1)",
          "h": 1.5,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "穴埋め",
            "q": "____ という名前のファイルがページになる。____ は全ページ共通の枠になる。フォルダ名を ____ にすると動的ルートになる。",
            "judge": "3つとも見ないで埋められ、実際にその通りに動いた"
          }
        }
      ]
    },
    {
      "date": "2026-10-12",
      "wd": "月",
      "week": 5,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s36",
          "cat": "TS/React/Next",
          "todo": "Server ComponentでuseStateを使いエラーを出す。違いを体感する",
          "h": 1.0,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "出たエラーメッセージを閉じて、なぜ動かないのかを1行で書く。",
            "judge": "「サーバー側で実行されるから」に相当することが言えた"
          }
        },
        {
          "id": "v5s37",
          "cat": "TS/React/Next",
          "todo": "★4週目のReactアプリをNext.jsへコンバートする計画を書く",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "移す順番を決めた理由を1行。なぜその順番か。",
            "judge": "「依存が少ない方から」など、順番そのものに理由があった"
          }
        }
      ]
    },
    {
      "date": "2026-10-13",
      "wd": "火",
      "week": 5,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s38",
          "cat": "TS/React/Next",
          "todo": "コンポーネントを App Router の構成へ移す(課題CONV-2)",
          "h": 2.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "移したとき最初に壊れるのはどこか、予測してから動かす。",
            "judge": "予測した箇所が実際に壊れた。外れたなら、外れた理由が分かった"
          }
        }
      ]
    },
    {
      "date": "2026-10-14",
      "wd": "水",
      "week": 5,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s39",
          "cat": "TS/React/Next",
          "todo": "'use client' の境界を決めて分ける(課題N-2)",
          "h": 2.0,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "'use client' を1つ消したらどうなるか予測してから消す。",
            "judge": "予測が当たり、なぜかを1行で言えた"
          }
        }
      ]
    },
    {
      "date": "2026-10-15",
      "wd": "木",
      "week": 5,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s40",
          "cat": "TS/React/Next",
          "todo": "サーバー側でのデータ取得に置き換える(課題N-3)",
          "h": 1.0,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "この fetch はブラウザのNetworkタブに出るか。予測してから開いて確認する。",
            "judge": "予測が当たり、理由を言えた"
          }
        }
      ]
    },
    {
      "date": "2026-10-16",
      "wd": "金",
      "week": 5,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s41",
          "cat": "TS/React/Next",
          "todo": "★コンバートで詰まった点と判断理由を convert-log.md に記録する",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "記録した判断を1つ選び「別の選択肢は何で、なぜ選ばなかったか」を書き足す。",
            "judge": "選ばなかった案を1つ以上書けた"
          }
        },
        {
          "id": "v5s42",
          "cat": "TS/React/Next",
          "todo": "Vercelにデプロイして公開URLを用意する(課題CONV-3)",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "手順を見ないで、デプロイを最初からもう一度やる。",
            "judge": "詰まらずに公開できた"
          }
        }
      ]
    },
    {
      "date": "2026-10-17",
      "wd": "土",
      "week": 5,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s43",
          "cat": "TS/React/Next",
          "todo": "READMEを書く(何を作ったか/技術選定/学んだこと)",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "READMEを、何も知らない人になったつもりで読み返す。説明なしでは伝わらない箇所を1つ見つけて直す。",
            "judge": "直した箇所を挙げられた"
          }
        },
        {
          "id": "v5s44",
          "cat": "TS/React/Next",
          "todo": "React版とNext.js版の違いを言語化する",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "穴埋め",
            "q": "Reactだけのときは ____ で動いていたものが、Next.jsでは ____ でも動くようになる。そのぶん ____ が使えない場所ができる。",
            "judge": "見ないで3つ埋められた"
          }
        }
      ]
    },
    {
      "date": "2026-10-18",
      "wd": "日",
      "week": 5,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s45",
          "cat": "TS/React/Next",
          "todo": "想定質問への回答を準備する(Server/Client、型設計、AI活用)",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "Q&Aを閉じて、1問を声に出して答える。",
            "judge": "詰まらずに30秒話せた"
          }
        }
      ]
    },
    {
      "date": "2026-10-19",
      "wd": "月",
      "week": 6,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s49",
          "cat": "TS/React/Next",
          "todo": "★配布版は開かない。作りたいものを箇条書きで書き出す(課題A-1)",
          "h": 2.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "「作らない」と決めたものを1つ選び、無くても困らない理由を1行。",
            "judge": "「使っていないから」より一段具体的な理由になった"
          }
        }
      ]
    },
    {
      "date": "2026-10-20",
      "wd": "火",
      "week": 6,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-10-21",
      "wd": "水",
      "week": 6,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s50",
          "cat": "TS/React/Next",
          "todo": "画面とデータを設計する。★型を先に決めて types.ts に書く",
          "h": 2.5,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "サンプルデータのプロパティ名をわざと1つ間違える。どこに赤線が出るか予測してから見る。",
            "judge": "予測どおりの場所に出た"
          }
        }
      ]
    },
    {
      "date": "2026-10-22",
      "wd": "木",
      "week": 6,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s51",
          "cat": "TS/React/Next",
          "todo": "create-next-app でプロジェクトを作る(TypeScript / App Router)",
          "h": 1.5,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "穴埋め",
            "q": "生成されたファイルのうち ____ がページ、____ が全ページ共通、____ が設定ファイル。",
            "judge": "見ないで3つ言えて、実際のファイルで確認が取れた"
          }
        }
      ]
    },
    {
      "date": "2026-10-23",
      "wd": "金",
      "week": 6,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s52",
          "cat": "TS/React/Next",
          "todo": "ディレクトリ構成を自分で決めて、理由を design-log.md に書く",
          "h": 1.5,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "新しい機能を1つ足すとしたら、どのフォルダに何を置くか。迷わず言えるか試す。",
            "judge": "迷わず言えた（迷ったら、それは構成の方を直すサイン）"
          }
        }
      ]
    },
    {
      "date": "2026-10-24",
      "wd": "土",
      "week": 6,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s53",
          "cat": "TS/React/Next",
          "todo": "GitHubにリポジトリを作り、最初のコミットとpushをする",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "再現",
            "q": ".gitignore に何が入っているか、見ないで3つ挙げてから開いて確認する。",
            "judge": "3つとも入っていた"
          }
        }
      ]
    },
    {
      "date": "2026-10-25",
      "wd": "日",
      "week": 6,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s54",
          "cat": "TS/React/Next",
          "todo": "一覧表示を作る。ダミーデータを型付きで描画する",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "型に無いプロパティを画面で使ったらどうなるか予測してから書く。",
            "judge": "予測が当たった"
          }
        }
      ]
    },
    {
      "date": "2026-10-26",
      "wd": "月",
      "week": 7,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s56",
          "cat": "TS/React/Next",
          "todo": "絞り込みUIを作る。状態をどこに持つかは自分で決める",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "絞り込みの状態をどこに持ったか、その理由を1行。",
            "judge": "別の場所に置いた場合の弊害を1つ言えた"
          }
        }
      ]
    },
    {
      "date": "2026-10-27",
      "wd": "火",
      "week": 7,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-10-28",
      "wd": "水",
      "week": 7,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s57",
          "cat": "TS/React/Next",
          "todo": "★キーワード検索。部分一致・大文字小文字を無視する(課題A-2)",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [
            "search"
          ],
          "check": {
            "type": "説明",
            "q": "正規表現を使ったか、使わなかったか。その判断の理由を1行。",
            "judge": "「includes で足りた／足りなかった」の根拠が具体的だった"
          }
        }
      ]
    },
    {
      "date": "2026-10-29",
      "wd": "木",
      "week": 7,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-10-30",
      "wd": "金",
      "week": 7,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s58",
          "cat": "TS/React/Next",
          "todo": "★日付での絞り込みと並べ替えを作る(課題A-3)",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [
            "date"
          ],
          "check": {
            "type": "予測",
            "q": "new Date('2026-10-19') と new Date('2026/10/19') は同じ時刻になるか。予測してから両方 console.log する。",
            "judge": "予測が当たった。違ったなら、なぜ違うのかを言えた"
          }
        }
      ]
    },
    {
      "date": "2026-10-31",
      "wd": "土",
      "week": 7,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s59",
          "cat": "TS/React/Next",
          "todo": "絞り込み条件をURLのクエリに持たせる(リロードしても残る)",
          "h": 2.0,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "絞り込んだ状態でリロードしたら、何が残って何が消えるか予測してからやる。",
            "judge": "予測どおりになるまで直せた"
          }
        }
      ]
    },
    {
      "date": "2026-11-01",
      "wd": "日",
      "week": 7,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s60",
          "cat": "TS/React/Next",
          "todo": "ここまでをVercelにデプロイして一度公開する",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "手元では動くのに公開後に壊れる箇所を1つ探す。",
            "judge": "見つけて直したか、無いことを確認できた"
          }
        }
      ]
    },
    {
      "date": "2026-11-02",
      "wd": "月",
      "week": 8,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s62",
          "cat": "TS/React/Next",
          "todo": "★フォームで記録を追加する。送信でページが再読み込みされる問題を直す(課題A-4)",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [
            "form"
          ],
          "check": {
            "type": "説明",
            "q": "preventDefault を書く前に一度送信した。そのとき何が起きたかを1行。",
            "judge": "「ページが再読み込みされた」に相当することが書け、なぜかも言えた"
          }
        }
      ]
    },
    {
      "date": "2026-11-03",
      "wd": "火",
      "week": 8,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-04",
      "wd": "水",
      "week": 8,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s63",
          "cat": "TS/React/Next",
          "todo": "★モーダルを作る。外側をクリックしたら閉じるようにする(課題A-5)",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [
            "modal"
          ],
          "check": {
            "type": "説明",
            "q": "中身をクリックしても閉じてしまったのはなぜか。stopPropagation を書く前に、自分の言葉で1行。",
            "judge": "クリックが親まで伝わることに触れられた"
          }
        }
      ]
    },
    {
      "date": "2026-11-05",
      "wd": "木",
      "week": 8,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-06",
      "wd": "金",
      "week": 8,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s64",
          "cat": "TS/React/Next",
          "todo": "Escキーでも閉じられるようにする。後片付け(クリーンアップ)まで書く",
          "h": 1.5,
          "tier": "コア",
          "track": "React",
          "refs": [
            "keyboard"
          ],
          "check": {
            "type": "予測",
            "q": "後片付けを書かずに5回開け閉めしたら、リスナーは何個になるか。予測してから数える。",
            "judge": "予測が当たり、直したあと1個になった"
          }
        }
      ]
    },
    {
      "date": "2026-11-07",
      "wd": "土",
      "week": 8,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s65",
          "cat": "TS/React/Next",
          "todo": "localStorageに保存して復元する。壊れたデータが入っていても落ちないようにする",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "保存データを手で壊してリロードしたらどうなるか予測してからやる。",
            "judge": "予測が当たり、落ちないように直せた"
          }
        }
      ]
    },
    {
      "date": "2026-11-08",
      "wd": "日",
      "week": 8,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s66",
          "cat": "TS/React/Next",
          "todo": "Server / Client の境界を引き直す。'use client' が必要な場所を減らす",
          "h": 2.0,
          "tier": "コア",
          "track": "Next.js",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "'use client' を減らせた箇所を1つ挙げ、なぜ不要だったかを1行。",
            "judge": "「状態もイベントも使っていなかった」に相当することが言えた"
          }
        }
      ]
    },
    {
      "date": "2026-11-09",
      "wd": "月",
      "week": 9,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s68",
          "cat": "TS/React/Next",
          "todo": "集計を作る。週別の合計と達成率を出す",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "データが0件のとき達成率の表示はどうなるか、予測してから0件にする。",
            "judge": "予測が当たった（NaN や Infinity が出たなら直した）"
          }
        }
      ]
    },
    {
      "date": "2026-11-10",
      "wd": "火",
      "week": 9,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-11",
      "wd": "水",
      "week": 9,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s69",
          "cat": "TS/React/Next",
          "todo": "進捗バーかグラフで見えるようにする",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "100%を超えたときどう表示されるか。実際に超えさせて確認し、1行で書く。",
            "judge": "実際に超えさせて目で見た"
          }
        }
      ]
    },
    {
      "date": "2026-11-12",
      "wd": "木",
      "week": 9,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s70",
          "cat": "TS/React/Next",
          "todo": "READMEと設計判断メモを書く(何を作ったか / なぜそう作ったか)",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "初めて見る人が最初に詰まるのはどこか予測して、そこに1行足す。",
            "judge": "足した箇所を挙げられた"
          }
        }
      ]
    },
    {
      "date": "2026-11-13",
      "wd": "金",
      "week": 9,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-14",
      "wd": "土",
      "week": 9,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s71",
          "cat": "TS/React/Next",
          "todo": "★配布版のトラッカーを初めて開き、自分の設計と読み比べる(課題A-6)",
          "h": 2.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "★配布版を開く前に「相手はここが自分と違うはず」を1つ書いてから開く。",
            "judge": "開く前に予測を書けた（当たり外れは問わない）"
          }
        }
      ]
    },
    {
      "date": "2026-11-15",
      "wd": "日",
      "week": 9,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s72",
          "cat": "TS/React/Next",
          "todo": "差分を言語化して design-log.md に書く。どちらが良いかも自分で判断する",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "取り込まないと決めた点を1つ選び、その理由を1行。",
            "judge": "「好みだから」以外の理由になった"
          }
        }
      ]
    },
    {
      "date": "2026-11-16",
      "wd": "月",
      "week": 10,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s74",
          "cat": "TS/React/Next",
          "todo": "Vitest を入れて、最初の1本を書く(課題B-1)",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "実装をわざと1箇所壊す。何本のテストが落ちるか予測してから実行する。",
            "judge": "予測が当たった"
          }
        }
      ]
    },
    {
      "date": "2026-11-17",
      "wd": "火",
      "week": 10,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-18",
      "wd": "水",
      "week": 10,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s75",
          "cat": "TS/React/Next",
          "todo": "絞り込みと集計のロジックを関数に切り出し、テストを書く",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "切り出す前と後で、テストが書きやすくなった理由を1行。",
            "judge": "「画面を描かなくてよくなった」に相当することが言えた"
          }
        }
      ]
    },
    {
      "date": "2026-11-19",
      "wd": "木",
      "week": 10,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-20",
      "wd": "金",
      "week": 10,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s76",
          "cat": "TS/React/Next",
          "todo": "★落ちるテストを先に書いてから直す(レッドから始める)",
          "h": 2.0,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "新しい関数を1つ、テストを先に書いてから実装する。",
            "judge": "赤 → 緑 の順で進められた（先に実装していない）"
          }
        }
      ]
    },
    {
      "date": "2026-11-21",
      "wd": "土",
      "week": 10,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s77",
          "cat": "TS/React/Next",
          "todo": "テストの名前の付け方と粒度を決めて、test-policy.md に書く",
          "h": 1.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "自分のテスト名を1つ選び、実装を見ずに「何を確かめているか」が分かるか試す。",
            "judge": "分かった。分からなければ名前を直した"
          }
        }
      ]
    },
    {
      "date": "2026-11-22",
      "wd": "日",
      "week": 10,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s78",
          "cat": "TS/React/Next",
          "todo": "npm scripts を整える(test / test:watch / build)",
          "h": 1.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [
            "npm"
          ],
          "check": {
            "type": "穴埋め",
            "q": "____ は本番でも必要なもの、____ は開発中だけ必要なもの。^1.2.3 は ____ までの更新を許す。",
            "judge": "見ないで3つ言えて、package.json で確認が取れた"
          }
        }
      ]
    },
    {
      "date": "2026-11-23",
      "wd": "月",
      "week": 11,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s80",
          "cat": "TS/React/Next",
          "todo": "React Testing Library を入れて、描画のテストを書く",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "要素をどうやって取ったか。クラス名や id で取っていないか確認して1行。",
            "judge": "役割か文言で取れていた"
          }
        }
      ]
    },
    {
      "date": "2026-11-24",
      "wd": "火",
      "week": 11,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-25",
      "wd": "水",
      "week": 11,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s81",
          "cat": "TS/React/Next",
          "todo": "ユーザー操作(入力・クリック)のテストを書く(課題B-2)",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "必須項目を空にして送信したら、テストは通るか落ちるか。予測してから実行。",
            "judge": "予測が当たった"
          }
        }
      ]
    },
    {
      "date": "2026-11-26",
      "wd": "木",
      "week": 11,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-11-27",
      "wd": "金",
      "week": 11,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s82",
          "cat": "TS/React/Next",
          "todo": "データ取得など非同期のテストを書く",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "getBy だと失敗して findBy なら通る理由を1行。",
            "judge": "「その時点ではまだ描画されていない」に相当することが言えた"
          }
        }
      ]
    },
    {
      "date": "2026-11-28",
      "wd": "土",
      "week": 11,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s83",
          "cat": "TS/React/Next",
          "todo": "★テストが書きにくい箇所を見つけて、設計の方を直す",
          "h": 2.0,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "テストが書きにくかった箇所を1つ、何が原因だったかを1行。",
            "judge": "実装側を直して、テストが書けるようになった"
          }
        }
      ]
    },
    {
      "date": "2026-11-29",
      "wd": "日",
      "week": 11,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s84",
          "cat": "TS/React/Next",
          "todo": "何をテストしないかを決めて、理由を test-policy.md に書く",
          "h": 1.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "テストしないと決めたものを1つ、その理由を1行。",
            "judge": "「面倒だから」以外の理由になった"
          }
        }
      ]
    },
    {
      "date": "2026-11-30",
      "wd": "月",
      "week": 12,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s86",
          "cat": "TS/React/Next",
          "todo": "GitHub Actions でテストを自動実行する(課題B-3)",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "手元で通るのにCIで落ちる原因を1つ予測して、わざとその状態を起こす。",
            "judge": "実際に赤いCIを1回出せた"
          }
        }
      ]
    },
    {
      "date": "2026-12-01",
      "wd": "火",
      "week": 12,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-02",
      "wd": "水",
      "week": 12,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s87",
          "cat": "TS/React/Next",
          "todo": "ブランチを切ってPRを出す運用にする。mainに直接コミットしない",
          "h": 2.0,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "ブランチを切る → push → PRを出す、を見ないで1周する。",
            "judge": "詰まらずにできた"
          }
        }
      ]
    },
    {
      "date": "2026-12-03",
      "wd": "木",
      "week": 12,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s88",
          "cat": "TS/React/Next",
          "todo": "PRの説明文のテンプレートを作る(何を・なぜ・どう確認したか)",
          "h": 1.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "自分のPRを読み返し、レビュアーが最初に聞くことを1つ予測して先に書いておく。",
            "judge": "予測した質問を1つ、説明文に先回りして書き足せた"
          }
        }
      ]
    },
    {
      "date": "2026-12-04",
      "wd": "金",
      "week": 12,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-05",
      "wd": "土",
      "week": 12,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s89",
          "cat": "TS/React/Next",
          "todo": "★自分のPRを自分でレビューする。指摘を5件書き出す(課題B-4)",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "自分の指摘5件のうち、直さないと決めたものの理由を1行。",
            "judge": "理由が具体的だった（「時間が無い」以外）"
          }
        }
      ]
    },
    {
      "date": "2026-12-06",
      "wd": "日",
      "week": 12,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s90",
          "cat": "TS/React/Next",
          "todo": "AIにもレビューさせ、採用/不採用を1件ずつ理由付きで決める(ルール8)",
          "h": 2.0,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "不採用にしたAIの指摘を1つ選び、なぜ不採用かを1行。",
            "judge": "★不採用が1件以上あり、理由が自分のコードの文脈に基づいていた"
          }
        }
      ]
    },
    {
      "date": "2026-12-07",
      "wd": "月",
      "week": 13,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s92",
          "cat": "TS/React/Next",
          "todo": "テストが通る状態のままリファクタする。緑を保ったまま直す",
          "h": 2.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "リファクタ中に何回テストが落ちるか予測してから始める。",
            "judge": "落ちた回数を数えられた（0回でなくてよい）"
          }
        }
      ]
    },
    {
      "date": "2026-12-08",
      "wd": "火",
      "week": 13,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-09",
      "wd": "水",
      "week": 13,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s93",
          "cat": "TS/React/Next",
          "todo": "型を締める。any を潰して、なぜ必要だったかを1行書く",
          "h": 2.0,
          "tier": "コア",
          "track": "TypeScript",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "残した any を1つ選び、なぜ残したかを1行。",
            "judge": "「消し方が分からない」ではなく、残す理由があった"
          }
        }
      ]
    },
    {
      "date": "2026-12-10",
      "wd": "木",
      "week": 13,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-11",
      "wd": "金",
      "week": 13,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s94",
          "cat": "TS/React/Next",
          "todo": "エラー処理とローディング表示を見直す。失敗したときに何が出るか確認する",
          "h": 2.0,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "通信を切ってリロードしたら画面に何が出るか、予測してから切る。",
            "judge": "予測が当たった（真っ白になったなら直した）"
          }
        }
      ]
    },
    {
      "date": "2026-12-12",
      "wd": "土",
      "week": 13,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s95",
          "cat": "TS/React/Next",
          "todo": "テスト方針を1枚にまとめ直す(人に説明できる形に)",
          "h": 1.5,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "方針の文書を閉じて、人に説明するつもりで30秒話す。",
            "judge": "詰まらずに話せた"
          }
        }
      ]
    },
    {
      "date": "2026-12-13",
      "wd": "日",
      "week": 13,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s96",
          "cat": "振り返り",
          "todo": "フェーズBの総括とスキルシートの更新",
          "h": 2.0,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "11/16の自分と今の自分で、できるようになったことを1つ。",
            "judge": "具体的な作業で言えた（「テストが分かった」のような言い方は×）"
          }
        }
      ]
    },
    {
      "date": "2026-12-14",
      "wd": "月",
      "week": 14,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s97",
          "cat": "JS基礎",
          "todo": "★JSの棚卸し。飛ばした章の目次に「説明できる/できない」を付ける(課題C-1)",
          "h": 2.0,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "「なんとなく」を付けた節を1つ選び、なぜ○でないのかを1行。",
            "judge": "説明できない点を具体的に挙げられた"
          }
        }
      ]
    },
    {
      "date": "2026-12-15",
      "wd": "火",
      "week": 14,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-16",
      "wd": "水",
      "week": 14,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s98",
          "cat": "JS基礎",
          "todo": "説明できなかった節だけを読む。★上限2時間。全部読もうとしない",
          "h": 2.0,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [],
          "check": {
            "type": "予測",
            "q": "読む前に「たぶんこうだろう」を1行書いてから読む。",
            "judge": "読んだあと、自分の予測との差分を書けた"
          }
        }
      ]
    },
    {
      "date": "2026-12-17",
      "wd": "木",
      "week": 14,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s99",
          "cat": "JS基礎",
          "todo": "Ch9(クラス)をTypeScript視点で読む。class / extends / implements",
          "h": 2.0,
          "tier": "コア",
          "track": "JS基礎",
          "refs": [
            "class"
          ],
          "check": {
            "type": "穴埋め",
            "q": "class は ____ の設計図。extends は ____ を引き継ぐ。TypeScriptの implements は ____ を約束する。",
            "judge": "見ないで3つ埋められた"
          }
        }
      ]
    },
    {
      "date": "2026-12-18",
      "wd": "金",
      "week": 14,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-19",
      "wd": "土",
      "week": 14,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s100",
          "cat": "振り返り",
          "todo": "weak-points.md を整理する。二度出たものだけ詳しい形に書き直す",
          "h": 1.5,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "二度出た項目を1つ選び、一度目と二度目で何が違ったかを1行。",
            "judge": "違いを言えた（同じなら、まだ直っていないサイン）"
          }
        }
      ]
    },
    {
      "date": "2026-12-20",
      "wd": "日",
      "week": 14,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s101",
          "cat": "振り返り",
          "todo": "想定質問への回答を作り直す(第1期のQ&Aを今の実力で書き直す)",
          "h": 2.0,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "1問を見ないで、声に出して答える。",
            "judge": "第1期のときより具体例が増えていた"
          }
        }
      ]
    },
    {
      "date": "2026-12-21",
      "wd": "月",
      "week": 15,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s102",
          "cat": "TS/React/Next",
          "todo": "作った2本(コンバート版・自作版)を説明する資料を作る",
          "h": 2.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "資料を閉じて、2本の違いを60秒で話す。",
            "judge": "詰まらずに話せた"
          }
        }
      ]
    },
    {
      "date": "2026-12-22",
      "wd": "火",
      "week": 15,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-23",
      "wd": "水",
      "week": 15,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s103",
          "cat": "TS/React/Next",
          "todo": "技術選定の理由を書く。なぜNext.jsか、なぜその構成か",
          "h": 2.0,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "Next.jsを選ばなかった場合に何が困ったかを1行。",
            "judge": "具体的に言えた"
          }
        }
      ]
    },
    {
      "date": "2026-12-24",
      "wd": "木",
      "week": 15,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2026-12-25",
      "wd": "金",
      "week": 15,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s104",
          "cat": "TS/React/Next",
          "todo": "自分のコードを読み返し、今なら直す箇所を直す",
          "h": 2.0,
          "tier": "コア",
          "track": "テスト",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "直した箇所を1つ選び、当時なぜそう書いたのかを1行。",
            "judge": "当時の判断を思い出せた"
          }
        }
      ]
    },
    {
      "date": "2026-12-26",
      "wd": "土",
      "week": 15,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s105",
          "cat": "振り返り",
          "todo": "スキルシートを更新する(キャリア/スキル/スキルセット)",
          "h": 2.0,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "書いた項目を1つ選び「それは何をしたことですか」と聞かれた前提で答える。",
            "judge": "30秒で答えられた"
          }
        }
      ]
    },
    {
      "date": "2026-12-27",
      "wd": "日",
      "week": 15,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s106",
          "cat": "振り返り",
          "todo": "年内の総括を1枚に書く",
          "h": 1.5,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "9/14の自分にひと言アドバイスするなら何か、1行。",
            "judge": "具体的な行動で書けた（「頑張れ」は×）"
          }
        }
      ]
    },
    {
      "date": "2026-12-28",
      "wd": "月",
      "week": 16,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s107",
          "cat": "振り返り",
          "todo": "12/28に1件だけ。今年やったことを1枚にまとめる。★あとは休む",
          "h": 2.0,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "今年一番時間をかけたことと、一番効いたことは一致しているか。",
            "judge": "一致／不一致を判定できた"
          }
        }
      ]
    },
    {
      "date": "2026-12-29",
      "wd": "火",
      "week": 16,
      "target": 0.0,
      "done": false,
      "rest": true,
      "plan": []
    },
    {
      "date": "2026-12-30",
      "wd": "水",
      "week": 16,
      "target": 0.0,
      "done": false,
      "rest": true,
      "plan": []
    },
    {
      "date": "2026-12-31",
      "wd": "木",
      "week": 16,
      "target": 0.0,
      "done": false,
      "rest": true,
      "plan": []
    },
    {
      "date": "2027-01-01",
      "wd": "金",
      "week": 16,
      "target": 0.0,
      "done": false,
      "rest": true,
      "plan": []
    },
    {
      "date": "2027-01-02",
      "wd": "土",
      "week": 16,
      "target": 0.0,
      "done": false,
      "rest": true,
      "plan": []
    },
    {
      "date": "2027-01-03",
      "wd": "日",
      "week": 16,
      "target": 0.0,
      "done": false,
      "rest": true,
      "plan": []
    },
    {
      "date": "2027-01-04",
      "wd": "月",
      "week": 17,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s108",
          "cat": "TS/React/Next",
          "todo": "★案件が決まっていれば、その技術の公式チュートリアルを写経する(ルール13)",
          "h": 2.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "再現",
            "q": "写経を閉じて、同じものを見ないで書き始める。どこで止まるか記録する。",
            "judge": "止まった箇所を記録できた"
          }
        }
      ]
    },
    {
      "date": "2027-01-05",
      "wd": "火",
      "week": 17,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2027-01-06",
      "wd": "水",
      "week": 17,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s109",
          "cat": "TS/React/Next",
          "todo": "★案件の技術で小さく1つ作る。未定ならこの枠も下の3本目に回す",
          "h": 2.5,
          "tier": "コア",
          "track": "コンバート",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "作ったものについて、公式のどのページを見たか言えるか。",
            "judge": "言えた（AIに聞いただけなら×）"
          }
        }
      ]
    },
    {
      "date": "2027-01-07",
      "wd": "木",
      "week": 17,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": []
    },
    {
      "date": "2027-01-08",
      "wd": "金",
      "week": 17,
      "target": 2.0,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s110",
          "cat": "TS/React/Next",
          "todo": "未定なら：小さいアプリをもう1本、要件定義から作り始める",
          "h": 2.5,
          "tier": "コア",
          "track": "React",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "要件を書く前に「作らないもの」を先に3つ挙げられたか。",
            "judge": "3つ挙げられた"
          }
        }
      ]
    },
    {
      "date": "2027-01-09",
      "wd": "土",
      "week": 17,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s111",
          "cat": "振り返り",
          "todo": "参画初日・初週の準備リストを見直す",
          "h": 1.5,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "初日に一番不安なことを1つ、その対策を1行。",
            "judge": "対策が具体的だった"
          }
        }
      ]
    },
    {
      "date": "2027-01-10",
      "wd": "日",
      "week": 17,
      "target": 2.5,
      "done": false,
      "rest": false,
      "plan": [
        {
          "id": "v5s112",
          "cat": "振り返り",
          "todo": "次の3ヶ月の学習の仕組みを組み直す",
          "h": 1.5,
          "tier": "コア",
          "track": "振り返り",
          "refs": [],
          "check": {
            "type": "説明",
            "q": "この3ヶ月で一番効いた仕組みを1つ。次も残すか。",
            "judge": "残す／やめるを理由付きで決められた"
          }
        }
      ]
    }
  ],
  "rules": [
    {
      "no": "1",
      "title": "★「今日やること」にはコアしか出ない",
      "body": "日の割り当てはコアだけ。余力（CLAUDE.md・Cursor・振り返りの言語化）は日付を持たず「今週の余力枠」として週に紐づくだけ。コアが終わった日に手順タブから拾う。迷わず上から順にやれば最優先が片付く。"
    },
    {
      "no": "2",
      "title": "★バッファは最初から入っている",
      "body": "目標に対してコアの割り当ては7割強。差がバッファ。1日の目標も平日2.0hに置いてあるので、2.5h取れた日は貯金になる。1日できなかったくらいで組み直さなくてよい。"
    },
    {
      "no": "3",
      "title": "★読み直しに時間を使わない。手を動かす方に回す",
      "body": "9/10〜9/13は6.0h使ったのに、終えた手順は1件だった。Ch11の読み込みに寄ったため。章末問題がボロボロでも、解き直しより課題を書き切る方が定着する。詰まった箇所はそこで必ず出てくるので、そのとき該当節に戻ればよい。"
    },
    {
      "no": "4",
      "title": "★1週目でTypeScriptに入る。今度こそ",
      "body": "8/30〜9/13の21.8hのうち、TypeScriptは1.5hだけ。2回続けて同じ形になっている。1週目の割当11hのうち7.5hがTypeScript。ここを落とすと10/18に間に合わない。"
    },
    {
      "no": "5",
      "title": "課題は必ず自分で書いてからAIに見せる",
      "body": "最初からAIに書かせない。自分で書いて詰まって、書き終わってからレビューさせる。AI駆動での開発は求人でよく求められるが、AIの出力を評価できないと駆動にならない。"
    },
    {
      "no": "5b",
      "title": "★React・Next.jsは「写経 → 改造 → 自作」の3段で進める",
      "body": "JS基礎は本を読めばゼロから書けるが、ReactとNext.jsは書き方の型を知らないと1行も書けない。①写経: 公式チュートリアルを見ながらそのまま書く（AIは見ない）。②改造: 写経したものを1箇所だけ変える。壊して直す。ここで理解が入る。③自作: 何も見ずに書く。ルール5が効くのはここから。第1期が①②、フェーズA（6〜9週目）が③にあたる。"
    },
    {
      "no": "6",
      "title": "詰まったら30分で切り上げてAIに聞く。ただし聞き方を変える",
      "body": "「直して」ではなく「何を調べればいいか教えて。コードは書かないで」。答えを写さずに済み、次から自分で調べられるようになる。"
    },
    {
      "no": "7",
      "title": "★5週目のコンバートが第1期の本命",
      "body": "「アーキテクチャコンバートの経験」は求人でよく求められる。4週目までに小さくてもいいので動くReactアプリを完成させ、5週目にNext.jsへ移す。何をどう移したかより、なぜそう判断したかを convert-log.md に書き残す。"
    },
    {
      "no": "8",
      "title": "AIの修正提案は丸呑みしない",
      "body": "指摘は1つずつ理解して自分の手で直す。採用しない判断をした場合は理由を1行書く。12週目の「自分のPRを自分でレビューする」は、この力を測るための課題。"
    },
    {
      "no": "9",
      "title": "商品データ20件は最後まで使い回す",
      "body": "Ch11(作る)→TS-3(型を付ける)→R-1(Reactで描画)→CONV-2(Next.jsへ移す) と一貫して使う。作り直さない。"
    },
    {
      "no": "10",
      "title": "メモはアプリに書く。Obsidianは週末だけ",
      "body": "平日はサマリーの「今日の記録」に1〜3行だけ書く（詰まった／分かった／明日）。週末に「この範囲をMarkdownでコピー」を押して notes/learning-log.md に貼り、そこで整える。常設のノートは learning-log.md / weak-points.md / setup.md / convert-log.md / qa.md の5つだけ。"
    },
    {
      "no": "11",
      "title": "日次ログは毎日つける。書くことが無い日は時間だけでよい",
      "body": "0hの日も『0』と入れる。空欄だと、やらなかったのか記録漏れなのか区別できない。"
    },
    {
      "no": "12",
      "title": "★締め切りは4週ごとに置く。10/18は動かさない",
      "body": "第1期 10/18 → フェーズA 11/15 → フェーズB 12/13 → フェーズC 1/10。期間が延びたからといって10/18を後ろに倒さない。遠い締め切りは必ず緩む。全部終わらなくてよい。各期のコアが終わっていれば成功。"
    },
    {
      "no": "13",
      "title": "★案件が決まったら、残りは全部そこへ寄せる",
      "body": "Shopifyと分かればShopifyに、kintoneならkintoneに全振りする。案件が未定のうちは、何であっても腐らないもの（自作の経験・テスト・説明できること）を積む。"
    },
    {
      "no": "13b",
      "title": "★手順を終えたら、その場で理解度チェックに答える",
      "body": "「やった」と「分かった」は別物。1週目はTypeScriptに6.0h入ったのに「理解できているか不明」になった。成果物が『読了メモ』『〜できる』で判定できなかったため。手順ごとに1問、5〜10分のチェックがある。○=見ないでできた／△=調べて分かった／×=分からなかった。★×が出た日は失敗ではない。穴が見つかった日なので、その方が価値がある。×のときだけ答えを書き残し、週末に weak-points.md へ移す。"
    },
    {
      "no": "13c",
      "title": "★チェックは「予測してから実行」を軸にする",
      "body": "コードなら、実行する前に結果を口に出す。当たれば理解している。外れたら、外れた理由がそのまま穴になる。読み返すより速く、しかも自分で判定できる。console.log を足す前に予測する癖をつけると、実行1回ごとに確認が入る。"
    },
    {
      "no": "14",
      "title": "★飛ばしたJSの章は「埋める枠」を作らない。機能で回収する",
      "body": "穴埋めに独立した時間枠を置くと、また読む方に時間が溶ける（ルール3）。代わりに、その章が必要になる機能をフェーズAの要件に仕込んである。モーダル→Ch15イベント伝播、日付絞り込み→Ch10 Date、検索→Ch10 正規表現。必要になってから該当節だけ読む。教材タブの「JSの復習方針」にいつでも出してある。"
    }
  ],
  "references": [
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版（CodeMafia 外村将大・翔泳社）",
      "cost": "購入済み",
      "url": "",
      "week": "1〜3週目",
      "scope": "Ch11-13",
      "note": "Ch1-8は完了済み。残るはCh11-13。Ch14/16は今回外した"
    },
    {
      "track": "JS基礎",
      "name": "MDN Web Docs（日本語）",
      "cost": "無料",
      "url": "https://developer.mozilla.org/ja/docs/Web/JavaScript",
      "week": "随時",
      "scope": "リファレンスとして必要なときだけ",
      "note": "配列メソッドの仕様確認など。通読はしない"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/",
      "week": "1週目",
      "scope": "「TypeScriptのあらまし」「なぜTypeScriptを使うのか」",
      "note": "まず「なぜ型が必要か」を掴む。手を動かすのは3週目から"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/values-types-variables",
      "week": "1〜2週目",
      "scope": "「値・型・変数」章：基本の型／型注釈／型推論／ユニオン型／リテラル型",
      "note": "★TS-1の教材。1週目に読み始め、2週目に手を動かす"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/object-oriented/interface",
      "week": "2週目",
      "scope": "interface と type エイリアスの違い",
      "note": "★TS-2の教材。使い分けの基準を自分の言葉でメモに残す"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/generics",
      "week": "2週目",
      "scope": "ジェネリクス／ユーティリティ型（Partial・Pick・Omit・Record）",
      "note": "★TS-2後半の教材。型を引数として渡す感覚を掴む"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/tsconfig",
      "week": "2週目",
      "scope": "tsconfig.json の strict 系オプション",
      "note": "全部覚えなくていい。strict が何を見ているかだけ"
    },
    {
      "track": "TypeScript",
      "name": "TypeScript 公式ハンドブック",
      "cost": "無料",
      "url": "https://www.typescriptlang.org/docs/handbook/intro.html",
      "week": "随時",
      "scope": "サバイバルTypeScriptで足りないときの参照先",
      "note": "英語。日本語で足りるので基本は使わない"
    },
    {
      "track": "TypeScript",
      "name": "TypeScript Playground",
      "cost": "無料",
      "url": "https://www.typescriptlang.org/play",
      "week": "1〜2週目",
      "scope": "型を試すときのブラウザ実行環境",
      "note": "環境構築せずに型だけ試せる。エラーの再現に便利"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn",
      "week": "3週目",
      "scope": "「クイックスタート」→「インストール」",
      "note": "★まずここから。80%の概念がクイックスタートに載っている"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/describing-the-ui",
      "week": "3週目",
      "scope": "「UI の記述」：コンポーネント／props／条件分岐／リストとkey",
      "note": "★R-1の教材。Ch11の商品データで手を動かす"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/adding-interactivity",
      "week": "3週目",
      "scope": "「インタラクティビティの追加」：state／イベント／再レンダリング",
      "note": "★useStateはここ。フォームとイベント処理もこの章"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/managing-state",
      "week": "4週目",
      "scope": "「state の管理」：リフトアップ／state構造の選び方",
      "note": "★R-3の教材。設計の話ができるかはここで決まる"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/escape-hatches",
      "week": "4週目",
      "scope": "「避難ハッチ」：useEffect／依存配列／カスタムフック",
      "note": "★R-2の教材。一番ハマる箇所。Ch7のクロージャの知識が効く"
    },
    {
      "track": "React",
      "name": "React 公式：三目並べチュートリアル",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/tutorial-tic-tac-toe",
      "week": "3週目",
      "scope": "手を動かす題材が欲しいときに（任意）",
      "note": "時間があればでよい。優先は自分の商品一覧アプリ"
    },
    {
      "track": "React",
      "name": "React TypeScript Cheatsheet",
      "cost": "無料",
      "url": "https://react-typescript-cheatsheet.netlify.app/",
      "week": "3〜4週目",
      "scope": "props・イベント・useStateの型の書き方",
      "note": "★Reactでよく使う型の教材。英語だがコード例中心で読める"
    },
    {
      "track": "Next.js",
      "name": "Next.js Learn（公式チュートリアル）",
      "cost": "無料",
      "url": "https://nextjs.org/learn",
      "week": "5週目",
      "scope": "App Router のコース。環境構築〜ルーティング〜データ取得",
      "note": "★7週目の主教材。英語だが手を動かす形式なので進めやすい"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/routing",
      "week": "5〜6週目",
      "scope": "Routing：layout / page / 動的ルート",
      "note": "★N-1の教材。ファイル構成の決まりを確認する"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
      "week": "6週目",
      "scope": "Server Components と Client Components",
      "note": "★N-2の教材。ここが案件で一番効く。境界の判断基準を作る"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/data-fetching",
      "week": "6週目",
      "scope": "Data Fetching とキャッシュ",
      "note": "★N-3の教材。Ch13のfetchと何が変わるかを比べる"
    },
    {
      "track": "Next.js",
      "name": "Next.js 日本語訳（コミュニティ）",
      "cost": "無料",
      "url": "https://ja.next-community-docs.dev/docs/app-router/",
      "week": "5〜6週目",
      "scope": "英語で詰まったときの補助",
      "note": "公式ではないため、最終的な確認は本家で行う"
    },
    {
      "track": "AI駆動開発",
      "name": "Claude Code Academy",
      "cost": "購入済み",
      "url": "https://claude-code-academy.dev/",
      "week": "余力枠のみ",
      "scope": "CLAUDE.md入門とレビュー役サブエージェントの回だけ",
      "note": "v4で講座視聴は外した。CLAUDE.mdとCursorだけ余力枠に残っている"
    },
    {
      "track": "AI駆動開発",
      "name": "Claude Code 公式ドキュメント",
      "cost": "無料",
      "url": "https://code.claude.com/docs",
      "week": "随時",
      "scope": "CLAUDE.md／サブエージェント／権限設定の正確な仕様",
      "note": "講座で分からなかったときの一次情報"
    },
    {
      "track": "AI駆動開発",
      "name": "Cursor",
      "cost": "無料枠あり",
      "url": "https://cursor.com/",
      "week": "5週目",
      "scope": "インストールと基本操作（Cmd+K・チャット・Tab補完）",
      "note": "推奨スキルなので余力枠で触る"
    },
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版",
      "cost": "購入済み",
      "url": "",
      "week": "7週目",
      "scope": "Ch10「組み込みオブジェクト」の Date の節だけ",
      "note": "★課題A-3（日付で絞り込む）で詰まってから開く。章全体は読まない"
    },
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版",
      "cost": "購入済み",
      "url": "",
      "week": "7週目",
      "scope": "Ch10「組み込みオブジェクト」の 正規表現 の節だけ",
      "note": "★課題A-2（検索）で includes では足りないと分かってから開く"
    },
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版",
      "cost": "購入済み",
      "url": "",
      "week": "8週目",
      "scope": "Ch15「イベント」の 既定動作（preventDefault）の節",
      "note": "★課題A-4。まずpreventDefaultを書かずに送信して、壊してから読む"
    },
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版",
      "cost": "購入済み",
      "url": "",
      "week": "8週目",
      "scope": "Ch15「イベント」の 伝播（バブリング／キャプチャ）の節",
      "note": "★課題A-5（モーダル）。今回のJS回収で一番大事な節"
    },
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版",
      "cost": "購入済み",
      "url": "",
      "week": "14週目",
      "scope": "Ch9「クラス」を TypeScript 視点で",
      "note": "課題C-1。class / extends / implements。TSを通った後の方が早い"
    },
    {
      "track": "JS基礎",
      "name": "MDN: Date",
      "cost": "無料",
      "url": "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date",
      "week": "7週目",
      "scope": "getTime / toISOString / 引数の解釈",
      "note": "本より速いことが多い。new Date(\"2026-10-19\") がUTC扱いになる点は必ず見る"
    },
    {
      "track": "JS基礎",
      "name": "MDN: 正規表現ガイド",
      "cost": "無料",
      "url": "https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions",
      "week": "7週目",
      "scope": "基本の書き方とフラグ（i / g）だけ",
      "note": "深入りしない。検索に必要な分だけ"
    },
    {
      "track": "JS基礎",
      "name": "MDN: Event",
      "cost": "無料",
      "url": "https://developer.mozilla.org/ja/docs/Web/API/Event",
      "week": "8週目",
      "scope": "preventDefault / stopPropagation / target と currentTarget の違い",
      "note": "★target と currentTarget の違いは、モーダルで必ず効く"
    },
    {
      "track": "テスト",
      "name": "Vitest 公式ドキュメント",
      "cost": "無料",
      "url": "https://vitest.dev/guide/",
      "week": "10週目",
      "scope": "Getting Started → Writing Tests → Using Matchers",
      "note": "★課題B-1の主教材。英語だがコード中心。Node 22.12 以上が必要（v5時点）"
    },
    {
      "track": "テスト",
      "name": "Vitest: Testing Async Code",
      "cost": "無料",
      "url": "https://vitest.dev/guide/learn/async",
      "week": "11週目",
      "scope": "非同期のテストの書き方",
      "note": "★課題B-2の後半。データ取得のテストで必要になる"
    },
    {
      "track": "テスト",
      "name": "React Testing Library",
      "cost": "無料",
      "url": "https://testing-library.com/docs/react-testing-library/intro/",
      "week": "11週目",
      "scope": "Intro → Example → Queries（getBy / findBy / queryBy の違い）",
      "note": "★課題B-2の主教材。「ユーザーが見ているもので要素を取る」が思想"
    },
    {
      "track": "テスト",
      "name": "Testing Library: user-event",
      "cost": "無料",
      "url": "https://testing-library.com/docs/user-event/intro/",
      "week": "11週目",
      "scope": "入力・クリックの書き方",
      "note": "fireEvent より user-event を使う。実際の操作に近い"
    },
    {
      "track": "テスト",
      "name": "GitHub Actions ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://docs.github.com/ja/actions",
      "week": "12週目",
      "scope": "ワークフローの基本 → Node.js のビルドとテスト",
      "note": "★課題B-3の主教材。Nodeのバージョンを固定する書き方まで見る"
    },
    {
      "track": "テスト",
      "name": "Next.js 公式: Testing",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/guides/testing",
      "week": "10週目",
      "scope": "Vitest のセットアップの項だけ",
      "note": "Next.js と組み合わせるときの設定。ここだけ見れば足りる"
    }
  ],
  "dropped": [
    {
      "track": "JS基礎",
      "item": "Ch11の章末問題を解き直す",
      "why": "★v5で外した。課題「配列メソッド総当たり」が答え合わせになる。読み直しに時間を使うとTypeScriptに入れない"
    },
    {
      "track": "JS基礎",
      "item": "Ch14(DOM)のXSS再現 / Ch16(モジュール)の通読",
      "why": "ReactとJSXは既定でエスケープする。import/exportは書けば身につく"
    },
    {
      "track": "TypeScript",
      "item": "tsconfig の strict 系 / Partial・Pick・Omit・Record",
      "why": "業務で必要になってからで間に合う"
    },
    {
      "track": "React",
      "item": "カスタムフック / 不要な再レンダリングの改善",
      "why": "小アプリの規模では効果が薄い"
    },
    {
      "track": "Next.js",
      "item": "データ取得のキャッシュ挙動の確認",
      "why": "バージョン差が大きく、深入りすると時間を取られる"
    },
    {
      "track": "コンバート",
      "item": "型整理(any潰し) / リファクタと命名の見直し",
      "why": "★v6の13週目に戻した。テストが通る状態でなら安全にできるため"
    },
    {
      "track": "Claude Code",
      "item": "Skills入門 / ハーネス設計 / セキュリティ入門 / レビュー役(CC-5)",
      "why": "第1期からは外したまま。案件が決まってから必要なものだけ"
    }
  ],
  "jsReview": [
    {
      "ch": "Ch15",
      "title": "イベント",
      "how": "埋める",
      "priority": "高",
      "why": "イベント伝播（バブリング／stopPropagation）はReactでも同じ概念がそのまま出る。モーダルの外側クリックで閉じる処理を書くと必ずぶつかる",
      "when": "フェーズA 8週目（11/2〜11/8）。モーダルとフォームを作るときに、該当節だけ",
      "features": [
        "modal",
        "form",
        "keyboard"
      ]
    },
    {
      "ch": "Ch10",
      "title": "組み込みオブジェクト",
      "how": "一部だけ埋める",
      "priority": "高",
      "why": "Date と 正規表現だけ。実務で毎日出て、しかも事故が多い。通読はしない。JSON・String/Number のメソッドはMDNで引く方が速い",
      "when": "フェーズA 7週目（10/26〜11/1）。日付の絞り込みと検索を作るときに、該当節だけ",
      "features": [
        "date",
        "search"
      ]
    },
    {
      "ch": "Ch14",
      "title": "DOM",
      "how": "保留（案件次第）",
      "priority": "中",
      "why": "Reactを使う限り出番は少ない。ただし次の案件がjQuery主体のレガシーだった場合は直撃する。案件が見えるまで判断を保留する",
      "when": "案件が決まってから判断。useRefで直接DOMを触る場面が出たら、そのときに該当節だけ",
      "features": []
    },
    {
      "ch": "Ch9",
      "title": "クラス",
      "how": "後回しでよい",
      "priority": "低",
      "why": "class X extends Error くらいは読めた方がよいが、TypeScriptをやった後の方が理解が早い章。今飛ばしたのは順序として正しい",
      "when": "フェーズC 14週目（12/14〜12/20）。TS視点で class / extends / implements を読む",
      "features": [
        "class"
      ]
    },
    {
      "ch": "Ch17",
      "title": "Node.js",
      "how": "一部だけ埋める",
      "priority": "低",
      "why": "npm・package.json・node_modules は環境構築とテスト導入で実際に使うので、手が先に覚える",
      "when": "フェーズB 10週目。npm scripts を整えるときに該当節だけ",
      "features": [
        "npm"
      ]
    },
    {
      "ch": "Ch11",
      "title": "コレクション",
      "how": "読了",
      "priority": "―",
      "why": "読了済み。★章末問題は解き直さない。課題「配列メソッド総当たり」が答え合わせになる",
      "when": "配列メソッドで手が止まったときに、該当節だけ",
      "features": []
    },
    {
      "ch": "Ch12",
      "title": "反復処理",
      "how": "埋めない",
      "priority": "―",
      "why": "分割代入とスプレッドは1週目に実施済み。for...of などはCh5とCh11で足りている",
      "when": "戻らない",
      "features": []
    },
    {
      "ch": "Ch16",
      "title": "モジュール",
      "how": "埋めない",
      "priority": "―",
      "why": "import/export は毎日書くので手が先に覚える。通読の必要はない",
      "when": "default と named の違いで混乱したとき、または循環参照でエラーが出たとき",
      "features": []
    }
  ],
  "featureRefs": [
    {
      "key": "search",
      "feature": "キーワード検索（部分一致・大文字小文字を無視）",
      "ch": "Ch10",
      "chTitle": "組み込みオブジェクト",
      "sec": "正規表現 ／ String のメソッド",
      "why": "まず toLowerCase() + includes() で足りるか考える。「ひらがな・カタカナも」「複数語をスペース区切りで」まで欲しくなったら正規表現に移る。その判断ができることが目的で、いきなり正規表現を書くことが目的ではない",
      "watch": "正規表現に入れる文字をユーザー入力から作るときは、記号のエスケープを忘れると落ちる",
      "week": 7
    },
    {
      "key": "date",
      "feature": "日付での絞り込みと並べ替え",
      "ch": "Ch10",
      "chTitle": "組み込みオブジェクト",
      "sec": "Date",
      "why": "日付は実務で一番事故が多い。比較は getTime() で数値にしてから。文字列のまま比較すると 'YYYY-MM-DD' 形式のときだけ偶然うまくいく",
      "watch": "new Date('2026-10-19') はUTC、new Date('2026/10/19') はローカル時刻として解釈される。日付がずれる原因の大半がこれ",
      "week": 7
    },
    {
      "key": "form",
      "feature": "フォームの送信",
      "ch": "Ch15",
      "chTitle": "イベント",
      "sec": "イベントの既定動作（preventDefault）",
      "why": "送信するとページが再読み込みされて入力が消える。これはブラウザの既定動作で、React特有の話ではない。Reactでも同じ e.preventDefault() を書く",
      "watch": "onSubmit に付けるのか onClick に付けるのかで挙動が変わる。Enterキーでの送信も確認する",
      "week": 8
    },
    {
      "key": "modal",
      "feature": "モーダル／ドロップダウン（外側クリックで閉じる）",
      "ch": "Ch15",
      "chTitle": "イベント",
      "sec": "イベント伝播（バブリングとキャプチャ）",
      "why": "★ここが一番の回収どころ。外側クリックで閉じる処理は、クリックがどこまで伝わるかを分かっていないと書けない。Reactの合成イベントでも伝播の考え方はそのまま同じ",
      "watch": "中身のクリックで閉じてしまうなら stopPropagation。開くボタンのクリックが document まで伝わって即座に閉じる、も定番のハマり方",
      "week": 8
    },
    {
      "key": "keyboard",
      "feature": "Escキーで閉じる／キーボード操作",
      "ch": "Ch15",
      "chTitle": "イベント",
      "sec": "キーボードイベント ／ イベントリスナーの解除",
      "why": "document に addEventListener したら、必ず外す。Reactなら useEffect の戻り値で解除する。ここでクリーンアップの意味が腑に落ちる",
      "watch": "解除し忘れるとモーダルを開くたびにリスナーが増える。keyCode は古い書き方で、今は e.key",
      "week": 8
    },
    {
      "key": "class",
      "feature": "クラス構文を読む",
      "ch": "Ch9",
      "chTitle": "クラス",
      "sec": "クラス定義 ／ 継承（extends）",
      "why": "自分では書かないが、既存コードやライブラリで読む場面がある。TypeScript を通った後の方が implements と interface の関係まで一度に入る",
      "watch": "React のクラスコンポーネントは今は書かない。読めれば十分",
      "week": 14
    },
    {
      "key": "npm",
      "feature": "npm scripts とパッケージ管理",
      "ch": "Ch17",
      "chTitle": "Node.js",
      "sec": "npm ／ package.json",
      "why": "テスト導入で実際に触る。dependencies と devDependencies の違いはここで分かる",
      "watch": "^ と ~ のバージョン指定の違い。lockファイルをコミットするかどうか",
      "week": 10
    }
  ],
  "checkResults": [
    {
      "key": "o",
      "label": "○",
      "note": "見ないでできた"
    },
    {
      "key": "d",
      "label": "△",
      "note": "詰まったが、調べて分かった"
    },
    {
      "key": "x",
      "label": "×",
      "note": "分からなかった"
    }
  ],
  "checkNeedsNote": "x"
};
