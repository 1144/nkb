import { test } from './_util.js'
import unique from '../1kb/unique.js'

describe('unique', () => {

  test(
    unique([1, 3, 2, 1, 5, 1, '2', '1', null, 'null', null, '']),
    [1, 3, 2, 5, '2', '1', null, 'null', '']
  )

  test(
    unique([{ a: 1, b: 3 }, { a: 2, b: 1 }, { a: 5, b: 1 }], 'b'),
    [{ a: 1, b: 3 }, { a: 2, b: 1 }]
  )

})
