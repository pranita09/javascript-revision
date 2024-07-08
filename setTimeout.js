// setTimeout is a JavaScript function that allows you to execute a function or piece of code after a specified delay (in milliseconds).
// It's a key feature for managing asynchronous operations, delaying the execution of code, or scheduling tasks to run at a later time.

// Syntax
// let timeoutID = setTimeout(function, delay, [arg1, arg2, ...]);
// arg1, arg2, ...: Optional additional arguments to pass to the function when it's executed.
// timeoutID: A numeric ID which can be used to reference the timeout and possibly clear it later with clearTimeout.

// Examples

setTimeout(function () {
  console.log("Hello, World!");
}, 2000);

setTimeout(() => {
  console.log("Hello, World with Arrow Function!");
}, 2000);

// Passing arguments to callback function
function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 2000, "Alice");

// Clearing timeout - If you need to cancel a scheduled timeout, you can use clearTimeout with the timeout ID returned by setTimeout
let timeoutID = setTimeout(function () {
  console.log("This will not be logged");
}, 2000);
clearTimeout(timeoutID);

// With multiple timeouts
setTimeout(() => {
  console.log("First message after 1 second");
}, 1000);

setTimeout(() => {
  console.log("Second message after 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("Third message after 3 seconds");
}, 3000);

// Practical Examples

// 1. Delaying Executation
function fetchData() {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched!");
  }, 3000);
}

fetchData();

// 2. Debounce
// 3. Throttle
