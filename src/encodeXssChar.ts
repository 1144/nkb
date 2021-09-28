/**-
  对可能引起XSS的字符进行编码
  -as encodeXssChar
  -p str 需要html编码的字符串
  -r 对str进行html编码后的字符串
  -note 服务端可用
  -eg
    const code = '<script data-ng="1">alert(1);</script>'
    encodeXssChar(code) // => &lt;script data-ng=&quot;1&quot;&gt;alert(1);&lt;/script&gt;
*/
export default function encodeXssChar(str: string) {
  const len = str.length
  let res = ''
  for (let i = 0, c; i < len; i++) {
    c = str[i]
    if (c === '<') {
      res += '&lt;'
    } else if (c === '>') {
      res += '&gt;'
    } else if (c === '"') {
      res += '&quot;'
    } else if (c === '\'') {
      res += '&#39;'
    } else {
      res += c
    }
  }
  return res
}
