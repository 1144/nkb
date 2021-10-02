import { test } from './_util.js'
import uniquePush from '../1kb/uniquePush.js'

describe('uniquePush', () => {

  test(
    uniquePush([1, 3, 2], 3),
    [1, 2, 3]
  )

  test(
    uniquePush([1, 2, 3, 5], 6, 4),
    [2, 3, 5, 6]
  )

  test(
    uniquePush([{ id: 1 }, { id: 2 }], { id: 3 }, 10, 'id'),
    [{ id: 1 }, { id: 2 }, { id: 3 }]
  )

  test(
    uniquePush([{ id: 1 }, { id: 2 }], { id: 1 }, 10, 'id'),
    [{ id: 2 }, { id: 1 }]
  )

})
