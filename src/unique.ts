/**-
  删除数组里的重复元素，或者将json数组里的每个json对象根据指定属性排重
  -p arr 要处理的数组
  -p prop 如果是一个json数组，那么根据每个对象的prop这个属性的值进行排重
  -eg
    unique([1, 3, 2, 1, 5, 1, '2', '1', null, 'null', null, ''])
    // => [1, 3, 2, 5, '2', '1', null, 'null', '']

    unique([{ a: 1, b: 3 }, { a: 2, b: 1 }, { a: 5, b: 1 }], 'b')
    // => [{ a: 1, b: 3 }, { a: 2, b: 1 }]
*/
export default function unique(arr: any[], prop?: string) {
  const res = []
  const map = Object.create(null)
  const len = arr.length
  let i = 0, v, k

  if (prop) {
    for (; i < len; i++) {
      v = arr[i][prop]
      k = typeof v === 'string' ? '_' + v : String(v)
      if (!map[k]) {
        res.push(arr[i])
        map[k] = true
      }
    }

    return res
  }

  for (; i < len; i++) {
    v = arr[i]
    k = typeof v === 'string' ? '_' + v : String(v)
    if (!map[k]) {
      res.push(v)
      map[k] = true
    }
  }

  return res
}
