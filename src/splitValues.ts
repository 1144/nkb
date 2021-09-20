import mbClip from './mbClip'

interface Options {
  /** 值分隔符 */
  delimiter?: string | RegExp
  /** 值处理器 */
  valueHandler?: Function
  /** 值长度限制，没有值处理器时才生效 */
  valueLimit?: number
  /** 返回数组长度限制 */
  limit?: number
}

const regSpaces = /  +/g
const regBreakLineChar = /\r?\n/g
const regDelimiter = /,|，/

/**-
  拆分由指定字符隔开的多个值
  -p values 多个值组成的字符串
  -p options 可选项：
    delimiter 分隔符，默认为中文逗号、英文逗号、换行符；
    valueHandler 值处理器；
    valueLimit 值长度限制，没有值处理器时才生效；
    limit 返回数组的长度限制
  -eg
    splitValues('工作，生活，，学习，') // => ["工作", "生活", "学习"]
*/
export default function splitValues(values: string, options = <Options>{}) {
  if (!values) {
    return []
  }

  const res: string[] = []
  const delimiter = options.delimiter || regDelimiter
  const handler = options.valueHandler ||
    (options.valueLimit ?
      (val: string) => mbClip(val, <number>options.valueLimit) : false)
  const existing = Object.create(null)

  values.replace(regSpaces, ' ')
    .replace(regBreakLineChar, ',')
    .split(delimiter)
    .forEach(value => {
      const val = handler ? handler(value.trim()) : value.trim()
      if (val !== '' && !existing[val]) {
        res.push(val)
        existing[val] = true
      }
    })

  return options.limit ? res.slice(0, options.limit) : res
}
