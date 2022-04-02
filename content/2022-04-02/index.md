---
title: "【Chakra UI】extendThemeでタグの入れ子の設定をoverrideする方法"
date: "2022-04-02"
tags: ["Nextjs", "Chakra UI"]
---

`extendTheme` で html タグの style を指定していますが、特定の条件(ある tag と隣接するの tag)の style の指定方法がわからなかったので調べました

## 指定方法

`'pre > code'`のような css 記法でいけるみたいです

```js
const customeTheme = extendTheme(
  {},
  withProse({
    baseStyle: {
      // Refer to the <code> of github readme style
      code: {
        padding: "0.2em 0.4em",
        margin: 0,
        backgroundColor: "rgba(175,184,193,0.2)",
        fontWeight: "inherit",
        borderRadius: "6px",
        _before: {
          content: '""',
        },
        _after: {
          content: '""',
        },
      },

      // ここ
      "pre > code": {
        backgroundColor: "transparent",
      },
    },
  })
);
```

## なんで調べた？

このブログの記事は markdown で書いています

markdown のスタイルは Chakra UI の公式 HP に載っている`chakra-ui-prose`というパッケージで整えています

- [https://chakra-ui.com/guides/recipes/prose](https://chakra-ui.com/guides/recipes/prose)

デフォルトだと `<code>` の内容が **\`sample code\`** のような形で表示されるため、github の README.md で表示されるよう `<code>` の backgroud を灰色に指定していました。

ただ、これだと複数行からなるコードブロックも背景が灰色に指定されてしまいました。(markdown でいうと「```」からなるコード)

コードブロックは次のような構成になっていたため

```html
<pre>
  <code>
  </code>
</pre>
```

`<pre>`の子要素である`<code>`の backgroud を`none`に設定したかったので調査しました

## 補足

厳密には`extendTheme()`ではなく`withProse()`の中の`baseStyle`での指定になります

- withProse とは chakra ui prose というパッケージのメソッドです
  - (https://chakra-ui.com/guides/recipes/prose)[https://chakra-ui.com/guides/recipes/prose]

ただ、以下の github でのやりとりを見ると通常の`extendTheme()`での`baseStyle`でも使えそうです

- [https://github.com/chakra-ui/chakra-ui/issues/2085](https://github.com/chakra-ui/chakra-ui/issues/2085)
