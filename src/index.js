import { getName, getAnswer } from './cli.js';

export function isEven(number) {
  return number % 2 === 0;
}

export function getRandomInt(max = 10) {
  return Math.floor(Math.random() * max);
}

const MAX_ROUNDS = 3;

export function runEngine(gameRulesText, getQuestionText, getTrueAswerString) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(gameRulesText);

  let currentRound = 1;
  while (currentRound <= MAX_ROUNDS) {
    const question = getQuestionText();
    const trueAnswer = getTrueAswerString();

    console.log(`Question: ${question}`);
    const userAnswer = getAnswer().trim().toLowerCase();

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
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
