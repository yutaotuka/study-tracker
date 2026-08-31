// 学習計画v3（8/24再設計・6週87時間・コア65h＋余力22h）の静的データ
export const PLAN = {
  "meta": {
    "version": "v3",
    "revisedOn": "2026-08-24",
    "period": "8/30〜10/6",
    "coreHours": 65.0,
    "optionalHours": 22.0,
    "totalHours": 87.0,
    "note": "8/23時点の進捗（22.2h／目標39.0h・TS/React/Nextは0h）を受けた再設計"
  },
  "weeks": [
    {
      "no": 1,
      "start": "2026-08-30",
      "end": "2026-09-05",
      "js": "Ch7-8 スコープ/this ＋ Ch11-12 コレクション・スプレッド ★",
      "cc": "CLAUDE.mdを書く（余力枠）",
      "other": "環境構築／TypeScriptの基本の型と型注釈"
    },
    {
      "no": 2,
      "start": "2026-09-06",
      "end": "2026-09-12",
      "js": "Ch13 非同期処理 ★（JS基礎はここで終わり）",
      "cc": "―",
      "other": "型推論・union・interface/type・ジェネリクス・data.tsのTS化"
    },
    {
      "no": 3,
      "start": "2026-09-13",
      "end": "2026-09-19",
      "js": "―",
      "cc": "レビュー役サブエージェント（余力枠）",
      "other": "React基礎：コンポーネント・props・state・絞り込み・型"
    },
    {
      "no": 4,
      "start": "2026-09-20",
      "end": "2026-09-26",
      "js": "―",
      "cc": "Cursorの使い分け（余力枠）",
      "other": "Reactフック深掘り ★ ＋ 小アプリを完成させる"
    },
    {
      "no": 5,
      "start": "2026-09-27",
      "end": "2026-10-03",
      "js": "―",
      "cc": "―",
      "other": "Next.js App Router ＋ ★Next.jsへコンバート（本命）"
    },
    {
      "no": 6,
      "start": "2026-10-04",
      "end": "2026-10-06",
      "js": "―",
      "cc": "―",
      "other": "Vercel公開・READMEと想定Q&A（仕上げ）"
    }
  ],
  "steps": [
    {
      "id": "v3s1",
      "week": 1,
      "cat": "JS基礎",
      "no": 1,
      "todo": "Ch7(スコープ)を読む",
      "out": "読了",
      "h": 1.0,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s2",
      "week": 1,
      "cat": "JS基礎",
      "no": 2,
      "todo": "課題「スコープ可視化」。varのsetTimeout問題を必ず再現する",
      "out": "varとletの差を説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s3",
      "week": 1,
      "cat": "JS基礎",
      "no": 3,
      "todo": "Ch8(this)を読み、課題「this早見表」を作る",
      "out": "6パターンを予想して当てられる",
      "h": 2.0,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s4",
      "week": 1,
      "cat": "JS基礎",
      "no": 4,
      "todo": "Ch11(コレクション)を読む",
      "out": "読了",
      "h": 1.5,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s5",
      "week": 1,
      "cat": "JS基礎",
      "no": 5,
      "todo": "課題「配列メソッド総当たり」。商品データ20件をdata.jsとして保存する",
      "out": "data.js（最後まで使い回す）",
      "h": 2.5,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s6",
      "week": 1,
      "cat": "JS基礎",
      "no": 6,
      "todo": "分割代入とスプレッド構文を書く（Ch11〜12あたり）★Reactのstate更新で必須",
      "out": "組み替えが書ける",
      "h": 1.0,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s7",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "ts_typescript/ を作り、Node.jsとTypeScriptを入れて .ts を1本コンパイルする",
      "out": "tsc で .js が出力される",
      "h": 1.0,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s8",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "サバイバルTypeScriptで「なぜ型が必要か」と基本の型を読む",
      "out": "読了メモ",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s9",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "型注釈を書いてみる。わざと型エラーを出して読み方に慣れる",
      "out": "エラーを自力で読める",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s10",
      "week": 1,
      "cat": "Claude Code",
      "no": 1,
      "todo": "CLAUDE.mdを書く(課題CC-1)",
      "out": "CLAUDE.md",
      "h": 1.5,
      "tier": "余力",
      "track": "Claude Code"
    },
    {
      "id": "v3s11",
      "week": 1,
      "cat": "振り返り",
      "no": 1,
      "todo": "日次ログ記入と弱点メモの更新",
      "out": "日次ログ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s12",
      "week": 2,
      "cat": "JS基礎",
      "no": 1,
      "todo": "Ch13(非同期処理)を読む。イベントループの図をメモに描く",
      "out": "読了 + 図",
      "h": 1.5,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s13",
      "week": 2,
      "cat": "JS基礎",
      "no": 2,
      "todo": "課題「fetchで一覧取得」。通信中/成功/失敗の3状態を作る",
      "out": "3状態が画面に出る",
      "h": 1.5,
      "tier": "コア",
      "track": "JS基礎"
    },
    {
      "id": "v3s14",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "TS: 型推論が効く場所を確認し、注釈を書く場所を決める(課題TS-1)",
      "out": "書く場所の基準をメモ",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s15",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "TS: ユニオン型・リテラル型・オプショナルを使う",
      "out": "絞り込みが書ける",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s16",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "TS: interface と type の使い分けを整理する(課題TS-2)",
      "out": "使い分けの基準を書ける",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s17",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "TS: ジェネリクスを使う。型を引数として渡す感覚を掴む",
      "out": "汎用関数が書ける",
      "h": 2.0,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s18",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "TS: 型の絞り込み(typeof / in / タグ付きユニオン)を書く",
      "out": "絞り込みで型が確定する",
      "h": 1.5,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s19",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "TS: 1週目のdata.jsに型を付けてTS化する(課題TS-3)",
      "out": "型付きのdata.ts",
      "h": 2.0,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s20",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "TS: Partial / Pick / Omit / Record を使ってみる",
      "out": "ユーティリティ型の使用例",
      "h": 1.5,
      "tier": "余力",
      "track": "TypeScript"
    },
    {
      "id": "v3s21",
      "week": 2,
      "cat": "振り返り",
      "no": 1,
      "todo": "TSで詰まった型エラーを弱点リストに記録する",
      "out": "弱点リスト追記",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s22",
      "week": 2,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と配分調整",
      "out": "日次ログ",
      "h": 0.5,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s23",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "React公式で環境を作る。★まずクイックスタートを写経する（自作しない）",
      "out": "画面が出る",
      "h": 2.0,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s24",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "props と state を理解する(課題R-1)",
      "out": "親子でデータが渡せる",
      "h": 2.0,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s25",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "props に TypeScript の型を付ける",
      "out": "型付きpropsが動く",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s26",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "リスト描画と key、条件分岐を書く(1週目のデータを使う)",
      "out": "配列から一覧が出る",
      "h": 2.0,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s27",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "フォームとイベント処理を書く",
      "out": "入力が状態に反映される",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s28",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "絞り込みUIを作る(配列メソッドがそのまま使えることを確認)",
      "out": "絞り込みが効く",
      "h": 2.0,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s29",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "Reactでよく使う型を覚える(ReactNode/イベント型/ComponentProps)",
      "out": "型付きで書ける",
      "h": 1.0,
      "tier": "コア",
      "track": "TypeScript"
    },
    {
      "id": "v3s30",
      "week": 3,
      "cat": "Claude Code",
      "no": 1,
      "todo": "レビュー役サブエージェントを作り、自分のReactコードを見せる(課題CC-5)",
      "out": "指摘を自分で直す",
      "h": 2.0,
      "tier": "余力",
      "track": "Claude Code"
    },
    {
      "id": "v3s31",
      "week": 3,
      "cat": "振り返り",
      "no": 1,
      "todo": "ReactとJSの対応関係を整理する(どこがJSの知識で説明できるか)",
      "out": "対応メモ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s32",
      "week": 3,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と配分調整",
      "out": "日次ログ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s33",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "useState を掘る。再レンダリングがいつ起きるか確認する",
      "out": "説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s34",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "useEffect の基本と実行タイミングを確認する",
      "out": "いつ動くか説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s35",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "★依存配列を空にして古い値を掴むバグを再現し、直す(課題R-2)",
      "out": "バグの再現と修正",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s36",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "useEffect + fetch でデータ取得を書く(Ch13と比べる)",
      "out": "3状態が動く",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s37",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "状態をどこに置くか(リフトアップ)を設計する(課題R-3)",
      "out": "置き場を説明できる",
      "h": 1.5,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s38",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "コンポーネントを責務で分割し、理由を書く★設計の話ができると評価が変わる",
      "out": "分割の理由を書ける",
      "h": 1.0,
      "tier": "コア",
      "track": "React"
    },
    {
      "id": "v3s39",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "localStorage保存を足して小アプリを完成させる(課題CONV-1)",
      "out": "リロードしても残る",
      "h": 2.0,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s40",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 8,
      "todo": "カスタムフックに切り出す",
      "out": "動くカスタムフック",
      "h": 1.5,
      "tier": "余力",
      "track": "React"
    },
    {
      "id": "v3s41",
      "week": 4,
      "cat": "Claude Code",
      "no": 1,
      "todo": "Cursorをインストールし、Claude Codeとの使い分けを決める(課題CC-6)",
      "out": "使い分けメモ",
      "h": 2.0,
      "tier": "余力",
      "track": "Claude Code"
    },
    {
      "id": "v3s42",
      "week": 4,
      "cat": "振り返り",
      "no": 1,
      "todo": "フックで詰まった点を弱点リストに記録する",
      "out": "弱点リスト追記",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s43",
      "week": 4,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入。コンバートに向けて準備確認",
      "out": "日次ログ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s44",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "Next.js公式Learnで環境構築。★ここも写経から入る",
      "out": "アプリが起動する",
      "h": 1.5,
      "tier": "コア",
      "track": "Next.js"
    },
    {
      "id": "v3s45",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "ルーティング、layout と page を書く(課題N-1)",
      "out": "複数ページを行き来できる",
      "h": 1.5,
      "tier": "コア",
      "track": "Next.js"
    },
    {
      "id": "v3s46",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "Server ComponentでuseStateを使いエラーを出す。違いを体感する",
      "out": "エラーを再現・理解",
      "h": 1.0,
      "tier": "コア",
      "track": "Next.js"
    },
    {
      "id": "v3s47",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "★4週目のReactアプリをNext.jsへコンバートする計画を書く(課題CONV-2)",
      "out": "移行計画メモ",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s48",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "コンポーネントを App Router の構成へ移す",
      "out": "同じ画面が出る",
      "h": 2.0,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s49",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "'use client' の境界を決めて分ける(課題N-2)",
      "out": "境界の理由を書ける",
      "h": 2.0,
      "tier": "コア",
      "track": "Next.js"
    },
    {
      "id": "v3s50",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "サーバー側でのデータ取得に置き換える(課題N-3)",
      "out": "サーバーで取得できる",
      "h": 1.0,
      "tier": "コア",
      "track": "Next.js"
    },
    {
      "id": "v3s51",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 8,
      "todo": "★コンバートで詰まった点と判断理由を記録する",
      "out": "コンバート記録",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s52",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 9,
      "todo": "データ取得のキャッシュ挙動を確認する(再読み込みで再取得されるか)",
      "out": "キャッシュを説明できる",
      "h": 1.0,
      "tier": "余力",
      "track": "Next.js"
    },
    {
      "id": "v3s53",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 10,
      "todo": "型を整理する。any を潰し、共通の型を切り出す",
      "out": "anyゼロ",
      "h": 1.5,
      "tier": "余力",
      "track": "TypeScript"
    },
    {
      "id": "v3s54",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 11,
      "todo": "リファクタと命名の見直し。AIの提案は採否を自分で判断する",
      "out": "リファクタ済み",
      "h": 1.5,
      "tier": "余力",
      "track": "コンバート"
    },
    {
      "id": "v3s55",
      "week": 5,
      "cat": "振り返り",
      "no": 1,
      "todo": "Server/Clientの判断基準を自分の言葉で書く",
      "out": "判断基準メモ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
    },
    {
      "id": "v3s56",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "Vercelにデプロイして公開URLを用意する(課題CONV-3)",
      "out": "公開URL",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s57",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "READMEを書く(何を作ったか/技術選定/学んだこと)",
      "out": "README",
      "h": 1.0,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s58",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "React版とNext.js版の違いを言語化する(参画後に説明できる形に)",
      "out": "説明メモ",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s59",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "想定質問への回答を準備する(Server/Client、型設計、AI活用)",
      "out": "想定Q&A",
      "h": 1.5,
      "tier": "コア",
      "track": "コンバート"
    },
    {
      "id": "v3s60",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "不要な再レンダリングを1箇所見つけて直す(key / 派生stateの見直し)",
      "out": "改善の理由を書ける",
      "h": 1.0,
      "tier": "余力",
      "track": "React"
    },
    {
      "id": "v3s61",
      "week": 6,
      "cat": "振り返り",
      "no": 1,
      "todo": "6週間を1枚に総括し、スキルシートに書ける形にする",
      "out": "総括メモ",
      "h": 1.0,
      "tier": "余力",
      "track": "振り返り"
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
      "status": "ReactとJSXは既定でエスケープするため優先度を下げた"
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
      "status": "講座枠を削ったため。参画後に回す"
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
      "status": "同上"
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
      "status": "業務環境で設定済みのため後回し"
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
      "status": "完了済み"
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
      "status": "完了済み（Ch11後にもう一度見直す）"
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
      "status": "完了済み"
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
      "status": "完了済み"
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
      "status": "完了済み"
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
      "week": 1,
      "tier": "コア",
      "status": ""
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
      "week": 1,
      "tier": "コア",
      "status": ""
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
      "status": "商品データ20件は最後まで使い回す"
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
      "status": ""
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
      "week": 1,
      "tier": "余力",
      "status": ""
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
      "status": "JS基礎はここで終わり"
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
      "week": 2,
      "tier": "コア",
      "status": ""
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
      "week": 2,
      "tier": "コア",
      "status": ""
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
      "status": "1週目のdata.jsに型を付ける"
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
      "status": ""
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
      "status": ""
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
      "week": 3,
      "tier": "余力",
      "status": ""
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
      "status": ""
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
      "status": ""
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
      "status": ""
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
      "status": "ここまでに動くReactアプリを完成させる"
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
      "status": ""
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
      "week": 5,
      "tier": "コア",
      "status": ""
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
      "status": ""
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
      "status": ""
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
      "status": "案件の推奨スキルに直接対応する"
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
      "week": 6,
      "tier": "コア",
      "status": ""
    }
  ],
  "days": [
    {
      "date": "2026-08-30",
      "wd": "日",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s1",
          "cat": "JS基礎",
          "todo": "Ch7(スコープ)を読む",
          "h": 1.0,
          "tier": "コア",
          "track": "JS基礎"
        },
        {
          "id": "v3s7",
          "cat": "TS/React/Next",
          "todo": "ts_typescript/ を作り、Node.jsとTypeScriptを入れて .ts を1本コンパイルする",
          "h": 1.0,
          "tier": "コア",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-08-31",
      "wd": "月",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s10",
          "cat": "Claude Code",
          "todo": "CLAUDE.mdを書く(課題CC-1)",
          "h": 1.5,
          "tier": "余力",
          "track": "Claude Code"
        },
        {
          "id": "v3s2",
          "cat": "JS基礎",
          "todo": "課題「スコープ可視化」。varのsetTimeout問題を必ず再現する",
          "h": 1.5,
          "tier": "コア",
          "track": "JS基礎"
        }
      ]
    },
    {
      "date": "2026-09-01",
      "wd": "火",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s8",
          "cat": "TS/React/Next",
          "todo": "サバイバルTypeScriptで「なぜ型が必要か」と基本の型を読む",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript"
        },
        {
          "id": "v3s4",
          "cat": "JS基礎",
          "todo": "Ch11(コレクション)を読む",
          "h": 1.5,
          "tier": "コア",
          "track": "JS基礎"
        }
      ]
    },
    {
      "date": "2026-09-02",
      "wd": "水",
      "week": 1,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s3",
          "cat": "JS基礎",
          "todo": "Ch8(this)を読み、課題「this早見表」を作る",
          "h": 2.0,
          "tier": "コア",
          "track": "JS基礎"
        }
      ]
    },
    {
      "date": "2026-09-03",
      "wd": "木",
      "week": 1,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s9",
          "cat": "TS/React/Next",
          "todo": "型注釈を書いてみる。わざと型エラーを出して読み方に慣れる",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-09-04",
      "wd": "金",
      "week": 1,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s5",
          "cat": "JS基礎",
          "todo": "課題「配列メソッド総当たり」。商品データ20件をdata.jsとして保存する",
          "h": 2.5,
          "tier": "コア",
          "track": "JS基礎"
        }
      ]
    },
    {
      "date": "2026-09-05",
      "wd": "土",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s6",
          "cat": "JS基礎",
          "todo": "分割代入とスプレッド構文を書く（Ch11〜12あたり）★Reactのstate更新で必須",
          "h": 1.0,
          "tier": "コア",
          "track": "JS基礎"
        },
        {
          "id": "v3s11",
          "cat": "振り返り",
          "todo": "日次ログ記入と弱点メモの更新",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        }
      ]
    },
    {
      "date": "2026-09-06",
      "wd": "日",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s14",
          "cat": "TS/React/Next",
          "todo": "TS: 型推論が効く場所を確認し、注釈を書く場所を決める(課題TS-1)",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript"
        },
        {
          "id": "v3s12",
          "cat": "JS基礎",
          "todo": "Ch13(非同期処理)を読む。イベントループの図をメモに描く",
          "h": 1.5,
          "tier": "コア",
          "track": "JS基礎"
        }
      ]
    },
    {
      "date": "2026-09-07",
      "wd": "月",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s15",
          "cat": "TS/React/Next",
          "todo": "TS: ユニオン型・リテラル型・オプショナルを使う",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-09-08",
      "wd": "火",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s16",
          "cat": "TS/React/Next",
          "todo": "TS: interface と type の使い分けを整理する(課題TS-2)",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript"
        },
        {
          "id": "v3s17",
          "cat": "TS/React/Next",
          "todo": "TS: ジェネリクスを使う。型を引数として渡す感覚を掴む",
          "h": 2.0,
          "tier": "コア",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-09-09",
      "wd": "水",
      "week": 2,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s13",
          "cat": "JS基礎",
          "todo": "課題「fetchで一覧取得」。通信中/成功/失敗の3状態を作る",
          "h": 1.5,
          "tier": "コア",
          "track": "JS基礎"
        }
      ]
    },
    {
      "date": "2026-09-10",
      "wd": "木",
      "week": 2,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s18",
          "cat": "TS/React/Next",
          "todo": "TS: 型の絞り込み(typeof / in / タグ付きユニオン)を書く",
          "h": 1.5,
          "tier": "コア",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-09-11",
      "wd": "金",
      "week": 2,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s19",
          "cat": "TS/React/Next",
          "todo": "TS: 1週目のdata.jsに型を付けてTS化する(課題TS-3)",
          "h": 2.0,
          "tier": "コア",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-09-12",
      "wd": "土",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s20",
          "cat": "TS/React/Next",
          "todo": "TS: Partial / Pick / Omit / Record を使ってみる",
          "h": 1.5,
          "tier": "余力",
          "track": "TypeScript"
        },
        {
          "id": "v3s21",
          "cat": "振り返り",
          "todo": "TSで詰まった型エラーを弱点リストに記録する",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        },
        {
          "id": "v3s22",
          "cat": "振り返り",
          "todo": "日次ログ記入と配分調整",
          "h": 0.5,
          "tier": "余力",
          "track": "振り返り"
        }
      ]
    },
    {
      "date": "2026-09-13",
      "wd": "日",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s23",
          "cat": "TS/React/Next",
          "todo": "React公式で環境を作る。★まずクイックスタートを写経する（自作しない）",
          "h": 2.0,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-14",
      "wd": "月",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s30",
          "cat": "Claude Code",
          "todo": "レビュー役サブエージェントを作り、自分のReactコードを見せる(課題CC-5)",
          "h": 2.0,
          "tier": "余力",
          "track": "Claude Code"
        }
      ]
    },
    {
      "date": "2026-09-15",
      "wd": "火",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s24",
          "cat": "TS/React/Next",
          "todo": "props と state を理解する(課題R-1)",
          "h": 2.0,
          "tier": "コア",
          "track": "React"
        },
        {
          "id": "v3s25",
          "cat": "TS/React/Next",
          "todo": "props に TypeScript の型を付ける",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-16",
      "wd": "水",
      "week": 3,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s26",
          "cat": "TS/React/Next",
          "todo": "リスト描画と key、条件分岐を書く(1週目のデータを使う)",
          "h": 2.0,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-17",
      "wd": "木",
      "week": 3,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s27",
          "cat": "TS/React/Next",
          "todo": "フォームとイベント処理を書く",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-18",
      "wd": "金",
      "week": 3,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s28",
          "cat": "TS/React/Next",
          "todo": "絞り込みUIを作る(配列メソッドがそのまま使えることを確認)",
          "h": 2.0,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-19",
      "wd": "土",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s29",
          "cat": "TS/React/Next",
          "todo": "Reactでよく使う型を覚える(ReactNode/イベント型/ComponentProps)",
          "h": 1.0,
          "tier": "コア",
          "track": "TypeScript"
        },
        {
          "id": "v3s31",
          "cat": "振り返り",
          "todo": "ReactとJSの対応関係を整理する(どこがJSの知識で説明できるか)",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        },
        {
          "id": "v3s32",
          "cat": "振り返り",
          "todo": "日次ログ記入と配分調整",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        }
      ]
    },
    {
      "date": "2026-09-20",
      "wd": "日",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s33",
          "cat": "TS/React/Next",
          "todo": "useState を掘る。再レンダリングがいつ起きるか確認する",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        },
        {
          "id": "v3s34",
          "cat": "TS/React/Next",
          "todo": "useEffect の基本と実行タイミングを確認する",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-21",
      "wd": "月",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s41",
          "cat": "Claude Code",
          "todo": "Cursorをインストールし、Claude Codeとの使い分けを決める(課題CC-6)",
          "h": 2.0,
          "tier": "余力",
          "track": "Claude Code"
        }
      ]
    },
    {
      "date": "2026-09-22",
      "wd": "火",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s35",
          "cat": "TS/React/Next",
          "todo": "★依存配列を空にして古い値を掴むバグを再現し、直す(課題R-2)",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        },
        {
          "id": "v3s36",
          "cat": "TS/React/Next",
          "todo": "useEffect + fetch でデータ取得を書く(Ch13と比べる)",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-23",
      "wd": "水",
      "week": 4,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s37",
          "cat": "TS/React/Next",
          "todo": "状態をどこに置くか(リフトアップ)を設計する(課題R-3)",
          "h": 1.5,
          "tier": "コア",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-24",
      "wd": "木",
      "week": 4,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s38",
          "cat": "TS/React/Next",
          "todo": "コンポーネントを責務で分割し、理由を書く★設計の話ができると評価が変わる",
          "h": 1.0,
          "tier": "コア",
          "track": "React"
        },
        {
          "id": "v3s40",
          "cat": "TS/React/Next",
          "todo": "カスタムフックに切り出す",
          "h": 1.5,
          "tier": "余力",
          "track": "React"
        }
      ]
    },
    {
      "date": "2026-09-25",
      "wd": "金",
      "week": 4,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s39",
          "cat": "TS/React/Next",
          "todo": "localStorage保存を足して小アプリを完成させる(課題CONV-1)",
          "h": 2.0,
          "tier": "コア",
          "track": "コンバート"
        }
      ]
    },
    {
      "date": "2026-09-26",
      "wd": "土",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s42",
          "cat": "振り返り",
          "todo": "フックで詰まった点を弱点リストに記録する",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        },
        {
          "id": "v3s43",
          "cat": "振り返り",
          "todo": "日次ログ記入。コンバートに向けて準備確認",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        }
      ]
    },
    {
      "date": "2026-09-27",
      "wd": "日",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s44",
          "cat": "TS/React/Next",
          "todo": "Next.js公式Learnで環境構築。★ここも写経から入る",
          "h": 1.5,
          "tier": "コア",
          "track": "Next.js"
        },
        {
          "id": "v3s45",
          "cat": "TS/React/Next",
          "todo": "ルーティング、layout と page を書く(課題N-1)",
          "h": 1.5,
          "tier": "コア",
          "track": "Next.js"
        }
      ]
    },
    {
      "date": "2026-09-28",
      "wd": "月",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s46",
          "cat": "TS/React/Next",
          "todo": "Server ComponentでuseStateを使いエラーを出す。違いを体感する",
          "h": 1.0,
          "tier": "コア",
          "track": "Next.js"
        },
        {
          "id": "v3s47",
          "cat": "TS/React/Next",
          "todo": "★4週目のReactアプリをNext.jsへコンバートする計画を書く(課題CONV-2)",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート"
        }
      ]
    },
    {
      "date": "2026-09-29",
      "wd": "火",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s48",
          "cat": "TS/React/Next",
          "todo": "コンポーネントを App Router の構成へ移す",
          "h": 2.0,
          "tier": "コア",
          "track": "コンバート"
        }
      ]
    },
    {
      "date": "2026-09-30",
      "wd": "水",
      "week": 5,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s49",
          "cat": "TS/React/Next",
          "todo": "'use client' の境界を決めて分ける(課題N-2)",
          "h": 2.0,
          "tier": "コア",
          "track": "Next.js"
        }
      ]
    },
    {
      "date": "2026-10-01",
      "wd": "木",
      "week": 5,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s50",
          "cat": "TS/React/Next",
          "todo": "サーバー側でのデータ取得に置き換える(課題N-3)",
          "h": 1.0,
          "tier": "コア",
          "track": "Next.js"
        },
        {
          "id": "v3s51",
          "cat": "TS/React/Next",
          "todo": "★コンバートで詰まった点と判断理由を記録する",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート"
        }
      ]
    },
    {
      "date": "2026-10-02",
      "wd": "金",
      "week": 5,
      "target": 2.0,
      "plan": [
        {
          "id": "v3s52",
          "cat": "TS/React/Next",
          "todo": "データ取得のキャッシュ挙動を確認する(再読み込みで再取得されるか)",
          "h": 1.0,
          "tier": "余力",
          "track": "Next.js"
        },
        {
          "id": "v3s53",
          "cat": "TS/React/Next",
          "todo": "型を整理する。any を潰し、共通の型を切り出す",
          "h": 1.5,
          "tier": "余力",
          "track": "TypeScript"
        }
      ]
    },
    {
      "date": "2026-10-03",
      "wd": "土",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s54",
          "cat": "TS/React/Next",
          "todo": "リファクタと命名の見直し。AIの提案は採否を自分で判断する",
          "h": 1.5,
          "tier": "余力",
          "track": "コンバート"
        },
        {
          "id": "v3s55",
          "cat": "振り返り",
          "todo": "Server/Clientの判断基準を自分の言葉で書く",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        }
      ]
    },
    {
      "date": "2026-10-04",
      "wd": "日",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s56",
          "cat": "TS/React/Next",
          "todo": "Vercelにデプロイして公開URLを用意する(課題CONV-3)",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート"
        },
        {
          "id": "v3s57",
          "cat": "TS/React/Next",
          "todo": "READMEを書く(何を作ったか/技術選定/学んだこと)",
          "h": 1.0,
          "tier": "コア",
          "track": "コンバート"
        }
      ]
    },
    {
      "date": "2026-10-05",
      "wd": "月",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s58",
          "cat": "TS/React/Next",
          "todo": "React版とNext.js版の違いを言語化する(参画後に説明できる形に)",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート"
        },
        {
          "id": "v3s59",
          "cat": "TS/React/Next",
          "todo": "想定質問への回答を準備する(Server/Client、型設計、AI活用)",
          "h": 1.5,
          "tier": "コア",
          "track": "コンバート"
        }
      ]
    },
    {
      "date": "2026-10-06",
      "wd": "火",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "id": "v3s60",
          "cat": "TS/React/Next",
          "todo": "不要な再レンダリングを1箇所見つけて直す(key / 派生stateの見直し)",
          "h": 1.0,
          "tier": "余力",
          "track": "React"
        },
        {
          "id": "v3s61",
          "cat": "振り返り",
          "todo": "6週間を1枚に総括し、スキルシートに書ける形にする",
          "h": 1.0,
          "tier": "余力",
          "track": "振り返り"
        }
      ]
    }
  ],
  "rules": [
    {
      "no": "1",
      "title": "コアを先にやる。余力枠は後回しでよい",
      "body": "コア65hは「型付きのReactアプリを1本作り、Next.jsへコンバートした経験がある」状態を作る最短経路。余力22h（Claude Code講座・振り返りの一部・TS応用）は、コアが予定どおり進んだときだけ手を付ける。迷ったらコアを優先し、余力枠は落とす。"
    },
    {
      "no": "2",
      "title": "8/23までの3週間でTS/Reactに0hだった。同じ配分に戻さない",
      "body": "8/23までにJS基礎へ21.2h使い、TypeScript・Reactには一度も触れなかったのが組み直しの理由。JS基礎は2週目のCh13で打ち切る。3週目以降にJSへ戻るのは、Reactで必要になった時だけにする。"
    },
    {
      "no": "3",
      "title": "課題は必ず自分で書いてからAIに見せる",
      "body": "最初からAIに書かせない。自分で書いて詰まって、書き終わってからレビューさせる。AI駆動での開発は求人でよく求められるが、AIの出力を評価できないと駆動にならない。"
    },
    {
      "no": "3b",
      "title": "★React・Next.jsは「写経 → 改造 → 自作」の3段で進める",
      "body": "JS基礎は本を読めばゼロから書けるが、ReactとNext.jsは書き方の型を知らないと1行も書けない。いきなり自作しようとすると白紙の前で時間が溶ける。①写経: 公式チュートリアルを見ながらそのまま書く（AIは見ない。理解より手を動かす）。②改造: 写経したものを1箇所だけ変える。壊して直す。ここで理解が入る。③自作: 何も見ずに書く。ルール3が効くのはここから。公式を写すのは「AIに書かせる」ことではないので、ルール3とは矛盾しない。"
    },
    {
      "no": "4",
      "title": "5週目のコンバートが本命",
      "body": "「アーキテクチャコンバートの経験」は求人でよく求められる。4週目までに小さくてもいいので動くReactアプリを完成させ、5週目にNext.jsへ移す。移せる状態を作ることを優先する。"
    },
    {
      "no": "5",
      "title": "コンバートの判断理由を必ず記録する",
      "body": "何をどう移したかより、なぜそう判断したかを語れる方が評価される。'use client' をどこに置いたか、なぜそこかを5週目に書き残す。"
    },
    {
      "no": "6",
      "title": "AIの修正提案は丸呑みしない",
      "body": "指摘は1つずつ理解して自分の手で直す。採用しない判断をした場合は理由を1行書く。"
    },
    {
      "no": "7",
      "title": "1週目の商品データ20件は最後まで使い回す",
      "body": "Ch11(作る)→TS-3(型を付ける)→R-1(Reactで描画)→CONV-2(Next.jsへ移す) と一貫して使う。作り直さない。"
    },
    {
      "no": "8",
      "title": "メモはアプリに書く。Obsidianは週末だけ",
      "body": "平日はサマリーの「今日の記録」に1〜3行だけ書く（詰まった／分かった／明日）。週末に「この範囲をMarkdownでコピー」を押して notes/learning-log.md に貼り、そこで整える。二重に書こうとすると必ず止まる。常設のノートは learning-log.md（日々の記録）/ weak-points.md（つまずき）/ setup.md（手順集）/ convert-log.md（コンバートの判断）/ qa.md（想定Q&A）の5つだけ。これ以上増やさない。"
    },
    {
      "no": "9",
      "title": "日次ログは毎日つける。つけないと遅れが見えない",
      "body": "8/7〜8/28のうち、記録があったのは10日だけだった。8/24〜8/28は着手できていない。記録が無いと、遅れているのか記録漏れなのかが区別できず、手当てが遅れる。書くことが無い日は時間だけ入れればよい。"
    },
    {
      "no": "10",
      "title": "10/6に全部終わらなくてよい。コアが終わっていれば成功",
      "body": "完璧に終わらせることより、ReactとNext.jsを自分の手で書いた経験を作ることを優先する。10/6はあくまで自分で決めた締め切り。ずるずる延ばさないための線として置いている。"
    }
  ],
  "references": [
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版（CodeMafia 外村将大・翔泳社）",
      "cost": "購入済み",
      "url": "",
      "week": "1〜2週目",
      "scope": "Ch7-8, 11-13",
      "note": "Ch1-6は完了済み。Ch14/16は今回外した。残るはCh7-8(スコープ・this)とCh11-13"
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
      "week": "3週目",
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
      "week": "5週目",
      "scope": "Routing：layout / page / 動的ルート",
      "note": "★N-1の教材。ファイル構成の決まりを確認する"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
      "week": "5週目",
      "scope": "Server Components と Client Components",
      "note": "★N-2の教材。ここが案件で一番効く。境界の判断基準を作る"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/data-fetching",
      "week": "5週目",
      "scope": "Data Fetching とキャッシュ",
      "note": "★N-3の教材。Ch13のfetchと何が変わるかを比べる"
    },
    {
      "track": "Next.js",
      "name": "Next.js 日本語訳（コミュニティ）",
      "cost": "無料",
      "url": "https://ja.next-community-docs.dev/docs/app-router/",
      "week": "5週目",
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
      "note": "今回の再設計で講座視聴は余力枠に落とした。参画後に続きを見る"
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
      "week": "4週目",
      "scope": "インストールと基本操作（Cmd+K・チャット・Tab補完）",
      "note": "推奨スキルに入っているので余力枠で触る"
    }
  ],
  "dropped": [
    {
      "track": "JS基礎",
      "item": "Ch16(モジュール)の要点",
      "why": "Reactを書けば import/export は自然に身につくため"
    },
    {
      "track": "JS基礎",
      "item": "Ch14のXSS再現",
      "why": "ReactとJSXは既定でエスケープするため、優先度が下がった"
    },
    {
      "track": "JS基礎",
      "item": "1週目の課題4本の再レビュー / 3課題の通し見直し",
      "why": "時間が足りない。弱点メモで代替する"
    },
    {
      "track": "TypeScript",
      "item": "tsconfig の strict 系オプションの確認",
      "why": "詰まったときに個別に調べれば足りる"
    },
    {
      "track": "TypeScript",
      "item": "TSで詰まりやすい箇所のまとめ",
      "why": "弱点リストに随時書く形で代替する"
    },
    {
      "track": "Claude Code",
      "item": "Skills入門 4-6 / 学習ログSkillの自作(CC-2)",
      "why": "講座視聴は参画後でよい"
    },
    {
      "track": "Claude Code",
      "item": "ハーネス設計 1-2 / 3-9 / 21-25",
      "why": "同上。12hを丸ごとReactとNext.jsへ回した"
    },
    {
      "track": "Claude Code",
      "item": "セキュリティ入門 / パーミッション設定(CC-3)",
      "why": "業務で既に設定済みのため後回し"
    },
    {
      "track": "Claude Code",
      "item": "CLAUDE.mdの整備 / コマンドのチートシート",
      "why": "CC-1で書いたものを使い続ければよい"
    }
  ],
  "skipped": [
    {
      "ch": "Ch9",
      "title": "クラス",
      "how": "読まない",
      "when": "既存コードでクラスコンポーネントやclass構文に出会ったとき。React関数コンポーネントを書く限り出番はない。優先度は一番低い"
    },
    {
      "ch": "Ch10",
      "title": "組み込みオブジェクト",
      "how": "索引として引く",
      "when": "Date・JSON・正規表現・String/Numberのメソッドで詰まったとき、その節だけ。通読しない。MDNで引く方が速い場合も多い"
    },
    {
      "ch": "Ch12",
      "title": "反復処理",
      "how": "要点のみ（1週目に実施）",
      "when": "分割代入とスプレッドだけ1週目にやる。for...of などはCh5とCh11で足りている"
    },
    {
      "ch": "Ch14",
      "title": "DOM",
      "how": "読まない",
      "when": "Reactが代わりにDOMを触るため出番が減る。useRefで直接DOMを操作する場面（4週目）で必要になったら該当節だけ"
    },
    {
      "ch": "Ch15",
      "title": "イベント",
      "how": "★該当節だけ先に読む可能性あり",
      "when": "3週目「フォームとイベント処理」で preventDefault が必ず出る。フォーム送信でページが再読み込みされて困ったら、この章のイベント既定動作の節を15分だけ読む"
    },
    {
      "ch": "Ch16",
      "title": "モジュール",
      "how": "書いて覚える",
      "when": "import/export は3週目以降ずっと書くので、手が先に覚える。default export と named export の違いで混乱したとき、または循環参照でエラーが出たときに戻る"
    },
    {
      "ch": "Ch17",
      "title": "Node.js",
      "how": "断片的に触れる",
      "when": "npm・package.json・node_modules は1週目の環境構築で実際に使う。npm scripts やパッケージのバージョン指定で詰まったら該当節だけ"
    }
  ]
};
