// ? Write a function that takes 2 parameters width and height of an image and return true if the image is landscape(which means width is greater than the height). Otherwise it return false?

function isLandScape(width, height) {
    // * We do not explicitly write true or false
    // return (width > height) ? true : false;
    // * It is an ugly approach
    return (width > height);
}

console.log(isLandScape(4,2))