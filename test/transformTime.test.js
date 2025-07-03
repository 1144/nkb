import { test } from './_util.js'
import transformTime from '../1kb/transformTime.js'

describe('transformTime', () => {

  test(
    transformTime('20210929110230'),
    '2021-09-29 11:02:30'
  )

  test(
    transformTime('20150715164925'),
    '2015-07-15 16:49:25'
  )

})
