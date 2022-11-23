// ! Combining and Slicing and Array
const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

// slice method takes 2 argument start index and end index, and its a zero based index.
const sliced = combined.slice(2,4)
console.log(sliced)

// If you are dealing with primitive types value, these primitives will be copied to the target ARRAY.
// If you have "Objects" in your ARRAY, the objects themselves are not copied to the target ARRAY.
// There reference are copied to the target ARRAY.
// That means, The element in both the input, and output arrays will point to the same object.

const firstReferenceArray = [{id:1 }]
// When we call the concat method this object itself is not copied to the combined array. only its reference is copied.
// Find this mean if I go the first array get the first element which is our object and change its id to let say 10.

firstReferenceArray[0].id = 10;

const combinedReferenceArray = firstReferenceArray.concat(second)

console.log(combinedReferenceArray)

// * If the element are primitive they are copied by their value.
// * If they are reference type they are copied by their reference.

// ! Second Way 
// * Spread Operator in ES6(Ecmascript Version 6)
 
const spreadCombineArray = [...first,'a', ...second, 'b']
console.log(spreadCombineArray);

// * Slice method without any arguments, this will return a copy of the original array.
const sliceArray = spreadCombineArray.slice();
console.log('Slice Array', sliceArray);
// * This will return all the element of the spreadCombineArray and out them into this sliceArray variable.

const person = {
    name: 'John',
    age:22
}

const anotherPerson = {...person};
console.log(anotherPerson)