// ! Remove elements from an array

const numbers = [1,2,3,4,5]
// * End
const last = numbers.pop();
console.log('Last element of an array', last);
console.log(numbers)

// * Start
const first = numbers.shift()
console.log('First element of an array',first)
console.log(numbers)

// * Middle
console.log('Array before removing element from the middle',numbers)
const middle = numbers.splice(1,1)
console.log('Element that we have removed from the middle of an array',middle)
console.log('Array after removing element from the middle',numbers)


// ! Emptying an array
// WE learned how to remove elements from an array
// ? But, What about emptying an array?

let numbersArray = [1,2,3,4,5,6]
// * First Solution
// Simply reassign the array
// In this case, because we  declare this array using let we can reassign it, if we use const then we cannot reassign the array.
// ! Now our array is empty. However, note that this old array is still in the memory, so if there ara no other reference to this object, eventually it will be removed by the garbage collector.
// * So this mean if we have lets say another variable called another adn this is also pointing to the same object.
let anotherNumbersArray = numbersArray;
numbersArray = []
console.log('Numbers array',numbersArray)
console.log('Another NumbersArray',anotherNumbersArray);
// ! So this solution works if you do not have any other references to the original array. If you do have multiple references to the original array. Then you need to use one of the other solutions.

// * Second Solution
// We can simple set the length property to 0, and this will truncate the array.
const secondSolution = [1,2,3,4,5]
// It will remover all the elements of the array
secondSolution.length = 0;
console.log(secondSolution)
// * You can see the original array is truncated to it doesn't matter how many references you have to the original array.

// * Third Solution
// We can also use the Splice.
const thirdSolution = [1,2,3,4,5,6,7,8,9,10]
// It will remover all the elements of the array
console.log(thirdSolution.splice(0, thirdSolution.length));
// console.log(resultOfThirdSolution)

// * Fourth Solution
// thirdSolution.pop();
// Pop() method removes the last element from the array.
// Now we can put this in a loop and keep calling this method as long as we have an element in this array.
while(thirdSolution.length > 0) {
    thirdSolution.pop();
}
console.log(thirdSolution)