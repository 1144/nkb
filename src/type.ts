const _toString = Object.prototype.toString

/**-
  Strict object type check. Only returns true for plain JavaScript objects.
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
