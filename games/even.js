import { getRandomInt, runEngine } from '../src/index.js';

export default function evenGame() {
  const gameRulesText = 'Answer "yes" if the number is even, otherwise answer "no".';
  let randomNumber;

  function getQuestionText() {
    randomNumber = getRandomInt();
    return randomNumber;
  }

  function getTrueAswerString() {
    return randomNumber % 2 === 0 ? 'yes' : 'no';
  }

  runEngine(gameRulesText, getQuestionText, getTrueAswerString);
}
