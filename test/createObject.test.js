import { test, deletePrototype } from './_util.js'
import createObject from '../1kb/createObject.js'

describe('createObject', () => {

  test(
    createObject(['KEY1', 'KEY2'], (key) => key.toLowerCase()),
    { KEY1: 'key1', KEY2: 'key2' }
  )

  test(
    createObject(['KEY1', 'KEY2']),
    { KEY1: true, KEY2: true }
  )

  test(
    createObject(['KEY1', 'KEY2'], (key) => key.toLowerCase(), null),
    deletePrototype({ KEY1: 'key1', KEY2: 'key2' })
  )

  test(
    createObject(['KEY1', 'KEY2'], null, null),
    deletePrototype({ KEY1: true, KEY2: true })
  )

  test(
    createObject([1, 2, 3, 4], (key) => key < 3 ? true : undefined),
    { 1: true, 2: true }
  )

})
