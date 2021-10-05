import { test } from './_util.js'
import Type from '../1kb/type.js'

describe('type', () => {

  test(
    Type.isPlainObject(),
    false
  )

  test(
    Type.isPlainObject(1),
    false
  )

  test(
    Type.isPlainObject(null),
    false
  )

  test(
    Type.isPlainObject(/\d/),
    false
  )

  test(
    Type.isPlainObject(new Date()),
    false
  )

  test(
    Type.isPlainObject({ a: 1 }),
    true
  )

})
