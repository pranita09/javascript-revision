// A] Arrow functions VS Normal functions
// Normal functions are hoisted, but arrow functions or function expressions are not hoisted.
// Arrow functions do not have their own this, super, arguments and are always anonymous.

function square(num) {
  return num * num;
}
console.log(square(5));

const square = (num) => num * num;
console.log(square(5));

// Practical examples of arrow functions
// 1. Array methods like map, filter, reduce, etc.
// 2. Event Handlers
// 3. Short function expressions
// 4. Lexical this - Arrow functions do not have their own this context, which makes them ideal for
// situations where you want to use the this value from the enclosing scope.

// B] Return type of a function
// Any function can return two types of values: 1. Primitive values 2. Object types
// 1. Primitive values: string, number, boolean, undefined, null, etc.
// 2. Oject types: array, object, function

// C] How to call a function
// Call a function with: func(args...) syntax.

// D] Function parameters
// A list of parameters to the function, enclosed in parentheses and separated by commas.

// E] Default parameters of a function
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function multiply(a, b = 5) {
  return a * b;
}
console.log(multiply(2, 7)); // 14
console.log(multiply(7)); // 35

// In the past, the general strategy for setting defaults was to test parameter values in the function body and assign a value if they are undefined. In the following example, b is set to 1 if multiply is called with only one argument

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}
multiply(5, 2); // 10
multiply(5); // 5

// Practical examples of default parameters
// 1.Fetching data from an API with it's limit value.
// 2.Sending emails with dfault parameters of subject and sender

// F] Named functions VS Anonymous functions
// As the name suggests, “anonymous function” refers to a function that does not have a name or a title.
// In JavaScript, an anonymous function is something that is declared without an identification.
// It’s the distinction between a regular and an anonymous function.
// An anonymous function cannot be accessed after it is created; it can only be retrieved by a variable in which it is stored as a function value.
// There can be several arguments to an anonymous function, but only one expression.

function test(args) {
  console.log("This is named function", args);
}

var test = function (args) {
  console.log("This is anonymous function", args);
};

setTimeout(function () {
  console.log("This is anonymous function");
}, 1000);

// Practical example of anonymous function
// 1. Event handlers
// 2. Array methods like map, filter, reduce

// Practocal example of named function
// 1. Recursion - named functions are essential for recursive calls.
// 2. Utility functions - named functions are used to define utility functions that can be called multiple times.

// Anonymous functions: Useful for callbacks, event handlers, and IIFEs.
// Named functions: Essential for readability, recursion, and reuse.

// G] IIFE - Immediately Invoked Function Expression
// IIFE is a function that runs as soon as it is defined.

(function () {
  console.log("This is IIFE");
})();

(() => {
  console.log("This is IIFE");
})();

(async () => {
  console.log("This is IIFE");
})();

// Practical example of IIFE
// 1. Avoiding global variables -  to encapsulate code and avoid polluting the global namespace.
// 2. Executing codein a specific context -
(function (context) {
  context.message = "Hello, Context!";
  console.log(context.message);
})(window);
// Accessing the context object outside the IIFE
console.log(window.message); // Output: Hello, Context!
// 3. Helps in creating local scope
