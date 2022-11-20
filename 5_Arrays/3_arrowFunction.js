// ! Arrow Function
// In ES6 there is a cleaner way to write the same code using the arrow function
// So whenever you want to pass a function as a callback function or as an argument for a different method. You can use the arrow function syntax.
// 

function get (){
    console.log('get')
}

get()

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]
console.log('Course Array',courses.includes({id: 1, name: 'a'}));


// const course = courses.find(function(course) {
//     return course.name === 'a'
// })

// const course = courses.find((course) => {
//     return course.name === 'a'
// })

const course = courses.find(course => course.name === 'a')
console.log(course)

let a = 32
console.log(a)


const sum = () => {
    return 2 + 2;
}

console.log(sum());

// ? Create an arrow function for printing a table?
// ? Create an arrow function for printing even and odd numbers?
// ? Create an arrow function for display key value pairs of an object?

const person = {
    name: 'John',
    age: 32,
    education: 'Masters'
}

function printObject(obj) { 
}

printObject(person)
