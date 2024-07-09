let arr = [1, 2, 3, 4, 5];

// 1. Using pop method
let removedElement1 = arr.pop();
console.log(arr); // [1, 2, 3]
console.log(removedElement1); // 4

// 2. Using shift Method
let removedElement2 = arr.shift();
console.log(arr); // [2, 3, 4]
console.log(removedElement2); // 1

// 3. Using splice Method
arr.splice(2, 1); // Removes 1 element starting from index 2
console.log(arr); // [1, 2, 4]

// 4. Using slice and Spread Operator (...)
let newArr1 = arr.slice(0, 2); // Creates a new array with elements from index 0 to 1
console.log(newArr1); // [1, 2]

// 5. Using filter Method
let newArr = arr.filter((num) => num !== 3); // Removes element equal to 3
console.log(newArr); // [1, 2, 4]

// 6. Using delete Operator
delete arr[2];
console.log(arr); // [1, 2, empty, 4]
