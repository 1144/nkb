import { test } from './_util.js'
import splitValues from '../1kb/splitValues.js'

describe('splitValues', () => {

  test(
    splitValues('工作，生活，，学习，'),
    ['工作', '生活', '学习']
  )

  test(
    splitValues(' 工作,, 生活, 学习, ', { limit: 2 }),
    ['工作', '生活']
  )

  test(
    splitValues('-1-2-3', { delimiter: '-' }),
    ['1', '2', '3']
  )

  test(
    splitValues('工作棒棒，生活好好，，学习，', { valueLimit: 4 }),
    ['工作…', '生活…', '学习']
  )

})
