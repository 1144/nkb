import { test } from './_util.js'
import removeAll from '../1kb/removeAll.js'

describe('removeAll', () => {

  test(
    removeAll([1, 3, 2, 1], 1, null),
    [1, 1]
  )

  test(
    removeAll([{ id: 1, n: 10 }, { id: 3, n: 20 }, { id: 3, n: 30 }], 3),
    [{ id: 3, n: 20 }, { id: 3, n: 30 }]
  )

  test(
    removeAll([{ id: 1 }, { id: 3 }], 4),
    []
  )

  const data = [{ a: 1 }, { a: 3 }]
  test(
    removeAll(data, 3, 'a'),
    [{ a: 3 }]
  )

  test(
    data,
    [{ a: 1 }]
  )

})
