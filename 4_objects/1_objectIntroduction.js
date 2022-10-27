// ! Objects
// * Objects are collections of key value pairs.
// So if you have properties that are highly related we want to encapsulate them inside of an object.

// We are building an app for drawing different kinds of shape like circle, square, rectangles and so so
// So we could declare multiple variables around circles for example radius we set that to 1
// ! example

// let x, y;
// We are defining multiple variables but all these variables are highly related they represent a circle.

let radius = 1;
let x = 1;
let y = 1;

// A better approach is to put these variables inside of an object. We can put these variables inside of an object now we can send that object anywhere in our program.
// We can pass that to any function and all these variables would be available in that object

// ! Define an object
// We could use let or const in this case it doesn't really matter

// * Here inside in object code block  {} we can type a number, a string, a boolean, null, undefined.
// ! It can be even be another object or an array or an function.
// Instead of defining 2 other key value pairs as x and y
// I am going to add a key called location and set its value to another object.
// * Now in this object we can have 2 key value pairs or properties
// We can also have another property like isVisible and set to that to a boolean


// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y:1
//     },
//     isVisible: true
// }; 

// * The propose of this object is to group related variables.
// ! But its not just grouping related variables quite often we have function that should operate on the variable.

// For example we can have a function like draw 
// For drawing a circle or we could have another function for moving a circle

// ! Its also called stand alone function
function draw () {}
function move () {}

// These functions are highly related to these variables we have to find here. 
// So instead of defining these function in a stand alone way. Its better to put these functions inside of the circle object.
// Where we have the circle object in our program we have access to all of its properties and function

// ! Function inside object

const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    isVisible: true,
    // Key: value(function)
    // ! Method
    draw: function() {
        console.log('Draw')
    }
}; 

// We can also access a dot notation
circle.draw()

// ! Object Oriented Style Programming (OOP)
// * Where we see a program as a collection of objects that talk to each other to perform some functionality.

// We have a circle object and this object has a few properties and a function

// In OOP terms, If a function is part of an object, we call the function a METHOD
// SO here more accurately instead of saying we are calling the draw function of the circle object.
// ! Circle Object ==> Circle.draw()

// * we say we are calling the draw method of the circle object. So Draw is a method

// ! Function vs Method
// * If a function is a part of an object in "OOP" terms, we refer to that function is a method.

const person = {
    name: 'zohaib',
    age: 33,
    array: ['a','as','sss'],
    obj: {
        a: 1,
        b: 2
    },
    fullName: function() {
        console.log('FullName Function')
    }
};

console.log(person.array)