import { test } from './_util.js'
import nodeMD5 from '../1kb/nodeMD5.js'

describe('nodeMD5', () => {

  test(
    nodeMD5('some string...'),
    'a6f824f87a3712fd3240ba224c4535bc'
  )

  test(
    nodeMD5('中文 English 😔🎉🤡'),
    'c95e37186b38240e9cf264a9843d9625'
  )

})
