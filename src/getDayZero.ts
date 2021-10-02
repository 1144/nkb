/**-
  获取某日0点0分0秒的时间戳，单位为秒
  -p time 时间点，单位为秒；默认当前时间点
  -eg
    getDayZero()
    getDayZero(1538159538) // => 1538150400
*/
export default function getDayZero(time?: number) {
  const t = time ? new Date(time * 1000) : new Date()

  t.setHours(0)
  t.setMinutes(0)
  t.setSeconds(0)
  t.setMilliseconds(0)

  return t.getTime() / 1000
}
