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

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play();

// * So in this example, because play is a method in the video object, so "this" keyword references this(video object) object itself

// Now we can add a method later in this object and we will get the same result.
video.stop = function () {
  console.log(this);
};

// * Now see video object on the console
video.stop();
// * Again stop is a method in the video object, so "this" keyword references this video object.

// ! This is the example of the first rule. 1 => method => object

// ! Second Rule
// * 2 => A regular function => global in node and window in browser

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
