export const MAX_ROUNDS = 3;

export function showGreeting() {
  console.log('Welcome to the Brain Games!');
}

export function getRandomInt(max = 100) {
  return Math.floor(Math.random() * max);
}

export const getOperationResult = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
