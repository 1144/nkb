import { test } from './_util.js'
import uniqueUnshift from '../1kb/uniqueUnshift.js'

describe('uniqueUnshift', () => {

  test(
    uniqueUnshift([1, 3, 2], 3, null),
    [3, 1, 2]
  )

  test(
    uniqueUnshift([1, 2, 3, 5], 6, null, 4),
    [6, 1, 2, 3]
  )

  test(
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 3 }, 'id', 10),
    [{ id: 3 }, { id: 1 }, { id: 2 }]
  )

  test(
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 1 }, 'id', 10),
    [{ id: 1 }, { id: 2 }]
  )

  test(
    uniqueUnshift([{ id: 1 }, { id: 2 }], { id: 1 }),
    [{ id: 1 }, { id: 2 }]
  )

})
