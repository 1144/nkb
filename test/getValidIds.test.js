import { test } from './_util.js'
import getValidIds from '../1kb/getValidIds.js'

describe('getValidIds', () => {

  const list = [{ id: 2, pid: 1 }, { id: 3, pid: 1 }]

  test(
    getValidIds('1,3,2', list),
    [2, 3]
  )

  test(
    getValidIds('1,3,2', list, 'pid'),
    [1]
  )

})
