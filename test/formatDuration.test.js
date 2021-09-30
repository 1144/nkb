import { test } from './_util.js'
import formatDuration from '../1kb/formatDuration.js'

describe('formatDuration', () => {

  test(
    formatDuration(3615, 'H小时I分钟S秒'),
    '01小时00分钟15秒'
  )

  test(
    formatDuration(3615, 'h小时i分钟s秒'),
    '1小时0分钟15秒'
  )

  test(
    formatDuration(90015, 'd天h小时i分钟s秒'),
    '1天1小时0分钟15秒'
  )

})
