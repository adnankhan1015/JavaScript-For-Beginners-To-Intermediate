// * we use arithmetic operators for performing calculation

let x = 10;
let y = 6;

// * What we've here is x + y is what we refer to as an expression in JavaScript
    // * So an expression is something that produces a value
// * we also have subtraction, multiplication, division, and reminder of division
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

// ! We have a new JavaScript operator that is exponentiation its its indicated by two stars and that is X to the power of Y
console.log(x ** y);


// * we have 2 additional arithmetic operators that are a little bit tricky 
// * 1. Increment Operator (++)

let z = 10;
// ! put increment operator before Z
// * The value of Z will be incremented by 1 first and then we will see that on the console.
console.log(++z)
// ! Here value of Z is 11
// * In contrast, if you put this operator after Z we will see Z on the console first, and then the value of Z will be incremented by 1
console.log(z++)
// ! Here the value of Z is 12
console.log(z)

// * 2. Decrement Operator (--)
let a = 10

console.log(--a)
// ! Here value of a is 9
console.log(a--)
// ! Here value of a is 8
console.log(a)