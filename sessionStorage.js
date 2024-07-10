// The data stored in sessionStorage is only available for the duration of the page session, and it is cleared when the page is closed or reloaded.

sessionStorage.setItem("key", "value");

const value = sessionStorage.getItem("key");
console.log(value); // Outputs: 'value'

sessionStorage.removeItem("key");

sessionStorage.clear(); // Clearing all data

// Storing an object
const userObj = { name: "John Doe", age: 30 };

sessionStorage.setItem("user", JSON.stringify(userObj));

const user = JSON.parse(sessionStorage.getItem("user"));
console.log(user); // Outputs: { name: 'John Doe', age: 30 }
