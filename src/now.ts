/**-
  获取单位为秒的当前时间
  -eg
    now() // => current time by seconds, eg. 1607825318
*/
export default function now() {
  return (Date.now() / 1000) | 0
}
