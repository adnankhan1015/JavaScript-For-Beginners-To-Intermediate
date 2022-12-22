// ! Global vs Local Scope
// * Scope => A scope of a variable or a constant, determines where that variable or constant is accessible.
// When we declare a variable or constant with let or const their scope is limited to the block in which they're defined.

{
  // message is accessible inside this block
  const message = "hi";
}
// But its not accessible outside of this block.
// console.log(message);

// * We cannot access this constant outside of the start function. The same is true when we declare a variable or a constant in an if block.
// function start() {
//   const message = "hi";
//   if (true) {
//     const another = "Bye";
//   }
//   console.log(another);
// }

// ! This constant has global scope
// * Global scope means this constant or variable is accessible everywhere, globally.
const color = "red";

// * The scope of this constant is limited to the block in which block in which it's defined. So we can have 2 variables or constants with the same name but different functions. That's perfectly fine.

function start() {
  // We have access to this constant so this constant is accessible in all the function we have in our program
  const message = "hi";
  const color = "green";
  console.log(color);
}

function stop() {
  const message = "Bye";
}

start();

// * Local variable and Local Constant in a function take precedence over the global variable or constant

// ! Avoid Global Variables or constants

// ! let vs var
// We have been declaring variables using the let keyword. BUT we also have "var"

// ? Learn about var and problems with it and why you should avoid it?

function useLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

function useVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Cause the i is declared with var", i);
}

useLet();
useVar();

// * When you declare a variable with var it's scope is not limited to the code block in which it's defined.
// * It is limited to the function in which it's defined

// ! So before ES6 var was he only way to declare variable and constants. Starting form ES6(ES2015) we have two new keywords let and const

// * let and const these 2 keywords create block scope variables. but var creates function scoped variables.

function avoidVar() {
  for (var i = 0; i <= 5; i++) {
    if (true) {
      var color = "blue";
    }
  }
  console.log(color);
}

avoidVar();

// ! The Second issue is with the global variables

let userName = "John";
var age = 20;

// ! When we create using "var" outside of a function this creates a global variable and attaches it to the window object in the browser.

// * So in browsers we have this window object
// window => which is a complex object with lots of properties and methods
// * What matters here is this "var" keyword attaches this "age" variable to the window object. e.g => window.age
// When we use the let keyword to define a global variable is not attached to the window object.

// ? Why is it bad to attach a window object to a variable?

// Well, window object is something central there is only one instance of the window object and lets you are using any third party libraries.

// * If that third party library also has a variable with the same name, that variable can override your variable.
// ! So you should avoid stuff to the window object

// ! When we define a function, this function is technically a global function and is added to the window object => on console window.sayHello()
// So technically this is a global function its attached to the window object and that is a bad practice
function sayHello() {
  console.log("Hello");
}

// ? But How  we can prevent this?
// * Well, later in the course we will talk about modules you will learn about how to encapsulate these function in separate modules so they aren't added to that.
