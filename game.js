const chalk = require('chalk')
const readlineSync = require('readline-sync')
const { randomInt } = require('crypto')
const fs = require('fs')

class Game {

  constructor(wordsFile, scoreFile) {
    this.scoreFile = scoreFile
    this.wordsFile = wordsFile
  }

  // functions for game variables
  wordList(wordFileContent) {
    return (wordFileContent).split('\n')
  }
  randomWord(wordList) {
    const randomIndex = randomInt(0, wordList.length)
    return wordList[randomIndex]
  }
  highScorePlayer(scoreFile) {
    let highScorePlayer = JSON.parse(scoreFile)
    return highScorePlayer
  }

  //player input

  playerNameInput() {
    let playerNameInput = readlineSync.question('  Entrez votre nom : ')
    return playerNameInput
  }
  playerInputcheck() {
    let inputLetter = ''
    do {
      inputLetter = readlineSync.question('  Entrez une lettre : ')
    }
    while (!(inputLetter.length === 1 && inputLetter.match(/[a-z]/i)))
    return inputLetter
  }

  // end game check and writing score file
  scoreCheck(nbGuessMax, nbGuess, highScorePlayercontent) {
    if (highScorePlayercontent.score > (nbGuessMax - nbGuess))
      return true
  }

  scoreWrite(nbGuessMax, nbGuess, playerName, highScorePlayercontent) {
    if (this.scoreCheck(nbGuessMax, nbGuess, highScorePlayercontent)) {
      let currentScore = nbGuessMax - nbGuess
      highScorePlayercontent = {
        'name': playerName,
        'score': currentScore
      }
      console.log(chalk.greenBright('  Vous detenez maintenant le meilleurs score'))
      const data = JSON.stringify(highScorePlayercontent)
      fs.writeFileSync('score.json', data)
    }
  }
}

module.exports = Game
