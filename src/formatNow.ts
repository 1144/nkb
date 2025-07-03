import formatTime from './formatTime.js'

/**-
  获取格式化过的当前时间，返回格式为`20150715164925`，长度14位
  -rel [0, formatTime] 把时间转换成指定格式的时间
  -eg
    formatNow() // => '20150715164925'
*/
export default function formatNow() {
  return formatTime(new Date, 'YMDHIS')
}
