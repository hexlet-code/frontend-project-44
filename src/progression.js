import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

const getRandomInt = (max = 100) => Math.floor(Math.random() * max);
const createArrayProgression = (lengthArray = 5) => {
  const firstEl = getRandomInt();
  const step = getRandomInt(10);
  const progression = [firstEl];
  for (let i = 1; i <= lengthArray; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

export const progression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  for (let i = 0; i <= 2; i += 1) {
    const array = createArrayProgression(10);
    const trueAnswer = array[getRandomInt(array.length)];
    array[array.indexOf(trueAnswer)] = '..';

    console.log(`Question: ${array.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === trueAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
