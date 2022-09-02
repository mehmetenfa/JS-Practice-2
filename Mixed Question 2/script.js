// Write a JavaScript code to find the area of a triangle.

// pseudocode:
// a, b and c sides of a triangle
// assume bottom = c
// semiperimeter = s
// s = (a + b + c) / 2
// (s(s-a)(s-b)(s-c))**0.5

const areaOfTriangle = (a, b, c) => {
    let s = (a + b + c) / 2;
    return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
};

// console.log(areaOfTriangle(3, 4, 5));

// Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.

// pseudode:
// if given number is greater than 20 or not.
// if false 20 - given number
// if true abs((20 - given number) * 2) or multiply * (-1)

const absoluteResult = (num) => {
    if (num < 20) {
        return 20 - num;
    } else {
        return Math.abs((20-num) * 2);
    }
};

// console.log(absoluteResult(15));
// console.log(absoluteResult(35));