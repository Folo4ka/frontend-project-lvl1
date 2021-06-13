import { getRandomInt, runEngine, isEven } from '../src/index.js';

export default function runGame() {
  const gameRulesText = 'Answer "yes" if the number is even, otherwise answer "no".';
  let randomNumber;

  function getQuestionText() {
    randomNumber = getRandomInt();
    return randomNumber;
  }

  function getTrueAswerString() {
    return isEven(randomNumber) ? 'yes' : 'no';
  }

  runEngine(gameRulesText, getQuestionText, getTrueAswerString);
}
