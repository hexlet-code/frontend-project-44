import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

const getRandomInt = (max = 100) => Math.floor(Math.random() * max);

export const calc = () => {
  const name = greeting();
  const operators = ['+', '-', '*'];
  const operation = {
    '+': function (a, b) {
      return a + b;
    },
    '-': function (a, b) {
      return a - b;
    },
    '*': function (a, b) {
      return a * b;
    },
  };

  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const operandsOne = getRandomInt();
    const operandsTwo = getRandomInt();
    const operator = operators[getRandomInt(3)];
    const trueAnswer = operation[operator](operandsOne, operandsTwo);

    console.log(`Question: ${operandsOne} ${operator} ${operandsTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === trueAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
