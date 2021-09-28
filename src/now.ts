/**-
  返回秒为单位的当前时间
  -eg
    now() // 1607825318
*/
export default function now() {
  return Math.floor(Date.now() / 1000)
}
