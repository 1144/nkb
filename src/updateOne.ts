import { PureObject } from './_type'

/**-
  更新列表中的某一条数据，成功则返回`true`，找不到目标数据则返回`false`
  -p arr 数据列表
  -p newItem 新数据项
  -p onKey 根据这个key在列表中查找目标数据；默认`id`
  -eg
    updateOne([{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }], { id: 1, title: 'zoo' })
    // => true // 更新后列表：[{ id: 1, title: 'zoo' }, { id: 2, title: 'bar' }]

    updateOne([{ n: 1, title: 'foo' }, { n: 2, title: 'bar' }], { n: 1, title: 'yoo' }, 'n')
    // => true // 更新后列表：[{ n: 1, title: 'yoo' }, { n: 2, title: 'bar' }]
*/
export default function updateOne(arr: PureObject[], newItem: PureObject, onKey = 'id') {
  const originalItem = arr.find(item => item[onKey] === newItem[onKey])

  if (originalItem) {
    Object.assign(originalItem, newItem)
    return true
  }

  return false
}
