// The data stored in localStorage is persistent, meaning it doesn't expire and remains even after the browser is closed and reopened.

localStorage.setItem("key", "value");

const value = localStorage.getItem("key");
console.log(value); // Outputs: 'value'

localStorage.removeItem("key");

localStorage.clear(); // Clearing all data

// Storing an object
const userObj = { name: "John Doe", age: 30 };

localStorage.setItem("user", JSON.stringify(userObj));

const user = JSON.parse(localStorage.getItem("user"));
console.log(user); // Outputs: { name: 'John Doe', age: 30 }
