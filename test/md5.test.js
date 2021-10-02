import { test } from './_util.js'
import md5 from '../1kb/md5.js'

describe('md5', () => {

  test(
    md5('some string...'),
    'a6f824f87a3712fd3240ba224c4535bc'
  )

  test(
    md5('中文 English 😔🎉🤡'),
    'c95e37186b38240e9cf264a9843d9625'
  )

})
