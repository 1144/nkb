/**-
  按顺序合并两个数组（元素为非引用类型），遇到重复元素则删除前面的元素
  -p target 目标数组，合并将影响目标数组
  -p source 源数组
  -p limit 合并后，如果数组长度超过这个值，则移除数组开头的元素
  -eg
    uniqueMerge([1, 3, 2], [3]) // => [1, 2, 3]
    uniqueMerge([1, 2, 3, 5], [6], 4) // => [2, 3, 5, 6]
*/
export default function uniqueMerge(target: any[], source: any[], limit?: number) {
  let i
  source.forEach(item => {
    i = target.indexOf(item)
    if (i > -1) {
      target.splice(i, 1)
    }
    target.push(item)
  })

  if (limit) {
    i = target.length
    i > limit && target.splice(0, i - limit)
  }

  return target
}
