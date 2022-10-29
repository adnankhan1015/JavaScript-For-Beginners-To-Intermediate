
// ! Constructor Function
// There is another way to create an object is using the constructor function
// * 1. In the body of constructor function instead of returning an object we are going to use the "this" keyword. To set the properties of the object.
// ? What is "this" keyword?
// * This is basically a reference to the object that is executing this piece of code.
// Imagine we have a new empty Object {} in memory now we are going to use "this" keyword to reference that object.
// Then use dot notation to set various properties on that object. So we can set the "radius" property to this radius argument
// ! "This" reference the window object

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw')
    }
}

// const circle = new Circle(1);
// console.log(circle)

// ? What does the new keyword do?
// * The new keyword does 3 things
// * 1. Create an empty object {}
// * 2. new keyword will set "this" keyword to point to that object. In other words, set the point to "this" object
// * 3 Finally return that object from this function

// ! SO here we don't have an explicit return statement. e.g return this
// This will happen automatically when we use the new operator  

// * Dynamic Nature of Object
// ! Every JavaScript object has a property called constructor, and that constructor references the function that was used to construct or create that object.

const circle = new Circle(1);
const anotherCircle = new Circle(2);

// on console write anotherCircle.constructor
// We can tell that this is a function, because here er have the blue f

let x = new Object();
let y = new String();
let z = new Boolean();
let a = new Number();

// ! Refine the Definition
// * Every Object has a constructor property, 
// * and that references a function 
// * that was used to create that object