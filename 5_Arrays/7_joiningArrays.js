// ! Joining Arrays

const numbers = [1,2,3,4];
// Lets say we want to join the elements in this array. That's when we use the join method.

// numbers.join() 
// Whenever you see a question mark, that means this parameter is optional, and you can see this type of parameter is a string
// Here we can pass optionally a string and this string will be used as a separator.
console.log('Numbers Array',numbers)
const joined = numbers.join(',')
console.log(joined)

// ! Split Method
// That is not a part of arrays, but that is a part of the string.
// split method, returns an array.

const message = 'This is my first message.'

console.log(message)
const parts = message.split(' ')
console.log(parts)

const combined = parts.join(' ')
console.log(combined)

// ! NOTE: These methods are useful when we are dealing with URL SLUG