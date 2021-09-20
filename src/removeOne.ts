type Predicate = (value: any, index: number, obj: any[]) => boolean

/*--
  删除一个符合判定条件的元素，返回被删除的元素，找不到时返回`undefined`
  -p arr 源数组
  -p predicate 判断函数，判断是否为要找的元素，接受3个参数：1 当前元素，2 当前下标，3 源数组；或目标 key
  -p value 当 value 不为`undefined`时，认为 predicate 是目标 key
  -eg
    removeOne([1, 3, 2, 1], item => item === 3) // => 3
    removeOne([{ a: 1 }, { a: 3 }], item => item.a === 3) // => { a: 3 }
    removeOne([{ a: 1 }, { a: 3 }], 'a', 3) // => { a: 3 }
*/
export default function removeOne(arr: any[], predicate: Predicate | string, value?: any) {
  const i = arr.findIndex(typeof predicate === 'function' ? predicate : item => item[predicate] === value)
  if (i > -1) {
    return arr.splice(i, 1)[0]
  }
  return undefined
}
