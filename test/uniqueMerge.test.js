import { test } from './_util.js'
import uniqueMerge from '../1kb/uniqueMerge.js'

describe('uniqueMerge', () => {

  test(
    uniqueMerge([1, 3, 2], [3]),
    [1, 2, 3]
  )

  test(
    uniqueMerge([1, 2, 3, 5], [6], 4),
    [2, 3, 5, 6]
  )

})
