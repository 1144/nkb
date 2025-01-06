import { test } from './_util.js'
import smartTime from '../1kb/smartTime.js'

describe('smartTime', () => {

  test(
    smartTime('0910'),
    '9:10'
  )

  test(
    smartTime('1230'),
    '12:30'
  )

  test(
    smartTime('030'),
    '0:30'
  )

  test(
    smartTime('810'),
    '8:10'
  )

  test(
    smartTime('9'),
    '9:00'
  )

  test(
    smartTime('x9'),
    '9:00'
  )

  test(
    smartTime('0910', true),
    '09:10'
  )

  test(
    smartTime('1230', true),
    '12:30'
  )

  test(
    smartTime('030', true),
    '00:30'
  )

  test(
    smartTime('810', true),
    '08:10'
  )

  test(
    smartTime('9', true),
    '09:00'
  )

  test(
    smartTime('x9', true),
    '09:00'
  )

  test(
    smartTime('xxx'),
    ''
  )

})
