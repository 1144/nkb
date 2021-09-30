import { test } from './_util.js'
import encodeXssChar from '../1kb/encodeXssChar.js'

describe('encodeXssChar', () => {

  test(
    encodeXssChar('<script data-ng="1">alert(1);</script>'),
    '&lt;script data-ng=&quot;1&quot;&gt;alert(1);&lt;/script&gt;'
  )

  test(
    encodeXssChar('I\'m fine.'),
    'I&#39;m fine.'
  )

})
