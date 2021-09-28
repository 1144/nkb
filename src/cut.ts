/**-
  把src字符串按target切段，忽略大小写，切段后返回的数组中包含匹配的字符串
  -p src 源字符串
  -p target 切割目标位置
  -eg
    cut('Hello world. Say hello.', 'hello') // => ['', 'Hello', ' world. Say ', 'hello', '.']
*/
export default function cut(src: string, target: string) {
  target = target.toLowerCase()

  const srcLen = src.length
  const tarLen = target.length
  const res = []

  let temp = '', tempTar = '', j = 0
  for (let i = 0; i < srcLen; i++) {
    if (src[i].toLowerCase() === target[j]) {
      tempTar += src[i]
      j++
      if (j === tarLen) {
        res.push(temp) // 即使是空也要push
        res.push(tempTar)
        temp = ''
        tempTar = ''
        j = 0
      }
    } else if (j) {
      i -= j
      temp += tempTar[0]
      tempTar = ''
      j = 0
    } else {
      temp += src[i]
    }
  }
  res.push(temp + tempTar) // 剩下的也加进去（也没必要判断是否空）

  return res
}
