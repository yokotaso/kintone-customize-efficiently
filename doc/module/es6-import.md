# ES6 import について

このドキュメントで概要をつかめたら、詳細は次のドキュメントで確認するようにしましょう

- [MDN export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
- [MDN import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)

## export
基本的には名前つきexportがおすすめ

```javascript
export const Constants = {
    MAX_LENGTH: 100,
    MIN_LENGTH: 1,
}

export function sampleFunction() {

}

export class SampleClass {

}
```

デフォルトexportは名前付きexportに慣れたらドキュメントを自分で調べて使ってみましょう

### 練習問題

1. const変数を名前つきexportをしてください
2. functionを名前つきexportをしてください
3. classを名前つきexportをしてください


### 答え
```javascript
export const A = 1;
export function sampleFunction() {}
export function class A {}
```

## import

名前つきimportは `import {...インポートしたい変数、関数、クラス} from "<相対パス>"` という形で書く。

またファイル内で変数名が衝突するケースは `as` つかってリネームできる。

```javascript
import {Constants, sampleFunction, SampleClass} from './sample-code'; // 拡張子は不要
import {Constants as C, sampleFunction as sampleFunction_, SampleClass as SampleClass_} from './sample-code'
```

### 練習問題

1. './constants.js' で A がエクスポートされている importしてください
2. './sample/sample.js' Aがエクスポートされている。 Bとしてimportしてください

### 答え

```javascript
import {A} from './constants';
import {A as B} from './sample/sample';
```
