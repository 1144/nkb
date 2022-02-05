const _toString = Object.prototype.toString

/**-
  判断一个值是否是纯 JavaScript 对象
  -p value 要判断的值
  -eg
    isPlainObject() // => false
    isPlainObject(1) // => false
    isPlainObject(null) // => false
    isPlainObject(/\d/) // => false
    isPlainObject(new Date()) // => false
    isPlainObject({ a: 1 }) // => true
*/
function isPlainObject(value: any) {
  return _toString.call(value) === '[object Object]'
}

export default {
  isPlainObject,
}
