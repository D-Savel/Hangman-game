const { lightgrey } = require("color-name")

isRightAnswer = (inputLetter, wordToFind) => {
  if (wordToFind.includes(inputLetter.toUpperCase()))
    return true
  else {
    return false
  }
}

wordDisplayCheck = (wordToFind, inputLetter, wordDisplay) => {
  let countdown = -1
  for (const char of wordToFind) {
    countdown++
    if (inputLetter.toUpperCase() === char) {
      wordDisplay = replaceChar(wordDisplay, countdown, `${char.toUpperCase()}`)
    }
  }
  return (wordDisplay)
}

GameOver = (wordToFind, wordDisplay, nbGuess) => {
  if (wordDisplay == wordToFind) {
    return true
  }
  if (nbGuess === 0) {
    return true
  }
}

function replaceChar(str, index, char) {
  if (index > str.length - 1) return str
  return str.substring(0, index) + char + str.substring(index + 1)
}

exports.wordDisplayCheck = wordDisplayCheck
exports.GameOver = GameOver
exports.isRightAnswer = isRightAnswer