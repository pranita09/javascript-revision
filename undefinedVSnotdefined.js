// In JavaScript, undefined and "not defined" are terms that refer to different concepts related to variable declarations and their values.
// not defined is used to avoid referenceError

// undefined
// undefined is a value assigned to variables that have been declared but not yet assigned a value.
// It is also the default return value of functions that do not explicitly return anything.
let x;
console.log(x); // undefined

function greet(name) {
  console.log(name);
}
greet(); // undefined (because no argument was passed)

let obj = { a: 1 };
console.log(obj.b); // undefined (property 'b' does not exist)

let arr = [1, 2, 3];
console.log(arr[5]); // undefined (index 5 does not exist)

function doNothing() {}
console.log(doNothing()); // undefined (no return value)

// not defined
// "Not defined" refers to a variable that has not been declared at all.
// Trying to access such a variable results in a ReferenceError.
console.log(y); // ReferenceError: y is not defined

function test() {
  console.log(z); // ReferenceError: z is not defined
}
test();

function example() {
  let a = 10;
}
console.log(a); // ReferenceError: a is not defined (because 'a' is scoped to the function)

// Practical Examples

// 1. Checking if a variable is declared
if (typeof x === "undefined") {
  console.log("x is not defined");
}

// Using `undefined` in a function
function greet(name) {
  if (name === undefined) {
    console.log("Hello, Guest!");
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

// 3. Avoiding ReferenceError - Using `typeof` is a common way to check if a variable is "not defined" without causing a `ReferenceError`.
if (typeof nonExistentVariable === "undefined") {
  console.log("This variable is not defined");
}
