import { test } from './_util.js'
import formatNow from '../1kb/formatNow.js'

describe('formatNow', () => {

  test(
    /^20\d{12}$/.test(formatNow()),
    true
  )

})
