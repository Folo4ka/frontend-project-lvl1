import { getRandomInt, runEngine, isEven } from '../src/index.js';

function getGCD(m, n) {
  if (m === 0) {
    return n;
  }
  if (n === 0) {
    return m;
  }
  if (m === n) {
    return m;
  }
  if (m === 1 || n === 1) {
    return 1;
  }
  if (isEven(m) && isEven(n)) {
    return 2 * getGCD(m / 2, n / 2);
  }
  if (isEven(m) && !isEven(n)) {
    return getGCD(m / 2, n);
  }
  if (!isEven(m) && isEven(n)) {
    return getGCD(m, n / 2);
  }
  if (!isEven(m) && !isEven(n) && n > m) {
    return getGCD((n - m) / 2, m);
  }
  if (!isEven(m) && !isEven(n) && n < m) {
    return getGCD((m - n) / 2, n);
  }

  return null;
}

export default function runGame() {
  const gameRulesText = 'Find the greatest common divisor of given numbers.';
  let randomNumber1;
  let randomNumber2;

  function getQuestionText() {
    randomNumber1 = getRandomInt();
    randomNumber2 = getRandomInt();
    return `${randomNumber1} ${randomNumber2}`;
  }

  function getTrueAswerString() {
    return String(getGCD(randomNumber1, randomNumber2));
  }

  runEngine(gameRulesText, getQuestionText, getTrueAswerString);
}
