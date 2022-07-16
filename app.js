let { testNumber, limit } = require('./guess-number-game.js');

process.stdout.write(
  `I'm thinking of a number from 1 through ${limit}. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... `
);

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

process.stdin.on('data', playGame);
