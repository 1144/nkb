/**-
  简易的函数防抖
  -p fn 目标函数
  -p wait 延迟多少毫秒
  -p leading 是否在前侧执行函数，默认在后侧执行
  -r fn 已防抖处理的函数
  -eg
    const foo = debounce(function (a) {
      console.log(a)
    }, 100)

    let n = 0
    let t = setInterval(function (){
      if (n > 20) clearInterval(t)
      foo(n++)
    }, 20)
*/
export default function debounce(fn: Function, wait: number, leading = false) {
  let call = true
  let timer = 0

  return leading ? function (this: any, ...args: any[]) {
    if (call) {
      call = false
      fn.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      call = true
    }, wait)
  } : function (this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
