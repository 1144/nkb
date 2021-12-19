import { test } from './_util.js'
import getDayZero from '../1kb/getDayZero.js'

describe('getDayZero', () => {

  const ms = getDayZero(new Date)
  const sec = getDayZero(new Date, 's')

  test(
    ms > 9e9,
    true
  )

  test(
    sec > 1e9 && sec < 9e9,
    true
  )

  test(
    getDayZero(1538159538),
    1538150400000
  )

  test(
    getDayZero(1538159538188),
    1538150400000
  )

  test(
    getDayZero(1538159538, 's'),
    1538150400
  )

  test(
    getDayZero(1538159538188, 's'),
    1538150400
  )

  test(
    getDayZero(1538159538, 'xxx'),
    1538150400000
  )

})
