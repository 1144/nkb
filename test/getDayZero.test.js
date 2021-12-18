import { test } from './_util.js'
import getDayZero from '../1kb/getDayZero.js'

describe('getDayZero', () => {

  const s = getDayZero(new Date)
  const ms = getDayZero(new Date, 'ms')

  test(
    s > 1e9 && s < 9e9,
    true
  )

  test(
    ms > 9e9,
    true
  )

  test(
    getDayZero(1538159538),
    1538150400
  )

  test(
    getDayZero(1538159538188),
    1538150400
  )

  test(
    getDayZero(1538159538, 'ms'),
    1538150400000
  )

  test(
    getDayZero(1538159538188, 'ms'),
    1538150400000
  )

  test(
    getDayZero(1538159538, 'xxx'),
    1538150400
  )

})
