// ! Function Declaration vs Function Expression

// * Function Declaration
function walk() {
  console.log("Walk");
}

// * Named Function Expression
let run = function () {
  console.log("Run");
};

// * Anonymous Function Expression
// let test = function () {};

walk();
run();
let move = run;
// So now both move and run are referencing the same anonymous function. which is one object in memory.

move();

// ! HOISTING
// ? What is HOISTING in JavaScript?
// Key difference between Function Declaration and Function Expression
// Hoisted is the process of moving function declarations to the top of the file. and this is done automatically by the JS Engine that is executing our code.
// That is the reason we can call this functions that are defined using the function declaration syntax before their definition.
