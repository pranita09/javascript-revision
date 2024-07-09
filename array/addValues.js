// 1. Using push Method
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

// 2. Using Bracket Notation
let arr2 = [1, 2, 3];
arr2[3] = 4;
console.log(arr2); // [1, 2, 3, 4]

// 3. Using unshift Method
let arr3 = [2, 3, 4];
arr3.unshift(1);
console.log(arr3); // [1, 2, 3, 4]

// 4. Using concat Method
let arr41 = [1, 2];
let arr42 = [3, 4];
let newArr4 = arr41.concat(arr42);
console.log(newArr4); // [1, 2, 3, 4]

// 5. Using Spread Operator (...)
let arr51 = [1, 2];
let arr52 = [3, 4];
let newArr5 = [...arr51, ...arr52];
console.log(newArr5); // [1, 2, 3, 4]
