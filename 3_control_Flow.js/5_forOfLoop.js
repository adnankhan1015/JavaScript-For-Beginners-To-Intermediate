// * In ES6 we have a new way to iterate over an array and that is for...of loop
// ! Same as for..in but instead of the "in" keyword we use the "of" keyword

const colors = ['red','green','blue'];

for(let color of colors) {
    console.log(color)
}

// We don't have to deal with the index we don't have to access this element at the given index

// ! So in each iteration this color which is our loop variable will hold one of the items in the array
