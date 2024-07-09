let arr = [3, 1, 4, 1, 5, 9, 2, 6];

// 1. Using sort Method
arr.sort();
console.log(arr); // [1, 1, 2, 3, 4, 5, 6, 9]

// 2. Using Spread Operator and sort Method - without mutating
let sortedArr = [...arr].sort();
console.log(sortedArr); // [1, 1, 2, 3, 4, 5, 6, 9]
