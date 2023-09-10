import { PureObject } from './_type'

/**-
  解析 key-value 字符串，或者将 JS 纯对象 key-value 化
*/
export default {
  /**-
    将**只有一个层级的** JS 对象 key-value 化。value 为 undefined 会被丢弃。
    -p obj 纯对象
    -p kvSeparator key 与 value 的分隔符，请使用能被 encodeURIComponent 编码的字符
    -p fieldSeparator 字段分隔符，请使用能被 encodeURIComponent 编码的字符
    -p valueHandler 对 value 进行预处理的函数
    -r 结果字符串
    -eg
      Kv.stringify({ a: 1, b: 2, c: 'x-x' }) // => 'a:1,b:2,c:x-x'
  */
  stringify(obj: PureObject, kvSeparator = ':', fieldSeparator = ',', valueHandler?: Function) {
    const result = []
    let k, v

    for (k in obj) {
      v = valueHandler ? valueHandler(obj[k]) : obj[k]
      // v 为 undefined 将被丢弃
      if (v || v !== undefined) {
        result.push(encodeURIComponent(k) + kvSeparator + encodeURIComponent(v))
      }
    }

    return result.join(fieldSeparator)
  },

  /**-
    解析字符串
    -p kvString key-value 字符串
    -p kvSeparator key 与 value 的分隔符
    -p fieldSeparator 字段分隔符
    -p valueHandler 对 value 进行预处理的函数
    -r object 结果对象
    -eg
      Kv.parse('a:1,b:2,c:x-x') // => { a: '1', b: '2', c: 'x-x' }
      Kv.parse('a:1,b:2,c') // => { a: '1', b: '2', c: '' }
  */
  parse(kvString: string, kvSeparator = ':', fieldSeparator = ',', valueHandler?: Function) {
    const list = String(kvString).split(fieldSeparator)
    const len = list.length
    const result: PureObject = {}
    let i = 0, kv

    for (; i < len; i++) {
      if (list[i]) {
        kv = list[i].split(kvSeparator)
        result[decodeURIComponent(kv[0])] = kv.length > 1
          ? decodeURIComponent(valueHandler ? valueHandler(kv[1], kv) : kv[1])
          : ''
      }
    }

    return result
  },

}
