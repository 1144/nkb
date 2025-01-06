const notNum = /\D/g

/**-
  智能格式化时间，格式化为 08:30 这样的字符串，非数字字符会被忽略
  -p short 简化的时间字符串
  -eg
    smartTime('0910') // => 9:10
    smartTime('030') // => 0:30
    smartTime('810') // => 8:10
    smartTime('9') // => 9:00
    smartTime('0910', true) // => 09:10
    smartTime('030', true) // => 00:30
*/
export default function smartTime(short: string, leadingZero = false) {
  const str = short.replace(notNum, '')
  const length = str.length

  // 3 位以上，例如 0910
  if (length > 3) {
    return compose(str.slice(0, 2), str.slice(2, 4), leadingZero)
  }
  // 3 位，例如 030，810
  if (length > 2) {
    return compose(str[0], str.slice(1), leadingZero)
  }
  // 3 位以下，只有小时，例如 9，20
  if (length) {
    return compose(str, '0', leadingZero)
  }

  return ''
}

function compose(h: string, i: string, leadingZero: boolean) {
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
  return (hour > 9 || !leadingZero ? hour : '0' + hour) + ':' + (min > 9 ? min : '0' + min)
}
