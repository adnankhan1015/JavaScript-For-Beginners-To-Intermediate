// ! Value Types VS Reference Types(Array, Objects, Function)
// Value types are also called primitive types
// ! In a nutshell in JavaScript we have Primitives and Object Types

// ? How primitives and Objects have behave differently?

let x = 10;
let y = x;
x = 20 

// ! Note that x and y are two independent variables.

console.log('x>>>',x)
console.log('y>>>',y)
//* 1st step: They are independent so when we work with primitives this value that we have here is stored in let x = 10;
// * 2nd Step: We copy that variable, let y = x; that value is stored in the variable is copied into this new variable

//! So they are completely independent of each other

// ? What happen when we use a reference type or an object here?

let a = {value: 10};
let b = a;
a.value = 20;

console.log('a>>>',a)
console.log('b>>>',b)
// * When we use an object that object is not stored in this variable.
// ! That object is stored somewhere else in the memory, and the address of that memory location is stored inside that variable.

// ! Here is the conclusion
// * Primitives ara copied by their values.
// * Objects are copied by their references

// ! Another example

// ! Reference Type
let obj = {value:10};

function increase(obj) {
    obj.value++;
}

// increase(num)
increase(obj)
console.log(obj)

// ! Primitives
let num = 10
function increaseNumber(num) {
    num++
    // console.log(num)
}

increaseNumber(num)
console.log(num)