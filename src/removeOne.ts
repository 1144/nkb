import { OnKey } from './_type'

/**-
  从数组中删除一个元素，返回被删除的元素，找不到时返回`undefined`
  -p arr 源数组
  -p value 目标值
  -p onKey 根据这个key在源数组里查找目标元素，为`null`则比较整个元素；默认`id`
  -eg
    removeOne([1, 3, 2, 1], 3, null) // => 3
    removeOne([{ id: 1 }, { id: 3 }], 3) // => { id: 3 }
    removeOne([{ a: 1 }, { a: 3 }], 3, 'a') // => { a: 3 }
*/
export default function removeOne(arr: any[], value: any, onKey?: OnKey) {
  const i = onKey === null
    ? arr.indexOf(value)
    : arr.findIndex(item => item[onKey === undefined ? 'id' : onKey] === value)
  if (i > -1) {
    return arr.splice(i, 1)[0]
  }

  return undefined
}
