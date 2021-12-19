/**-
  获取某日0点0分0秒的时间戳，返回毫秒或秒
  -p time 时间对象，或时间戳（单位为毫秒或秒，自动判断是毫秒还是秒）
  -p unit 返回值的单位，默认豪秒；传`s`则返回秒
  -eg
    getDayZero(new Date()) // 返回豪秒
    getDayZero(new Date(), 's') // 返回秒
    getDayZero(1538159538) // => 1538150400000
    getDayZero(1538159538188) // => 1538150400000
    getDayZero(1538159538, 's') // => 1538150400
    getDayZero(1538159538188, 's') // => 1538150400
*/
export default function getDayZero(time: Date | number, unit?: 's') {
  const t = time instanceof Date ? time : new Date(time > 9e9 ? time : time * 1000)

  t.setHours(0)
  t.setMinutes(0)
  t.setSeconds(0)
  t.setMilliseconds(0)

  return t.getTime() / (unit === 's' ? 1000 : 1)
}
