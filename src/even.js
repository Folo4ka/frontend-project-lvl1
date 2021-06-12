import readlineSync from 'readline-sync';
import takeName from './cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function evenGame() {
  console.log('Welcome to the Brain Games!');
  const name = takeName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxRounds = 3;

  let currentRound = 1;
  while (currentRound <= maxRounds) {
    const randomNumber = getRandomInt(1000);
    const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (currentRound === maxRounds) {
       console.log(`Congratulations, ${name}!`);
       return;
    }

    currentRound++;
  }

}
