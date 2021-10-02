import assert from 'assert'

const defaultDesc = 'should return'

export function test(actual, expected, desc = defaultDesc) {
  const type = typeof expected
  if (type === 'object') {
    it(`${desc} ${JSON.stringify(expected)}`, () => {
      assert.deepStrictEqual(actual, expected)
    })
  } else {
    const title = type === 'string'
      ? `${desc} '${expected}'`
      : `${desc} ${expected}`
    it(title, () => {
      assert.strictEqual(actual, expected)
    })
  }
}

export function deletePrototype(obj) {
  return Object.assign(Object.create(null), obj)
}

export default {}
