# セットアップ手順集

**「次に同じことをするとき、これを見ればできる」ものだけを書く。**

日付順に流れる記録は `learning-log.md`、つまずきは `weak-points.md`。
ここは**引くためのノート**なので、時系列ではなく用途で並べる。

書き方は3つだけ。

1. 見出しは「〜するとき」にする（探すときの言葉で書く）
2. コマンドはコピペで動く形で貼る
3. **ハマった点を最後に1〜2行**書く。これが一番価値がある

---

## TypeScriptを試すフォルダを作るとき

用途：型の実験だけしたい。Reactは使わない。

```bash
cd ~/dev/dokushu-js        # 学習用リポジトリ
mkdir ts_typescript
cd ts_typescript

node -v && npm -v          # 出なければ Node.js を先に入れる

npm init -y                # package.json ができる
npm install -D typescript  # ★このフォルダにだけ入れる
npx tsc --init             # tsconfig.json ができる
```

動作確認：

```ts
// hello.ts
const message: string = "hello";
console.log(message.toUpperCase());
```

```bash
npx tsc          # → hello.js が出力される
node hello.js    # → HELLO
```

**注意**

- `npm install -g typescript`（グローバル）にしない。プロジェクトごとにバージョンを
  固定できないため。実務でもローカルに入れるのが普通。だから実行は `npx tsc`
- `tsconfig.json` の `"strict": true` はそのままにする。ここを緩めると型エラーが出なくなる
- `.gitignore` に `node_modules/` を書く。忘れると数千ファイルがコミット対象になる

---

## Reactのプロジェクトを作るとき

<!-- 3週目（9/13〜）にここへ書く。空のまま置いておく -->

用途：

```bash
```

**注意**

-

---

## Next.jsのプロジェクトを作るとき

<!-- 5週目（9/27〜）にここへ書く -->

用途：

```bash
```

**注意**

-

---

## Vercelに公開するとき

<!-- 6週目（10/4〜）にここへ書く -->

---

## よく使うコマンド

| やりたいこと | コマンド |
| --- | --- |
| パッケージを開発用に入れる | `npm install -D パッケージ名` |
| ローカルに入れたツールを実行 | `npx コマンド名` |
| 入っているものを確認 | `npm ls --depth=0` |
| package.json のスクリプトを実行 | `npm run 名前` |

<!-- 使ったものを足していく。覚えたものは消してよい -->
