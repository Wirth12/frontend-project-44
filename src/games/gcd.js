#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello, { name } from '../cli.js';

hello()
const findGCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

const playBrainGCD = () =>{
    console.log('Welcome to the Brain GCD game!');
    console.log('Find the greatest common divisor of given numbers.\n');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = findGCD(num1, num2).toString();

        console.log(`Question: ${num1} ${num2}`);
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

playBrainGCD();
