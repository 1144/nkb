import { JSON } from './_type'

/**-
  把英文逗号连接的 id 字符串，根据 titleMap 映射为对应的 title 字符串
  -p ids id字符串，titleMap中不存在的id会被丢弃
  -p titleMap id为key，title为值
  -p joinChar 映射后的连接符，默认'/'
  -r title拼接成的字符串
  -eg
    mapIds('1,2', { 1: '工作', 2: '生活' }) // => '工作/生活'
    mapIds('1,2', { 1: '工作', 2: '生活' }, ',') // => '工作,生活'
    mapIds('2,3', { 1: '工作', 2: '生活' }, ',') // => '生活'
*/
export default function mapIds(ids: string, titleMap: JSON, joinChar = '/') {
  const titles: string[] = []

  ids.split(',').forEach(id => {
    titleMap[id] && titles.push(titleMap[id])
  })

  return titles.join(joinChar)
}
