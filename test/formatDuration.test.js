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
    formatDuration(615, 'h小时i分钟s秒'),
    '0小时10分钟15秒'
  )

  test(
    formatDuration(15, 'h小时i分钟s秒'),
    '0小时0分钟15秒'
  )

  test(
    formatDuration(15, 'H小时I分钟S秒'),
    '00小时00分钟15秒'
  )

  test(
    formatDuration(90015, 'd天h小时i分钟s秒'),
    '1天1小时0分钟15秒'
  )

  test(
    formatDuration(0, 'd天h小时i分钟s秒'),
    '0天0小时0分钟0秒'
  )

  test(
    formatDuration(-1, 'd天h小时i分钟s秒'),
    '0天0小时0分钟0秒'
  )

  test(
    formatDuration(615.5, 'i分钟s秒'),
    '10分钟15秒'
  )

})
