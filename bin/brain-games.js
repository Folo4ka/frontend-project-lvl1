#!/usr/bin/env node

import { getName } from '../src/cli.js';
import { showGreeting } from '../src/index.js';

showGreeting();
const name = getName();
console.log(`Hello, ${name}!`);
