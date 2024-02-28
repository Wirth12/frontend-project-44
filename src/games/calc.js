#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello, { name } from '../cli.js';

hello()
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
}

function playBrainCalc() {
  console.log('Welcome to the Brain Calc game!');
  console.log('What is the result of the expression?\n');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operator = getRandomOperator();

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculate(num1, operator, num2).toString();

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log('Let\'s try again!');
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations!');
}

playBrainCalc();