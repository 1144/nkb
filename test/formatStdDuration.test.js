import { test } from './_util.js'
import formatStdDuration from '../1kb/formatStdDuration.js'

describe('formatStdDuration', () => {

  test(
    formatStdDuration(3615),
    '1:00:15'
  )

  test(
    formatStdDuration(3615, true),
    '01:00:15'
  )

  test(
    formatStdDuration(615),
    '10:15'
  )

  test(
    formatStdDuration(315),
    '05:15'
  )

  test(
    formatStdDuration(15),
    '00:15'
  )

  test(
    formatStdDuration(0),
    '00:00'
  )

  test(
    formatStdDuration(-1),
    '00:00'
  )

  test(
    formatStdDuration(615.5),
    '10:15'
  )

})
