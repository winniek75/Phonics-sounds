/**
 * フォニックス練習アプリ 単語データ
 *
 * 構造:
 *   LESSONS["ターゲット文字"] = {
 *     words: [
 *       { word: "単語", hasTarget: true/false }
 *     ]
 *   }
 *
 * 画像ファイルは images/words/{word}.png に格納してください。
 * 例: images/words/apple.png
 */

const LESSONS = {
  "A": {
    label: "Short A",
    words: [
      { word: "apple",  hasTarget: true  },
      { word: "cat",    hasTarget: true  },
      { word: "ant",    hasTarget: true  },
      { word: "map",    hasTarget: true  },
      { word: "bag",    hasTarget: true  },
      { word: "dog",    hasTarget: false },
      { word: "fish",   hasTarget: false },
      { word: "bed",    hasTarget: false },
      { word: "cup",    hasTarget: false },
      { word: "fox",    hasTarget: false },
    ]
  },
  "B": {
    label: "B Sound",
    words: [
      { word: "bat",    hasTarget: true  },
      { word: "ball",   hasTarget: true  },
      { word: "bus",    hasTarget: true  },
      { word: "bed",    hasTarget: true  },
      { word: "book",   hasTarget: true  },
      { word: "cat",    hasTarget: false },
      { word: "dog",    hasTarget: false },
      { word: "fish",   hasTarget: false },
      { word: "hat",    hasTarget: false },
      { word: "sun",    hasTarget: false },
    ]
  },
  "C": {
    label: "C Sound",
    words: [
      { word: "cat",    hasTarget: true  },
      { word: "cup",    hasTarget: true  },
      { word: "car",    hasTarget: true  },
      { word: "cake",   hasTarget: true  },
      { word: "cow",    hasTarget: true  },
      { word: "dog",    hasTarget: false },
      { word: "fish",   hasTarget: false },
      { word: "hat",    hasTarget: false },
      { word: "sun",    hasTarget: false },
      { word: "ball",   hasTarget: false },
    ]
  }
  // 追加の文字はここに続けて追加してください
};
