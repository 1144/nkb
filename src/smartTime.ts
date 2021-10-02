const notNum = /\D/g

/**-
  智能格式化时间，格式化为 08:30 这样的字符串，非数字字符会被忽略
  -p short 简化的时间字符串
  -eg
    smartTime('0910') // => 09:10
    smartTime('030') // => 00:30
    smartTime('810') // => 08:10
    smartTime('9') // => 09:00
*/
export default function smartTime(short: string) {
  const str = short.replace(notNum, '')
  const length = str.length

  // 3 位以上，例如 0910
  if (length > 3) {
    return compose(str.slice(0, 2), str.slice(2, 4))
  }
  // 3 位，例如 030，810
  if (length > 2) {
    return compose(str[0], str.slice(1))
  }
  // 3 位以下，只有小时，例如 9，20
  if (length) {
    return compose(str, '0')
  }

  return ''
}

function compose(h: string, i: string) {
  let hour = parseInt(h, 10)
  let min = parseInt(i, 10)

  if (hour < 0 || hour > 23) {
    hour = 0
  }
  if (min < 0 || min > 59) {
    min = 0
  }

  if (!hour && !min) {
    return ''
  }
  return (hour > 9 ? hour : '0' + hour) + ':' + (min > 9 ? min : '0' + min)
}
