import { getRandomInt, runEngine } from '../src/index.js';

const PROGRESSION_LENGTH = 10;

export default function runGame() {
  const gameRulesText = 'What number is missing in the progression?';
  let adding; // 1 - 10
  let progression; // Array(10)
  let lostIndex; // 0 - 9

  function getQuestionText() {
    adding = getRandomInt() + 1; // 1 - 10
    progression = [getRandomInt(), ...Array(9)];
    for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
      progression[i] = progression[i - 1] + adding;
    }
    lostIndex = getRandomInt(); // 0 - 9

    const aswerArr = [...progression];
    aswerArr[lostIndex] = '..';

    return aswerArr.join(' ');
  }

  function getTrueAswerString() {
    return String(progression[lostIndex]);
  }

  runEngine(gameRulesText, getQuestionText, getTrueAswerString);
}
