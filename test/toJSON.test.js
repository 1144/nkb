import { test, deletePrototype } from './_util.js'
import toJSON from '../1kb/toJSON.js'

describe('toJSON', () => {

  const list = [{ id: 1, title: '工作' }, { id: 2, title: '生活' }]

  test(
    toJSON(list, 'id', 'title'),
    deletePrototype({ 1: '工作', 2: '生活' })
  )

  test(
    toJSON(list, 'id'),
    deletePrototype({ 1: { id: 1, title: '工作' }, 2: { id: 2, title: '生活' } })
  )

})
