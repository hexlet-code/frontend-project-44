import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from '../game_modules/getRandomInt.js';
import question from '../game_modules/question.js';
import wrongAnswer from '../game_modules/wrongAnswer.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

export default () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 2; i += 1) {
    const operandsOne = getRandomInt();
    const operandsTwo = getRandomInt();
    const trueAnswer = getGcd(operandsOne, operandsTwo);
    question(`${operandsOne} ${operandsTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === trueAnswer) console.log('Correct!');
    else {
      wrongAnswer(answer, trueAnswer, name);

      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
