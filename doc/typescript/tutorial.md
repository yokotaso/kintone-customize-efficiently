# kintoneカスタマイズでTypeScriptを使おう

kintoneカスタマイズをTypeScriptでカスタマイズ実装するチュートリアルです

## 1. プロジェクトの準備をする

プロジェクトを初期化します。

```
npm init
npm install -D typescript ts-loader webpack webpack-cli @yokotaso/kintone-typlify 
```

- `ts-loader` : webpackでTypeScriptをJavaScriptに変換するツールです
- `@yokotaso/kintone-typlify`:  
kintone上に定義されるグローバルメソッドと指定したアプリから型情報を生成するツールを含んでいます

## 2. 型定義ファイルを生成・配置する

package.jsonのscriptにkintone-typlifyを追加します。

[package.json](./sample-code/package.json ':include :type=code')

kintone-typlifyで指定したアプリのフィールド情報を生成します

```
npm run kintone-typlify -u <usename> -p <password> --host https://****.cybozu.com --app-id <appid>
```

`fields.d.ts` が生成されているので @types ディレクトリを作成して、配置します。

コマンドラインオプションで生成するファイル名、名前空間、インターフェース名は変更可能です。

```bash
mkdir @types
mv fields.d.ts @types
```

kintone.d.ts を@types ディレクトリに配置すれば準備完了です。

[kintone.d.ts](./sample-code/src/@types/kintone.d.ts ':include :type=code')

## 3. サンプルコードを書いてみる

v8nをインストールして、バリデーションをするプログラムを書いてみます

```
npm install v8n
```

kintoneカスタマイズのサンプルコード

[kintone-create-edit-show.ts](./sample-code/src/kintone-create-edit-show.ts ':include :type=code')

## 4. webpack.config.js, tsconfig.jsonを用意してビルドする

`ts-loader` 

[webpack.config.js](./sample-code/webpack.config.js ':include :type=code')

[tsconfig.json](./sample-code/tsconfig.json ':include :type=code js')

JavaScriptをビルドして、Kintoneで動作確認してみましょう

```
npm run webpack
```
