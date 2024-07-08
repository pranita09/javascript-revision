// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// Callbacks are an essential part of asynchronous programming in JavaScript, where they allow you to handle tasks like I/O operations, timers, and events without blocking the main execution thread.

// Synchronous Callbacks
// In synchronous programming, callbacks are executed immediately and block the execution of the program until they complete.
// Array methods like forEach, map, filter, and reduce use callbacks to process each element of the array.

// Asynchronous Callbacks
// In asynchronous programming, callbacks are executed after an operation has been completed, allowing other code to run while waiting for the callback to be executed.
// Examples

// 1. SetTimeout
console.log("Before timeout");
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);
console.log("After timeout");

// 2. Event Handling - Event listeners use callbacks to handle events like clicks, keypresses, and mouse movements.
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});

// 3. Handling Multiple Asynchronous Operations
// Callbacks can be nested to handle multiple asynchronous operations, but this can lead to "callback hell" or "pyramid of doom," which makes the code hard to read and maintain.
function firstTask(callback) {
  setTimeout(function () {
    console.log("First task complete");
    callback();
  }, 1000);
}

function secondTask(callback) {
  setTimeout(function () {
    console.log("Second task complete");
    callback();
  }, 1000);
}

function thirdTask(callback) {
  setTimeout(function () {
    console.log("Third task complete");
    callback();
  }, 1000);
}

firstTask(function () {
  secondTask(function () {
    thirdTask(function () {
      console.log("All tasks complete");
    });
  });
});

// Avoiding Callback Hell

// 1. Using Promises
function firstTask() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("First task complete");
      resolve();
    }, 1000);
  });
}

function secondTask() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Second task complete");
      resolve();
    }, 1000);
  });
}

function thirdTask() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Third task complete");
      resolve();
    }, 1000);
  });
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(function () {
    console.log("All tasks complete");
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

// 2. Using async/await
async function runTasks() {
  try {
    await firstTask();
    await secondTask();
    await thirdTask();
    console.log("All tasks complete");
  } catch (error) {
    console.error("Error:", error);
  }
}

runTasks();
