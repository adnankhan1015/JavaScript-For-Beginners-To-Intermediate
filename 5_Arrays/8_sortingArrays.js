
// ! Sorting Arrays
// const numbers = [1, 2, 3, 4, 5]

// Change the order of these numbers so they are not sorted, and then I will tell you How to sort them.
const numbers = [5,3,4,1,2]
numbers.sort()
console.log(numbers)

// Now another method sorted is often companion to the sort method is the reverse method and with this we can reverse the order of elements in an array

numbers.reverse()
console.log(numbers)

// * Its very easy to use when you have numbers are strings in an array. BUT when you have objects like course object
// It doesn't work by default you have to do some extra work.


const courses = [
    {id: 1, name: 'Node.Js'},
    {id: 2, name: 'JavaScript'}
]

// ! Now lets say you want to sort this array by name of courses.
// e.g => JavaScript should come before Node.js

// courses.sort()
// console.log(courses)
// Nothing is going to happen you can see Node is still coming first
// ? So How can we fix this problem?
// This sort method optionally takes an argument and that's a function that's used for comparison.
// So what do we call the sort method. this method gets two objects in this array.

// So lets say a and b, and compare them.
// Now if they are the in the right order it will skip to the next few elements other wise its going to re-arrange them.
// So here we need to pass a function for comparison this function should take two parameters we can call them a and b, or first and second doesn't really matter, because 'a' and 'b' is pretty self explanatory.

// ! Now this function 
// * if a is less than b we should return -1 e.g=> a < b => -1
// * If a is greater than b we should return 1 e.g => a > b => 1
// * if they are equal we should return 0. e.g => a === b => 0

// So implement this in code

courses.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    console.log(nameA, nameB);
    // a < b => -1
    if(nameA < nameB) return -1
    // a > b => 1
    if(nameA > nameB) return 1
    // a === b => 0
    return 0
})

console.log(courses)

// * Now Note that here I am not using else...if, because if the first condition is true, this return statement we are going to jump out of this function.
// * So the control will never move to this point. So there's really no need to use the 'else' keyword

// each character in a computer is internally represented using a number.
// ASCII Table =? American Standard Code for Information Interchange
// We should exclude case sensitive when we compare these names.
// So we can do something like this => Declare two constants 
    // const nameA = a.name.toLocaleLowerCase();
    // const nameB = b.name.toLocaleLowerCase();
