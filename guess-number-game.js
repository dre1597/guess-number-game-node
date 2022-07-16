const secretValue = Math.floor(1 + Math.random() * 10).toString();
const limit = 10;

const numbers = Array.from(Array(limit).keys()).map((num) => `${num + 1}`);

module.exports = {
  limit,
  testNumber: (input) => {
    if (input === 'quit') {
      process.stdout.write('Ok. Bye!\n');
      process.exit();
    }

    if (!numbers.includes(input)) {
      process.stdout.write(`Choose a number from 1 through ${limit}!\nIs the number ... `);
    } else if (input === secretValue) {
      process.stdout.write('Woah you got it! Are you psychic? See you later!\n');
      process.exit();
    } else {
      parseInt(input) < parseInt(secretValue)
        ? process.stdout.write('Nope. Guess again! The number is greater! \nIs the number ... ')
        : process.stdout.write('Nope. Guess again! The number is smaller! \nIs the number ... ');
    }
  },
};
