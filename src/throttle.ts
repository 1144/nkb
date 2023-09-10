/**-
  简易的函数节流
  -p fn 目标函数
  -p wait 延迟多少毫秒
  -p leading 是否在前侧执行函数，默认在后侧执行
  -r fn 已节流处理的函数
  -eg
    const arr = []
    const foo = throttle(function (a) {
      arr.push(a)
    }, 100)

    let n = 0
    let t = setInterval(function () {
      foo(++n)
      if (n > 9) clearInterval(t)
    }, 30)
    console.log(arr) // => [4, 8, 10]
*/
export default function throttle(fn: Function, wait: number, leading = false) {
  let timer = 0
  let previous = 0
  let callArgs: null | any[]

  return leading ? function (this: any, ...args: any[]) {
    callArgs = args
    if (timer) {
      return
    }

    const now = Date.now()
    if (now > previous + wait) {
      fn.apply(this, callArgs)
      previous = now
      callArgs = null
    } else {
      timer = setTimeout(() => {
        fn.apply(this, callArgs)
        previous = Date.now()
        timer = 0
        callArgs = null
      }, previous + wait - now)
    }
  } : function (this: any, ...args: any[]) {
    callArgs = args
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, callArgs)
        timer = 0
        callArgs = null
      }, wait)
    }
  }
}
