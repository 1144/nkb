/**-
  截取指定长度的字符串，一个全角字符长度算2个单位
  -p str 源字符串
  -p clipLen 截取长度
  -p limitLen 最大长度，默认是截取长度，超过这个最大长度才截字符串
  -p suffix 超过截取长度时添加的后缀
  -eg
    mbClip('我是中国人', 8) // => 我是中国…
    mbClip('我是中国人', 8, '..') // => 我是中国..
    mbClip('我是中国人', 8, 10) // => 我是中国人
    mbClip('我是中国人哈哈哈', 8, 10) // => 我是中国…
*/
export default function mbClip(str: string, clipLen: number, limitLen?: number, suffix?: string) {
  if (!str) {
    return ''
  }
  const len = str.length
  if (len * 2 <= clipLen) {
    return str
  }
  if (typeof limitLen !== 'number') {
    suffix = limitLen // 没有传 limitLen
    limitLen = clipLen
  }
  typeof suffix === 'string' || (suffix = '…')

  let i = 0, clipi = 0, count = 0
  for (; i < len; i++) {
    count += str.charCodeAt(i) > 255 ? 2 : 1
    if (count > clipLen && clipi === 0) {
      clipi = i
    }
    if (count > limitLen) {
      return str.slice(0, clipi) + suffix
    }
  }

  return str
}
