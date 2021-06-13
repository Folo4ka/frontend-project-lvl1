import { getRandomInt, runEngine } from '../src/index.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

export default function runGame() {
  const gameRulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let randomNumber;

  function getQuestionText() {
    randomNumber = getRandomInt(100) + 1; // 1 - 101
    return randomNumber;
  }

  function getTrueAswerString() {
    return isPrime(randomNumber) ? 'yes' : 'no';
  }

  runEngine(gameRulesText, getQuestionText, getTrueAswerString);
}
