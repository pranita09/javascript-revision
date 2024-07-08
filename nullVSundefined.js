// In JavaScript, null and undefined are two distinct types that both represent the absence of a value but are used in different contexts and have different meanings.

// null
// null is an assignment value that can be explicitly set to indicate "no value" or "empty value".
// It is an object, and it's used when you want to explicitly indicate that a variable should have no value.

let value1 = null;
console.log(value1); // null

let person1 = {
  name: "Alice",
  age: null, // Explicitly indicating that age is not known
};
console.log(person1.age); // null

function findUser(id) {
  // Assume users is an array of user objects
  let user = users.find((user) => user.id === id);
  return user !== undefined ? user : null; // Explicitly return null if user not found
}

// undefined
// undefined is a type with a single value, undefined. It means that a variable has been declared but has not yet been assigned a value.
// It is the default value for uninitialized variables, missing function parameters, or non-existent object properties.

let value2;
console.log(value2); // undefined

function greet(name) {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, undefined (because name is not provided)

let person2 = {
  name: "Bob",
};
console.log(person2.age); // undefined (age property does not exist)

let array = [1, 2, 3];
console.log(array[5]); // undefined (index 5 does not exist in the array)

// Key Difference
console.log(null == undefined); // true
console.log(null === undefined); // false

// Practical Examples

// 1. Handling missing values
function greet(name = null) {
  if (name === null) {
    console.log("Hello, Guest!");
  } else {
    console.log(`Hello, ${name}!`);
  }
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

// 2. Checking object properties
let car = {
  make: "Toyota",
  model: "Camry",
};
if (car.year === undefined) {
  console.log("Year is not specified."); // This will run
}
if (car.year === null) {
  console.log("Year is explicitly set to null."); // This won't run
}
