import readlineSync from 'readline-sync';

export default function takeName() {
  return readlineSync.question('May I have your name? ');
}
