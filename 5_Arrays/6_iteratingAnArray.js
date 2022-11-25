// ! Iterating an array 

const numbers = [1,2,3,4]
// * First Way: TO iterate over an array we use the 
// ! for...of loop
for(let number of numbers) {
    console.log(number)
}
// On each iteration this number variable inside the loop will be set to one of the elements in this array.

// * Second Way:
// Another way to iterate over an array is:
// ! ForEach method
// All these arrays have a foreach method, that takes a callback function, so we can pass a function here inside the argument of the foreach method.
// This function takes a parameter, in this case its number, and in this function we can simple log this number on the console
numbers.forEach(function(number){
    console.log(number);
})
// [1,2,3,4].forEach()
// When we call the foreach method, this function will be executed for each element in the array

// ! Arrow Function
numbers.forEach((number, index) =>  console.log(index, number));
// The only thing that you need to know that, this callback function that we pass through the foreach method can optionally take a separate parameter and that'a the index of the element

// * We don't get the index with the for...of loop but if you need that we can use the for...in loop instead