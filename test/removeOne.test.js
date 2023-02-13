import { test } from './_util.js'
import removeOne from '../1kb/removeOne.js'

describe('removeOne', () => {

  test(
    removeOne([1, 3, 2, 1], 3, null),
    3
  )
  test(
    removeOne([1, 3, 2, 1], 4, null),
    undefined
  )

  test(
    removeOne([[1, 3], [2, 1]], 3, 1),
    [1, 3]
  )
  test(
    removeOne([[1, 3], [2, 1]], 2, 0),
    [2, 1]
  )
  test(
    removeOne([[1, 3], [2, 1]], 4, 0),
    undefined
  )

  test(
    removeOne([{ id: 1 }, { id: 3 }], 3),
    { id: 3 }
  )
  test(
    removeOne([{ id: 1 }, { id: 3 }], 4),
    undefined
  )

  const data = [{ a: 1 }, { a: 3 }]
  test(
    removeOne(data, 3, 'a'),
    { a: 3 }
  )
  test(
    data,
    [{ a: 1 }]
  )

})
