import { test } from './_util.js'
import smartTime from '../1kb/smartTime.js'

describe('smartTime', () => {

  test(
    smartTime('0910'),
    '09:10'
  )

  test(
    smartTime('030'),
    '00:30'
  )

  test(
    smartTime('810'),
    '08:10'
  )

  test(
    smartTime('9'),
    '09:00'
  )

  test(
    smartTime('x9'),
    '09:00'
  )

  test(
    smartTime('xxx'),
    ''
  )

})
