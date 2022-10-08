// ! For..Loop
// * Sometimes we want to repeat an action a number of times.

console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
// That is where we use loops all these loops are doing the same thing
// They repeat an action a number of times

//! We have 3 statements inside a for loop
// * 1. The first statement is "Initial Expression", here we declare a variable and set it to 0 (Depends on the situation)
    // e.g let i = 0; i is short for index
    // "i" is what we call a loop variable
//* 2. Second part of the loop- is what we call condition
// here we want to add a condition and compare the value of "i" with something else
// This loop will run as long as this condition is TRUE

// * 3. Increment Expression, quite often what we have here is something like i++
// We use the increment operator to increment the value of i
//! for(initialExpression; condition; incrementExpression)

for(let i = 0; i <= 5; i++) {
    // statements (one or more statements)
    console.log('Hello World')
}

// ? How it works?
// This loop will execute as long as this condition is true
// * so as long as "i" is less than 5 the statement we have inside this loop will be executed.
// After the first iteration "i" is incremented by "1"

// ! For loop for printing even numbers from 0 to 10
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}
// ! For loop for printing odd numbers from 0 to 10
for(let i = 0; i <= 10; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}

// ! For loop for printing even numbers from 0 to 10
for(let i = 10; i >= 1; i--) {
    if(i % 2 === 0) {
        console.log(i)
    }
}