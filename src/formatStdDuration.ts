const	{ floor } = Math

/**-
  把时间长度转换成标准格式的时间，例如 1:23:45 或 01:23:45，一般用于音视频时长
  -p seconds 时间长度，单位秒
  -p padZero 小时前是否填充0补齐两位，默认不补齐
  -note 小时为0时将会忽略小时，这是与`formatDuration`的区别之一
  -rel [0, formatDuration] 功能更全面的格式化时间段
  -eg
    formatStdDuration(3615) // => 1:00:15
    formatStdDuration(3615, true) // => 01:00:15
    formatStdDuration(615) // => 10:15
    formatStdDuration(315) // => 05:15
    formatStdDuration(15) // => 00:15
*/
export default function formatStdDuration(seconds: number, padZero = false) {
  let time = floor(seconds)
  let h = ''
  let i = '00:'
  let s = '00'
  let x

  if (time >= 3600) {
    x = floor(time / 3600)
    h = x < 10 && padZero ? `0${x}:` : `${x}:`
    time %= 3600
  }
  if (time > 59) {
    x = floor(time / 60)
    i = x < 10 ? `0${x}:` : `${x}:`
    time %= 60
  }
  if (time > 0) {
    s = time < 10 ? `0${time}` : String(time)
  }

  return h + i + s
}
