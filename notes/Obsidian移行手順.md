# Obsidian側でやること（15分）

学習用リポジトリ `dokushu-js` を Obsidian のvaultとして開いている前提です。
パスは自分の環境に読み替えてください。

---

## 手順1 ── ひな形を置く（3分）

`notes-テンプレ.zip` を展開すると `notes/` に4ファイル入っています。

```
README.md          … notes/ の使い方
メモの書き方.md     … 迷ったらこれを読む
learning-log.md    … 日々の記録（これから使う本体）
weak-points.md     … 弱点リスト
```

**`weak-points.md` は既に書いたものがあれば上書きしないでください。**
中身がある場合は、ひな形の見出し部分だけ参考にして自分のものを残します。

残り3つはそのままコピーして構いません。

---

## 手順2 ── 既存のノートを1つにまとめる（5分）

テーマ別に散っているノートを `learning-log.md` に集約し、元ファイルはアーカイブへ移します。
**消しません。** あとで見返せます。

```bash
cd ~/dev/dokushu-js   # 自分のパスに読み替える

mkdir -p notes/_archive

# 残す4つ以外を learning-log.md へ追記してアーカイブへ移す
for f in notes/*.md; do
  base=$(basename "$f")
  case "$base" in
    learning-log.md|weak-points.md|convert-log.md|qa.md|README.md|メモの書き方.md|Obsidian移行手順.md)
      continue ;;
  esac
  {
    echo ""
    echo "## （$base から移行）"
    echo ""
    cat "$f"
  } >> notes/learning-log.md
  mv "$f" notes/_archive/
  echo "移行: $base"
done

# weekly/ があれば同じように
if [ -d notes/weekly ]; then
  for f in notes/weekly/*.md; do
    [ -e "$f" ] || continue
    { echo ""; echo "## （$(basename "$f") から移行）"; echo ""; cat "$f"; } >> notes/learning-log.md
    echo "移行: $(basename "$f")"
  done
  mv notes/weekly notes/_archive/weekly
fi

ls notes/
```

最後の `ls notes/` で、こうなっていれば成功です。

```
README.md  _archive/  convert-log.md  learning-log.md
weak-points.md  メモの書き方.md  Obsidian移行手順.md
```

`convert-log.md` と `qa.md` はまだ無くて構いません。5〜6週目に作ります。

---

## 手順3 ── Obsidianで開き直して確認（2分）

- Obsidianを開き、左のファイル一覧に `learning-log.md` が出るか見る
- `_archive` は開かなくていいので、右クリックから折りたたんでおく
- `メモの書き方.md` を開いてブックマーク（スターを付ける）

**デイリーノート機能は使わないでください。** 日付ごとにファイルが増えると、
また「どこに書いたか分からない」状態に戻ります。1ファイルに追記していきます。

---

## 手順4 ── CLAUDE.md を1行直す（2分）

リポジトリのルートにある `CLAUDE.md` に、ノートの場所を書いておきます。

```markdown
## メモの置き場所

学習メモは notes/learning-log.md に日付見出しで追記する。
新しいノートファイルを作らない。常設は learning-log / weak-points /
convert-log / qa の4つだけ。
```

こう書いておくと、Claude Codeにレビューを頼んだときに
「メモはどこに書けばいいですか」と聞かれなくなります。

---

## 手順5 ── コミットする（1分）

```bash
git add -A
git commit -m "notesを4ファイルに集約（v3の運用に合わせる）"
git push
```

---

## これからの流れ

**平日** … アプリの「今日の記録」に1〜3行。Obsidianは開かない。

**週末（振り返り枠の30分）**

1. アプリの日次ログで「この範囲をMarkdownでコピー」を押す
2. `learning-log.md` の一番上に貼る
3. 「詰まった」のうち**まだ解決していないもの**を `weak-points.md` へ移す
4. 来週に持ち越すことを3行書く

これだけです。平日にObsidianを開く必要はありません。

---

## 今日（8/24）やること

1週目の1日目です。今日の割り当ては次の2件、合計2.5hです。

- [コア][JS基礎] Ch7(スコープ)を読む — 1h
- [コア][TS/React/Next] Node.jsとTypeScriptを入れて .ts を1本コンパイルする — 1h

**上のObsidian移行を先に済ませてから始めてください。** 15分で終わります。
移行を後回しにすると、今日書いたメモがまた散ります。
