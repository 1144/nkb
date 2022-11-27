import { test, deletePrototype } from './_util.js'
import toMap from '../1kb/toMap.js'

describe('toMap', () => {

  const list = [{ id: 1, title: '工作' }, { id: 2, title: '生活' }]

  test(
    toMap(list, 'id', 'title'),
    deletePrototype({ 1: '工作', 2: '生活' })
  )

  test(
    toMap(list, 'id'),
    deletePrototype({ 1: { id: 1, title: '工作' }, 2: { id: 2, title: '生活' } })
  )

})
