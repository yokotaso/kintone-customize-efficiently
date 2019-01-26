
# JavaScriptをモジュール化してみよう

webpackを使ってkintone JavaScriptカスタマイズを実装します。

!> webpackに関しては[webpackについて](doc/webpack/webpack)を参照してください。

1. [moji.js](https://github.com/niwaringo/moji) を使って保存時に文字列フィールドを全角英数を半角英数に変換する
2. [v8n](https://github.com/imbrn/v8n) を使って空文字をテストするモジュールを作成する
3. (2)のモジュールをインポートして、空文字列の時にエラーにする 
4. レコード追加画面用のJSカスタマイズを(1)のファイルとは別にwebpackでビルドするようにする
5. レコード追加画面でカスタマイズしたボタンをjQueryを使って作成(jQueryはCDNから読み込む)


### 1.npmを使ってプロジェクトの初期化をする
!> npmがインストールできていない場合は[TODO]() を参照してください

npm initを使ってプロジェクトの初期化をします。適当な値を入力してください
```
npm init
```

### 2.webpackのインストール
Macのコンソール、コマンドプロンプトで次のコマンドを実行してください

```
npm install --save-dev webpack webpack-cli
```

npmがインストールしたライブラリがgitに管理されないように`.gitignore`に追加しておきましょう

```
node_modules/
dist/
```

### 3. webpack.config.jsを編集する

[webpack.config.js](#webpackconfigjsに関する最低限の知識) のentryのパスを修正したファイルをプロジェクト直下に配置します。

### 4. kintone JavaScriptカスタマイズを開発する

全角英数を半角英数に修正するプログラムを実装します.

npmコマンドを使って`moji` ライブラリを追加します

```
npm install moji
```

実装は./sample-code/src/kintone-create-submit-01.jsを参照してください


### 6. バリデーション処理を実装する

次に空白文字列の入力をエラーにする実装を行います

ライブラリの追加:

```
npm install v8n
```

not-empty-string.jsを作成します。
次のように空白文字が入力されているかをチェックするモジュールを作成します.

実装は、./sample-code/src/empty-string.jsを参照してください

!> `import`, `default`, `export` などの使い方は[ES6 import](doc/webpack/es6-import)を参照してください。

JSカスタマイズに実装を追加します。

実装は./sample-code/src/kintone-create-submit.jsを参照してください

### 7. パッケージングをしてみよう

package.jsonに次のように修正します。

scriptsにwebpackコマンドを呼び出すコマンドを追加します。

```javascript
{
    // ... 省略
    "scripts" : {
        "build" : "webpack"
    }
}
```

次のコマンドを実行します
```
npm run build
```

distディレクトリに青果物が生成されています。

kintoneにアップロードして動作確認してみましょう。

### 8. レコード追加編集画面を開いた時にボタンを作成してみる

同じファイルにも実装を追加することもできます。
webpack.config.jsを編集する練習するために、レコードの追加編集画面の実装は分離したいと思います。

1. レコード追加編集画面用の実装は別ファイルとしてパッケージするようにする
2. jQueryはCDNから呼び込むようにするように設定をします。

```javascript
const path = require('path');

module.exports = {
  entry: {
      'kintone-customize' : './src/kintone-customize.js',
      'kintone-show-add-edit': './src/kintone-show-add-edit.js', // ... (1)
  },
  // ... 省略
  externals: {
      jquery: 'jQuery' // .... (2)
  }
};
```

実装は./sample-code/src/kintone-show-add-edit.jsを参照してください

### 9. ビルドする

```
npm run build
```

distディレクトリに成果物が2つできています。kintone にJavaScriptをアップロードして動作確認してみましょう。

jQueryのCDNを登録しなければ `$` が定義されていないのでエラーになると思います。
jQueryのCDNをkintone customizeとして登録するのを忘れないようにしてください。