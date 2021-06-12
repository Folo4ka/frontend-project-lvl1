import { getName, getAnswer } from '../src/cli.js';
import { MAX_ROUNDS, showGreeting, getRandomInt } from '../src/index.js';

export default function evenGame() {
  showGreeting();
  const name = getName();
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let currentRound = 1;
  while (currentRound <= MAX_ROUNDS) {
    const randomNumber = getRandomInt();
    const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = getAnswer().trim().toLowerCase();

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
