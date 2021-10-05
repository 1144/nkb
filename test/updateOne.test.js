import { test } from './_util.js'
import updateOne from '../1kb/updateOne.js'

describe('updateOne', () => {

  let data = [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }]

  test(
    updateOne(data, { id: 1, title: 'zoo' }),
    true
  )

  test(
    data,
    [{ id: 1, title: 'zoo' }, { id: 2, title: 'bar' }]
  )

  data = [{ n: 1, title: 'foo' }, { n: 2, title: 'bar' }]

  test(
    updateOne(data, { n: 1, title: 'yoo' }, 'n'),
    true
  )

  test(
    data,
    [{ n: 1, title: 'yoo' }, { n: 2, title: 'bar' }]
  )

  test(
    updateOne(data, { n: 100, title: 'yeah' }, 'n'),
    false
  )

})
