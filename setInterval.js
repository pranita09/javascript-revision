// setInterval is a JavaScript function that repeatedly calls a function or executes a code snippet with a fixed time delay between each call.
// It is commonly used for tasks that need to be repeated at regular intervals, such as updating the time on a clock or polling for updates from a server.

// Syntax
// let intervalID = setInterval(function, delay, [arg1, arg2, ...]);
// arg1, arg2, ...: Optional additional arguments to pass to the function when it is executed.
// intervalID: A numeric ID which can be used to reference the interval and clear it later with clearInterval.

// Examples
setInterval(function () {
  console.log("This message is logged every 2 seconds");
}, 2000);

setInterval(() => {
  console.log("This message is logged every 2 seconds with an arrow function");
}, 2000);

// Passing arguments to callback function
function greet(name) {
  console.log(`Hello, ${name}!`);
}
setInterval(greet, 2000, "Alice");

// Clearing an Interval
// If you need to stop a scheduled interval, you can use clearInterval with the interval ID returned by setInterval
let intervalID = setInterval(function () {
  console.log("This will be stopped after 5 seconds");
}, 1000);

setTimeout(function () {
  clearInterval(intervalID);
  console.log("Interval stopped");
}, 5000);

// Updatinga clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);

// Polling for data from server
// setInterval can be used to poll for data from a server at regular intervals
function fetchData() {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

setInterval(fetchData, 5000); // Fetch data every 5 seconds
