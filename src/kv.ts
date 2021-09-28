import { JSON } from './_type'

/**-
  解析key-value字符串，或者将JS纯对象key-value化
*/
export default {
  /**-
    解析字符串
    -p kvString key-value字符串
    -p fieldSeparator 字段分隔符
    -p kvSeparator key与value的分隔符
    -p valueHandler 对value进行预处理的函数
    -r object 结果对象
    -eg
      Kv.parse('a:1,b:2,c:x-x') // {a:'1', b:'2', c:'x-x'}
      Kv.parse('a:1,b:2,c') // {a:'1', b:'2', c:null}
  */
  parse(kvString: string, fieldSeparator = ',', kvSeparator = ':', valueHandler?: Function) {
    /* if (!fieldSeparator) {
      fieldSeparator = ','
      kvSeparator = ':'
    } else if (!kvSeparator) {
      kvSeparator = ':'
    } */
    const res: JSON = {}
    const data = String(kvString).split(fieldSeparator)
    const len = data.length
    let i = 0, kv

    for (; i < len; i++) {
      if (data[i]) {
        kv = data[i].split(kvSeparator)
        res[kv[0]] = kv.length > 1 ? (valueHandler ? valueHandler(kv[1], kv) : kv[1]) : null
      }
    }

    return res
  },
  /**-
    将<r>只有一个层级的</r>JS对象key-value化
    -p obj 纯对象
    -p fieldSeparator 字段分隔符
    -p kvSeparator key与value的分隔符
    -p valueHandler 对value进行预处理的函数
    -r 结果字符串
    -eg
      Kv.stringify({a:1,b:2,c:'x-x'}, ',', ':') // "a:1,b:2,c:x-x"
  */
  stringify(obj: JSON, fieldSeparator = ',', kvSeparator = ':', valueHandler?: Function) {
    /* if (!fieldSeparator) {
      fieldSeparator = ','
      kvSeparator = ':'
    } */
    const res = []
    let k, v

    for (k in obj) {
      if (obj.hasOwnProperty(k)) {
        v = valueHandler ? valueHandler(obj[k]) : obj[k]
        // v 为 null、undefined、'' 将被丢弃
        v == null || v === '' || res.push(k + kvSeparator + v)
      }
    }

    return res.join(fieldSeparator)
  }
}
