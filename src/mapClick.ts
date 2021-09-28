/** 处理函数映射 */
type HandlerMap = {
  /** key 为 `k-name` 的值 */
  [key: string]: Function
}

/**-
  点击事件代理，分发 click 点击事件
  -p handlerMap 处理事件集合，key 为 k-name
  -r 返回原生点击事件处理函数
  -eg
    mapClick({
      go(el) {
        this.showCat = false
        this.$router.push(el.parentNode.getAttribute('url'))
      },
      interest(el) {
        console.log(el.parentNode.getAttribute('url'))
      }
    })
*/
export default function mapClick(handlerMap: HandlerMap): Function {
  return function clickListener(this: any, e: MouseEvent) {
    const currentTarget = e.currentTarget
    const target = e.target
    let el = <HTMLElement>target
    let kname

    do {
      kname = el.getAttribute('k-name')
      if (kname) {
        let handler = handlerMap[kname]
        if (handler) {
          handler.call(this, el, target, e)
        } else {
          const knames = kname.split(' ')
          const len = knames.length
          for (let i = 0; i < len; i++) {
            handler = handlerMap[knames[i]]
            handler && handler.call(this, el, target, e)
          }
        }
      }

      if (el === currentTarget || el.hasAttribute('k-stop')) {
        break
      }
      // @ts-ignore
      el = el.parentNode
    } while (el && el.nodeType === 1)
  }
}
