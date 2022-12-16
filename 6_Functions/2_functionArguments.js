// ! Arguments

// We learned that JS is a dynamic language so we can declare a variable set it to a number and then change its type and set it to a string and that is perfectly fine from the perspective of a JS Engine. This is one of the characteristics of a dynamic language language such as.
// Example:
let x = 1;

x = "x";

// But we have the same concept in the arguments of a function.

function sum() {
  console.log(arguments);
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 3));

// But in JS it doesn't matter that this function has 2 parameters we can pass only 1 argument.

console.log(sum(1));
// NAN
// 1 + b
// This is not a valid arithmetic operator. The same happens for if we don't pass any number/arguments
console.log(sum());

// We can pass additional arguments
console.log(sum(1, 2, 3, 4));
// That is a valid JS Code
// But if you want to have a varying number of parameter in a function

// Every function in JS has a special object called arguments
