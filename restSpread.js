// Spread (`...`)
// E.g. Updating state in react

// 1. Spreading in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 2. Spreading in objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { country: "USA", occupation: "Engineer" };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { name: 'Alice', age: 25, country: 'USA', occupation: 'Engineer' }

// 3. Spreading in function calls
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // 6

// Rest (`...`)
// The rest operator allows you to collect multiple elements and condense them into a single array or object.
// It is used in function parameters and destructuring assignments.

// 1. Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 2. Rest in desctructuring arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// 3. Rest in destructuring objects
const { name, age, ...restt } = {
  name: "Alice",
  age: 25,
  country: "USA",
  occupation: "Engineer",
};
console.log(name); // 'Alice'
console.log(age); // 25
console.log(rest); // { country: 'USA', occupation: 'Engineer' }
