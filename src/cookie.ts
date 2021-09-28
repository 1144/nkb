type CookieOption = {
  /** cookie域 */
  domain?: string
  /** cookie路径，默认`/` */
  path?: string
  /** 过期时间：没有则是会话级；数字则表示多少小时后过期；或是一个时间对象；或是`forever`表示长期 */
  exp?: number | Date | 'forever'
  secure?: boolean
}

const specChar = /[^\w,.-|]/g
const leftSpaces = /^\s+/
const rightSpaces = /\s+$/
let _domain = document.domain

/**-
  cookie操作对象。
  -as cookie
  -note 服务端不可用
  -eg
    Cookie.setDomain('test.com')
*/
export default {
  /**-
    种cookie
    -p name cookie名
    -p value cookie值
    -p opt opt里应该提供
    -note 不能将cookie的值设置为'deleted'，否则取出来的是空字符串。
    -eg
      Cookie.set('foo', 'x-x_x,x.x=x%x;x$x\\x') // -_.,|这5个字符不会被转义
      Cookie.set('bar', 2)
      // 5小时后过期的cookie
      Cookie.set('zoo', 'beijing', { exp: 5 })
      // 永远有效的cookie
      Cookie.set('love', '10000 years', { exp: 'forever' })
      // 删除 cookie，设置值为 null
      Cookie.set('foo', null)
  */
  set(name: string, value: string | number | null, opt?: CookieOption) {
    opt || (opt = {})
    const exp = opt.exp
    let t: Date | ''
    if (typeof exp === 'number') {
      t = new Date(Date.now() + exp * 3600000) // 60m * 60s * 1000ms
    } else if (exp === 'forever') {
      t = new Date()
      t.setFullYear(2400) // 专业种植 cookie 300 多年，到下一个世纪闰年
    } else if (value === null) { // 删除cookie
      value = ''
      t = new Date(0)
    } else if (exp instanceof Date) { // 传的是一个时间对象
      t = exp
    } else {
      t = ''
    }
    document.cookie = name + '=' +
      String(value).replace(specChar, (c) => encodeURIComponent(c)) +
      (t && '; expires=' + t.toUTCString()) +
      '; domain=' + (opt.domain || _domain) + '; path=' + (opt.path || '/') +
      '; SameSite=Lax' +
      (opt.secure ? '; secure' : '');
  },
  /**-
    读取cookie
    -p name cookie名
  */
  get(name: string) {
    name += '='
    const nameLength = name.length
    const cookies = (document.cookie || '').split(';')
    let i = cookies.length
    let cookie

    while (i--) {
      cookie = cookies[i].replace(leftSpaces, '')
      if (cookie.slice(0, nameLength) === name) {
        cookie = decodeURIComponent(cookie.slice(nameLength)).replace(rightSpaces, '')
        // 某些浏览器从服务端删除cookie后，cookie的值暂时为'deleted'
        return cookie === 'deleted' ? '' : cookie
      }
    }

    return ''
  },
  /**-
    设置存cookie的域，没有设置时默认使用 document.domain
    -p domain 存cookie的域
  */
  setDomain(domain: string) {
    _domain = domain
  }
}
