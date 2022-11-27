// ! Reduce Method

const numbers = [1,-1,2,3]

// Lets say we want to calculate the sum of all these numbers in this array. This will be similar to calculating the total cost of all the items in the shopping cart.
// So Each number here should represent the price of an item in a shopping cart of course we wouldn't have a negative number there but you get the point.
// So here is a very simple algorithm for calculating the sum of all the items in this array

// You start by declaring a variable called sum and we initialize it to 0

let sum = 0;
// Next we loop over the array get each element for each number and add it to sum.
for(let n of numbers) {
    // Expression
    // sum = sum + n;
    sum += n;
}
console.log(sum)

// ! Now there is a cleaner way using the reduce method in arrays.
// With this method we can reduce all these elements in an array into a single value. That single value can be a number, string, or an object
// In this example we want to reduce all these elements into a single number that is the sum of all the numbers in this array.

// ? How can we use the reduce method?
// * This method takes a callback function with two parameters. 
    // 1. Accumulator
    // 2. Current value
// This parameter accumulator is just like let sum = 0;
// It is something that we initialize and this callback function is executed multiple times. Each time this 'currentValue' will be set to one element in this array. 
// So in each call we want to get this currentValue and add it to accumulator. So we simply return the sum of accumulator plus the currentValue.
const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(result)

// Now internally this reduce method will get this result and store it in accumulator.
// One last thing we need to do here is to initialize this "accumulator" to 0. so as the second argument to the reduce method.
// Note that this reduce method has two arguments, first is a callback function and the second argument is the initial value for the accumulator.
// Finally, we get the result as the single value.

// ? What is happening here i?
// 1. Initially we set accumulator to 0, 
// a = 0, c =  1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c =  2 => a = 2
// a = 2, c =  3 => a = 5