import { test } from './_util.js'
import formatTime from '../1kb/formatTime.js'

describe('formatTime', () => {
  // Wed Sep 29 2021 11:02:30 GMT+0800 (中国标准时间)
  const date = new Date(1632884550730)
  const second = 1632884550

  test(
    formatTime(date),
    '2021-09-29 11:02:30'
  )

  test(
    formatTime(date, 'M-D H:I'),
    '09-29 11:02'
  )

  test(
    formatTime(date, 'Y年m月d日'),
    '2021年9月29日'
  )

  test(
    formatTime(second),
    '2021-09-29 11:02:30'
  )

})
