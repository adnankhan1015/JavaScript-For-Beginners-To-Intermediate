
// Reference Types Category
// 1. Objects
// 2. Array
// 3. Function

//? What is an object?
    // An object in JS and other programming languages is like and object in real life.
    // i.e Think of a person
        // A person has name, age, address and so so
        // These are the properties of a person

let name = 'John'
let age = 22
let address = 'ISB'

let person = {
    name: 'John',
    age: 22,
    address: 'ISB'
};

console.log(person)

// There are 2 ways to work with these properties
// 1. dot notation
person.age = 44;
console.log(person.age)

// 2. Bracket Notation
    // Sometimes we don't know the name of the target property until the run time.
    person['name'] = 'Zohaib'
    console.log(person)