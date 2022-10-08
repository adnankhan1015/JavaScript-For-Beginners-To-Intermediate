// ! While loop

let i = 0
while(i <= 5) { 
    console.log(i) 
    i++;
}

// ! do while
let j = 0;
do {
    if(j % 2 !== 0) {
        console.log(j)
    }
    j++;
} while(j <= 5);

// ! While Loop vs Do..While Loop
// * do...while
// Always executed at least once
// Even if the condition evaluates to false, cause we check the condition after the code block

// * while Loop
// In while loop condition is executed ahead of time, at the beginning of every iteration
