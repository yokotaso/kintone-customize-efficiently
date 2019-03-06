# LinterとFormatterを使おう

静的解析ツールはプログラムが怪しい書き方になっていないか、
コードのフォーマットがあっているかをチェックするツールです。

このドキュメントでは、静的解析ツールの導入方法を解説します。

## eslintを使ってコードを静的解析しよう

### 1.インストール
```
npm i -D eslint @cybozu/eslint-config
```

### 2. .eslintrc.jsを配置する
```javascript
module.exports = {
  extends: "@cybozu",
  env: {
    "browser" : true,
  },
  globals: {
    "kintone": "readonly",
    "moment": "readonly", // moment.js
    "Vue": "readonly", // vue.js
  }
};
```

### 3. 実行してみる

```
npx eslint --color "src/**/*.{js,jsx}"
```

### 4. 自動修正してみる

```
npx eslint --color --fix "src/**/*.{js,jsx}"
```

## Prettierを使ってコードを自動フォーマットしよう

### 1.インストールする
```
npm i -D prettier
```

### 2. .prettierrc.config.jsを配置する

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

### 3. チェック
```bash
npx prettier --check "src/**/*.{js,jsx}"
```

### 4. 自動フォーマット
```bash
npx prettier --write "src/**/*.{js,jsx}"
```