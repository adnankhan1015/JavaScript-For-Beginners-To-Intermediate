// ! Cloning An Object

const circle = {
    radius:1,
    draw() {
        console.log('Draw')
    }
}
// Using this technique, so we can get all the properties in an object and copy them into another object.
// ! First way to clone an object
// Create another circle object which is a copy of the circle object

const another = {};
// Initially we set it to an empty object
// * Step1: Now we can use the for...in loop to iterate over all the properties and methods in an object and copy them into this new object 

// * Step2: Now we use the bracket notation to access a property with a given key. So we set another of key to circle of key.

for(let key in circle) {
    another[key] = circle[key]
}
console.log('By creating an empty object and iterate it',another)
// So basically here in the first iteration key will be radius

// ! Second way to clone an object
// In modern JS we have a better approach.
// One way is to use the Object.assign method
// * Object.assign() method, assign() method first argument we can pass a target object which can be an empty object or an existing Object
// Object.assign({},) and then we can pass 1 or more source object
// Object.assign({}, circle);
// What this method does is it takes all the properties of this method (circle) in the source object and copies them into this new object. and finally returns the result here
// const anotherObject = Object.assign({}, circle); 

// Object.assign({},) Now this target object pass here doesn't have to be an empty object.
// It can be an existing object it can have one or more properties or methods

const anotherObject = Object.assign({color:'Yellow'}, circle);
console.log('Using Object.assign Method',anotherObject)

// ! Third way 
// * Spread Operator
// So another way is we set this to a new object then use the spread operator

const spreadObject = {...circle};
console.log('Using Spread Operator',spreadObject);
// Basically what this operator does is that it takes all the properties and methods in this object and puts them in between these curly brackets.


// ! Garbage Collector
// * Memory allocation and deallocation automatically happens behind the scene and you have no control over it.