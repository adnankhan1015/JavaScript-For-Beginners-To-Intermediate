// ! Functions
// * A function is basically a set of statements that perform a task or calculate a value.

// Function Declaration
// So this greeting function have one parameter called name
function greetings(firstName, lastName) {
    // ! this name variable is only meaningful inside this code block
    // Body of a function.
    // This is where nwe add all the statement to define some logic in our app.
    console.log('Hello ' +firstName+ ' ' + lastName);
} // code Block

// Function Calling
// ! When we pass any value in a function call that we called a function argument
// * So "Zohaib" is an argument to the greeting function and "name" is the parameter of the greeting function 
greetings('Zohaib', 'Ashraf');

// ! Types of functions
// * 1. Performing a Task
// * 2. But sometimes our function might calculate something

function square(number) {
    // * We need to return this(number) value to whoever is calling this function.
    // * So that we use the return keyword
   return number * number
}

// let number = square(3);
// console.log(number)

console.log(square(4))

// ! Function Definition
// * A function ia a set of statements that either perform a task or calculates and return a value