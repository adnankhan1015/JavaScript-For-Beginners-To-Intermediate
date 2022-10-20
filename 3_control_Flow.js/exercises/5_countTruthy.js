// ! Count Truthy
// * Create a function called countTruthy which takes an array and returns the number of truthy elements in this array

// * First Step:
// To count the number of truthy value first we declare a variable called count and initialize it to 0;
// * Second Step
// Now we need to use a for..of loop to iterate this array and for each element we need to check to see if that element is truthy or not
// ! If that element is truthy we are going to increment count

// * Third Step
// ! Note that I am not comparing this value with all those falsy values 
// e.g (value !== undefined || value !== null || value !== false)
// Simply pass this value in if condition
//  Now that value might be a boolean or a non-boolean
// If its not a boolean the JS Engine tries to interpret it as truthy or falsy Value
// ! So if result is truthy then the count will be incremented

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
            count++
    }
    return count
}

const array = [0, null, undefined, '', 1, 8, 3, 'john']
console.log(countTruthy(array))