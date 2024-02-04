import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from '../game_modules/getRandomInt.js';
import question from '../game_modules/question.js';
import wrongAnswer from '../game_modules/wrongAnswer.js';

export default () => {
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
    question(`${operandsOne} ${operator} ${operandsTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === trueAnswer) console.log('Correct!');
    else {
      wrongAnswer(answer, trueAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
