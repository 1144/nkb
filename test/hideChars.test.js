import { test } from './_util.js'
import hideChars from '../1kb/hideChars.js'

describe('hideChars', () => {

  test(
    hideChars('138456', 3),
    '138***'
  )

  test(
    hideChars('138456', 3, 5),
    '138**6'
  )

  test(
    hideChars('138456', 3, 5, '-'),
    '138--6'
  )

  test(
    hideChars('138456', -4, -2),
    '13**56'
  )

  test(
    hideChars('138456', -2, 6, '-'),
    '1384--'
  )

  test(
    hideChars('138456', -2, undefined, '-'),
    '1384--'
  )

})
