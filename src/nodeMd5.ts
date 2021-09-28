// @ts-nocheck
import crypto from 'crypto'

/**-
  对字符串进行 MD5 加密
  -p src 需要加密的源字符串
  -eg
    nodeMd5('some string...') // => a6f824f87a3712fd3240ba224c4535bc
*/
export default function nodeMd5(text: string) {
	return crypto.createHash('md5').update(text).digest('hex')
}
