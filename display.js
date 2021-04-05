const Game = require('./game')
const chalk = require('chalk')
const { HANGMANPICS } = require('./hangmanPicsArray')

const game = new Game('words.txt', 'score.json')


//Display function


hangManGuessDisplay = (HANGMANPICS, nbGuess) => {
  switch (nbGuess) {
    case 5:
      console.log(chalk.green(`\n\n  Il vous reste ${nbGuess} essais\n  ${HANGMANPICS[1]}`))
      break;
    case 4:
      console.log(chalk.green(`\n\n  Il vous reste ${nbGuess} essais\n  ${HANGMANPICS[2]}`))
      break;
    case 3:
      console.log(chalk.yellow(`\n\n  Il vous reste ${nbGuess} essais\n  ${HANGMANPICS[3]}`))
      break;
    case 2:
      console.log(chalk.yellow(`\n\n  Il vous reste ${nbGuess} essais\n  ${HANGMANPICS[4]}`))
      break;
    case 1:
      console.log(chalk.red(`\n\n  Il vous reste ${nbGuess} essais\n  ${HANGMANPICS[5]}`))
      break;
    case 0:
      console.log(chalk.red(`  ${HANGMANPICS[6]}`))
      break;
    default:
      console.log(chalk.green(`\n\n  Il vous reste ${nbGuess} essais\n  ${HANGMANPICS[0]}`))
      break;
  }
}

wordDisplaySpace = (wordDisplay) => {
  let wordDisplaySpace = ''
  for (const char of wordDisplay) {
    wordDisplaySpace += `${char} `
  }
  return wordDisplaySpace
}

gameDisplay = (highScorePlayercontent, playerName, nbGuess, HANGMANPICS) => {
  console.clear()
  console.log(chalk.blue(`\n  Joueur: ${playerName}\t\t\t\tMeilleur score: ${highScorePlayercontent.name} ->\t${highScorePlayercontent.score} points`))
  hangManGuessDisplay(HANGMANPICS, nbGuess)
}
exports.gameDisplay = gameDisplay
exports.wordDisplaySpace = wordDisplaySpace
