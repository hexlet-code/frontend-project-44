import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from '../game_modules/getRandomInt.js';
import question from '../game_modules/question.js';
import wrongAnswer from '../game_modules/wrongAnswer.js';

const createArrayProgression = (lengthArray = 5) => {
  const firstEl = getRandomInt();
  const maxLengthArray = 10;
  const step = getRandomInt(maxLengthArray);
  const progression = [firstEl];
  for (let i = 1; i <= lengthArray; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

export default () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  for (let i = 0; i <= 2; i += 1) {
    const maxLength = 10;
    const array = createArrayProgression(maxLength);
    const trueAnswer = array[getRandomInt(array.length)];
    array[array.indexOf(trueAnswer)] = '..';
    question(array.join(' '));
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === trueAnswer) console.log('Correct!');
    else {
      wrongAnswer(answer, trueAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
