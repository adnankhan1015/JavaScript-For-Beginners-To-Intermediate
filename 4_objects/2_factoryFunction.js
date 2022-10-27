// ! Factory Function
// How to use the object literals {}; syntax to create an object.
// But there is a problem here, Imagine you want to create 2 circle objects.

const circle = {
    radius: 1, 
    // Key: value(function)
    // ! Method
    draw: function() {
        console.log('Draw')
    }
}; 

const circle4 = {
    radius: 3, 
    // Key: value(function)
    // ! Method
    draw: function() {
        console.log('Draw')
    }
};

// Now the problem that we have here is that we have duplicated the implementation, of the draw method. So right now its a simple method with only a single line of code
// But what if we had 10 lines of code here(In draw method). 
// You wouldn't want to repeat all these lines here
// Because if you have a bug in this method, then we will have to fix it in multiple places
// ! Also take into account that our circle object currently has only one single method
// ? What if we had 10 other methods?
// We don't want to duplicate or repeat all that logic... right?

// So if our objects have logic we need a different way to create objects
// ! Thats when we use Factory Function or Constructor Function

// * Factory Function
// Just like a factory producing products. These factory functions produces objects

function createCircle(radius) {
   return  {
        radius, 
        // Key: value(function)
        // ! Method
        draw() {
            console.log('Draw')
        }
    };  
}

const circle1 = createCircle(1)
const circle2 = createCircle(2)
const circle3 = createCircle(3)
circle2.draw()
circle3.draw()