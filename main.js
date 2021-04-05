const chalk = require('chalk')
const Game = require('./game')
const { readFile } = require('./filesUtils')
const { gameDisplay, wordDisplaySpace } = require('./display')
const { HANGMANPICS } = require('./hangmanPicsArray')
const readlineSync = require('readline-sync')
const { GameOver, isRightAnswer } = require('./wordToFind')

const game = new Game('words.txt', 'score.json')
let newGame = true

console.clear()
let playerName = game.playerNameInput()

do {
  console.clear()
  let isGameOver = false
  const nbGuessMax = 6
  let nbGuess = nbGuessMax
  let wordToFind = game.randomWord(game.wordList(readFile(game.wordsFile)))
  let highScorePlayercontent = game.highScorePlayer(readFile(game.scoreFile))
  let inputLetter = ''
  let wordDisplay = '_'.repeat(wordToFind.length)
  let newGameInput = ''
  gameDisplay(highScorePlayercontent, playerName, nbGuess, HANGMANPICS)
  while (!isGameOver) {
    console.log(`  ${wordDisplaySpace(wordDisplay)}\n`)
    inputLetter = game.playerInputcheck()
    isRightAnswer(inputLetter, wordToFind) ? wordDisplay = wordDisplayCheck(wordToFind, inputLetter, wordDisplay) : nbGuess--
    gameDisplay(highScorePlayercontent, playerName, nbGuess, HANGMANPICS)
    isGameOver = GameOver(wordToFind, wordDisplay, nbGuess)
  }

  if (nbGuess === 0) {
    console.log('\n')
    console.log(chalk.bgRed(`  Le mot à trouver était ${wordToFind}`))
    console.log(chalk.red(`     Vous avez perdu!!!!`))
  }
  else {
    console.log('\n')
    console.log(chalk.bgGreen(`  Le mot à trouver était ${wordToFind}`))
    console.log(chalk.green(`       Vous avez gagné!!!\n  Votre score est de ${nbGuessMax - nbGuess} fautes`))
  }
  game.scoreWrite(nbGuessMax, nbGuess, playerName, highScorePlayercontent)
  do {
    newGameInput = readlineSync.question('\n  Voulez-vous rejouer? (O/N) : ')
    console.clear()
  } while (newGameInput.toUpperCase() !== 'O' && newGameInput.toUpperCase() !== 'N')
  newGameInput.toUpperCase() === 'O' ? newGame = true : newGame = false
} while (newGame === true)
