const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { randomInt } = require('crypto')
const fs = require('fs')
const { lightgrey } = require('color-name')

class Game {

  //checking and reading files functions
  checkFile(file) {
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
  readFile(file) {
    this.checkFile(file)
    return fs.readFileSync(`./${file}`, 'utf8')
  }

  //functions for game values
  wordList(wordFileContent) {
    return (wordFileContent).split('\n')
  }
  randomWord(wordList) {
    const randomIndex = randomInt(0, wordList.length)
    return wordList[randomIndex]
  }
  highScorePlayer(scoreFile) {
    let highScorePlayer = JSON.parse(this.readFile(scoreFile))
    return highScorePlayer
  }

  //player input
  playerInput() {
    let inputLetter = readlineSync.question('entrez une lettre : ')
    this.playerInputCheck(inputLetter)
  }
  playerInputCheck(input, wordToFind) {
    console.log(input)
    if (!(input.length === 1 && input.match(/[a-z]/i))) {
      this.playerInput()
    }
    //To do : for of sur wordToFind pour includes
    if (wordToFind.includes(input)) {
      return input
    }
  }

  //Display function
  AsciiHangManDisplay() {

  }
  currentWordToFind(playerInput) {
  }
  gameDisplay(wordToFind, highScorePlayercontent) {
    //console.clear()
    console.log(`Meilleur score: ${highScorePlayercontent.name} ->\t${highScorePlayercontent.score} points`)
    this.wordToFindDisplay(wordToFind)
    this.AsciiHangManDisplay()
    this.playerInput()
  }
  wordToFindDisplay(wordToFind, playerInput) {
  }
  // end game writing score file
  scoreWrite(currentPlayer, currentScore) {
  }
}
module.exports = Game
