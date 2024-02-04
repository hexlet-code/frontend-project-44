import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from '../game_modules/getRandomInt.js';
import question from '../game_modules/question.js';
import wrongAnswer from '../game_modules/wrongAnswer.js';

const isPrime = (num) => {
  if (num === 1) return 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  const name = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const rndNum = getRandomInt();
    question(rndNum);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isPrime(rndNum)) console.log('Correct!');
    else {
      wrongAnswer(answer, isPrime(rndNum), name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
