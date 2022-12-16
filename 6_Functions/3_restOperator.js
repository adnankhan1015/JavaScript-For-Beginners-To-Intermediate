//! The Rest Operator
// IN Modern JavaScript, if you want to have a function with varying numbers of parameters, you can use the rest operator.

function sum(discount, ...price) {
  const total = price.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// When we apply the rest operator to a parameter of a function we can pass a varying number of arguments and the rest operator will take all of them and put them into an array

// ! Now if I want to get the sum of all the numbers in an array we can use the reduce method

// ! Now we want to calculate the sum of all the values in a shopping cart,

// ! Default parameters
// That we want to supply default values to the parameters of a function

// ! Calculate Interest Rate
// * Formula => Principal times(*) rate divided by 100 times(*) Years
function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, undefined, 5));
