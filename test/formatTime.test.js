import assert from 'assert'
import formatTime from '../1kb/formatTime.js'

describe('formatTime', () => {
  // Wed Sep 29 2021 11:02:30 GMT+0800 (中国标准时间)
  const date = new Date(1632884550730)
  const second = 1632884550

  it('should return default format time `2021-09-29 11:02:30`', () => {
    assert.strictEqual(formatTime(date), '2021-09-29 11:02:30')
  })

  it('should return `09-29 11:02`', () => {
    assert.strictEqual(formatTime(date, 'M-D H:I'), '09-29 11:02')
  })

  it('should return `2021年9月29日`', () => {
    assert.strictEqual(formatTime(date, 'Y年m月d日'), '2021年9月29日')
  })

  it('should return default format time `2021-09-29 11:02:30` (by second)', () => {
    assert.strictEqual(formatTime(second), '2021-09-29 11:02:30')
  })

})
