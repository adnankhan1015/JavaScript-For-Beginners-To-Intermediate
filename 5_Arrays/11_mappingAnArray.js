// ! Mapping An Array

// Very useful and powerful method in JavaScript is the map method.
// With this method, we can map each item in the array to something else.
// We have an array of positive number lets say we want to construct some HTML markup using the elements of in this array.
// So we call filtered.map and once again we need to pass a callback function.

const numbers = [1, -1, 2, 3, -3];

const filtered = numbers.filter((value) => value >= 0);

const items = filtered.map((n) => "<li>" + n + "</li>");
console.log(items);

// You can see each number is now mapped to a string, that that is our list of items
// So now we have an array of strings we can use the join method that you learned earlier to join the elements of this array and create a string.
// The only bit that is remaining is the <ul> element.
const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

// ! Map Method Definition
// * We can use the map method to map each element in an array into something else.

// ! An Example.
// You have mapping these numbers to strings, but you can also map them to objects. Instead of mapping a number to a string. Lets say you want to map them to an object.

// (n =>  {value: n} in this case it will return undefined.
// Reason by default these curly brackets in an arrow function represent a code block.
// So when a JavaScript Engine tries to parse this arrow function, it thinks here we are defining a code block as opposed to an object return.
// So if you've returning an object you need to put hat object in parenthesis.

const createObject = filtered.map((n) => ({ value: n }));

console.log("Object => ", createObject);

// ! Both the filter and the map method return a new array.
// ! They do not modify the original array.
// * These methods are chainable. which means we ca n call them after one another in a chain.

// We read the value property and return it in a new array.

const chainableMethod = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(chainableMethod);

const dress = ["Tee 1", "Tee 2", "Tee 3", "Shirt 1", "Shirt 2", "Shirt 3"];

const tShirts = dress.filter((item) => item.includes("Tee"));
// console.log(tShirts)

const tShirtsItems = tShirts.map((item) => "<li>" + item + "</li>");
// console.log(tShirtsItems)
