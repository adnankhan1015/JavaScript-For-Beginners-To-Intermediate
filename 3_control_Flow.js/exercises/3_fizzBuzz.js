// ! FizzBuzz Algorithm 
// ? We have this function called "FizzBuzz" we give it an "input" and iy returns a sting.
// * We call FizzBuzz a constant called output
// * We call FizzBuzz  and pass an input like 3 then log the output on the console
// ! 1. So if the number that we are passing is divisible ny 3 we get "fiz"
// ! 2. If the number we pass is divisible by 5 we get "BUZZ"
// ! 3. if the number we pass is divisible by 3 and 5 we get "FizzBuzz"
// ! 4. If not divisible by 3 and 5 we get same input
// ! 5. If we don't pass a number like we pass a string e.g ('f'). we ger NaN(Not a Number) 
// ! 6. 5th statement is true for boolean (true/false)

// function FizzBuzz(input) {
//     if(typeof input !== 'number')
//         return 'Not a Number';
//     if(input % 3 === 0)
//         return 'Fizz'
//     if(input % 5 === 0)
//         return 'Buzz'
//     if(input % 3 === 0 && input % 5 === 0)
//         return 'FizzBuzz';
//     return input;
// }

// ! Test case
const output = FizzBuzz(1);
console.log(output)
// * It returns "Fizz" but it must return "FizzBuzz"
// ! Is because of how we have ordered out if statement, because "15" is divisible by 3 so the first if statement is executed
// ! To solve this we need to move the last statement on the top

function FizzBuzz(input) {
    if(typeof input !== 'number')
        return NaN;
    if(input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';
    if(input % 3 === 0)
        return 'Fizz'
    if(input % 5 === 0)
        return 'Buzz'
    return input;
}