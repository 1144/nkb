# nkb

简单易用的轻量级 JavaScript 函数库，大部分函数在构建压缩后小于 1KB 。
按模块规范分为 1kb 和 2kb 。

## 1kb

使用 ESModule 规范导出。

### 安装

`yarn add 1kb`

Or

`npm i 1kb`

### 示例

```js
import now from '1kb/now'
import uniquePush from '1kb/uniquePush'
import mapIds from '1kb/mapIds'

// 获取当前时间，单位`秒`
now() // => 1607825318

// 将一个值添加到数组末尾，并删除数组里之前已有的与之相等的元素
uniquePush([1, 3, 2], 3, null) // => [1, 2, 3]
// 默认比较`id`
uniquePush([{ id: 1 }, { id: 2 }], { id: 1 }) // => [{ id: 2 }, { id: 1 }]

// 把英文逗号连接的 id 字符串，根据给定的 Map 对象映射为对应的 title 字符串
mapIds('1,2', { 1: '工作', 2: '生活' }) // => '工作/生活'
// 指定映射后的连接符
mapIds('1,2', { 1: '工作', 2: '生活' }, ',') // => '工作,生活'
```

## 2kb

与 1kb 的区别仅仅是模块规范不同，2kb 使用 CommonJS 规范导出。

### 安装

`yarn add 2kb`

Or

`npm i 2kb`

### Demo

```js
const now = require('2kb/now')
const uniquePush = require('2kb/uniquePush')
const mapIds = require('2kb/mapIds')

// 获取当前时间，单位`秒`
now() // => 1607825318

// 将一个值添加到数组末尾，并删除数组里之前已有的与之相等的元素
uniquePush([1, 3, 2], 3, null) // => [1, 2, 3]
// 默认比较`id`
uniquePush([{ id: 1 }, { id: 2 }], { id: 1 }) // => [{ id: 2 }, { id: 1 }]

// 把英文逗号连接的 id 字符串，根据给定的 Map 对象映射为对应的 title 字符串
mapIds('1,2', { 1: '工作', 2: '生活' }) // => '工作/生活'
// 指定映射后的连接符
mapIds('1,2', { 1: '工作', 2: '生活' }, ',') // => '工作,生活'
```

## API 文档

[使用文档](https://github.com/1144/nkb/tree/main/docs#readme)
