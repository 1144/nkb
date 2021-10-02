import { test } from './_util.js'
import now from '../1kb/now.js'

describe('now', () => {

  test(
    now() > 1,
    true
  )

})
