import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

const isPrime = (num) => {
  if (num === 1) return 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};
const getRandomInt = (max = 100) => Math.floor(Math.random() * max);
export const prime = () => {
  const name = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const rndNum = getRandomInt();
    console.log(`Question: ${rndNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isPrime(rndNum)) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(rndNum)}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
