import { getRandomInt, runEngine } from '../src/index.js';

const orerations = ['+', '-', '*'];
const getOperationResult = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default function calcGame() {
  const gameRulesText = 'What is the result of the expression?';
  let randomNumber1;
  let randomNumber2;
  let randomOperator;

  function getQuestionText() {
    randomNumber1 = getRandomInt();
    randomNumber2 = getRandomInt();
    randomOperator = orerations[getRandomInt(orerations.length)];

    return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  }

  function getTrueAswerString() {
    return String(getOperationResult[randomOperator](randomNumber1, randomNumber2));
  }

  runEngine(gameRulesText, getQuestionText, getTrueAswerString);
}
