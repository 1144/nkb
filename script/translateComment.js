const Fs = require('fs')
const Path = require('path')
const { translator, regMokComment } = require('mokdoc')

const srcDir = '../1kb/'
const dir = Path.join(__dirname, srcDir)

Fs.readdirSync(dir).forEach(filename => {
  // if (filename.endsWith('.d.ts')) {
  if (filename.endsWith('.ts') || filename.endsWith('.js')) {
    const file = dir + filename
    const fc = Fs.readFileSync(file, 'utf-8')
    const newFc = fc.replace(regMokComment, match => translator.translate(match))
    Fs.writeFileSync(file, newFc, 'utf-8')
  }
})
