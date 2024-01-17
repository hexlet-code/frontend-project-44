import readlineSync from 'readline-sync';
import greeting from './cli.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getRandomInt = (max = 100) => Math.floor(Math.random() * max);
export default () => {
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const rndNum = getRandomInt();
    console.log(`Question: ${rndNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven(rndNum)) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(rndNum)}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
