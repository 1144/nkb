import { test } from './_util.js'
import mapIds from '../1kb/mapIds.js'

describe('mapIds', () => {

  test(
    mapIds('1,2', { 1: '工作', 2: '生活' }),
    '工作/生活'
  )

  test(
    mapIds('1,2', { 1: '工作', 2: '生活' }, ','),
    '工作,生活'
  )

  test(
    mapIds('2,3', { 1: '工作', 2: '生活' }, ','),
    '生活'
  )

})
