// Closure is a combination of a function with it's lexical environment.
// Closure gives access to an outer function's scope from an inner function.

function outerFunc() {
  const name = "This is outer function";
  function innerFunc() {
    console.log(name);
  }
  return innerFunc;
}

const value = outerFunc();
value();

// Practical example of closure
// Change the font size of the text in the body with the help of button click.
// Assume there are three buttons each having text as 12, 14, 16. 12, 14, 16 are the font sizes
// that should be implemented to the body on the button click.

function getSize(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
    console.log("Font size is ", size);
  };
}

const size12 = getSize(12);
const size14 = getSize(14);
const size16 = getSize(16);

document.querySelector("#size12-btn").onclick = size12;
document.querySelector9("#size14-btn").onclick = size14;
document.querySelector("#size16-btn").onclick = size16;

// Counter example using Closure

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2
console.log(counter.getCount()); // 2

// Closure has 3 scopes
// 1. Global scope
// 2. Enclosing scope (can be a block or function)
// 3. Local scope

// global scope
const x = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // Enclosing scope/ outer function's scope
      return function (d) {
        // Local scope
        return x + a + b + c + d;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
