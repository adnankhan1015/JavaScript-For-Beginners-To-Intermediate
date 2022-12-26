// ! You learned that "this" references the object that is executing the current function.
// * A few different solutions, to change the value of "this" in a function. so lets imagine our forEach method doesn't have the second argument.

// ? How can we change the value of "this"?
// * Well here is one simple solution. before we call the forEach method we can define a constant, call itself and setting it to "this" keyword some people also call "this" keyword that. e.g const self = this; or const that = this;

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function (tag) {
//       console.log(self.title, tag);
//     });
//   },
// };

// video.showTags();

// ! NOTE: This is not the preferred approach but its something that you see in a lot of JavaScript applications.
// * Don't use this approach.
// Now let's take a look at another approach.
// * We learned functions are objects in JavaScript.

function playVideo(a, b) {
  console.log(this);
}

// ! Functions are objects in JavaScript.
// * So, this function is technically an object. So it has properties and methods that we can access using the dot notation.

// Here we have 3 methods.
// 1. apply method
// 2. bind method
// 3. call method
// and with these we can change the value if "this" keyword or this function

// * Simplest is the call method.
// The first parameter of this method is thisArg:any => So here we can pass an object and "this" keyword will reference this object
// e.g => I can pass a new object with the name property and set it to "John"

playVideo.call({ name: "John" });

// In console we get { name: "John" }
// In contrast, if we all this function using the standard function call syntax. "this" keyword will reference the window object. So this is the benefit of using the call method.
playVideo();

// ! apply method
// We get the same result. So what we pass { name: "Smith" }); is the first argument here we will be used as the value if "this" keyword.
// * The difference is between the call and apply method is only about passing arguments
// ! So if this function has multiple parameters lets say a,b.

// We can supply multiple arguments here, 1,2.
// * BUT, with the apply method we have to pass them as an array. THATS the only difference.
playVideo.apply({ name: "Smith" }, [1, 2]);

// ! Bind method
// * But this "bind" method doesn't call our playVideo function. WHY?
// * It returns a new function and sets "this" keyword to point to this object permanently. So, no matter how we call that function, "this" keyword will always always point to this object that we pass here. playVideo.bind({ name: "BABAR" }); this returns the new function we can store the result in a constant.

// const fn = playVideo.bind({ name: "BABAR" });

// Now call this function => fn just like a regular function. e.g
// We get this new object here
// fn();

// * In this particular case we don't need the separate constant. We can delete this line 65, and immediately call the function that is returned from bind method.

playVideo.bind({ name: "BABAR" })();

// With "call", "apply" and "bind" methods we set the "this" argument for a given function.

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(
//       function (tag) {
//         console.log(this.title, tag);
//       }.bind(this)
//     );
//   },
// };

// video.showTags();

// const self = this; So here we are passing this callback function and in this function we are going to use "this" keyword. so we no longer need self constant.

// ! However, as you know by default here "this" will references the global object console.log(this.title, tag);

// But we want to change "this" keyword. So here we have a function we can call the "bind" method

// function (tag) {
//     console.log(this.title, tag);
//   }.bind(this)

// * Then pass an object to be used as the value of "this".
// ? What should we pass here?
// * "this" keyword
// Because as I told you before at this point we are in the showTags method. So "this" keyword references our video object.

// ! Using the bind method is the second solution to solve this problem!
// * Because, there is a new and better solution.
// * Starting from with ES6, we have arrow function. The good thing about arrow functions is that they inherit the "this" keyword value.

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTags();

// console.log(this.title, tag); get the same result.
