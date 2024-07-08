// The ternary operator in JavaScript is a shorthand way of writing an if-else statement.

// Syntax
// condition ? expression1 : expression2;

// Examples
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."

let num = 10;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result); // Output: "Positive"

let isMember = true;
let discount = isMember ? 0.1 : 0.05;
console.log(discount); // Output: 0.1

let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Please log in."
