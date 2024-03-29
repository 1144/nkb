import { OnKey } from './_type'

/**-
  从数组中删除所有符合条件的元素，返回被删除的元素组成的数组，没有符合条件的元素时返回空数组
  -p arr 源数组
  -p value 目标值
  -p onKey 根据这个key在源数组里查找目标元素，为`null`则比较整个元素；默认`id`
  -eg
    removeAll([1, 3, 2, 1], 1, null) // => [1, 1]
    removeAll([{ id: 1, n: 10 }, { id: 3, n: 20 }, { id: 3, n: 30 }], 3)
    // => [{ id: 3, n: 20 }, { id: 3, n: 30 }]
    removeAll([{ a: 1 }, { a: 3 }], 3, 'a') // => [{ a: 3 }]
*/
export default function removeAll(arr: any[], value: any, onKey?: OnKey) {
  const removed = []
  let i = arr.length

  if (onKey === null) {
    while (i--) {
      arr[i] === value && removed.unshift(arr.splice(i, 1)[0])
    }
  } else {
    const key = onKey === undefined ? 'id' : onKey
    while (i--) {
      arr[i][key] === value && removed.unshift(arr.splice(i, 1)[0])
    }
  }

  return removed
}
