// ! The above examples was all about boolean values
// ! But in JavaScript we can use these LOGICAL OPERATORS with non-boolean values.

// ! false || true 
// * true
// ! false || 'John'
// * John
// ! false || 2
// * 2 

//* First thing we need to realize
    // * The result of logical expression are not necessarily a true of false
        // * That depends on the value of the appearance we have

// ? When a JavaScript engine tries to evaluate this expression e.g false || 1 > 1

// * It looks at each operand of that operand is not a boolean true or false 
    // * If will try to interpret it as
        // * What we call
        // ! TRUTHY or FALSY 
            // * So in JavaScript we have these values which we refer to as FALSY
            // * That's not a boolean false its FALSY 

// ? What are these FALSY values?
// * In JS FALSY (not a boolean false)
// * 1. Undefined
// * 2. null
// * 3. 0 (number)
// * 4. false (boolean false)
// * 5. '' (Empty String)
// * 6. NaN (Not a Number)
    // * NaN is a special value in JS and when we are dealing with a mathematical calculation that doesn't produce a valid number. 
        // * This value is return (NaN)

// ! If we use any of these values in a 'logical operator' they will be treated as falsy.
    // ! Which is kind of like boolean false but it is not exactly the same.

// ! Now anything that is not FALSY is ==> TRUTHY