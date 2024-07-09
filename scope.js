// Scope in JavaScript refers to the context in which variables and functions are accessible.
// JavaScript has several types of scope:
// 1. Global scope
// 2. Function scope
// 3. Block scope
// 4. Lexical scope

// Examples

//  Global vs. Local Scope
var name = "Global Name";

function greet() {
  var name = "Local Name";
  console.log(name); // Function scope, Output: Local Name
}

greet();
console.log(name); // Global scope, Output: Global Name

// Block Scope with let and const
function testBlockScope() {
  let y = 10;
  if (true) {
    let y = 20; // Different variable, block scoped
    console.log(y); // Output: 20
  }
  console.log(y); // Output: 10
}

testBlockScope();

// Lexical scope & closures
function outer() {
  let outerVar = "I'm from outer function";

  function inner() {
    console.log(outerVar); // Lexical scope, can access outerVar
  }

  return inner;
}

const innerFunction = outer();
innerFunction(); // Output: I'm from outer function
