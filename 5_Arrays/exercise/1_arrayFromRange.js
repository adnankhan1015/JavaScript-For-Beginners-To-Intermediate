// ? I want you to write a function called arrayFromRange. This function should takes two parameters min and max. When we run this program we get an array adn in this array we have numbers from min to max.

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

// console.log(arrayFromRange(1, 4));

// const array = [{ a: 1 }];
// console.log(array.includes({ a: 1 }));

// ? Write a function like the includes method. So imagine we don't have this method in array. Your job is to implement this includes method yourself.

function includes(array, searchElement) {
  //for ... of loop
  for (let element of array) if (element === searchElement) return true;
  return false;
}

const array = [1, 2, 3, 4];
// console.log(includes(array, 2));

// ? Write a function with name except, it takes an array and another in this array. We can add the values we want to be excluded from the original array. So this function returns a new array without the values that we pass in the second array

function except(array, excludedArray) {
  const output = [];
  for (let element of array) {
    if (!excludedArray.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

const inputArray = [1, 2, 3, 4, 5];
const excludedArray = [1, 2];

// console.log(except(inputArray, excludedArray));

// ! Moving an element
function move(array, index, offset) {
  // Validation Logic
  const position = index + offset;
  if (position >= array.length || position <= 0) {
    console.log("Invalid Offset: ");
    return;
  }
  const output = [...array];

  const element = output.splice(index, 1)[0];

  output.splice(position, 0, element);

  return element;
}

const numbers = [1, 2, 3, 4];
// console.log(numbers);
const output = move(numbers, 1, 2);
console.log("output >>>", output);

// ! Count Occurrences

const numbersArray = [1, 2, 3, 4];

function countOccurrences(array, searchElement) {
  let count = 0;

  for (let element of array) {
    if (element === searchElement) {
      count++;
    }
  }
  return count;
}

console.log(">>", countOccurrences(numbersArray, 2));
