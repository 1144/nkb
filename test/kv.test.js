import assert from 'assert'
import Kv from '../1kb/kv.js'

describe('kv', () => {
  const data = { a: 1, b: 0, c: 'x-x', d: null, e: undefined, f: '' }

  it('should return `a:1,b:0,c:x-x`', () => {
    assert.strictEqual(Kv.stringify(data), 'a:1,b:0,c:x-x')
  })

  it('should return `a>1,b>0,c>x-x`', () => {
    assert.strictEqual(Kv.stringify(data, '>'), 'a>1,b>0,c>x-x')
  })

  it('should return `a>1|b>0|c>x-x`', () => {
    assert.strictEqual(Kv.stringify(data, '>', '|'), 'a>1|b>0|c>x-x')
  })

})
