import { PureObject } from './_type'
import createObject from './createObject.js'

/**-
  从id字符串中获取有效的id，返回数组。返回数组id顺序跟list顺序一致
  -p ids 多个id组成的字符串，用英文逗号连接
  -p list 验证id是否有效的对象数组，id是list中某个对象的id才视为有效
  -p key list中字段名不是'id'时，用key传入字段名
  -eg
    const list = [{ id: 2, pid: 1 }, { id: 3, pid: 1 }]
    getValidIds('1,3,2', list) // => [2, 3] // 跟list顺序一致
    getValidIds('1,3,2', list, 'pid') // => [1] // 自动排重
*/
export default function getValidIds(ids: string, list: PureObject[], key = 'id') {
  const res: any[] = []
  const idMap = createObject(ids.split(','))

  list.forEach(item => {
    const id = item[key]
    if (idMap[id] && res.indexOf(id) < 0) {
      res.push(id)
    }
  })

  return res
}
