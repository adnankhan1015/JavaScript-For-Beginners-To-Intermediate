// function declaration syntax
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw')
    }
} 

// Function Expression Syntax
const myFunc = function() {
}

const another = new Circle(2);
// ! Here is one of the confusing thing about JavaScript is here functions are objects.
// So this Circle function we have here is actually an object 

// On Circle. these are all the members of the circle function or function object.


// ! Every Object in JavaScript has a constructor property and that references the function that was used to create that object.
// * Circle.constructor
// Here we have another built-in constructor called ƒ Function() { [native code] } and when we declare a function using (function declaration syntax).
// Internally JS engine will use this function constructor to create this object.

// const circle1 = new Function('radius')
// Now here our function requires one parameter radius sso we add that here as a string
// Now as second argument.
// I am going to pass this function
// ! So to break it up into multiple lines I am using the back tick character.
const circle1 = new Function('radius', 
    `this.radius = radius,
    this.draw = function () {
        console.log('Draw')
    }`
)

// So when we declare a function internally its represented like this
// Now we can call this circle1 just like calling our circle function si we can create a circle object 
const circle = new Circle(12)

