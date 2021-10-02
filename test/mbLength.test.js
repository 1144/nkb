import { test } from './_util.js'
import mbLength from '../1kb/mbLength.js'

describe('mbLength', () => {

  test(
    mbLength('中国人'),
    6
  )

  test(
    mbLength('china'),
    5
  )

  test(
    mbLength('中国ren'),
    7
  )

})
