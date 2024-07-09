// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

const adventurer = {
  name: "Joseph",
  cat: {
    name: "Diana",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName); // Output: undefined

console.log(adventurer.someNonExistentMethod?.()); // Output: undefined

// Practical examples
// 1. Accessing properties that are not defined. Instead of giving error it returns undefined
// 2. Deeply nested properties
// 3. Function calls
