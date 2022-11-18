// ! Adding Element into an array.

// Arrays are objects so using dot notation. we can look at all the properties and methods defined in the in Arrays.
const numbers = [3,4];
// ! Adding Element into an array
// * 1. Start/Beginning of an array. => We use the unshift method to add a new element in the start of an array.
numbers.unshift(1,2)
// * 2. Middle of an array. We use the splice method to add a new element in the middle of an array.
numbers.splice(2,0,'a','b')
// * 3. End of an array. We use push() method to add element at the end of an array.
numbers.push(5,6)

console.log(numbers)



