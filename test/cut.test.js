import { test } from './_util.js'
import cut from '../1kb/cut.js'

describe('cut', () => {

  test(
    cut('Hello world. Say hello.', 'hello'),
    ['', 'Hello', ' world. Say ', 'hello', '.']
  )

  test(
    cut('Hello world. Say hello.', 'say'),
    ['Hello world. ', 'Say', ' hello.']
  )

})
