// Array Destructuring

// 1. Basic example
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 2. Skipping element
const [x, , z] = [1, 2, 3];
console.log(x); // 1
console.log(z); // 3

// 3. Using rest operator
const [j, ...rest] = [1, 2, 3, 4];
console.log(j); // 1
console.log(rest); // [2, 3, 4]

// Object Destructuring

// 1. Basic example
const { name, age } = { name: "John", age: 25 };
console.log(name); // John
console.log(age); // 25

// 2. Renaming variables
const { name: userName, age: userAge } = { name: "John", age: 25 };
console.log(userName); // John
console.log(userAge); // 25

// 3. Default values
const { name3, age3, country = "Unknown" } = { name: "Alice", age: 25 };
console.log(country); // Unknown

// 4. Nested object destructuring
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};
const {
  address: { street, city },
} = user;
console.log(street); // 123 Main St
console.log(city); // Anytown

// 5. Using rest operator
const { name5, ...resttt } = { name: "John", age: 25, country: "USA" };
console.log(resttt); // { age: 25, country: 'USA' }

// Combined Array and Object destructuring
const user1 = {
  name: "Alice",
  friends: [{ name: "Bob" }, { name: "Charlie" }],
};

const {
  namee,
  friends: [{ name: friend1 }, { name: friend2 }],
} = user1;
console.log(namee); // Alice
console.log(friend1); // Bob
console.log(friend2); // Charlie
