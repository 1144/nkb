import { PureObject } from './_type'

/**-
  把对象数组转换为一个 key 到 value 的映射
  -p arr 源数组
  -p keyProp 指定数组元素的 prop，该 prop 的 value 将作为目标 Map 的 key；默认`id`
  -p valueProp 指定数组元素的 prop，该 prop 的 value 将作为目标 Map 的 value；默认将整个元素作为值
  -eg
    const list = [{ id: 1, title: '工作' }, { id: 2, title: '生活' }]
    toMap(list, 'id', 'title') // => { 1: '工作', 2: '生活' }
    toMap(list, 'id') // => { 1: { id: 1, title: '工作' }, 2: { id: 2, title: '生活' } }
    toMap(list) // => { 1: { id: 1, title: '工作' }, 2: { id: 2, title: '生活' } }
*/
export default function toMap(arr: PureObject[], keyProp = 'id', valueProp?: string) {
  const res = Object.create(null)
  arr.forEach(item => {
    res[item[keyProp]] = valueProp ? item[valueProp] : item
  })
  return res
}
