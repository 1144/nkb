/**-
  获取某日0点0分0秒的时间戳，返回秒或毫秒
  -p time 时间对象，或时间戳（单位为秒或毫秒，自动判断是秒还是毫秒）
  -p unit 返回值的单位，默认秒；传`ms`则返回毫秒
  -eg
    getDayZero(new Date()) // 返回秒
    getDayZero(new Date(), 'ms') // 返回豪秒
    getDayZero(1538159538) // => 1538150400
    getDayZero(1538159538188) // => 1538150400
    getDayZero(1538159538, 'ms') // => 1538150400000
    getDayZero(1538159538188, 'ms') // => 1538150400000
*/
export default function getDayZero(time: Date | number, unit?: 'ms') {
  const t = time instanceof Date ? time : new Date(time > 9e9 ? time : time * 1000)

  t.setHours(0)
  t.setMinutes(0)
  t.setSeconds(0)
  t.setMilliseconds(0)

  return t.getTime() / (unit === 'ms' ? 1 : 1000)
}
