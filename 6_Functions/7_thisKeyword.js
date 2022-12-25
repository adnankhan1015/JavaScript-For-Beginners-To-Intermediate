// ! The "this" keyword
// ? What is "this" keyword?
// * This references the "object" that is executing the current function.
// ? e.g If that function is part of an object we call that function a method, right?
// ! METHOD
// * So if that function is a method in an object, "this" keyword references that object itself.

// Otherwise if that function is a regular function, which means its part of an object, "this" keyword means the global object object.
// ! Which is the window object in browser and global in NODE!

// * 1 => method => object
// * 2 => function => global in node and window in browser

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.play();

// * So in this example, because play is a method in the video object, so "this" keyword references this(video object) object itself

// Now we can add a method later in this object and we will get the same result.
// video.stop = function () {
//   console.log(this);
// };

// * Now see video object on the console
// video.stop();
// * Again stop is a method in the video object, so "this" keyword references this video object.

// ! This is the example of the first rule. 1 => method => object

// ! Second Rule
// * 2 => A regular function => global in node and window in browser
// * Regular Function
function playVideo() {
  console.log(this);
}

playVideo();
// If we log this on the console we are going to see the global object which is "window" in browser and "global" in NODE

// ? Now, What if this is a constructor function?
// * We call the constructor function using the new operator. So lets rename playVideo to Vide

function Video(title) {
  this.title = title;
  console.log(this);
}
Video();

// * Now we can use this constructor function to to create a new object. So we use the new operator.

const v = new Video("a");

// ? So, What do we get on the console?
// * Instead of a window object, we get a new object.
// ! NOW NOTE THAT, this object is not this video object on top its separate
// So instead of a window object we get the video object.
// Because earlier in the course, we discussed that when use the new operator this "new" operator creates a new empty object.

// {} like this and sets "this" keyword in this constructor function
// To point to this empty object
// So here on this line, this.title = title;
// We add the title property to this new object.

// ! Definition
// * When dealing with a regular function, "this" keyword by default references the global object. BUT if you call a function using the "new" operator, which is the case for constructor functions.
// ! "this" keyword will reference a new {} empty object

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this, tag);
//     });
//   },
// };

// In the showTags() method, use "this" keyword to get the current object
// and then we get the tags property because this is an array.
// We can call the forEach method and here we need to pass a callback function.
// In each iteration this function will be called will get a tag and then we can display the tag on the console.

// video.showTags();

// ? But what if we want to display the title of the video next to each tag?
// console.log(this.title, tag); with this we get the undefined with every tag.
// console.log(this, tag); we get the window object.
// ? It's referencing the window object but aren't we inside a video object?
// ? Shouldn't "this" reference the video object?
// * No, because here we are inside this callback function. This function is just a regular function. Its not a method in the video object.
// The only method we have here is the showTags.

// ! So its the global/Window object that is executing this anonymous callback function.
// ? but How can we solve the problem and display the title of the video next to each other?

// Well, we have a few different solutions for this in this particular case.
// The forEach method has 2 parameters
// i. The first parameter is our callback function
// ii. The second parameter is thisArg.
// So, we can pass an object here and "this" keyword will reference to that object.
//  { firstName: "John" } We pass this is an second argument to the forEach method. and this will reference to this object.

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this, tag);
//     },  { firstName: "John" });
//   },
// };

// video.showTags();

// ! But we want our video object. so we can pass "this" keyword here
// We are in the showTags method so "this" keyword will reference to the current object.
// So here we aren't inside of a callback function. We are still in the execution context of the showTags method

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this, tag);
//     }, this);
//   },
// };

// video.showTags();

// ! Next to each tag we can see our video object with "this" title property.
// So we can add the title property here and with "this"
// We can see the title if the video object next to each tag.

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();

// ! BUT, not all methods in JavaScript give you the ability to pass the "this" argument.

// * So we have a few different solutions for that.
