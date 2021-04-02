const Game = require('./game')
const wordsFile = 'words.txt'
const scoreFile = 'score.json'

const game = new Game()
const wordToFind = game.randomWord(game.wordList(game.readFile(wordsFile)))
const highScorePlayercontent = game.highScorePlayer(scoreFile)
console.log(wordToFind);
console.log(highScorePlayercontent);
game.gameDisplay(wordToFind, highScorePlayercontent)
