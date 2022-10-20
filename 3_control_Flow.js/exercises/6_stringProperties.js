// ! String Properties
// Create a function called showProperties. we pass an object here and this function will should display all the properties of this object that are of type string

const move = {
    title: 'a',
    releaseYear: 2021,
    rating: 4.3,
    director: 'c'
};


// * First Step
// Here we use the for in loop to iterate over the properties of this object 
// So in each iteration key variable in the loop will hold the name of these properties and show in console.

// function showProperties(obj) {
//     for (let key in obj) {
//         console.log(key)
//     }
// }

// showProperties(move)

// ! Now we need to get the value of each of these properties and then check the typeOf that value
// If the type is string we will display the property and its value.
// So to get the value of this property we use the bracket notation obj[key]
// ! obj[key] to check the type of this value use the typeof operator, and then we put it in if.. statement

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
    }
}

showProperties(move)