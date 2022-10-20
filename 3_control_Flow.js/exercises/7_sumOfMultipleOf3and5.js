// ! Sum of multiples of 3 and 5
// * Create a function called SUM we give it a limit and this function will return the sum of 3 and 5 from 0 upto this limit.

// ? What are the multiples of 3 and 5 between 0 to 10 ?
// * Multiples of 3: 3, 6, 9
// * Multiples of 5: 5, 10
// * You need to add these numbers and the ans of these numbers will be 33.

function sum(limit) {
    let sum = 0;
    for(let i = 0; i <= limit; i++) {
        // * we want to check to see if "i" is a multiple of 3 and 5
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sum(10))

