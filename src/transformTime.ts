/**-
  获取格式化过的当前时间，返回格式为`20150715164925`，长度14位
  -rel [0, formatNow] 获取格式化过的当前时间
  -eg
    transformTime('20150715164925') // => '2015-07-15 16:49:25'
*/
export default function transformTime(s: string) {
  return s.slice(0, 4) + '-' + s.slice(4, 6) + '-' + s.slice(6, 8) + ' ' + s.slice(8, 10) + ':' + s.slice(10, 12) + ':' + s.slice(12)
}
