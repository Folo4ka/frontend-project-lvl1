import {
  MAX_ROUNDS,
  showGreeting,
  getRandomInt,
  getOperationResult,
} from '../src/index.js';
import { getName, getAnswer } from '../src/cli.js';

const orerations = ['+', '-', '*'];

export default function calcGame() {
  showGreeting();
  const name = getName();
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let currentRound = 1;
  while (currentRound <= MAX_ROUNDS) {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomOperator = orerations[getRandomInt(3)];
    const trueAnswer = getOperationResult[randomOperator](randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const answer = Number(getAnswer().trim().toLowerCase());

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (currentRound === MAX_ROUNDS) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    currentRound += 1;
  }
}
