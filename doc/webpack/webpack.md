# webpackについて

ES5のJavaScriptでは、文法としてモジュール機能がありません。

このためJavaScriptを書いていると次のような問題に突き当たったはずです:

1. 関数やクラス定義をすると名前がグローバルに定義されてしまう
2. 他のファイルで定義された他の関数やクラスを暗黙的に利用する必要がある
3. (2)を回避するために1つのファイルにJavaScriptをまとめる必要がでてくる。
プログラムファイルが肥大化してメンテナンス性が下がってしまう

ES5のJavaScriptではグローバルな名前空間の汚染に関しては名前空間を摸したものを
実装して回避していました。しかし、すべての問題は解決していません。

こういった問題を解決するためにES6では[import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)を利用することができます。

しかし、2019年1月kintoneではこのモジュールを利用できません。

理由はいくつかあります:

1. kintoneのJavaScriptカスタマイズではパスに関する情報がなくなってしまう
2. サポートブラウザの問題. IE11ではモジュール機能が動作しない

必要なライブラリをバンドルしてくれるパッケージングングツールのwebpackを
使ってkintone JavaScriptカスタマイズでwebpackを利用する方法を紹介します。

webpackはたくさんの機能やプラグラインがありますが、kintoneのJavaScriptカスタマイズ開発につかうための最低限の知識をここでは扱います

- 公式ドキュメント: [webpack](https://webpack.js.org/concepts/) 

## webpackとは？

JavaScriptのプログラムパッケージングツールです。次のような機能を持っています

1. ブラウザ上でJavaScriptを実行するために必要なライブラリや自作モジュールを一つのJavaScriptファイルにバンドルしてパッケージングする
2. パッケージング時にJavaScriptの自動変換を行う

(1) の機能は(2)の機能を使って実現されています。

他のJavaScriptの自動変換の例としては次のようなものがあります

- ES6 JavaScriptのES5 JavaScriptへのトランスパイル
- jsxファイル（`.jsx`）をJavaScriptにトランスパイル
- TypeScript(`.ts`)のコンパイル
- Vue(`.vue`) ファイルのトランスパイル

## webpack.config.jsに関する最低限の知識

webpackのインストールが終わったら設定ファイルを作成します.

次のファイルを `webpack.config.js` として`package.json`と同じレベルに配置してください。
```js
const path = require('path');

module.exports = {
  entry: {
      'kintone-customize' : './path/to/kintone-customize.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  externals: {
      vue: 'Vue',
      jquery: 'jQuery'
  }
};
```

#### `entry` 
JavaScriptファイルのエントリーポイントのファイルを指定します。

kintoneのJavaScriptカスタマイズでのエントリーポイントは、ラムダ関数が定義、実行されていて `kintone.events.on` メソッドが定義されているファイルです。

オブジェクトのプロパティ名にはパッケージングの成果物ファイル名を指定します。
プロパティのバリューにはエントリーポイントのJavaScriptファイルを書きます。

#### `output`
webpackのパッケージング作業の成果物を出力するディレクトリを指定します。

`path.resolve` や `__dirname` が書かれていますがこれはnode.jsの機能の一部です。webpack.config.jsが配置されているディレクトリに`dist`に出力するという意味になります。

`filename` には出力されるJavaScriptのファイル名を指定することができます。
特定のファイル名を指定することもできますが`[name]` に`entry` に指定したオブジェクトのプロパティ名が埋め込まれるようになります。

#### `mode`
パッケージングするモードを指定することができます。

`development`, `production` , `none`のうちから一つを指定することができます。

productionモードにするとプログラムの圧縮を行ってくれます。

#### `externals`

kintoneではアップロードできるJavaScriptファイルに容量の制限があります。
webpackを使うとファイル容量が肥大化します。

CDNからロードできるファイルは、`external` に書くようにするとファイル容量の肥大化を抑えることができます。

次のような設定をwebpack.config.jsに書いてあるとします:

```javascript
{
  externals: {
      vue: 'Vue',
      jquery: 'jQuery'
  }
}
```

JavaScriptで次のようなimportを書いているとします。

```javascript
import $ from 'jquery';
import Vue from 'vue';
// 以下省略
```

webpackは`externals`で指定したオブジェクトのキー名が
`from '...'` と一致するとパッケージング時にグローバルに存在するオブジェクトとして扱います。