import { JSON } from './_type'

const	{ floor } = Math

/**-
  把时间长度转换成指定格式的时间，格式变量包括`DHISdhis`，大写则补齐两位
  -p time 时间长度，单位秒
  -p format 时间格式，如 H:I:S
  -note 最大单位只到天（即D），没有到月
  -rel [0, formatTime] 把时间点格式化成`Y-M-D H:I:S`格式的字符串
  -eg
    formatDuration(3615, '<p>H小时I分钟S秒</p>'); //<p>01小时00分钟15秒</p>
    formatDuration(3615, '<p>h小时i分钟s秒</p>'); //<p>1小时0分钟15秒</p>
    formatDuration(90015, '<p>d天h小时i分钟s秒</p>'); //<p>1天1小时0分钟15秒</p>
*/
export default function formatDuration(time: number, format: string) {
  // D: '00', H: '00', I: '00', S: '00', d: '0', h: '0', i: '0', s: '0'
  const data: JSON = {}
  let x

  if (time >= 86400) { // 24*60*60 = 86400
    x = floor(time / 86400)
    data.D = data.d = String(x)
    x < 10 && (data.D = '0' + x)
    time %= 86400
  }
  if (time >= 3600) {
    x = floor(time / 3600)
    data.H = data.h = String(x)
    x<10 && (data.H = '0' + x)
    time %= 3600
  }
  if (time > 59) {
    x = floor(time / 60)
    data.I = data.i = String(x)
    x<10 && (data.I = '0' + x)
    time %= 60
  }
  if (time > 0) {
    data.S = data.s = String(time)
    time < 10 && (data.S = '0' + time)
  }

  return format.replace(/\b[DHISdhis]+\b/g, ($0) => {
    return data[$0] || ''
  })
}