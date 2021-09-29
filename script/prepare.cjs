/**
 * 1. 清理构建目录
 * 2. 生成 package.json 文件
 */

const Fs = require('fs')
const Path = require('path')
const packageJson = require('../package.json')

function prepare(name, type) {
  const dir = Path.join(__dirname, '../' + name + '/')
  try {
    Fs.readdirSync(dir).forEach(filename => {
      if (!Fs.statSync(dir + filename).isDirectory()) {
        Fs.unlinkSync(dir + filename)
      }
    })
  } catch (err) { // 目录不存在
    Fs.mkdirSync(dir)
  }

  const newPackage = Object.assign({}, packageJson)
  delete newPackage.scripts
  delete newPackage.devDependencies
  newPackage.name = name
  newPackage.type = type
  const content = JSON.stringify(newPackage, null, 2) + '\n'
  Fs.writeFileSync(dir + 'package.json', content, 'utf-8')
}

prepare('1kb', 'module')
prepare('2kb', 'commonjs')
