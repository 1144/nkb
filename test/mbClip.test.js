import { test } from './_util.js'
import mbClip from '../1kb/mbClip.js'

describe('mbClip', () => {

  test(
    mbClip('我是中国人', 8),
    '我是中国…'
  )

  test(
    mbClip('我是中国人', 8, '..'),
    '我是中国..'
  )

  test(
    mbClip('我是中国人', 8, 10),
    '我是中国人'
  )

  test(
    mbClip('我是中国人哈哈哈', 8, 10),
    '我是中国…'
  )

  test(
    mbClip('我是中国人', 20),
    '我是中国人'
  )

})
