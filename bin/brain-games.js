#!/usr/bin/env node

import takeName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = takeName();
console.log(`Hello, ${name}!`);
