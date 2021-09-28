/**-
  计算字符串长度，将unicode字符计算为2个单位
  -p str 源字符串
  -eg
    mbLength('中国人') // => 6
    mbLength('china') // => 5
    mbLength('中国ren') // => 7
*/
export default function mbLength(str: string) {
  let res = 0
  let i = str.length

  while (i--) {
    res += str.charCodeAt(i) > 255 ? 2 : 1
  }

  return res
}
