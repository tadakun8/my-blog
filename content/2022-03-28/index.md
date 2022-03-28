---
title: "【Chakra UI】Spacerと並列な要素にmarginは効かない"
date: "2022-03-24"
tags: ["Nextjs", "Chakra UI"]
---

`<Spacer>`と同じ階層にある要素の間隔を margin で指定したかったのですが、ダメっぽかったので解決策を調べました。

## 最初に結論

- `<Stack>`の中で`<Spacer />`を使用しているとき、並列の要素の感覚調整に margin は使えない
- 並列要素のサイズ調整をしたい場合は次の 2 つ
  - **`<Stack spacing={10}>`のように要素の間隔を指定する**
  - **並列要素に`padding`を指定する**

## どんなことが起こったか

このブログのヘッダーを Header コンポーネントとして以下のように書いていました。

```jsx
const Header = () => {
  return (
    <Box mx={50} my={5}>
      <HStack>
        <Heading>
          <NextLink href={"/"} passHref>
            <Link textDecoration="none" _hover={{ textDecoration: "none" }} _focus={{ outline: "none" }}>
              {/* &apos; は ' を表す */}
              tadakun8&apos;s blog
            </Link>
          </NextLink>
        </Heading>
        <Spacer />
        {/* ここのマージン指定のお話 */}
        <Box m={10}>menu01</Box>
        <Box m={10}>menu02</Box>
        <Box m={10}>menu03</Box>
        <Box m={10}>menu04</Box>
      </HStack>
    </Box>
  );
};
```

`<Box m={10}>menu01</Box>`のように margin を指定してもうまく反映されませんでした

<img src="/content/2022-03-28/margin.png" width="100%">

menu0x の部分がぎゅうぎゅうですね。

少しスペースを空けたいと思っていましたが margin 指定ではうまくいかないようです。

## 解決策

2 つ方法があります

### stack に spacing を指定

各要素に均等にスペースをつけたいならこちらが一番手っ取り早いです

上記のコードなら

- `<HStack spacing={10}>`に変更
- `<Box>`の margin の指定を削除

<img src="/content/2022-03-28/spacing.png" width="100%">

作りたかったのはこれです。このブログのヘッダーはこの方法でスペースを指定しました

### 各要素に padding の指定

こちらは各要素ごとにスペースを指定したい場合に有効です

上記のコードを変えるなら次のように変更します

```jsx
<Box p={10}>menu01</Box>
<Box p={5}>menu02</Box>
<Box p={3}>menu03</Box>
<Box p={9}>menu04</Box>
```

<img src="/content/2022-03-28/padding.png" width="100%">

## 原因？

[spacer のソース](https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/spacer.tsx)を見ると`flex:1`とある。

- `<spacer>`は`flex:1`とあるため、間隔は常に 1 で固定
- 要素の幅(あるいは高さ)を拡張する margin は比率の固定と矛盾するため反映されない(と予想)

## 参考になったサイト

- [https://zenn.dev/terrierscript/books/2021-05-chakra-ui/viewer/2-2-3-spacer](https://zenn.dev/terrierscript/books/2021-05-chakra-ui/viewer/2-2-3-spacer)
