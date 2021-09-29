module.exports = {
  external: ['crypto'],
  output: {
    dir: '2kb',
    format: 'cjs',
    preserveModules: true,
    preferConst: true,
    strict: false,
    interop: false,
  },
  onwarn(payload) {
    if (payload.code !== 'PREFER_NAMED_EXPORTS') {
      console.warn(payload.message)
    }
  }
}
