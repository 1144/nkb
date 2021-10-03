import { test } from './_util.js'
import Kv from '../1kb/kv.js'

describe('kv', () => {

  test(
    Kv.parse('a:1,b:2,c:x-x'),
    { a: '1', b: '2', c: 'x-x' }
  )

  test(
    Kv.parse('a:1,b:2,c'),
    { a: '1', b: '2', c: null }
  )

  test(
    Kv.parse(''),
    {}
  )

  const data = { a: 1, b: 0, c: 'x-x', d: null, e: undefined, f: '' }

  test(
    Kv.stringify(data),
    'a:1,b:0,c:x-x'
  )

  test(
    Kv.stringify(data, '>'),
    'a>1,b>0,c>x-x'
  )

  test(
    Kv.stringify(data, '>', '|'),
    'a>1|b>0|c>x-x'
  )

})
