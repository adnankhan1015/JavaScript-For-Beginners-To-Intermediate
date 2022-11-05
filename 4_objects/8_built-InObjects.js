// ! Built-in object is the string object

// const message = 'hi'
// message.
// when we use the dot notation on the string variable that we have declared with named message. We can have a bunch of properties and methods
// But we have learned that string is a primitive type
// And primitive types don't have properties and methods
// Only object have properties and methods
// ? Wh is that we see these properties and methods in this string?

// The reason for this is because in JavaScript we have two kinds of strings
// This is what we call a string primitive but we also have a string object

// * String Primitive
const message = 'This is my first string'
// in console typeof message => (string primitive)
//*  But we also have a string object
//  So we have this constructor object string and we can use that to create a new string object
String('hi')
// We can pass a new string here
// Now because this is a constructor function
// We need toa apply the new operator
const another = new String('hi')
// in console typeof another => (object);

// However, we use the dot notation with a string primitive.
// e.g message is primitive type string when we hit the dot notation
// const message = new String('hi')
// JavaScript engine internally wraps this with a string object so we don't see that, but we can work with this like a string object.
