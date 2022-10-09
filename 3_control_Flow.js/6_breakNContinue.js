// Break & continue keyword
// These two keywords that can change how the loop behaves
// Apply on all kinds of loops


let i = 0;
// while(i <= 5) {
//     console.log(i)
//     i++;
// }

// Sometimes we jump out of loop for some reason that may happen at run time 
// I wan to add an if statement with a condition i === 2 we want to jump out of this loo.
// That is where we use the "Break" keyword

// while(i <= 5) {
//     if(i === 2) break;
//     console.log(i)
//     i++;
// }

// ! Continue

while(i <= 10) {
    if(i % 2 === 0){
        i++;
        continue;
    }
    console.log(i)
    i++;
}