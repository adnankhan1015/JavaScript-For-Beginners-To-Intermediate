// ! Template Literals
// * String Primitives
// To write a string in 2 lines. we have to use the concatenate sign (+) and then we can add it in two different lines
// Break string into two parts and concatenate then with a plus sign as given in the message variable 
const message = 'This is my \n' +  
'\'first\' message';
console.log(message)

// That is why we use template literals
// We have 
// Object literals {};
// Boolean literals True/False
// String Literals '', ""

// Now from ES6 we have template literals which are indicated by back tick 
// * Template Literals ``

// const another = `Hi John,
// Thank you for taking this course.!

// Kind Regards`;
// console.log(another)
// Another benefit is that here we can add placeholders.
// So lets say we want to add the name dynamically with a regular string.

const name = 'John';
// const another = 'Hi ' + name + ',\n' +
// 'Thanks for joining';

const another = `Hi ${name},
Thank you for taking this course!

Kind Regards`
console.log(another)
// So technically we can add any expression that produces a value in between the curly braces.
// We can also call a function that returns a value and that is valid