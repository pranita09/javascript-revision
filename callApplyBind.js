// call
// The call method calls a function with a given this value/obj and arguments provided individually.
// Syntax
func.call(thisArg, arg1, arg2, n);

// apply
// The apply method calls a function with a given this value/obj, and arguments provided as an array (or an array-like object).
// Syntax
func.apply(thisArg, [argsArray]);

// bind
// The bind method creates a new function that, when called, has its `this` keyword set to the provided value/obj,
// with a given sequence of arguments preceding any provided when the new function is called.
// Syntax
func.bind(thisArg, arg1, arg2, n);

// Example

function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}
const person = {
  name: "Alice",
};

// call
greet.call(person, "Hello", "!"); // Output: Hello, my name is Alice!

// apply
greet.apply(person, ["Hello", "!"]); // Output: Hello, my name is Alice!

// bind
const boundGreet = greet.bind(person, "Hello");
boundGreet("!"); // Output: Hello, my name is Alice!

// Practical Examples

// 1. Using call to Borrow Methods - to borrow methods from other objects.
const person1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const person2 = {
  name: "Bob",
};
person1.greet.call(person2); // Output: Hello, my name is Bob

// 2. Using apply for Math Functions - use apply to pass arrays to functions that normally don't accept arrays.
const numbers = [1, 2, 3, 4, 5];

const max = Math.max.apply(null, numbers);
console.log(max); // Output: 5

const min = Math.min.apply(null, numbers);
console.log(min); // Output: 1

// 3. Using bind for Partial Application
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);

console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20

// 4. Using bind for Event Handlers - `this` usually refers to the element that received the event. We can use bind to set `this` to a different object.
const obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
document
  .getElementById("myButton")
  .addEventListener("click", obj.greet.bind(obj));

// Arrow functions with call, apply, bind
// 1.  Arrow functions do not have their own this context.
// Instead, they lexically inherit this from the surrounding function or scope at the time they are defined.
// This means that this is fixed and cannot be changed, regardless of how the function is called or bound.
function RegularFunction() {
  this.name = "RegularFunction";
  return {
    name: "InnerObject",
    regularMethod: function () {
      console.log(this.name); // this refers to the object calling the method
    },
    arrowMethod: () => {
      console.log(this.name); // this refers to the RegularFunction scope
    },
  };
}

const obj4 = new RegularFunction();
obj4.regularMethod(); // Output: InnerObject
obj4.arrowMethod(); // Output: RegularFunction

// 2. Arrow functions do not have their own arguments object. They inherit arguments from the parent scope as well.
// 3. Arrow functions cannot be used with the new keyword.
// They do not have a [[Construct]] method, which is necessary for creating instances.

// call & apply
// Both call and apply are used to invoke functions with a specific this context.
// Since arrow functions do not have their own this and instead inherit it lexically, attempting to use call or
// apply to change the this context of an arrow function will have no effect.
const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

const arrowFunction = () => {
  console.log(this.name);
};
arrowFunction.call(obj1); // Output: undefined
arrowFunction.apply(obj2); // Output: undefined
// In this example, call and apply do not change the this context of arrowFunction, which remains undefined.

// bind
// The bind method creates a new function with a specified this context.
// However, since arrow functions lexically bind `this`, using bind on an arrow function will not change its this value.
const obje = { name: "Alice" };
const arrowFunction1 = () => {
  console.log(this.name);
};
const boundFunction = arrowFunction1.bind(obje);
boundFunction(); // Output: undefined
