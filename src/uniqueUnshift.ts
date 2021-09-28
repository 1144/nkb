import removeOne from './removeOne'

/**-
  将一个值添加到数组头部，并删除数组里之前已有的与之相等的元素
  -rel [0, uniquePush] 添加到数组尾部
  -p arr 目标数组
  -p item 需要添加的元素
  -p limit 添加后，如果数组长度超过这个限制，则移除数组尾部的元素
  -p predicateKey 根据这个key在目标数组里查找是否已经存在item
  -eg
    uniqueUnshift([1, 3, 2], 3); // => [3, 1, 2]
    uniqueUnshift([1, 2, 3, 5], 6, 4); // => [6, 1, 2, 3]
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 3 }, 10, 'id') // => [{ id: 3 }, { id: 1 }, { id: 2 }]
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 1 }, 10, 'id') // => [{ id: 1 }, { id: 2 }]
*/
export default function uniqueUnshift(arr: any[], item: any, limit?: number, predicateKey?: string) {
  predicateKey ? removeOne(arr, predicateKey, item[predicateKey]) : removeOne(arr, li => li === item)

  arr.unshift(item)
  if (limit && arr.length > limit) {
    arr.splice(limit)
  }

  return arr
}