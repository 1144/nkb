type ValueProducer = (key: any, keys: any[]) => any

/**-
  根据keys数组创建纯对象，以数组元素为key，值为valueProducer处理的结果
  -p keys 键数组
  -p valueProducer 值生产器，返回`undefined`则当前key会被丢弃；不传则创建对象的值都为`true`
  -eg
    createObject(['KEY1', 'KEY2'], (key) => key.toLowerCase())
    // => { KEY1: 'key1', KEY2: 'key2' }

    createObject(['KEY1', 'KEY2']) // => { KEY1: true, KEY2: true }

    createObject([1, 2, 3, 4], (key) => key < 3 ? true : undefined)
    // => { 1: true, 2: true }
*/
export default function createObject(keys: any[], valueProducer?: ValueProducer) {
  const object = Object.create(null)

  if (valueProducer) {
    keys.forEach(key => {
      const value = valueProducer(key, keys)
      if (value !== undefined) {
        object[key] = value
      }
    })
  } else {
    keys.forEach(key => {
      object[key] = true
    })
  }

  return object
}
