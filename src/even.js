import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from '../game_modules/getRandomInt.js';
import question from '../game_modules/question.js';
import wrongAnswer from '../game_modules/wrongAnswer.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const rndNum = getRandomInt();
    question(rndNum);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven(rndNum)) console.log('Correct!');
    else {
      wrongAnswer(answer, isEven(rndNum), name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
