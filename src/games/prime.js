#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isPrime = (number) =>{
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const playBrainPrime = () => {
    console.log('Welcome to the Brain Prime game!');
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

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

playBrainPrime();
