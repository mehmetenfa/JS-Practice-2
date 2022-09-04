/** LOOPS SORU ÇÖZÜMLERİ */

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

const validNumber = () => {
    let num = prompt("Enter a valid number")

    if (Number(num)) {
        console.log("It is a valid number")
    } else {
        return validNumber()
    }
}

console.log(validNumber());


//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

const fındGcd = (num1, num2) => {
    let gcd;

    if (num1 === 0 || num2 === 0) {
        return 'Please enter a valid number'
    }

    for (let i = 1;  i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    return gcd
}

console.log(fındGcd(3,6));


//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

const factor = (num) => {
    let arr = []
    
    for ( let i = 1; i <= num; ++1) {
        if (num % i === 0) {
            arr.push(i, -i)
        }
    }

    return arr;
}

console.log(factor(12));
console.log(factor(13));


//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.


const factorial = (num) => {
    if (num < 0) return -1;

    if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(3));


//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.


const divisible = () => {
    let arr = []

    for (let i= 100; i <= 1000; i++) {
        if (!(i % 3) && !(i % 5)) {
            arr.push(i)
        }
    }

    return arr
}

console.log(divisible())



//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.


const multiplication = () => {
    let arr = []

    for (let i = 1; i <= 10; i++) {
        arr.push(`multiplication table of ${i}`)
        for (let k = 0; k <= 10; k++) {
            arr.push(`${i} * ${k} = ${i*k}`)
        }
    }

    return arr
}


//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game. 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.


const powerball = () => {
    let powerball = Math.floor(Math.random() * 29) + 1
    let whiteball = []

    for (let i = 1; i <=5; i++) {
        let random = Math.floor(Math.random() * 69) + 1
        whiteball.push(random)
    }

    return `${whiteball.join(', ')}, $`
}

console.log(powerball())

/** FUNCTİON SORU ÇÖZÜMLERİ */


//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.
//? Example:
//? Amount = 1000 rate = 1.5       should return 1500 as amount * rate is equal 1500

const currency = (amount, rate = 1.5) => amount * rate

console.log(currency(1000));


//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

const type = (x) => {
    return typeof x
}

console.log(type(true));


//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway


const times = (str, char) => {
    let count = 0

    for (let i = 0; i < str.lenght; i++) {
        if (str[i] === char) {
            count++ 
        }
    }

    return `${char} occurs ${count} times in ${str}`
}

console.log(times('Clarusway', 'a'));