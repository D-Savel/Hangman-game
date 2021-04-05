//checking and reading files functions

const fs = require('fs')

checkFile = (file) => {
  if (!fs.existsSync(file)) {
    console.log(`Error: ${file} does not exist`)
    process.exit(1)
  }
  const stats = fs.statSync(file)
  if (!stats.isFile()) {
    console.log(`Error: ${file} is not a file`)
    process.exit(1)
  }
}
readFile = (file) => {
  checkFile(file)
  return fs.readFileSync(`./${file}`, 'utf8')
}

exports.readFile = readFile
