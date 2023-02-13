import { test } from './_util.js'
import uniquePush from '../1kb/uniquePush.js'

describe('uniquePush', () => {

  test(
    uniquePush([1, 3, 2], 3, null),
    [1, 2, 3]
  )
  test(
    uniquePush([1, 2, 3, 5], 6, null, 4),
    [2, 3, 5, 6]
  )

  test(
    uniquePush([[1, 3], [2, 4]], [2, 3], 1),
    [[2, 4], [2, 3]]
  )
  test(
    uniquePush([[1, 3], [2, 4]], [2, 3], 0),
    [[1, 3], [2, 3]]
  )
  test(
    uniquePush([[1, 3], [2, 4]], [5, 3], 0),
    [[1, 3], [2, 4], [5, 3]]
  )

  test(
    uniquePush([{ id: 1 }, { id: 2 }], { id: 3 }, 'id', 10),
    [{ id: 1 }, { id: 2 }, { id: 3 }]
  )
  test(
    uniquePush([{ id: 1 }, { id: 2 }], { id: 1 }, 'id', 10),
    [{ id: 2 }, { id: 1 }]
  )
  test(
    uniquePush([{ id: 1 }, { id: 2 }], { id: 1 }),
    [{ id: 2 }, { id: 1 }]
  )

})
