// ! Demerit Point
// * function takes a parameter(Speed) speed of a car
// Assuming that speed limit is 70 KM
// if a car is driving under this speed limit we get okay message
// ! 5 KM for each point
// * For every five KM above the speed limit, they're going to get 1 point
// * e.g If I drive 75(argument)KM an hour I get 1 point on the console
// ? But what if I drive at 72 KM an hour?
// * still good
// * For every 5 KM and above the speed limit we should give the driver 1 point
// ! For calculation we use one of the built-in function in JavaScript Math.floor() If we provide a floating point number e.f (1.3) will convert that to the greatest integer > Math.floor(1.3) => 1
// ! 12 points => If a drives get more than 12 points then their license should be suspended.


// ! Explanation => console.log('ok');
// * First Step
// First thing I want to improve here is to turn this 70 KM into a constant, because someone else looking at this code may not know what to represent here 
// ! e.g const speedLimit = 70;
// With this change now our code is more expressive and also if you want to use this number somewhere else in this function we don't have to repeat it multiple times we have defined it and we can use it in multiple places.
// * Second Step
// In else part we need simple calculation
// 1. We want to get the speed subtract it from speedLimit and then divide the result by 5

// * Third Step
//  ! e.g let points = (speed - speedLimit) / kmPerPoint;
// Now the result of this expression can be floating point number. for this we call Math.floor() and as an argument we pass this expression.

// * Fourth Step
// Now we should check to see if the driver gets more than 12 points
// So we need another if statement

function speedCheck(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) {
        console.log('ok');
        // * So with return this will jump out of this function and none of the code after that will be executed
        return;
    }
    // With this we get the number of points
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    // This is how we calculate the points
    if (points > 12)
        console.log('License Suspended');
    else
        console.log('Points', points)
}

// ! Test Scenarios
// * When you write a function test it with different values.
//* 1. speedCheck(70)
// For this we get Points 0, there is a bug in out condition. e.g if (speed <= speedLimit)
//* 2. speedCheck(71)
// we get points 0, still bug
// Starting from 75 we should get first point. we should again rewrite the if statement if (speed < speedLimit + kmPerPoint). now it will give ok till 74  speedCheck(74)

// ! Last Tip
// We have an else block and this is show indentation here
// if the first if condition is true we want ok on the console
// ! Now to get rid of the else block. You add a block on the if and then return

// if (speed < speedLimit + kmPerPoint) {
//     console.log('ok');
//     return;
// }
// * So with return this will jump out of this function and none of the code after that will be executed