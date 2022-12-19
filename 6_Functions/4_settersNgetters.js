// ! Setters and Getters

const person = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    console.log(parts);
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Babar Azam";
console.log(person.fullName);

const pet = {
  firstName: "dog",
  lastName: "Shepherd",
  fullPetName() {
    return `${pet.firstName} ${pet.lastName}`;
  },
};
console.log(pet.fullPetName());

// ! Problem Statement
// * However, the problem with this approach is that may be there are multiple place in our application where we want to display someone's full name.
// With the current implementation we will have to repeat this template literal syntax in multiple places.

// A better approach is to define a method in this object. call in fullName and move this expression over there

// ! Problem Statement
// * However, there are a couple of problems with this approach
// ! The first problem is that this is read only. In other words, we cannot set a person's full name from outside.
// e.g person.fullName = 'Ben Stokes'
// * and then the first and last name property will be automatically set based on that we passed here 'Ben Stokes'
// ! The other issue is that I don't like to call this like a method. It would be nice if we could treat this as a property. so we could drop the parenthesis (). e.g console.log(person.fullName)

// ? How do we do this?
// * That's where the setters and getters come in

// ! getter => Used to access properties in an object/class.
// ! setter => To change or (Mutate) them.

// * So in this object we should add a getter and with that getter we can read this person's full name, like a property and with a setter we can set it from the outside.

// We prefix this method with get keyword and now this method is a getter.
//e.g => get fillName() {
//     return `${person.firstName} ${person.lastName}`;
//   },

// Now to be able to set this from outside we need to add a setter
