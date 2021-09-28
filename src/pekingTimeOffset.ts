/**-
  本地系统时间 与 北京时间 的差值，单位为秒。
  用于将服务器时间（北京时间）转换为本地时间。
  -eg
    import timeOffset from '@/1kb/pekingTimeOffset'
    const serverTime = 1528928391
    const localTime = serverTime + timeOffset
*/
const pekingTimeOffset = (-480 - new Date().getTimezoneOffset()) * 60
export default pekingTimeOffset
