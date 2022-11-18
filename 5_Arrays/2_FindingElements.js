// ! Finding Elements (Primitives)
// IT really depends on if you are storing primitive or reference type in an array.

const numbers = [1,2,3,1,4]
// * indexOf() We pass the element we are looking for and if that element exists in the array. Then this method will return the index of that element in the array. 
// ! if it doesn't exist in the array it will return minus 1 (-1)
// All the methods have a 2nd argument which is optional and that is the staring index.
// e.g numbers.indexOf(1,2) 1 => searching element, 2nd argument and that is "from index" from index which the search will begin.
console.log(numbers.indexOf(1,2))
console.log(numbers.indexOf(1) !== -1)
console.log(numbers.lastIndexOf(1))
console.log(numbers.includes(1))


// ! Finding Elements (Reference Types)
// * Finding primitive is different from finding reference types
// ? Why?

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]
// course = {
//     id: 1,
//     name: 'a'
// }

console.log('Course Array',courses.includes({id: 1, name: 'a'}));
// * Find Method
const course = courses.find(function(course){
    return course.name === 'ax'
});
console.log(course)
// * findIndex method
const courseIndex = courses.findIndex(function(course){
    return course.name === 'ax'
});
console.log(courseIndex)

// ? it returns false. Why?
// * The reason for this is because these two objects. That is the object that we are passing to the "includes" method. and the object that we have in the courses array.
// ! These are two different objects.
// * They have two different references.
// * They are in two different ways memory locations in the memory.
// We learned that object are references types so when we check them for their equality the reference is are changed.
// In this case there are two different references thats why we get false

// * So, if you have an array with reference types. You need to use the "find" method.

const array1 = [5, 12, 8, 130, 44];
// Calling the "find" method
// ! Note! that an argument to this method, we have to pass a function. We call this function a predicate or callback function and we use that to determine if the given element exists in an array or not.
const found = array1.find(element =>  element > 112);
console.log(found);

// * So when we call the find method and pass this function. This function is executed once for all the first element in the array. So when false search will continue.

// * When function return true, we will get here as a result of calling the find method is the element that was matches the expression we add in the function body. e.g element =>  element > 12