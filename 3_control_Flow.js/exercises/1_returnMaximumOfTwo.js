// ?  Write a function that takes two numbers and returns the maximum of two

// function maximum(a, b) {
//     if(a > b) return a;
//     else return b;
// }

// let number = maximum(2,4);
// console.log(number)

// Called with different test cases.
// Test your function with different possible values
// Now optimize/clean up your code 

// * 1. Remove else
// ? Why?
// * When (a > b) false iut will out of this block and return b 
// * if (a > b) true => we return a & we jump out of this function. So none of the code after this will be executed we will never get the else return b


// function maximum(a, b) {
//     if(a > b) return a;
//     return b;
// }

// let number = maximum(2,4);
// console.log(number)

// ! Try with ternary or conditional operator
function maximum(a, b) {
    return (a > b) ? a : b
}

let number = maximum(2,4);
console.log(number)