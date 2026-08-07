// 学習計画v2（8週・126時間版）の静的データ
export const PLAN = {
  "weeks": [
    {
      "no": 1,
      "start": "2026-08-07",
      "end": "2026-08-13",
      "js": "Ch1-5 基礎の急所（型・演算子・制御）",
      "cc": "入門の残り + Skills入門 + CLAUDE.md",
      "other": "開発環境を整える／TypeScriptを入れて動かす"
    },
    {
      "no": 2,
      "start": "2026-08-14",
      "end": "2026-08-20",
      "js": "Ch6-8 関数/スコープ/this ★最重要",
      "cc": "Skills実践 + 学習ログSkillを自作",
      "other": "TypeScriptの考え方・基本の型・型注釈"
    },
    {
      "no": 3,
      "start": "2026-08-21",
      "end": "2026-08-27",
      "js": "Ch11 コレクション / Ch16 モジュール要点",
      "cc": "ハーネス設計 1-9",
      "other": "型推論・ユニオン型・interface/type・tsconfig"
    },
    {
      "no": 4,
      "start": "2026-08-28",
      "end": "2026-09-03",
      "js": "Ch13 非同期処理 ★",
      "cc": "ハーネス設計 21-25",
      "other": "ジェネリクス・ユーティリティ型・既存コードのTS化"
    },
    {
      "no": 5,
      "start": "2026-09-04",
      "end": "2026-09-10",
      "js": "―（JS基礎は完了）",
      "cc": "セキュリティ入門 + パーミッション設定",
      "other": "React基礎：コンポーネント・props・state・絞り込み"
    },
    {
      "no": 6,
      "start": "2026-09-11",
      "end": "2026-09-17",
      "js": "―",
      "cc": "レビュー役サブエージェントで点検",
      "other": "Reactフック深掘り ★ ＋ 小アプリを完成させる"
    },
    {
      "no": 7,
      "start": "2026-09-18",
      "end": "2026-09-24",
      "js": "―",
      "cc": "Cursorを試して使い分けを決める",
      "other": "Next.js App Router ＋ ★Next.jsへコンバート"
    },
    {
      "no": 8,
      "start": "2026-09-25",
      "end": "2026-09-30",
      "js": "―",
      "cc": "CLAUDE.md整備・開発フローの型化",
      "other": "型整理・Vercel公開・説明の準備（参画直前）"
    }
  ],
  "steps": [
    {
      "id": "s1",
      "week": 1,
      "cat": "JS基礎",
      "no": 1,
      "todo": "作業フォルダ dokushu-js/ を作り、章ごとにサブフォルダを切る",
      "out": "フォルダ構成",
      "h": 0.5
    },
    {
      "id": "s2",
      "week": 1,
      "cat": "JS基礎",
      "no": 2,
      "todo": "Ch1-2を読み、課題「開発環境の動作確認ページ」を作る",
      "out": "index.html + main.js が動く",
      "h": 1.5
    },
    {
      "id": "s3",
      "week": 1,
      "cat": "JS基礎",
      "no": 3,
      "todo": "Ch3(変数とデータ型)を読み、課題「型判定チートシート」を作る",
      "out": "8種の判定表が出る",
      "h": 2.5
    },
    {
      "id": "s4",
      "week": 1,
      "cat": "JS基礎",
      "no": 4,
      "todo": "Ch4(演算子)を読み、課題「等価比較クイズ」を作る",
      "out": "15組中12組以上を予想できる",
      "h": 2.0
    },
    {
      "id": "s5",
      "week": 1,
      "cat": "JS基礎",
      "no": 5,
      "todo": "Ch5(制御構文)を読み、課題「FizzBuzz 3実装くらべ」を作る",
      "out": "3実装の出力が一致",
      "h": 1.5
    },
    {
      "id": "s6",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "Node.js と VSCode(またはCursor)を整える",
      "out": "node -v / npm -v が通る",
      "h": 1.0
    },
    {
      "id": "s7",
      "week": 1,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "TypeScriptを入れて .ts を1本コンパイルしてみる",
      "out": "tsc で .js が出力される",
      "h": 1.0
    },
    {
      "id": "s8",
      "week": 1,
      "cat": "Claude Code",
      "no": 1,
      "todo": "入門講座の残り3レッスンを消化し修了証を発行",
      "out": "修了証",
      "h": 0.5
    },
    {
      "id": "s9",
      "week": 1,
      "cat": "Claude Code",
      "no": 2,
      "todo": "Skills入門 1-3(基礎概念/セットアップ)を見る",
      "out": "Skillsの仕組みを説明できる",
      "h": 1.0
    },
    {
      "id": "s10",
      "week": 1,
      "cat": "Claude Code",
      "no": 3,
      "todo": "CLAUDE.mdを書く(課題CC-1)",
      "out": "CLAUDE.md",
      "h": 1.5
    },
    {
      "id": "s11",
      "week": 1,
      "cat": "JS基礎",
      "no": 6,
      "todo": "1週目の課題4本をClaude Codeにレビューさせ、指摘を自分で直す",
      "out": "レビュー反映",
      "h": 1.0
    },
    {
      "id": "s12",
      "week": 1,
      "cat": "振り返り",
      "no": 1,
      "todo": "弱点リストと学習メモ(notes/)を作る。以後は課題の直後に追記する",
      "out": "notes一式",
      "h": 1.0
    },
    {
      "id": "s13",
      "week": 1,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と翌週の配分調整",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s14",
      "week": 2,
      "cat": "JS基礎",
      "no": 1,
      "todo": "Ch6(関数)を読む",
      "out": "読了",
      "h": 1.5
    },
    {
      "id": "s15",
      "week": 2,
      "cat": "JS基礎",
      "no": 2,
      "todo": "課題「関数の書き方ラボ」。巻き上げは実際にエラーを出す",
      "out": "クロージャカウンタが動く",
      "h": 2.0
    },
    {
      "id": "s16",
      "week": 2,
      "cat": "JS基礎",
      "no": 3,
      "todo": "Ch7(スコープ)を読む",
      "out": "読了",
      "h": 1.0
    },
    {
      "id": "s17",
      "week": 2,
      "cat": "JS基礎",
      "no": 4,
      "todo": "課題「スコープ可視化」。varのsetTimeout問題を必ず再現する",
      "out": "varとletの差を説明できる",
      "h": 1.5
    },
    {
      "id": "s18",
      "week": 2,
      "cat": "JS基礎",
      "no": 5,
      "todo": "Ch8(this)を読み、課題「this早見表」を作る",
      "out": "6パターンを予想して当てられる",
      "h": 2.0
    },
    {
      "id": "s19",
      "week": 2,
      "cat": "JS基礎",
      "no": 6,
      "todo": "3課題を通しで見直し、説明できない箇所に印を付けて再読する",
      "out": "理解の穴リスト",
      "h": 1.0
    },
    {
      "id": "s20",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "サバイバルTypeScriptで「なぜ型が必要か」と基本の型を読む",
      "out": "読了メモ",
      "h": 1.5
    },
    {
      "id": "s21",
      "week": 2,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "型注釈を書いてみる。わざと型エラーを出して読み方に慣れる",
      "out": "エラーを自力で読める",
      "h": 1.5
    },
    {
      "id": "s22",
      "week": 2,
      "cat": "Claude Code",
      "no": 1,
      "todo": "Skills入門 4-6(リサーチ/PDF/PPT自動化)を見る",
      "out": "視聴完了",
      "h": 1.0
    },
    {
      "id": "s23",
      "week": 2,
      "cat": "Claude Code",
      "no": 2,
      "todo": "学習ログをまとめるSkillを自作する(課題CC-2)",
      "out": "動くSkill 1本",
      "h": 1.0
    },
    {
      "id": "s24",
      "week": 2,
      "cat": "振り返り",
      "no": 1,
      "todo": "クロージャとthisで曖昧な点を自分の言葉で書き直す",
      "out": "説明メモ",
      "h": 1.0
    },
    {
      "id": "s25",
      "week": 2,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と配分調整",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s26",
      "week": 3,
      "cat": "JS基礎",
      "no": 1,
      "todo": "Ch11(コレクション)を読む",
      "out": "読了",
      "h": 1.5
    },
    {
      "id": "s27",
      "week": 3,
      "cat": "JS基礎",
      "no": 2,
      "todo": "課題「配列メソッド総当たり」。商品データ20件をdata.jsとして保存する",
      "out": "data.js（後で使い回す）",
      "h": 2.5
    },
    {
      "id": "s28",
      "week": 3,
      "cat": "JS基礎",
      "no": 3,
      "todo": "Ch12の要点：分割代入とスプレッド構文を書く★Reactのstate更新で必須",
      "out": "組み替えが書ける",
      "h": 1.0
    },
    {
      "id": "s29",
      "week": 3,
      "cat": "JS基礎",
      "no": 4,
      "todo": "Ch16(モジュール)の要点。import/exportの形を押さえる",
      "out": "分割の形を理解",
      "h": 1.0
    },
    {
      "id": "s30",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "TS: 型推論が効く場所を確認し、注釈を書く場所を決める(課題TS-1)",
      "out": "書く場所の基準をメモ",
      "h": 1.5
    },
    {
      "id": "s31",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "TS: ユニオン型・リテラル型・オプショナルを使う",
      "out": "絞り込みが書ける",
      "h": 1.5
    },
    {
      "id": "s32",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "TS: interface と type の使い分けを整理する(課題TS-2)",
      "out": "使い分けの基準を書ける",
      "h": 1.5
    },
    {
      "id": "s33",
      "week": 3,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "TS: tsconfig の strict 系オプションが何を見ているか確認する",
      "out": "設定の意味をメモ",
      "h": 1.5
    },
    {
      "id": "s34",
      "week": 3,
      "cat": "Claude Code",
      "no": 1,
      "todo": "ハーネス設計 1-2(設計の基本)を見る",
      "out": "概念を説明できる",
      "h": 0.5
    },
    {
      "id": "s35",
      "week": 3,
      "cat": "Claude Code",
      "no": 2,
      "todo": "ハーネス設計 3-9(Planner/Generator/Evaluator, Plan Mode)を見る",
      "out": "3役を理解",
      "h": 1.5
    },
    {
      "id": "s36",
      "week": 3,
      "cat": "振り返り",
      "no": 1,
      "todo": "TSで詰まった型エラーを弱点リストに記録する",
      "out": "弱点リスト追記",
      "h": 1.0
    },
    {
      "id": "s37",
      "week": 3,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と配分調整",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s38",
      "week": 4,
      "cat": "JS基礎",
      "no": 1,
      "todo": "Ch13(非同期処理)を読む。イベントループの図をメモに描く",
      "out": "読了 + 図",
      "h": 1.5
    },
    {
      "id": "s39",
      "week": 4,
      "cat": "JS基礎",
      "no": 2,
      "todo": "課題「fetchで一覧取得」。通信中/成功/失敗の3状態を作る",
      "out": "3状態が画面に出る",
      "h": 1.5
    },
    {
      "id": "s40",
      "week": 4,
      "cat": "JS基礎",
      "no": 3,
      "todo": "Ch14の要点：innerHTMLのXSSを実際に発火させ、textContentで防ぐ",
      "out": "XSSを再現・対策",
      "h": 1.0
    },
    {
      "id": "s41",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "TS: ジェネリクスを使う。型を引数として渡す感覚を掴む",
      "out": "汎用関数が書ける",
      "h": 2.0
    },
    {
      "id": "s42",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "TS: Partial / Pick / Omit / Record を使ってみる",
      "out": "ユーティリティ型の使用例",
      "h": 1.5
    },
    {
      "id": "s43",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "TS: Ch11のdata.jsに型を付けてTS化する(課題TS-3)",
      "out": "型付きのdata.ts",
      "h": 2.0
    },
    {
      "id": "s44",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "TS: 型の絞り込み(typeof / in / タグ付きユニオン)を書く",
      "out": "絞り込みで型が確定する",
      "h": 1.5
    },
    {
      "id": "s45",
      "week": 4,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "TSで詰まりやすい箇所をまとめる(any の扱い、型アサーション)",
      "out": "注意点メモ",
      "h": 1.0
    },
    {
      "id": "s46",
      "week": 4,
      "cat": "Claude Code",
      "no": 1,
      "todo": "ハーネス設計 21-25(デプロイ準備/セキュリティ/APIキー)を見る",
      "out": "公開前チェックを把握",
      "h": 2.0
    },
    {
      "id": "s47",
      "week": 4,
      "cat": "振り返り",
      "no": 1,
      "todo": "TSの理解を確認してもらう(答えは書かせない)",
      "out": "理解メモ",
      "h": 1.0
    },
    {
      "id": "s48",
      "week": 4,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と配分調整",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s49",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "React公式で環境を作り、最初のコンポーネントを書く",
      "out": "画面が出る",
      "h": 2.0
    },
    {
      "id": "s50",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "props と state を理解する(課題R-1)",
      "out": "親子でデータが渡せる",
      "h": 2.0
    },
    {
      "id": "s51",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "props に TypeScript の型を付ける",
      "out": "型付きpropsが動く",
      "h": 1.5
    },
    {
      "id": "s52",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "リスト描画と key、条件分岐を書く(Ch11のデータを使う)",
      "out": "配列から一覧が出る",
      "h": 2.0
    },
    {
      "id": "s53",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "フォームとイベント処理を書く",
      "out": "入力が状態に反映される",
      "h": 1.5
    },
    {
      "id": "s54",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "絞り込みUIを作る(配列メソッドがそのまま使えることを確認)",
      "out": "絞り込みが効く",
      "h": 2.0
    },
    {
      "id": "s55",
      "week": 5,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "Reactでよく使う型を覚える(ReactNode/イベント型/ComponentProps)",
      "out": "型付きで書ける",
      "h": 1.0
    },
    {
      "id": "s56",
      "week": 5,
      "cat": "Claude Code",
      "no": 1,
      "todo": "セキュリティ入門 1-9(パーミッション/injection/MCP)を見る",
      "out": "視聴完了",
      "h": 1.0
    },
    {
      "id": "s57",
      "week": 5,
      "cat": "Claude Code",
      "no": 2,
      "todo": "パーミッション設定を自分の環境に反映する(課題CC-3)",
      "out": "設定済み",
      "h": 1.0
    },
    {
      "id": "s58",
      "week": 5,
      "cat": "振り返り",
      "no": 1,
      "todo": "ReactとJSの対応関係を整理する(どこがJSの知識で説明できるか)",
      "out": "対応メモ",
      "h": 1.0
    },
    {
      "id": "s59",
      "week": 5,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と配分調整",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s60",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "useState を掘る。再レンダリングがいつ起きるか確認する",
      "out": "説明できる",
      "h": 1.5
    },
    {
      "id": "s61",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "useEffect の基本と実行タイミングを確認する",
      "out": "いつ動くか説明できる",
      "h": 1.5
    },
    {
      "id": "s62",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "★依存配列を空にして古い値を掴むバグを再現し、直す(課題R-2)",
      "out": "バグの再現と修正",
      "h": 1.5
    },
    {
      "id": "s63",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "useEffect + fetch でデータ取得を書く(Ch13と比べる)",
      "out": "3状態が動く",
      "h": 1.5
    },
    {
      "id": "s64",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "状態をどこに置くか(リフトアップ)を設計する(課題R-3)",
      "out": "置き場を説明できる",
      "h": 1.5
    },
    {
      "id": "s65",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "カスタムフックに切り出す",
      "out": "動くカスタムフック",
      "h": 1.5
    },
    {
      "id": "s66",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "コンポーネントを責務で分割し、理由を書く★設計の話ができると評価が変わる",
      "out": "分割の理由を書ける",
      "h": 1.0
    },
    {
      "id": "s67",
      "week": 6,
      "cat": "TS/React/Next",
      "no": 8,
      "todo": "localStorage保存を足して小アプリを完成させる",
      "out": "リロードしても残る",
      "h": 2.0
    },
    {
      "id": "s68",
      "week": 6,
      "cat": "Claude Code",
      "no": 1,
      "todo": "レビュー役サブエージェントを作り、自分のReactコードを見せる(課題CC-5)",
      "out": "指摘を自分で直す",
      "h": 2.0
    },
    {
      "id": "s69",
      "week": 6,
      "cat": "振り返り",
      "no": 1,
      "todo": "フックで詰まった点を弱点リストに記録する",
      "out": "弱点リスト追記",
      "h": 1.0
    },
    {
      "id": "s70",
      "week": 6,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入。7週目のコンバートに向けて準備確認",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s71",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "Next.js公式Learnで環境構築し、App Routerの全体像を掴む",
      "out": "アプリが起動する",
      "h": 1.5
    },
    {
      "id": "s72",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "ルーティング、layout と page を書く(課題N-1)",
      "out": "複数ページを行き来できる",
      "h": 1.5
    },
    {
      "id": "s73",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "Server ComponentでuseStateを使いエラーを出す。違いを体感する",
      "out": "エラーを再現・理解",
      "h": 1.0
    },
    {
      "id": "s74",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "★6週目のReactアプリをNext.jsへコンバートする計画を書く(課題CONV-1)",
      "out": "移行計画メモ",
      "h": 1.0
    },
    {
      "id": "s75",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "コンポーネントを App Router の構成へ移す",
      "out": "同じ画面が出る",
      "h": 2.0
    },
    {
      "id": "s76",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "'use client' の境界を決めて分ける(課題N-2)",
      "out": "境界の理由を書ける",
      "h": 2.0
    },
    {
      "id": "s77",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "サーバー側でのデータ取得に置き換える(課題N-3)",
      "out": "サーバーで取得できる",
      "h": 1.0
    },
    {
      "id": "s78",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 8,
      "todo": "データ取得のキャッシュ挙動を確認する(再読み込みで再取得されるか)",
      "out": "キャッシュを説明できる",
      "h": 1.0
    },
    {
      "id": "s79",
      "week": 7,
      "cat": "TS/React/Next",
      "no": 9,
      "todo": "★コンバートで詰まった点と判断理由を記録する",
      "out": "コンバート記録",
      "h": 1.0
    },
    {
      "id": "s80",
      "week": 7,
      "cat": "Claude Code",
      "no": 1,
      "todo": "Cursorをインストールし、Claude Codeとの使い分けを決める(課題CC-4)",
      "out": "使い分けメモ",
      "h": 2.0
    },
    {
      "id": "s81",
      "week": 7,
      "cat": "振り返り",
      "no": 1,
      "todo": "Server/Clientの判断基準を自分の言葉で書く",
      "out": "判断基準メモ",
      "h": 1.0
    },
    {
      "id": "s82",
      "week": 7,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログ記入と残タスク確認",
      "out": "日次ログ",
      "h": 1.0
    },
    {
      "id": "s83",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 1,
      "todo": "型を整理する。any を潰し、共通の型を切り出す",
      "out": "anyゼロ",
      "h": 1.5
    },
    {
      "id": "s84",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 2,
      "todo": "リファクタと命名の見直し。AIの提案は採否を自分で判断する",
      "out": "リファクタ済み",
      "h": 1.5
    },
    {
      "id": "s85",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 3,
      "todo": "不要な再レンダリングを1箇所見つけて直す(key / 派生stateの見直し)",
      "out": "改善の理由を書ける",
      "h": 1.0
    },
    {
      "id": "s86",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 4,
      "todo": "READMEを書く(何を作ったか/技術選定/学んだこと)",
      "out": "README",
      "h": 1.0
    },
    {
      "id": "s87",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 5,
      "todo": "Vercelにデプロイして公開URLを用意する",
      "out": "公開URL",
      "h": 1.0
    },
    {
      "id": "s88",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 6,
      "todo": "React版とNext.js版の違いを言語化する(参画後に説明できる形に)",
      "out": "説明メモ",
      "h": 1.5
    },
    {
      "id": "s89",
      "week": 8,
      "cat": "TS/React/Next",
      "no": 7,
      "todo": "想定質問への回答を準備する(Server/Client、型設計、AI活用)",
      "out": "想定Q&A",
      "h": 1.5
    },
    {
      "id": "s90",
      "week": 8,
      "cat": "Claude Code",
      "no": 1,
      "todo": "CLAUDE.mdを整備し、自分の開発フローを型として言語化する",
      "out": "完成版CLAUDE.md",
      "h": 2.0
    },
    {
      "id": "s91",
      "week": 8,
      "cat": "Claude Code",
      "no": 2,
      "todo": "使ったコマンド/Skill/サブエージェントを1枚に整理する",
      "out": "チートシート",
      "h": 1.0
    },
    {
      "id": "s92",
      "week": 8,
      "cat": "振り返り",
      "no": 1,
      "todo": "8週間の学習を1枚に総括し、スキルシートに書ける形にする",
      "out": "総括メモ",
      "h": 1.0
    },
    {
      "id": "s93",
      "week": 8,
      "cat": "振り返り",
      "no": 2,
      "todo": "日次ログの最終記入と達成率の確認。参画後の学習計画を決める",
      "out": "全期間の記録",
      "h": 1.0
    }
  ],
  "tasks": [
    {
      "id": "t1",
      "track": "JS基礎",
      "code": "Ch1-2",
      "name": "開発環境の動作確認ページ",
      "goal": "HTMLとJSをファイルで分けて書けるようになり、開発者ツールでコードの動きを追えるようになる。",
      "reqs": [
        "index.html と main.js を別ファイルに分け、defer で読み込む",
        "console.log / warn / error を1回ずつ出す",
        "DevToolsのSourcesでブレークポイントを置き、止まることを確認する",
        "変数の中身をブレークポイントで止めて確認する"
      ],
      "feats": "script要素, console API, DevTools",
      "judge": "3種のログが出る／ブレークポイントで止まる",
      "review": "deferとasyncの違いと、この読み込み方が適切か説明して",
      "h": 0.5,
      "week": 1
    },
    {
      "id": "t2",
      "track": "JS基礎",
      "code": "Ch3",
      "name": "型判定チートシート",
      "goal": "値が何者なのかを確かめる方法が分かり、型による定番の落とし穴を避けられるようになる。TypeScriptの土台になる。",
      "reqs": [
        "数値/文字列/真偽値/null/undefined/配列/オブジェクト/関数 の8種を配列に入れる",
        "各値に typeof、Array.isArray、Object.prototype.toString.call を適用する",
        "結果を console.table で一覧表示する",
        "nullのtypeofがobjectになる理由を自分の言葉でコメントに書く",
        "let/const/var で同名の再宣言を試し、出たエラーを書き残す"
      ],
      "feats": "typeof, Array.isArray, console.table, let/const/var",
      "judge": "8種すべての判定結果が表で出る／nullと配列の挙動を説明できる",
      "review": "TypeScriptを使う場合、実行時の型判定はどこまで必要になるか教えて",
      "h": 1.0,
      "week": 1
    },
    {
      "id": "t3",
      "track": "JS基礎",
      "code": "Ch4",
      "name": "等価比較クイズ",
      "goal": "「等しい」の判定でハマる典型パターンを先に体験し、比較の書き方を迷わず選べるようになる。",
      "reqs": [
        "== と === を比べるペアを15組用意する",
        "実行前に自分の予想をコメントで書く",
        "実行して答え合わせをし、外れた組に印を付ける",
        "falsy値(0, '', null, undefined, NaN, false)を ?? と || で処理し違いを出す",
        "オプショナルチェイニング(?.)で存在しないプロパティにアクセスする"
      ],
      "feats": "比較演算子, ??, ||, ?., falsy",
      "judge": "15組中12組以上予想が当たる／??と||の違いを説明できる",
      "review": "?? と || の使い分けを、Reactのpropsのデフォルト値を例に説明して",
      "h": 1.0,
      "week": 1
    },
    {
      "id": "t4",
      "track": "JS基礎",
      "code": "Ch5",
      "name": "FizzBuzz 3実装くらべ",
      "goal": "同じ処理を複数の書き方で表現でき、どれが読みやすいか自分で判断できるようになる。",
      "reqs": [
        "FizzBuzzを(1)ネストしたif (2)早期return (3)switch(true) の3通りで書く",
        "ループを for / for...of の2通りで書き換える",
        "3実装の出力が完全に一致することを確認する",
        "どれが一番読みやすいか、理由をコメントに書く"
      ],
      "feats": "if/else, switch, for, for...of, 早期return",
      "judge": "3実装の出力が一致／可読性の判断理由を書けている",
      "review": "早期returnとネストしたifの使い分けの基準を教えて",
      "h": 1.0,
      "week": 1
    },
    {
      "id": "t5",
      "track": "Claude Code",
      "code": "CC-1",
      "name": "CLAUDE.mdを書く",
      "goal": "AIに毎回同じ説明をしなくて済むようになる。案件の必須スキル「AI駆動での開発経験」の土台。",
      "reqs": [
        "学習用リポジトリのルートに CLAUDE.md を作る",
        "「このリポジトリは何か」を3行で書く",
        "★「コードを書かせない。レビューだけ頼む」を明記する",
        "レビューしてほしい観点を3つ書く",
        "回答の言語や粒度など、好みを書く",
        "実際に起動して指示が効いているか試す"
      ],
      "feats": "CLAUDE.md, プロジェクト設定",
      "judge": "コードを書かせようとしてもレビュー方針が守られる",
      "review": "このCLAUDE.mdで意図が伝わるか、曖昧な指示があれば指摘して",
      "h": 1.5,
      "week": 1
    },
    {
      "id": "t6",
      "track": "JS基礎",
      "code": "Ch6",
      "name": "関数の書き方ラボ ★",
      "goal": "関数の書き方が何種類もある理由が分かり、場面に応じて選べるようになる。関数が値を覚えておく仕組み（クロージャ）はReactのフックを理解する前提になる。",
      "reqs": [
        "消費税計算を function宣言 / 関数式 / アロー関数 の3通りで書く",
        "デフォルト引数付きと rest引数の版を追加する",
        "高階関数として「割引関数を受け取って適用する関数」を作る",
        "クロージャでカウンタ(increment/get)を作る",
        "巻き上げ(hoisting)の違いを実際にエラーを出して確認する"
      ],
      "feats": "関数宣言/関数式/アロー関数, デフォルト引数, rest, 高階関数, クロージャ",
      "judge": "hoistingの差を実エラーで確認／クロージャが値を保持する理由を説明できる",
      "review": "クロージャがReactのuseStateやuseEffectとどう関係するか、先取りで教えて",
      "h": 2.0,
      "week": 2
    },
    {
      "id": "t7",
      "track": "JS基礎",
      "code": "Ch7",
      "name": "スコープ可視化 ★",
      "goal": "変数がどこから見えるかを説明できるようになり、「なぜかこの変数が古い」で止まらなくなる。useEffectで古い値を掴むバグの原因がここにある。",
      "reqs": [
        "グローバル/関数/ブロックの3スコープで同名変数を宣言し、どこから見えるか出力する",
        "varのループ変数問題(setTimeoutで全部同じ値)を再現する",
        "同じコードをletに変えて直り方を確認する",
        "クロージャで擬似プライベート変数を持つカウンタモジュールを作る",
        "スコープチェーンを図でメモに描く"
      ],
      "feats": "スコープ, var/let/const, クロージャ, スコープチェーン, TDZ",
      "judge": "varとletのループ挙動の差を再現し理由を説明できる",
      "review": "この「古い値を掴む」現象が、Reactでどう再現するか例を教えて（コードは書かないで）",
      "h": 1.5,
      "week": 2
    },
    {
      "id": "t8",
      "track": "JS基礎",
      "code": "Ch8",
      "name": "this早見表を実験で作る ★",
      "goal": "thisが何を指すか状況ごとに言えるようになる。React関数コンポーネントではthisを使わないが、既存のクラスコンポーネントや他人のコードを読むときに必要。",
      "reqs": [
        "同じメソッドを6パターンで呼ぶ（メソッド/取り出して呼ぶ/アロー/call・bind/コンストラクタ/イベントハンドラ）",
        "各パターンのthisを実行前に予想してコメントに書く",
        "実行して答え合わせし、早見表としてまとめる",
        "イベントハンドラでthisを失うバグを再現し、bindとアローの2通りで直す"
      ],
      "feats": "this, call/apply/bind, アロー関数, new, イベントハンドラ",
      "judge": "6パターンを事前予想して当てられる／バグを2通りで直せる",
      "review": "React関数コンポーネントでthisが不要になった理由を説明して",
      "h": 2.0,
      "week": 2
    },
    {
      "id": "t9",
      "track": "Claude Code",
      "code": "CC-2",
      "name": "学習ログをまとめるSkillを自作する",
      "goal": "繰り返す作業を型として保存できるようになる。案件でも同じ発想が使える。",
      "reqs": [
        "毎週やる作業を1つ選ぶ（週次の振り返り生成など）",
        "SKILL.md を書き、いつ発動するかを description に書く",
        "入力と出力を決めて書く",
        "実際に動かし、ズレた箇所は SKILL.md 側で直す",
        "2回目を実行して同じ品質で出ることを確認する"
      ],
      "feats": "Claude Code Skills, SKILL.md, description設計",
      "judge": "同じSkillを2回動かしてどちらも使える出力になる",
      "review": "このSkillのdescriptionは意図した場面で発動しそうか教えて",
      "h": 2.0,
      "week": 2
    },
    {
      "id": "t10",
      "track": "JS基礎",
      "code": "Ch11",
      "name": "配列メソッド総当たり演習 ★",
      "goal": "一覧データの絞り込み・並べ替え・集計を自在に書けるようになる。Reactのリスト描画はほぼこれなので、実務で一番使う。",
      "reqs": [
        "商品データ20件の配列を作る(id, name, category, price, stock)",
        "filter / map / sort / reduce をそれぞれ使う",
        "find / some / every を使う",
        "Set でカテゴリ一覧を重複排除、Map で id→商品 の索引を作る",
        "reduce でカテゴリ別の集計オブジェクトを作る",
        "このデータを data.js として保存する（4週目に型を付け、以降ずっと使う）"
      ],
      "feats": "filter, map, sort, reduce, find, some/every, Set, Map, スプレッド",
      "judge": "8種類以上のメソッドを使い結果を確認／data.jsが保存されている",
      "review": "sortの破壊的変更がReactの再レンダリングで問題になる理由を教えて",
      "h": 2.5,
      "week": 3
    },
    {
      "id": "t11",
      "track": "JS基礎",
      "code": "Ch12",
      "name": "分割代入とスプレッド ★Reactで毎日使う",
      "goal": "配列やオブジェクトを組み替える書き方が身につく。Reactのstate更新は「元を壊さず新しい値を作る」書き方が基本なので、ここができないと詰まる。",
      "reqs": [
        "分割代入で配列とオブジェクトから値を取り出す",
        "関数の引数で分割代入する（Reactのpropsと同じ書き方）",
        "スプレッドで配列に要素を足した新しい配列を作る（元の配列を変えない）",
        "スプレッドでオブジェクトの一部だけ変えた新しいオブジェクトを作る",
        "push と スプレッド の違いを、元の配列が変わるかで比べる",
        "ネストしたオブジェクトをスプレッドで更新し、浅いコピーの限界を確認する"
      ],
      "feats": "分割代入, スプレッド構文, 非破壊的な更新, 浅いコピー",
      "judge": "元の配列/オブジェクトを変えずに新しい値を作れる／浅いコピーの限界を説明できる",
      "review": "この非破壊的な更新が、ReactのuseStateでなぜ必須なのか説明して",
      "h": 1.0,
      "week": 3
    },
    {
      "id": "t12",
      "track": "TypeScript",
      "code": "TS-1",
      "name": "型注釈と型推論を体で覚える",
      "goal": "型を書く場所と、書かなくていい場所の判断がつくようになる。案件の必須スキル。",
      "reqs": [
        "変数・引数・戻り値に型注釈を付ける",
        "型推論が効く場所であえて注釈を消し、動くことを確認する",
        "わざと型エラーを5種類出して、エラーメッセージの読み方に慣れる",
        "any を使った場合に何が失われるか確認する",
        "ユニオン型で「文字列または数値」を受け取る関数を書く",
        "リテラル型で 'asc' | 'desc' のような選択肢を表現する"
      ],
      "feats": "型注釈, 型推論, union型, リテラル型, any, tsc",
      "judge": "型エラーを自力で読んで直せる／anyを避ける理由を説明できる",
      "review": "型注釈を書くべき場所と推論に任せる場所の基準を、実務の観点で教えて",
      "h": 1.5,
      "week": 3
    },
    {
      "id": "t13",
      "track": "TypeScript",
      "code": "TS-2",
      "name": "interface・type・ジェネリクス",
      "goal": "他人が書いた型定義を読めるようになる。Reactのpropsもここで書く。",
      "reqs": [
        "オブジェクトの形を interface と type の両方で書く",
        "使い分けの基準を自分の言葉でメモする（拡張のしやすさなど）",
        "ジェネリクスで「配列の先頭を返す関数」を型安全に書く",
        "Partial / Pick / Omit / Record をそれぞれ使ってみる",
        "型の絞り込み（typeof / in / タグ付きユニオン）を書く"
      ],
      "feats": "interface, type, ジェネリクス, ユーティリティ型, 型の絞り込み",
      "judge": "ジェネリック関数が型安全に動く／絞り込みで型エラーが消える",
      "review": "interfaceとtypeの使い分けについて、私のメモが実務の感覚と合っているか見て",
      "h": 1.5,
      "week": 3
    },
    {
      "id": "t14",
      "track": "Claude Code",
      "code": "CC-3",
      "name": "ハーネスを1つ組む",
      "goal": "AIに考えさせる役・作らせる役・検査する役を分ける発想が使えるようになる。",
      "reqs": [
        "Planner / Generator / Evaluator の役割を1行ずつ書く",
        "3役をサブエージェントとして定義する",
        "小さめの題材で1周させる",
        "Plan Modeで計画を出させ、自分の想定と突き合わせる",
        "★JSやReactの課題本体には使わない（雑務にとどめる）"
      ],
      "feats": "サブエージェント, Plan Mode, コンテキスト分離",
      "judge": "3役が1周し、Evaluatorが意味のある指摘を出す",
      "review": "この3役の分け方は妥当か、責務が重なっている箇所を指摘して",
      "h": 1.0,
      "week": 3
    },
    {
      "id": "t15",
      "track": "JS基礎",
      "code": "Ch13",
      "name": "公開APIビューア ★",
      "goal": "外部からデータを取ってきて画面に出せるようになる。通信の待ち時間と失敗の扱いが分かる。ReactでもNext.jsでも毎日使う。",
      "reqs": [
        "fetch で公開APIから一覧を取得しDOMに表示する",
        "async/await で書き、通信中はローディング表示を出す",
        "try/catch でエラーを捕まえ、失敗時は画面にメッセージを出す",
        "存在しないURLを叩き、fetchが404でrejectしないことを確認する",
        "Promise.all で2つのAPIを並列取得する",
        "setTimeoutをPromise化した sleep 関数を自作する"
      ],
      "feats": "fetch, async/await, Promise, try/catch, Promise.all",
      "judge": "通信中／成功／失敗の3状態が画面に出る／404の扱いを説明できる",
      "review": "この3状態の管理が、Reactではどう変わるか概要だけ教えて",
      "h": 3.0,
      "week": 4
    },
    {
      "id": "t16",
      "track": "JS基礎",
      "code": "Ch14",
      "name": "DOMとXSSの確認",
      "goal": "ブラウザが画面をどう組み立てているかが分かる。ReactのJSXが何を自動で防いでくれているのかを理解するための前提になる。",
      "reqs": [
        "createElement と textContent で要素を1つ作って表示する",
        "innerHTMLに <img src=x onerror=alert(1)> を入れて発火することを確認する",
        "同じ値を textContent で入れると発火しないことを確認する",
        "なぜ発火するのか／しないのかを自分の言葉でメモする"
      ],
      "feats": "createElement, textContent/innerHTML, XSS",
      "judge": "XSSが発火し、textContentで防げることを自分の画面で確認できた",
      "review": "ReactのJSXがXSSをどう防ぐか、dangerouslySetInnerHTMLの意味も含めて教えて",
      "h": 1.0,
      "week": 4
    },
    {
      "id": "t17",
      "track": "TypeScript",
      "code": "TS-3",
      "name": "既存のJSコードに型を付ける",
      "goal": "型のない既存コードをTS化する感覚が掴める。案件のコンバート作業に直結する。",
      "reqs": [
        "Ch11で作った data.js を data.ts に変える",
        "商品データの型を interface で定義する",
        "配列メソッドの戻り値に型が付いていることを確認する",
        "カテゴリをリテラル型のユニオンにする",
        "型を付けたことで見つかったバグや曖昧さをメモする"
      ],
      "feats": "型定義, .js→.ts移行, 型付き配列メソッド",
      "judge": "型エラーゼロでコンパイルが通る／型を付けて気づいた点を書けている",
      "review": "既存JSをTS化するときの進め方（どこから手を付けるか）を教えて",
      "h": 1.0,
      "week": 4
    },
    {
      "id": "t18",
      "track": "TypeScript",
      "code": "TS-4",
      "name": "Reactでよく使う型を覚える",
      "goal": "Reactを書くときに毎回出てくる型を先に押さえる。ここを知らないと型エラーのたびに手が止まる。実務で一番効く。",
      "reqs": [
        "子要素を受け取るpropsに ReactNode を使う",
        "onChange / onClick のイベント型を書く（any にしない）",
        "ComponentProps で既存要素のpropsを流用する",
        "useState にジェネリクスで型を渡す（初期値がnullの場合も）",
        "型が分からないときの調べ方を決める（エディタのホバー、公式の型定義）"
      ],
      "feats": "ReactNode, イベント型, ComponentProps, useState<T>",
      "judge": "イベントハンドラの型をanyなしで書ける／型定義を自力で調べられる",
      "review": "Reactの型で初心者がanyに逃げがちな箇所と、その正しい書き方を教えて",
      "h": 1.0,
      "week": 5
    },
    {
      "id": "t19",
      "track": "React",
      "code": "R-1",
      "name": "props と state",
      "goal": "Reactの基本単位が分かる。データが上から下へ流れる感覚を掴む。",
      "reqs": [
        "コンポーネントを3つ以上に分ける",
        "親から子へ props でデータを渡す",
        "props に TypeScript の型を付ける",
        "useState で状態を持ち、ボタンで更新する",
        "props と state の違いを自分の言葉でメモする",
        "Ch11のデータを使って一覧を描画する（key を正しく付ける）"
      ],
      "feats": "コンポーネント, props, useState, JSX, key",
      "judge": "一覧が描画され、ボタン操作で表示が変わる／propsとstateの違いを説明できる",
      "review": "propsとstateの境界の引き方を、判断に迷う具体例つきで教えて",
      "h": 2.0,
      "week": 5
    },
    {
      "id": "t20",
      "track": "Claude Code",
      "code": "CC-4",
      "name": "セキュリティ設定を自分の環境に入れる",
      "goal": "案件のコードを触る前に、事故を起こさない設定を用意できるようになる。",
      "reqs": [
        "パーミッション設定を書き、許可と確認が要る操作を分ける",
        "実行してほしくない操作が実際に止まるか試す",
        "プロンプトインジェクションを1行で説明できるようにする",
        "MCPサーバー追加時の確認事項を3つメモする",
        "リポジトリに機密情報が無いか点検し .gitignore を整える"
      ],
      "feats": "パーミッション設定, /sandbox, プロンプトインジェクション, .gitignore",
      "judge": "禁止したい操作が止まる／鍵やトークンが無いことを確認できた",
      "review": "この設定で案件のコードを触っても安全か、抜けを指摘して",
      "h": 1.0,
      "week": 5
    },
    {
      "id": "t21",
      "track": "React",
      "code": "R-2",
      "name": "useEffectと依存配列 ★",
      "goal": "Reactで一番ハマる箇所を先に潰す。Ch7のクロージャの知識がここで効く。",
      "reqs": [
        "useEffect でマウント時に一度だけ処理を実行する",
        "依存配列を空にした場合と入れた場合の違いを確認する",
        "★依存配列を空にして古い値を掴むバグを意図的に再現する",
        "そのバグを依存配列の修正で直す",
        "クリーンアップ関数を書き、いつ呼ばれるか確認する",
        "Ch13のAPI取得をuseEffectで行い、3状態を表示する"
      ],
      "feats": "useEffect, 依存配列, クリーンアップ, クロージャ, 非同期",
      "judge": "古い値を掴むバグを再現・修正できる／クリーンアップの発火タイミングを説明できる",
      "review": "依存配列の書き忘れで起きる問題のパターンを整理して教えて",
      "h": 2.5,
      "week": 6
    },
    {
      "id": "t22",
      "track": "React",
      "code": "R-3",
      "name": "状態の置き場所を設計する",
      "goal": "「この状態はどこに持つべきか」を判断できるようになる。設計の話ができると評価が変わる。",
      "reqs": [
        "2つの子コンポーネントで共有する状態をリフトアップする",
        "どこまで上げるべきか、上げすぎの弊害もメモする",
        "派生できる値は状態にしない（絞り込み結果は計算で出す）",
        "カスタムフックを1つ作り、状態とロジックを切り出す",
        "自分の設計判断を3行で説明できるようにする"
      ],
      "feats": "リフトアップ, 派生state, カスタムフック, 単一責任",
      "judge": "状態の置き場所を理由付きで説明できる／カスタムフックが動く",
      "review": "私の状態設計をレビューして。持ちすぎ・上げすぎがあれば指摘だけお願いします",
      "h": 2.0,
      "week": 6
    },
    {
      "id": "t23",
      "track": "React",
      "code": "R-4",
      "name": "コンポーネントを責務で分割する",
      "goal": "大きな画面を責務で切れるようになる。案件では新しい拠点向けの画面設計を任される可能性が高いので、分割の理由を語れると評価が変わる。",
      "reqs": [
        "1つの大きなコンポーネントを責務で3〜5個に分ける",
        "表示だけのコンポーネントと、状態を持つものを分ける",
        "各コンポーネントのpropsの型を定義する",
        "分割の理由を1行ずつ書く",
        "分割しすぎて逆に読みにくくなる例も作り、粒度の感覚を掴む"
      ],
      "feats": "コンポーネント設計, 責務分割, props設計, 表示と状態の分離",
      "judge": "分割の理由を全コンポーネントについて書けている",
      "review": "この分割粒度は実務として妥当か、過不足を指摘して",
      "h": 1.0,
      "week": 6
    },
    {
      "id": "t24",
      "track": "コンバート",
      "code": "CONV-1",
      "name": "小さなReactアプリを完成させる",
      "goal": "ここまでの知識を1つのアプリに統合できるようになる。次週コンバートするための土台。規模は小さくてよい。動くものを完成させることが目的。",
      "reqs": [
        "Ch11の商品データ20件を題材にする（新しく作らない）",
        "一覧表示・カテゴリ絞り込み・キーワード検索を実装する",
        "propsとstateの型をTypeScriptで定義する",
        "useEffect + fetch でデータを外部から取得する形にする",
        "お気に入りなどの状態をlocalStorageに保存する",
        "★動く状態で一度止める。作り込みすぎない（次週コンバートするため）"
      ],
      "feats": "React, TypeScript, useState/useEffect, localStorage",
      "judge": "絞り込みと検索が効き、リロードしても状態が残る",
      "review": "このアプリはNext.jsへ移しやすい構造になっているか、事前に指摘して",
      "h": 6.5,
      "week": 6
    },
    {
      "id": "t25",
      "track": "Claude Code",
      "code": "CC-5",
      "name": "レビュー役に自分のコードを見せる",
      "goal": "AIのレビューを取捨選択して使えるようになる。丸呑みしないことが実力になる。",
      "reqs": [
        "コードレビュー専用のサブエージェントを作る",
        "観点を指定する（型設計/責務分割/フックの使い方/エラー処理）",
        "自分が書いたReactコードをレビューさせる",
        "★指摘を1つずつ理解し、自分の手で直す",
        "採用しなかった指摘は理由を1行で書く",
        "「言われて初めて気づいた」ものを弱点リストに追記する"
      ],
      "feats": "サブエージェント, コードレビュー, 指摘の取捨選択",
      "judge": "全指摘に採否の判断理由が書けている",
      "review": "私が採用しなかった指摘について、見送って良い判断か意見を聞かせて",
      "h": 3.0,
      "week": 6
    },
    {
      "id": "t26",
      "track": "Next.js",
      "code": "N-1",
      "name": "App Routerのルーティング",
      "goal": "Next.jsのファイル構成のルールが分かる。案件のコンバート先がこれ。",
      "reqs": [
        "create-next-app でApp Router構成のプロジェクトを作る",
        "複数ページを作り、リンクで行き来する",
        "layout.tsx で共通のヘッダーを置く",
        "動的ルート([id])でパラメータを受け取る",
        "loading.tsx と error.tsx を置いて挙動を確認する",
        "Pages RouterとApp Routerの違いを1行でメモする"
      ],
      "feats": "App Router, layout/page, 動的ルート, Link, loading/error",
      "judge": "3ページ以上を行き来でき、動的ルートでパラメータが取れる",
      "review": "App RouterのファイルベースルーティングとReact Routerの違いを整理して",
      "h": 2.0,
      "week": 7
    },
    {
      "id": "t27",
      "track": "Next.js",
      "code": "N-2",
      "name": "Server ComponentsとClient Components ★",
      "goal": "Next.jsで一番の分岐点。どちらで書くかを判断できると、コンバート作業の質が変わる。",
      "reqs": [
        "既定がServer Componentであることを確認する",
        "'use client' を付けた場合と付けない場合の違いを確認する",
        "Server Componentで useState を使おうとしてエラーを出す",
        "Client Componentの境界をなるべく下げる（葉に近づける）構成にする",
        "Server ComponentからClient Componentへpropsを渡す（関数は渡せないことも確認）",
        "判断基準を自分の言葉で3行にまとめる"
      ],
      "feats": "Server/Client Components, 'use client', 境界設計, シリアライズ",
      "judge": "エラーを再現・理解できる／どちらで書くかを理由付きで判断できる",
      "review": "Server/Clientの境界の引き方について、私の判断基準が実務と合っているか見て",
      "h": 2.5,
      "week": 7
    },
    {
      "id": "t28",
      "track": "Next.js",
      "code": "N-3",
      "name": "データ取得とServer Actions",
      "goal": "サーバー側でデータを取る書き方が分かる。Ch13で書いたfetchとの違いを体感する。",
      "reqs": [
        "Server Componentの中で直接 fetch してデータを表示する",
        "Ch13でClient側に書いた取得処理と比べ、何が減ったかメモする",
        "キャッシュの挙動を確認する（再読み込みで再取得されるか）",
        "Server Actions でフォーム送信を処理する",
        "エラー時の表示を用意する"
      ],
      "feats": "Server Componentでのfetch, キャッシュ, Server Actions, revalidate",
      "judge": "サーバー側取得で一覧が出る／フォーム送信が動く",
      "review": "Server ActionsとAPI Routesの使い分けを、実務の判断基準で教えて",
      "h": 1.0,
      "week": 7
    },
    {
      "id": "t29",
      "track": "コンバート",
      "code": "CONV-2",
      "name": "Next.jsへコンバートする ★本命",
      "goal": "案件の推奨スキル「アーキテクチャコンバートの経験」を実際に作る。参画後に最初に任される作業がこれと同じ形になる。",
      "reqs": [
        "移行計画を先に書く（何を・どの順で移すか）",
        "create-next-app でApp Router構成のプロジェクトを作る",
        "コンポーネントをそのまま移し、まず動く状態にする",
        "★どこに 'use client' を置くか決め、境界をなるべく葉に近づける",
        "データ取得をServer Componentへ移せる部分は移す",
        "localStorageを使う部分はClient Componentに閉じ込める",
        "★詰まった点と「なぜそう判断したか」を記録する"
      ],
      "feats": "App Router, Server/Client境界, 'use client', 段階的移行",
      "judge": "React版と同じ機能がNext.jsで動く／境界の判断理由を説明できる",
      "review": "私のコンバート手順をレビューして。移行の順番として妥当か指摘だけお願いします",
      "h": 7.0,
      "week": 7
    },
    {
      "id": "t30",
      "track": "Claude Code",
      "code": "CC-6",
      "name": "Cursorを試して使い分けを決める",
      "goal": "案件の推奨スキルであるCursorを触っておき、Claude Codeとの使い分けを言語化できるようになる。",
      "reqs": [
        "Cursorをインストールし、学習用リポジトリを開く",
        "インライン編集（Cmd+K）とチャットの違いを試す",
        "Tab補完がどこまで効くか確認する",
        "同じ機能をClaude CodeとCursorの両方で作ってみる",
        "どちらがどの作業に向くか、自分の言葉で3行にまとめる",
        "面談で「AI駆動開発の経験」を聞かれた想定で説明を用意する"
      ],
      "feats": "Cursor, インライン編集, Tab補完, AIツールの使い分け",
      "judge": "両方で同じ機能を作り、使い分けを説明できる",
      "review": "AI駆動開発の経験について、面談で話す内容としてこれで足りるか意見が欲しい",
      "h": 3.0,
      "week": 7
    },
    {
      "id": "t31",
      "track": "コンバート",
      "code": "CONV-3",
      "name": "仕上げ・公開・説明の準備",
      "goal": "人に見せられる状態に整え、参画後に語れる形にする。スキルシートと初回の打ち合わせで使う材料になる。",
      "reqs": [
        "any を潰し、共通の型を切り出す",
        "命名を見直し、重複した処理をまとめる",
        "READMEを書く（何を作ったか／技術選定／学んだこと）",
        "Vercelにデプロイして公開URLを用意する",
        "React版とNext.js版の違いを、人に説明できる形で言語化する",
        "想定質問への回答を準備する（Server/Client、型設計、AI活用）"
      ],
      "feats": "リファクタ, 型整理, Vercel, 説明力",
      "judge": "公開URLで動く／コンバートの判断を口頭で説明できる",
      "review": "「コンバート経験を教えて」と聞かれた想定で私の説明を聞き、改善点を指摘して",
      "h": 6.0,
      "week": 8
    }
  ],
  "days": [
    {
      "date": "2026-08-07",
      "wd": "金",
      "week": 1,
      "target": 2.0,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "作業フォルダ dokushu-js/ を作り、章ごとにサブフォルダを切る",
          "h": 0.5
        },
        {
          "cat": "Claude Code",
          "todo": "入門講座の残り3レッスンを消化し修了証を発行",
          "h": 0.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "Node.js と VSCode(またはCursor)を整える",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-08",
      "wd": "土",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch1-2を読み、課題「開発環境の動作確認ページ」を作る",
          "h": 1.5
        },
        {
          "cat": "Claude Code",
          "todo": "Skills入門 1-3(基礎概念/セットアップ)を見る",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-09",
      "wd": "日",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch3(変数とデータ型)を読み、課題「型判定チートシート」を作る",
          "h": 2.5
        }
      ]
    },
    {
      "date": "2026-08-10",
      "wd": "月",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch4(演算子)を読み、課題「等価比較クイズ」を作る",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-08-11",
      "wd": "火",
      "week": 1,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "CLAUDE.mdを書く(課題CC-1)",
          "h": 1.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "TypeScriptを入れて .ts を1本コンパイルしてみる",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-12",
      "wd": "水",
      "week": 1,
      "target": 2.0,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch5(制御構文)を読み、課題「FizzBuzz 3実装くらべ」を作る",
          "h": 1.5
        },
        {
          "cat": "JS基礎",
          "todo": "1週目の課題4本をClaude Codeにレビューさせ、指摘を自分で直す",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-13",
      "wd": "木",
      "week": 1,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "弱点リストと学習メモ(notes/)を作る。以後は課題の直後に追記する",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入と翌週の配分調整",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-14",
      "wd": "金",
      "week": 2,
      "target": 2.0,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch6(関数)を読む",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-08-15",
      "wd": "土",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "サバイバルTypeScriptで「なぜ型が必要か」と基本の型を読む",
          "h": 1.5
        },
        {
          "cat": "Claude Code",
          "todo": "Skills入門 4-6(リサーチ/PDF/PPT自動化)を見る",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-16",
      "wd": "日",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "課題「関数の書き方ラボ」。巻き上げは実際にエラーを出す",
          "h": 2.0
        },
        {
          "cat": "JS基礎",
          "todo": "Ch7(スコープ)を読む",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-17",
      "wd": "月",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "課題「スコープ可視化」。varのsetTimeout問題を必ず再現する",
          "h": 1.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "型注釈を書いてみる。わざと型エラーを出して読み方に慣れる",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-08-18",
      "wd": "火",
      "week": 2,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "学習ログをまとめるSkillを自作する(課題CC-2)",
          "h": 1.0
        },
        {
          "cat": "JS基礎",
          "todo": "3課題を通しで見直し、説明できない箇所に印を付けて再読する",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-19",
      "wd": "水",
      "week": 2,
      "target": 2.0,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch8(this)を読み、課題「this早見表」を作る",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-08-20",
      "wd": "木",
      "week": 2,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "クロージャとthisで曖昧な点を自分の言葉で書き直す",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入と配分調整",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-21",
      "wd": "金",
      "week": 3,
      "target": 2.0,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch11(コレクション)を読む",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-08-22",
      "wd": "土",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: 型推論が効く場所を確認し、注釈を書く場所を決める(課題TS-1)",
          "h": 1.5
        },
        {
          "cat": "Claude Code",
          "todo": "ハーネス設計 1-2(設計の基本)を見る",
          "h": 0.5
        }
      ]
    },
    {
      "date": "2026-08-23",
      "wd": "日",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "課題「配列メソッド総当たり」。商品データ20件をdata.jsとして保存する",
          "h": 2.5
        }
      ]
    },
    {
      "date": "2026-08-24",
      "wd": "月",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: ユニオン型・リテラル型・オプショナルを使う",
          "h": 1.5
        },
        {
          "cat": "Claude Code",
          "todo": "ハーネス設計 3-9(Planner/Generator/Evaluator, Plan Mode)を見る",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-08-25",
      "wd": "火",
      "week": 3,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: interface と type の使い分けを整理する(課題TS-2)",
          "h": 1.5
        },
        {
          "cat": "JS基礎",
          "todo": "Ch12の要点：分割代入とスプレッド構文を書く★Reactのstate更新で必須",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-26",
      "wd": "水",
      "week": 3,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: tsconfig の strict 系オプションが何を見ているか確認する",
          "h": 1.5
        },
        {
          "cat": "JS基礎",
          "todo": "Ch16(モジュール)の要点。import/exportの形を押さえる",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-27",
      "wd": "木",
      "week": 3,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "TSで詰まった型エラーを弱点リストに記録する",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入と配分調整",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-08-28",
      "wd": "金",
      "week": 4,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: ジェネリクスを使う。型を引数として渡す感覚を掴む",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-08-29",
      "wd": "土",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch13(非同期処理)を読む。イベントループの図をメモに描く",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-08-30",
      "wd": "日",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "ハーネス設計 21-25(デプロイ準備/セキュリティ/APIキー)を見る",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-08-31",
      "wd": "月",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: Partial / Pick / Omit / Record を使ってみる",
          "h": 1.5
        },
        {
          "cat": "JS基礎",
          "todo": "課題「fetchで一覧取得」。通信中/成功/失敗の3状態を作る",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-01",
      "wd": "火",
      "week": 4,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "TS: Ch11のdata.jsに型を付けてTS化する(課題TS-3)",
          "h": 2.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "TS: 型の絞り込み(typeof / in / タグ付きユニオン)を書く",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-02",
      "wd": "水",
      "week": 4,
      "target": 2.0,
      "plan": [
        {
          "cat": "JS基礎",
          "todo": "Ch14の要点：innerHTMLのXSSを実際に発火させ、textContentで防ぐ",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "TSで詰まりやすい箇所をまとめる(any の扱い、型アサーション)",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-03",
      "wd": "木",
      "week": 4,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "TSの理解を確認してもらう(答えは書かせない)",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入と配分調整",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-04",
      "wd": "金",
      "week": 5,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "React公式で環境を作り、最初のコンポーネントを書く",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-09-05",
      "wd": "土",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "セキュリティ入門 1-9(パーミッション/injection/MCP)を見る",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "props と state を理解する(課題R-1)",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-09-06",
      "wd": "日",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "props に TypeScript の型を付ける",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-07",
      "wd": "月",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "リスト描画と key、条件分岐を書く(Ch11のデータを使う)",
          "h": 2.0
        },
        {
          "cat": "Claude Code",
          "todo": "パーミッション設定を自分の環境に反映する(課題CC-3)",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-08",
      "wd": "火",
      "week": 5,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "フォームとイベント処理を書く",
          "h": 1.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "Reactでよく使う型を覚える(ReactNode/イベント型/ComponentProps)",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-09",
      "wd": "水",
      "week": 5,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "絞り込みUIを作る(配列メソッドがそのまま使えることを確認)",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-09-10",
      "wd": "木",
      "week": 5,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "ReactとJSの対応関係を整理する(どこがJSの知識で説明できるか)",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入と配分調整",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-11",
      "wd": "金",
      "week": 6,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "useState を掘る。再レンダリングがいつ起きるか確認する",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-12",
      "wd": "土",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "レビュー役サブエージェントを作り、自分のReactコードを見せる(課題CC-5)",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-09-13",
      "wd": "日",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "useEffect の基本と実行タイミングを確認する",
          "h": 1.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "★依存配列を空にして古い値を掴むバグを再現し、直す(課題R-2)",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-14",
      "wd": "月",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "useEffect + fetch でデータ取得を書く(Ch13と比べる)",
          "h": 1.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "状態をどこに置くか(リフトアップ)を設計する(課題R-3)",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-15",
      "wd": "火",
      "week": 6,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "カスタムフックに切り出す",
          "h": 1.5
        },
        {
          "cat": "TS/React/Next",
          "todo": "コンポーネントを責務で分割し、理由を書く★設計の話ができると評価が変わる",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-16",
      "wd": "水",
      "week": 6,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "localStorage保存を足して小アプリを完成させる",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-09-17",
      "wd": "木",
      "week": 6,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "フックで詰まった点を弱点リストに記録する",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入。7週目のコンバートに向けて準備確認",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-18",
      "wd": "金",
      "week": 7,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "Next.js公式Learnで環境構築し、App Routerの全体像を掴む",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-19",
      "wd": "土",
      "week": 7,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "Cursorをインストールし、Claude Codeとの使い分けを決める(課題CC-4)",
          "h": 2.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "ルーティング、layout と page を書く(課題N-1)",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-20",
      "wd": "日",
      "week": 7,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "Server ComponentでuseStateを使いエラーを出す。違いを体感する",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "★6週目のReactアプリをNext.jsへコンバートする計画を書く(課題CONV-1)",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-21",
      "wd": "月",
      "week": 7,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "コンポーネントを App Router の構成へ移す",
          "h": 2.0
        }
      ]
    },
    {
      "date": "2026-09-22",
      "wd": "火",
      "week": 7,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "'use client' の境界を決めて分ける(課題N-2)",
          "h": 2.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "サーバー側でのデータ取得に置き換える(課題N-3)",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-23",
      "wd": "水",
      "week": 7,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "データ取得のキャッシュ挙動を確認する(再読み込みで再取得されるか)",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "★コンバートで詰まった点と判断理由を記録する",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-24",
      "wd": "木",
      "week": 7,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "Server/Clientの判断基準を自分の言葉で書く",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログ記入と残タスク確認",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-25",
      "wd": "金",
      "week": 8,
      "target": 2.0,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "型を整理する。any を潰し、共通の型を切り出す",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-26",
      "wd": "土",
      "week": 8,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "CLAUDE.mdを整備し、自分の開発フローを型として言語化する",
          "h": 2.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "リファクタと命名の見直し。AIの提案は採否を自分で判断する",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-27",
      "wd": "日",
      "week": 8,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "不要な再レンダリングを1箇所見つけて直す(key / 派生stateの見直し)",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "READMEを書く(何を作ったか/技術選定/学んだこと)",
          "h": 1.0
        }
      ]
    },
    {
      "date": "2026-09-28",
      "wd": "月",
      "week": 8,
      "target": 2.5,
      "plan": [
        {
          "cat": "TS/React/Next",
          "todo": "Vercelにデプロイして公開URLを用意する",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "React版とNext.js版の違いを言語化する(参画後に説明できる形に)",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-29",
      "wd": "火",
      "week": 8,
      "target": 2.5,
      "plan": [
        {
          "cat": "Claude Code",
          "todo": "使ったコマンド/Skill/サブエージェントを1枚に整理する",
          "h": 1.0
        },
        {
          "cat": "TS/React/Next",
          "todo": "想定質問への回答を準備する(Server/Client、型設計、AI活用)",
          "h": 1.5
        }
      ]
    },
    {
      "date": "2026-09-30",
      "wd": "水",
      "week": 8,
      "target": 2.0,
      "plan": [
        {
          "cat": "振り返り",
          "todo": "8週間の学習を1枚に総括し、スキルシートに書ける形にする",
          "h": 1.0
        },
        {
          "cat": "振り返り",
          "todo": "日次ログの最終記入と達成率の確認。参画後の学習計画を決める",
          "h": 1.0
        }
      ]
    }
  ],
  "rules": [
    "1. JS基礎とReactは必ず自分で書いてからAIに見せる／課題を最初からAIに書かせない。自分で書いて詰まって、書き終わってからレビューさせる。案件の必須スキルは「AI駆動での開発経験」だが、AIの出力を評価できないと駆動にならない。",
    "2. JS基礎(1〜4週)を飛ばしてReactに行かない／TypeScriptはJSの上に型が乗ったもの。Reactのフックはクロージャ(Ch7)と非同期(Ch13)の理解が前提。8週しかないので削ったが、Ch6-8とCh13だけは残してある。ここは削らない。",
    "3. 7週目のコンバートが本命／案件の推奨スキルが「アーキテクチャコンバートの経験」。6週目までに小さくてもいいので動くReactアプリを完成させ、7週目にNext.jsへ移す。移せる状態を作ることを優先する。",
    "4. コンバートの判断理由を必ず記録する／何をどう移したかより、なぜそう判断したかを語れる方が評価される。'use client' をどこに置いたか、なぜそこかを7週目に書き残す。",
    "5. AIの修正提案は丸呑みしない／指摘は1つずつ理解して自分の手で直す。採用しない判断をした場合は理由を1行書く。",
    "6. Ch11の商品データ20件は使い回す／Ch11(作る)→TS-3(型を付ける)→R-1(Reactで描画)→コンバート と一貫して使う。作り直さない。",
    "7. 遅れたらReactとNext.jsを優先し、他を削る／削る順番は Claude Code講座 → 振り返り → JS基礎の後半。5〜7週目のReact/Next.jsだけは死守する。ここが案件の必須スキルそのもの。",
    "8. 9/30に終わらなくても参画後に続ける前提でよい／8週は圧縮した計画なので、完璧に終わらせることより、参画時点で「Next.jsのアプリを1本作ってコンバートした経験がある」状態を作ることを優先する。"
  ],
  "references": [
    {
      "track": "JS基礎",
      "name": "独習JavaScript 新版（CodeMafia 外村将大・翔泳社）",
      "cost": "購入済み",
      "url": "",
      "week": "1〜4週目",
      "scope": "Ch1-8, 11-14, 16",
      "note": "Ch9/10/15/17 は今回スキップ。Ch6-8（関数・スコープ・this）とCh13（非同期）が最重要"
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
      "week": "2週目",
      "scope": "「TypeScriptのあらまし」「なぜTypeScriptを使うのか」",
      "note": "まず「なぜ型が必要か」を掴む。手を動かすのは3週目から"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/values-types-variables",
      "week": "3週目",
      "scope": "「値・型・変数」章：基本の型／型注釈／型推論／ユニオン型／リテラル型",
      "note": "★TS-1の教材。手を動かしながら読む"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/object-oriented/interface",
      "week": "3週目",
      "scope": "interface と type エイリアスの違い",
      "note": "★TS-2の教材。使い分けの基準を自分の言葉でメモに残す"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/generics",
      "week": "4週目",
      "scope": "ジェネリクス／ユーティリティ型（Partial・Pick・Omit・Record）",
      "note": "★TS-2後半の教材。型を引数として渡す感覚を掴む"
    },
    {
      "track": "TypeScript",
      "name": "サバイバルTypeScript",
      "cost": "無料",
      "url": "https://typescriptbook.jp/reference/tsconfig",
      "week": "3週目",
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
      "week": "2〜4週目",
      "scope": "型を試すときのブラウザ実行環境",
      "note": "環境構築せずに型だけ試せる。エラーの再現に便利"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn",
      "week": "5週目",
      "scope": "「クイックスタート」→「インストール」",
      "note": "★まずここから。80%の概念がクイックスタートに載っている"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/describing-the-ui",
      "week": "5週目",
      "scope": "「UI の記述」：コンポーネント／props／条件分岐／リストとkey",
      "note": "★R-1の教材。Ch11の商品データで手を動かす"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/adding-interactivity",
      "week": "5週目",
      "scope": "「インタラクティビティの追加」：state／イベント／再レンダリング",
      "note": "★useStateはここ。フォームとイベント処理もこの章"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/managing-state",
      "week": "6週目",
      "scope": "「state の管理」：リフトアップ／state構造の選び方",
      "note": "★R-3の教材。設計の話ができるかはここで決まる"
    },
    {
      "track": "React",
      "name": "React 公式ドキュメント（日本語）",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/escape-hatches",
      "week": "6週目",
      "scope": "「避難ハッチ」：useEffect／依存配列／カスタムフック",
      "note": "★R-2の教材。一番ハマる箇所。Ch7のクロージャの知識が効く"
    },
    {
      "track": "React",
      "name": "React 公式：三目並べチュートリアル",
      "cost": "無料",
      "url": "https://ja.react.dev/learn/tutorial-tic-tac-toe",
      "week": "5週目",
      "scope": "手を動かす題材が欲しいときに（任意）",
      "note": "時間があればでよい。優先は自分の商品一覧アプリ"
    },
    {
      "track": "React",
      "name": "React TypeScript Cheatsheet",
      "cost": "無料",
      "url": "https://react-typescript-cheatsheet.netlify.app/",
      "week": "5週目",
      "scope": "props・イベント・useStateの型の書き方",
      "note": "★Reactでよく使う型の教材。英語だがコード例中心で読める"
    },
    {
      "track": "Next.js",
      "name": "Next.js Learn（公式チュートリアル）",
      "cost": "無料",
      "url": "https://nextjs.org/learn",
      "week": "7週目",
      "scope": "App Router のコース。環境構築〜ルーティング〜データ取得",
      "note": "★7週目の主教材。英語だが手を動かす形式なので進めやすい"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/routing",
      "week": "7週目",
      "scope": "Routing：layout / page / 動的ルート",
      "note": "★N-1の教材。ファイル構成の決まりを確認する"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
      "week": "7週目",
      "scope": "Server Components と Client Components",
      "note": "★N-2の教材。ここが案件で一番効く。境界の判断基準を作る"
    },
    {
      "track": "Next.js",
      "name": "Next.js 公式ドキュメント",
      "cost": "無料",
      "url": "https://nextjs.org/docs/app/building-your-application/data-fetching",
      "week": "7週目",
      "scope": "Data Fetching とキャッシュ",
      "note": "★N-3の教材。Ch13のfetchと何が変わるかを比べる"
    },
    {
      "track": "Next.js",
      "name": "Next.js 日本語訳（コミュニティ）",
      "cost": "無料",
      "url": "https://ja.next-community-docs.dev/docs/app-router/",
      "week": "7週目",
      "scope": "英語で詰まったときの補助",
      "note": "公式ではないため、最終的な確認は本家で行う"
    },
    {
      "track": "AI駆動開発",
      "name": "Claude Code Academy",
      "cost": "購入済み",
      "url": "https://claude-code-academy.dev/",
      "week": "1〜8週目",
      "scope": "入門の残り／Skills入門1-6／ハーネス1-9・21-25／セキュリティ1-9",
      "note": "Skills入門7-18、ハーネス10-20・26-32、iOS開発はスキップ"
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
      "week": "7週目",
      "scope": "インストールと基本操作（Cmd+K・チャット・Tab補完）",
      "note": "★案件の推奨スキル。Claude Codeとの使い分けを言語化する"
    }
  ]
};
