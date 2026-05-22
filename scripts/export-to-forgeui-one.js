const fs = require('fs')
const path = require('path')

const out = process.argv[2]

if (!out) {
  console.error('Missing generated C text file path')
  process.exit(1)
}

const source = fs.readFileSync(out, 'utf8')

const target = path.resolve(
  __dirname,
  '../../ForgeUI-One/main/90_Studio_Export.c'
)

fs.writeFileSync(target, source, 'utf8')

console.log('Wrote:', target)