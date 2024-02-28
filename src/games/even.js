#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello, { name } from '../cli.js';
const isEven = (number) =>{
  return number % 2 === 0;
}

const getRandomNumber = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
hello()

const playBrainEven = () =>{
  console.log('Welcome to the Brain Even game!');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log('Let\'s try again!');
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations!');
}

playBrainEven();
export default playBrainEven