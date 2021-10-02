import removeOne from './removeOne.js'

/**-
  将一个值添加到数组末尾，并删除数组里之前已有的与之相等的元素
  -rel [0, uniqueUnshift] 添加到数组头部
  -p arr 目标数组
  -p item 需要添加的元素
  -p limit 添加后，如果数组长度超过这个限制，则移除数组开头的元素
  -p predicateKey 根据这个key在目标数组里查找是否已经存在item
  -eg
    uniquePush([1, 3, 2], 3) // => [1, 2, 3]
    uniquePush([1, 2, 3, 5], 6, 4) // => [2, 3, 5, 6]
    uniquePush([{ id: 1 }, { id: 2 }], { id: 3 }, 10, 'id')
    // => [{ id: 1 }, { id: 2 }, { id: 3 }]

    uniquePush([{ id: 1 }, { id: 2 }], { id: 1 }, 10, 'id')
    // => [{ id: 2 }, { id: 1 }]
*/
export default function uniquePush(arr: any[], item: any, limit?: number, predicateKey?: string) {
  predicateKey ? removeOne(arr, predicateKey, item[predicateKey]) : removeOne(arr, li => li === item)

  arr.push(item)
  if (limit && arr.length > limit) {
    arr.splice(0, arr.length - limit)
  }

  return arr
}
