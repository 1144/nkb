import { test } from './_util.js'
import Events from '../1kb/events.js'

describe('Events', () => {

  const GlobalEvent = Events.enable({})
  const Ge = GlobalEvent.create('test')
  const Ge2 = GlobalEvent.create('test2')
  const actual = {}

  Ge.on('aaaa', () => {
    actual.onA = 1
    Ge.emit('b')
    Ge.emit('d')
  })
  Ge2.on('aaaa', (argA) => {
    actual.onAnotherA = 1
    actual.argA = argA
  })

  Ge2.on('b', () => {
    actual.onB = 1
    Ge2.emit('aaaa')
    Ge2.emit('c')
  })

  Ge.on('c', () => {
    actual.onC = 1
  })
  Ge.on('c#another', () => {
    // shound never here
    actual.onAnotherC = 1
  })
  Ge.off('c#another')

  Ge2.on('d', () => {
    actual.onD = 1
  })

  Ge.on('e', () => {
    // shound never here
    actual.onE = 1
  })
  Ge.on('e#another', () => {
    // shound never here
    actual.onE = 1
  })
  Ge.off('e')

  Ge.on('f', () => {
    // shound not here
    actual.onF = 1
  })
  Ge.on('f#foo', () => {
    actual.onFFoo = 1
  })

  const offG = Ge.on('g', () => {
    // shound never here
    actual.onG = 1
  })
  Ge.on('g', () => {
    actual.onAnotherG = 1
  })
  offG()

  Ge.emit('aaaa', 2)
  Ge2.emit('c', 'dddddd')
  Ge.emit('e')
  Ge.emit('f#foo')
  Ge.emit('g')

  const expected = {
    onA: 1,
    argA: 2,
    onAnotherA: 1,
    onB: 1,
    onC: 1,
    // onAnotherC: undefined,
    onD: 1,
    // onE: undefined,
    // onF: undefined,
    onFFoo: 1,
    // onG: undefined,
    onAnotherG: 1,
  }
  test(actual, expected)

})
