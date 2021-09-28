import { JSON } from './_type'

/**-
  把JSON数组转换为一个JSON对象
  -p arr 源数组
  -p keyProp 指定数组元素的prop，该prop的value将作为目标JSON的key
  -p valueProp 指定数组元素的prop，该prop的value将作为目标JSON的value
  -eg
    const list = [{ id: 1, title: '工作' }, { id: 2, title: '生活' }]
    toJSON(list, 'id', 'title') // => { 1: '工作', 2: '生活' }
    toJSON(list, 'id') // => { 1: { id: 1, title: '工作' }, 2: { id: 2, title: '生活' } }
*/
export default function toJSON(arr: JSON[], keyProp: string, valueProp?: string) {
  const res = Object.create(null)
  arr.forEach(item => {
    res[item[keyProp]] = valueProp ? item[valueProp] : item
  })
  return res
}
