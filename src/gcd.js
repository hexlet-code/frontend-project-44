import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

const getRandomInt = (max = 100) => Math.floor(Math.random() * max);
const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

export const gcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 2; i += 1) {
    const operandsOne = getRandomInt();
    const operandsTwo = getRandomInt();
    const trueAnswer = getGcd(operandsOne, operandsTwo);

    console.log(`Question: ${operandsOne} ${operandsTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === trueAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
