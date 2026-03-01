# フォニックス練習アプリ

## フォルダ構成

```
phonics-app/
├── index.html          ← メインゲームファイル
├── data/
│   └── lessons.js      ← 単語データ（ターゲット文字・単語リスト）
└── images/
    └── words/
        ├── apple.png   ← 単語ごとの画像（任意）
        ├── cat.png
        └── ...
```

## 画像ファイルについて

- 格納場所：`images/words/{単語}.png`
- 例：`apple` → `images/words/apple.png`
- 画像がない場合は絵文字が自動で表示されます（ゲームは動きます）

## 単語データの追加方法

`data/lessons.js` を編集してください。

```js
const LESSONS = {
  "S": {
    label: "S Sound",
    words: [
      { word: "sun",   hasTarget: true  },
      { word: "cat",   hasTarget: false },
      // ...
    ]
  }
};
```

- `hasTarget: true` → その単語にターゲット音が含まれる
- `hasTarget: false` → 含まれない

## ゲームのルール

- 30秒タイムアタック
- 音声が自動再生される
- YES（含まれる） / NO（含まれない）をタップ
- 時間切れで結果表示 → 「もういちど！」で即リスタート

## 動作環境

- ブラウザで `index.html` を開くだけ
- 音声はGoogle TTS（インターネット接続必要）
  - オフライン時はブラウザ内蔵の音声合成に自動切替
