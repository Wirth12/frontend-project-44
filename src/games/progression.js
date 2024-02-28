#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateProgression = (start, diff, length) =>{
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + diff * i);
    }
    return progression;
}

const hideRandomElement = (progression) => {
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return { progression, hiddenValue };
}

const playBrainProgression = () => {
    console.log('Welcome to the Brain Progression game!');
    console.log('What number is missing in the progression?\n');

    const roundsCount = 3;
    const progressionLength = 10;

    for (let i = 0; i < roundsCount; i++) {
        const start = Math.floor(Math.random() * 10);
        const diff = Math.floor(Math.random() * 10) + 1;
        const progression = generateProgression(start, diff, progressionLength);
        const { progression: hiddenProgression, hiddenValue } = hideRandomElement(progression);

        console.log(`Question: ${hiddenProgression.join(' ')}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== hiddenValue.toString()) {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${hiddenValue}".`);
            console.log('Let\'s try again!');
            return;
        }

        console.log('Correct!');
    }

    console.log('Congratulations!');
}

playBrainProgression();