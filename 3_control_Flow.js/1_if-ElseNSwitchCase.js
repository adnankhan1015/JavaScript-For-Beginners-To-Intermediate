// ! Control Flow

// * Expressions and Operators
// * We are going to use these Expressions and Operators along with conditional statements to implement interactivity in our application.
// ! In JS we have two types of conditional statements
// * 1. if...else
// * 2. switch & case


// if(condition){
//     statement;
// } 
// else if (condition) {
//     statement
// } else {
//     statement
// }

let hour = 19;

if(hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

// * Switch 

let role = 'admin';
// * role can be any role e.g guest, admin, moderator


switch(role) {
    case 'guest':
        console.log('Guest User')
        break;
    case 'admin':
        console.log('admin User')
        break;
    case 'moderator':
        console.log('moderator User')
        break;
    default: 
        console.log('Unknown Role')
    
}