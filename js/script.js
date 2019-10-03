'use strict';

let numberOne, numberTwo, multiply, question;

for (let i = 0; i < 100; i++) {
    numberOne = Math.floor(Math.random() * 8) + 2;
    numberTwo = Math.floor(Math.random() * 8) + 2;
    multiply = numberOne * numberTwo;
    question = +prompt(numberOne + ' x ' +  numberTwo);

    if (question == multiply) {
        alert('Correct!');
    } else {
        alert('Wrong! Correct answer is ' + multiply);
    }
}