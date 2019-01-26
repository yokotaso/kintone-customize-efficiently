# ES6 import について

このドキュメントで概要をつかめたら、詳細は次のドキュメントで確認するようにしましょう

- [MDN export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
- [MDN import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)

## export

エクスポートは名前付きとデフォルトの2つあります。

### 名前つきエクスポート

```javascript
// クラスの名前つきエクスポート
export class ClassA {

}

// const定数の名前つきエクスポート
export const Constants = {
    A: "1",
    B: "2",
};

// functionの名前つきエクスポート
export function myFunction() {

}

// 宣言とexportを分ける
const A = 1;
export A;

const B = 2;
const C = 3;
// リネームもできる
export {B, C as D};
```

### デフォルトエクスポート

名前つきエクスポートと同じですが、デフォルトは1つのみです。
他は名前エクスポートと同じです。

```javascript
export default const A = 1;
```

## import

`from` には ファイルへの相対パス(拡張子はなし). 

### 名前つきimport

```javascript
// sample.jsでexport
export const double = (num) => num + num;
export const triple = (num) => num * 3;

// 名前つきexportをimportする
import {double, triple} from './sample';
double(2); // -> 4
triple(2); // -> 6

// 名前つきexportをSampleオブジェクトにimportする
import * as Sample from './sample';
Sample.double(2); // -> 4
Sample.triple(2); // -> 6

```

### デフォルトimport

```javascript
// sample.jsでexport
export default const myfunc = (num) => num + num;

// importする時に名前を付け直すことができる
import double from './sample'

double(2); // -> 4

// デフォルトexport
export default const A = 1;
export const B = 2;
// デフォルトimportと名前つきimport
import MyNumber, {B} from './sample';
```

### node_moduleをインポートする

webpackなどのツールがモジュールへのパスを解決してくます。

```javascript
import Vue from 'vue';
import $ from 'jquery';
```