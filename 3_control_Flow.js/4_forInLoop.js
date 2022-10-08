// ! NOTE
// We have other loops and we use them to iterate them over the properties of an object or element of an array

// ! 1. for..in Loop
const person = {
    name: 'John',
    age: 22,
}

// ! Here we don't 3 parts as we have in for loop 

for(let key in person) {
    console.log(key)
}

// * So in every iteration this "key" variable in the loop will hold the name of one properties in this person object
// * In first iteration key is name
// * In second iteration key is age 
// ? Now if I want to display the value of each property next to it.
// ! Bracket notation 
// e.g person['name'];
// * we use bracket notation when we don't know ahead of time at the time of writing code. e.g What property we are going to access.
// * Perhaps the name of the target property ['name'] is calculated at run time 


// ! When we iterate over the properties of the person object. e.g for(let key in person)
// * In each iteration the value of key is going to be different.
// ! if we use dot notation 
for(let key in person) {
    console.log(key, person.key)
}

// ! NOTE: Because we do not have a property called key in the person object

// * So that's where we use the bracket notation
// e.g we add square bracket and pass key as the name of the target property 

for(let key in person) {
    console.log(key, person[key])
}
// Now we can see the value if name and age 

// * So this is the for..in loop we use to iterate over the properties of an object
// We can also use these to iterate over an array
// ! BUT it is not an ideal way

const colors = ['red','green','blue'];

for(let index in colors) {
    console.log(index, colors[index]);
}

// ! For getting the index numbers we can use the index variable.
// ! * For the value we use bracket notation