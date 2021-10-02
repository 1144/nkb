import { test } from './_util.js'
import removeOne from '../1kb/removeOne.js'

describe('removeOne', () => {

  test(
    removeOne([1, 3, 2, 1], item => item === 3),
    3
  )

  test(
    removeOne([{ a: 1 }, { a: 3 }], item => item.a === 3),
    { a: 3 }
  )

  const data = [{ a: 1 }, { a: 3 }]
  test(
    removeOne(data, 'a', 3),
    { a: 3 }
  )

  test(
    data,
    [{ a: 1 }]
  )

})
