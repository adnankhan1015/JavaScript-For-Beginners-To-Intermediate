// ! Filtering an Array

//  How to filter an array based on a search criteria.
// e.g => You want to return only the positive numbers. so we can use the filter method.

const numbers = [1,-1,2,3]

// takes a callback function.
// This callback function takes upto 3 parameters.
// 1. Value, 2. Index, 3. Array
// const filtered = numbers.filter(function (value) {
//     // Expression
//     return value >= 0;
// });
console.log(numbers)
// console.log(filtered)
// So when we call the filter method this method will loop through this array. And execute this callback function for each number.
// Now if the element matched the criteria it will add this element to a new array and finally we can get the new array in the filtered variable.

const filtered = numbers.filter(value => value >= 0);
console.log(filtered)