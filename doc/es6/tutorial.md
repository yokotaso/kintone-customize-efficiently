# チュートリアル

このチュートリアルではbabel,polyfillとwebpackを組み合わせて
JavaScriptの新しい文法を書きつつ、古いブラウザでも動作する仕組みを解説します。

## はじめに

プログラミング言語の進化には2つの側面があります:

1. 言語仕様の進化
2. 標準ライブラリの進化

### 言語仕様の進化の例: テンプレート文字列

ES6ではテンプレート文字列という機能が追加されました。
次のようなプログラムを書くことができます。

```javascript
var number = 1;
`${number} + ${number} = ${number * 2}` // "1 + 1 = 2" 
```

このようにJavaScriptそのものの文法が追加されることを言「語仕様の進化」としたいとおもいます。

ですが、この機能はIE11だと不正な文法エラーになってしまいます。
ブラウザによって使える文法と使えない文法があるのです。

こういった問題を解決するためのツールが [babel](https://babeljs.io/) です。

ES6やそれよりも新しい文法をES5でも動作するように変換してくれます。
変換の様子は本家サイトで見ることができるので確認してみましょう。

### 標準ライブラリの進化の例: Object.values
JavaScriptは文法的な進化だけでなく、標準で使えるライブラリも進化します。このような進化を「標準ライブラリの進化」と
したいと思います。
たとえば ES2017では オブジェクトの値の一覧を返す`Object.values` というメソッドがあります。

このメソッドはIEでは利用することができません。polyfillライブラリはこのようなブラウザ間の実装の差を埋めてくれます。

サンプルコードではwebpackの中でpolyfillを別ファイルにビルドするようにしますが、polyfill.ioをCDNに設定してもよいです

## 1. プロジェクトの準備

プロジェクトを初期化します。

```
npm init
```

## 2. webpack, babel をインストールする

```
npm install -D babel-loader @babel/core @babel/preset-env webpack webpack-cli
```

## 3. webpack.config.js を作成する

[webpack.config.js](./sample-code/webpack.config.js ':include :type=code')

## 4. テンプレート文字列とVueを使ってカスタム要素を表示してみる

kintone-create-edit-show.js:

[kintone-create-edit-show.js](./sample-code/src/kintone-create-edit-show.js ':include :type=code')

## 5. webpackの出力を確認する

コマンドを実行する:

```
npm run webpack
```

kintoneのJSカスタマイズにアップロードする。その後、Developerコンソールでwebpack:下にコードが出力されているので、
コードが変換されているかを確認してみましょう。