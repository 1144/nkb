import { OnKey } from './_type'
import removeOne from './removeOne.js'

/**-
  将一个值添加到数组头部，并删除数组里之前已有的与之相等的元素
  -rel [0, uniquePush] 添加到数组尾部
  -p arr 目标数组
  -p item 需要添加的元素
  -p onKey 根据这个key在源数组里查找目标元素，为`null`则比较整个元素；默认`id`
  -p limit 添加后，如果数组长度超过这个限制，则移除数组尾部的元素
  -eg
    uniqueUnshift([1, 3, 2], 3, null) // => [3, 1, 2]
    uniqueUnshift([1, 2, 3, 5], 6, null, 4) // => [6, 1, 2, 3]
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 3 }, 'id', 10)
    // => [{ id: 3 }, { id: 1 }, { id: 2 }]

    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 1 }, 'id', 10)
    // => [{ id: 1 }, { id: 2 }]
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 1 }) // 默认比较`id`
    // => [{ id: 1 }, { id: 2 }]
*/
export default function uniqueUnshift(arr: any[], item: any, onKey?: OnKey, limit?: number) {
  removeOne(arr, onKey === null ? item : item[onKey === undefined ? 'id' : onKey], onKey)

  arr.unshift(item)
  if (limit && arr.length > limit) {
    arr.splice(limit)
  }

  return arr
}
