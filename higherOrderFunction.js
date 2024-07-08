// A higher-order function is a function that either takes one or more functions as arguments or returns a function as a result.
// Higher-order functions allow for powerful abstractions and can lead to more concise and expressive code.
// They are a fundamental aspect of functional programming and are widely used in JavaScript.

// Examples

// 1. Functions as arguments

// Array methods like map, filter, reduce
// Example using map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example using filter
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Example using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// 2. Function as return values
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 3. Currying
// Currying is a process of transforming a function with multiple arguments into a sequence of functions, each with a single argument.
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = curryAdd(5);
console.log(add5(10)); // 15
console.log(curryAdd(3)(4)); // 7

// Practical Examples

// 1. Event Handling in JavaScript
// Higher-order functions are commonly used in event handling, where an event handler function is passed as an argument to an event listener.
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// 2. Async programming with promises
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// 3. Functional utilities
// used to create utility functions that enhance or transform other functions.

// 4. Debounce
const debounce = (fn, delay, ...args) => {
  let timer;
  return function () {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const getData = (args) => {
  console.log("api call", args);
};
const debounceAPICall = debounce(getData, 500, "arguments");
window.addEventListener("scroll", debounceAPICall); // for scroll event
window.addEventListener("click", debounceAPICall); // for button click

// 5. Throttle
const throttle = (fn, delay, ...args) => {
  let flag = true;
  return function () {
    const context = this;
    fn.apply(context, args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, delay);
  };
};
const expensiveFunction = (args) => {
  console.log("Expensive function called", args);
};
const betterExpensiveFunction = throttle(expensiveFunction, 500, "args");
window.addEventListener("resize", betterExpensiveFunction); // resizing window event
