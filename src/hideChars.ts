/**-
  隐藏指定范围内的字符
  -p str 源字符串
  -p start 起始位置（包含）
  -p end 结束位置（不包含），可不传（将隐藏起始位置后的所有字符）
  -p replacement 替代字符，默认`*`
  -eg
    hideChars('138456', 3) // => 138***
    hideChars('138456', 3, 5) // => 138**6
    hideChars('138456', 3, 5, '-') // => 138--6
    // start, end 参数的意义与字符串方法`slice`相同
    hideChars('138456', -4, -2) // => 13**56
    hideChars('138456', -2, 6, '-') // => 1384--
*/
export default function hideChars(str: string, start: number, end = 0, replacement = '*') {
  const frontStr = str.slice(0, start)
  const endStr = end ? str.slice(end) : ''
  return frontStr + replacement.repeat(str.length - frontStr.length - endStr.length) + endStr
}
