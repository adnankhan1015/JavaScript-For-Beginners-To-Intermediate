// ! Comparison Operator
// * Use this operator to compare the value of a variable with something else!
// ! For example

let x = 1;

console.log(x > 0)
// * The result of an expression that includes a comparison operator is a boolean(True/False)

// ! 1. Relational Operator (4)
console.log('X is less than 1 ', x < 1)
console.log('X is less than or equal to 1 ', x <= 1)
console.log('X is Greater than 1 ', x > 1)
console.log('X is Greater than or equal to 1 ', x >= 1)

// ! 2. Equality Operator
console.log(x === 1) // true
// * If x is not equal to a given value, you replace the first equal sign with an exclamation mark.
console.log(x !== 1) // False

// * Technically in JavaScript we have another equality operator, that is indicated by 2 equal signs instead of 3 equal signs
// ! === vs ==
// ! 2.1 Strict Equality Operator (Type + Value)
console.log('Strict Equality Operator ',' 1' === 1)
// * It ensures both these values we have on the sides of this operator. It must have same type and same value
// ! Both side we have two numbers as well as their values are equal. 


// ! 2.2 Loose Equality Operator (Value)
// * loose equality operator behaves differently 
console.log('Loose Equality Operator ', 1 == 1) //true

console.log('Loose Equality Operator ', '1' == 1) //true
                                    //  string == Number
// ? In previous example in Strict Equality operator we get false ... WHY?

// * In this case the operator looks at the value on the left side.
    // * We have a string
    // * So it will automatically convert, what we have on the right side of a string
    // * So it will look like this console.log('1' == '1')
    // * and now because these values are exactly the same
        // * we get true
    // ! What if on the left side we've a boolean
    // ! For Example
    console.log(true == 1)
    // * This operator look at what we have  on the left side because its a boolean, it will automatically convert the value on the right side to a boolean
    // ! e.g console.log(true == true)
    // ! Loose equality operator doesn't care about the type