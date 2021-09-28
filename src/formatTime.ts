/**-
  把时间点格式化成`2015-07-15 16:49:25`这样的字符串
  -p time 时间点，可以是`单位为秒`的数字，可以是一个时间对象
  -p format 时间格式，默认`Y-M-D H:I:S`
  -r string 格式化后的时间字符串
  -note 月份用`M`或`m`标识，分钟用`I`标识
  -rel [0, formatDuration] 把时间长度转换成指定格式的时间
  -eg
    formatTime(new Date(), 'Y-M-D H:I:S') // "2015-07-15 16:49:25"
*/

const methods = {
  'y': 'getFullYear',
  'm': 'getMonth',
  'd': 'getDate',
  'h': 'getHours',
  'i': 'getMinutes',
  's': 'getSeconds'
}

export default function formatTime(time: number | Date, format?: string) {
  if (typeof time === 'number') {
    time = new Date(time * 1000)
  }

  return (format || 'Y-M-D H:I:S').replace(/[YMmDdHIS]/g, function (key) {
    // @ts-ignore
    let val = time[methods[key.toLowerCase()]]()
    if (key === 'M' || key === 'm') { // 月份
      val += 1
    }
    return key < 'a' && val < 10 ? '0' + val : val
  })
}
