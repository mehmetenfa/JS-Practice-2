Write a JavaScript program that takes two integers from a user and displays the larger.

// pseudocode:
// get two numbers
// compare them with if first greater than second one 
// compare them with else first equals or smaller than second one 

// let number1 =  5;//prompt('pls enter a number');
// let number2 =  6;//prompt('pls enter second number');

const largerNumOfTwo = (number1, number2) => {
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`;
    } else if (number1 === number2) {
        return `${number1} equals ${number2}`;
    } else {
        return `${number2} is greater than ${number1}`;

    }
};

// console.log(largerNumOfTwo(5, 6));


// Write a JavaScript program that takes 3 integers from a user and displays the largest.

const largestNumOfThree = (number1, number2, number3) => {  // array ise spread ile açmak gerekir
    // return Math.max(...[number1, number2, number3]);
    let largest;


    if (number1 > number2 && number1 > number3) {
        largest = number1;
    }

    else if (number2 > number1 && number2 > number3) {
        largest = number2;

    }
    else {
        largest = number3;
    }
    return `${largest} is the largest`;
};

// console.log(largestNumOfThree(2, 6, 9));