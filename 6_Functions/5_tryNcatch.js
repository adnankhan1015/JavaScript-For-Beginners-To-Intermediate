// ! Try and Catch

// const person = {
//   firstName: "John",
//   lastName: "Smith",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     // Want to make sure that this value is a string
//     if (typeof value !== "string") return;
//     const parts = value.split(" ");
//     console.log(parts);
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = null;
// console.log(person.fullName);

// In last lecture, we assume that the value that we receive here is a valid string.
// e.g set fullName(value)
// But what would be happen if we pass a boolean here.
// person.fullName = true
// ! Error: Uncaught TypeError: value.split is not a function

// So here we need to add error handling
//* Typically we should do error handling at the beginning of a function or method this is what we call "Defensive Programming"
// So we want to make sure that the values coming in are valid, so we can execute our logic.

// with this line we can no longer see the error. if (typeof value !== "string") return;
// but sometimes we want to report an error in our application,
// * That is where we need to throw an exception
// Throwing an exception is a technical jargon you might hear.

// So instead of returning from this method use the "throw" keyword and then create a new error object

// const person = {
//   firstName: "John",
//   lastName: "Smith",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     // Want to make sure that this value is a string
//     if (typeof value !== "string") {
//       const e = new Error("Value is not a string");
//       throw e;
//     }
//     const parts = value.split(" ");
//     console.log(parts);
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

//  throw new Error() => Error is a constructor function because here we have the pascal case.
// and we are calling this function with the new keyword/operator to create a new error object
// as  an argument we can pass an error message to the constructor.

// ! Error vs Exception
// There is a slightly difference between the two.
// * Error, we can create a new error object. This is just plain JavaScript object. There is nothing special about it
// * But the moment you through this error we refer to that as an exception.

// throw e; => So this is an exceptional situation that should not have happened.
// * Now in this method we have some basic error handling so this method is throwing an exception now somewhere else we need to catch that exception
// We need to catch that and quite often when we catch an exception we display an error to the user so this is How we can accomplish this

// Here we receive this exception
// So we need to wrap this line in a try catch.
// try {
//   person.fullName = "";
// } catch (err) {
//   alert(err);
// }
// console.log(person.fullName);

// TRY => may have one or more statements
// One of these statements at least can throw an exception
//! Now we add the catch block after. catch() inside the parentheses we give an identifier this is the error object that we are throwing an here. throw new Error("Value is not a string");

// * so ib the catch block we can get that error object and do something with it.
// Here er can display it on a console, but as you know this is only visible to developers
// So the end user will not see this error. so
// Temporarily we can use an alert function.

// * I am passing an empty string person.fullName = "";
// ! we don't get any errors but first name is an empty string and lsat name is undefined
// e.g {firstName: "", lastName: undefined}
// ! Again this is not desirable. So ideally we want to make sure that out user is typing a first name and last name.
// So when splitting that string,
// e.g const parts = value.split(" ");

const person = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    // Want to make sure that this value is a string
    if (typeof value !== "string") {
      const e = new Error("Value is not a string");
      throw e;
    }
    const parts = value.split(" ");
    // That means something is missing so here we can throw another exception
    if (parts.length !== 2) {
      const e = new Error("Enter First Name and Last Name");
      throw e;
    }
    console.log(parts);
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (err) {
  alert(err);
}
console.log(person.fullName);

// * So basically when we throw an exception the lines after the throw statement are not executed. Will jump out of this method and the control will move to the catch block.
