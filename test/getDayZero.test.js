import { test } from './_util.js'
import getDayZero from '../1kb/getDayZero.js'

describe('getDayZero', () => {

  test(
    typeof getDayZero(),
    'number'
  )

  test(
    getDayZero(1538159538),
    1538150400
  )

})
