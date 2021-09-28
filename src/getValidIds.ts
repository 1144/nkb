type Item = {
  id: number
}

/**-
  从id字符串中获取有效的id，返回数组
  -p ids 多个id组成的字符串，用英文逗号连接
  -p list 验证id是否有效的json对象数组，id是list中某个对象的id才视为有效
*/
export default function getValidIds(ids: string, list: Item[]) {
  const res: number[] = []
  const idList: number[] = ids.split(',').map(id => +id)

  list.forEach(item => {
    // @ts-ignore
    idList.includes(item.id) && res.push(item.id)
  })

  return res
}
