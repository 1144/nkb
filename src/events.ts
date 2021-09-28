// @ts-nocheck

/**-
  事件对象
  通过enable让一个对象或类支持事件功能后，它们将具有EventEmitter的方法。
*/
const EventEmitter = {
  // _EVENTS_: Object.create(null), // 事件池
  /**-
    绑定事件
    -p type 事件类型
    -p handler 事件处理函数
    -p once 是否一次性事件（只会被触发一次）
    -eg
      foo.on('inited', function (data1, data2) {
        //todo
      })
  */
  on(type: string, handler: Function, once?: boolean) {
    const j = type.indexOf('#')
    if (j > 0) {
      handler._NAME_ = type.slice(j)
      type = type.slice(0, j)
    }
    handler._ONCE_ = once || false;
    (this._EVENTS_[type] || (this._EVENTS_[type] = [])).push(handler)
    return this
  },
  /**-
    替换模式绑定事件：如果已经绑定过，则移出之前的绑定
  */
  replace(type: string, handler: Function, once?: boolean) {
    return this.off(type).on(type, handler, once)
  },
  /**-
    绑定一次性事件（只会被触发一次）
    -p type 事件类型
    -p handler 事件处理函数
  */
  once(type: string, handler: Function) {
    return this.on(type, handler, true)
  },
  /**-
    解绑事件
    -p string type 事件类型
    -p fn handler 处理函数，可选
  */
  off(type: string, handler: Function) {
    const events = this._EVENTS_
    let j = type.indexOf('#')
    if (j > 0) {
      const handlerName = type.slice(j)
      type = events[type.slice(0, j)]
      if (type) {
        let i = type.length
        // 倒序遍历，用 splice 方法删除
        while (i--) {
          type[i]._NAME_ === handlerName && type.splice(i, 1)
        }
      }
    } else if (handler && events[type]) {
      j = events[type].indexOf(handler)
      j < 0 || events[type].splice(j, 1)
    } else {
      delete events[type]
    }
    return this
  },
  /**-
    触发事件
    -p type 事件类型
    -note 要传递事件数据时，将数据依次列在type后面
    -eg
      foo.emit('inited', data1, data2)
  */
  emit(type: string/*, arg1, arg2, ...*/) {
    const j = type.indexOf('#')
    let realType = type
    let handlerName
    if (j > 0) {
      realType = type.slice(0, j)
      handlerName = type.slice(j)
    }

    const doing = this._DOING_
    if (doing[realType]) {
      this.log(type, '-')
      this.onCircular(realType, type)
      return this
    }

    const handlers = this._EVENTS_[realType]
    let hit
    if (handlers) {
      doing[realType] = true
      const args = handlers.slice.call(arguments, 1)
      // 必须正序遍历执行
      for (let i = 0, len = handlers.length, handler; i < len; i++) {
        handler = handlers[i]
        if (!handlerName || handler._NAME_ === handlerName) {
          hit = true
          this.log(type, handler._MID_, args)
          handler.apply(this, args)
          if (handler._ONCE_) {
            // 删除只执行一次的，同时让循环“原地踏步”
            handlers.splice(i--, 1)
            len--
          }
        }
      }
      delete doing[realType]
    }
    hit || this.log(type, '-')

    return this
  },
  create() {
    return this
  },
  log() {},
  onCircular(realType, type) {
    console.warn('Circularly emit:', realType, type)
  },
}

export default {
  EventEmitter,
  /**-
    给一个对象（包括类的实例）或类添加事件相关功能。
    -p obj 纯对象、类、类的实例都可以
    -note 给类添加事件功能时要注意：现假设定义了一个类People，`events.enable(People)`之后，
      类的所有实例都会具有事件功能，并且**共用同一个事件池**。
      如果想让各实例单独使用事件池，那么要在类的构造器里加上
      `this._EVENTS_ = Object.create(null)`
    -eg
      const foo = { a: 1 }
      Events.enable(foo) // 给已有的foo对象添加事件功能

      const bar = Events.enable({}) // 直接创建一个具有事件功能的对象

      const Dog = function () {}
      Events.enable(Dog) // 给一个类添加事件功能
  */
  enable(obj) {
    typeof obj === 'function' && (obj = obj.prototype)
    obj._EVENTS_ || (obj._EVENTS_ = Object.create(null))
    obj._DOING_ || (obj._DOING_ = Object.create(null))
    Object.keys(EventEmitter).forEach(k => {
      obj[k] || (obj[k] = EventEmitter[k])
    })
    return obj
  }
}

/*
const GlobalEvent = Events.enable({})
const originEmit = GlobalEvent.emit

const moduleMap = Object.create(null)
const callStack = []
let callId = 1
let currentCallId = 0

function moduleEmit(args) {
  if (!currentCallId) {
    currentCallId = callId++
    setTimeout(() => { currentCallId = 0 }, 0)
  }
  callStack.push([args[0], args.pop(), ''])
  originEmit.apply(GlobalEvent, args)
  callStack.pop()
}

GlobalEvent.log = function (type, moduleId, args = []) {
  callStack[callStack.length - 1][2] = moduleId
  const stack = callStack.map(item => item[0] + ' [' + item[1] + ' -> ' + item[2] + ']')
  console.log('GE:', currentCallId, stack.join(' > '), ...args)
}
GlobalEvent.emit = function (...args) {
  args.push('-')
  moduleEmit(args)
}
GlobalEvent.create = function (moduleId) {
  if (moduleMap[moduleId]) {
    throw new Error(`GE module '${moduleId}' already exists`)
  }
  moduleMap[moduleId] = true

  return {
    on(type, handler, once) {
      handler._MID_ = moduleId
      GlobalEvent.on(type, handler, once)
    },
    emit(...args) {
      args.push(moduleId)
      moduleEmit(args)
    },
  }
}

const Ge = GlobalEvent.create('test')
const Ge2 = GlobalEvent.create('test2')

Ge.on('aaaa', () => {
  console.log('on a')
  Ge.emit('b')
  Ge.emit('d')
})
Ge2.on('aaaa', () => {
  console.log('on another a')
})
Ge2.on('b', () => {
  console.log('on b')
  Ge2.emit('aaaa')
  Ge2.emit('c')
})
Ge.on('c', () => {
  console.log('on c')
})
Ge2.on('d', () => {
  console.log('on d')
})

Ge.emit('aaaa', 123)

Ge2.emit('c', 'dddddd')
*/
