/**-
  简易的函数节流
  -p fn 目标函数
  -p wait 延迟多少毫秒
  -r fn 已节流处理的函数
  -eg
    const foo = throttle(function (a) {
      console.log(a)
    }, 100)

    let n = 0
    let t = setInterval(function (){
      if (n > 20) clearInterval(t)
      foo(n++)
    }, 20)
*/
function throttle(fn: Function, wait: number) {
  let timer = 0
  let previous = 0

  return function (this: any, ...args: any[]) {
    if (timer) {
      return
    }

    const now = Date.now()
    if (now > previous + wait) {
      fn.apply(this, args)
      previous = now
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        previous = Date.now()
        timer = 0
      }, previous + wait - now)
    }
  }
}
