// ! Every Method

const numbers = [1,-1,2,3]

// If a single value doesn't meet the criteria, it will return false.
// Check all values in  this array are positive are not.
const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// At least one value that matches the criteria.
// When find the condition is true this search will terminate.
const atLeastOnePositive = numbers.some(function(value) { 
    return value >= 0;
})

console.log(atLeastOnePositive);

// ! Testing the elements of an array.
// * We use every() and some() method.