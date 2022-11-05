const circle = {
    radius: 1,
    draw() {
        console.log('Draw')
    },
    isVisible: true
};

for(let key in circle) {
    console.log(key, circle[key])
}

// for(let key of circle) {
//      console.log(key)
// }
// ! Error ! Circle is not iterable
// For...of loop can only be used with iterables such as arrays and maps
// ! Note ! An object is not iterable so we cannot iterate it using for..of loop 
// However, we have this method called Object.keys(circle)

for(let key of Object.keys(circle)) {
    console.log(key)
}

// WIth this we can get all the keys in our circle object and this will return an array
// and since arrays are iterable we can use for...of loop to iterate them.

// ! Object
// Earlier we learned that this "Object" is a built-in constructor function

//* So somewhere we have this constructor function like this
//* function Object() {}
// And whenever we create an object using the object literal syntax. Internally that is translated into a call to this constructor function

// e.g const x = {value: 10};
// Internally that is translated to a call to this object constructor function => function Object(){}

const x = {value: 10}
// const x = new Object()
// * Object.keys()
// This method returns a string array which contains all the properties amd methods in this object

// Similarly we have another method called Object.entries

// * So instead of returning keys as a string array, it returns each key value pair as an array.
for(let entry of Object.entries(circle)) {
    console.log(entry)
}

// Sometimes we wanna see if the given object has a given property or method
// * Todo that we can use the "in operator"

if('radius' in circle) {
    console.log('Yes')
}

// * The simplest way to enumerate the properties in an object is using the 
// 1. for..in loop,
// 2. Object.keys(),
// 3. Object.entries()
