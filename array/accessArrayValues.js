let arr = [1, 2, 3, 4, 5];

// 1. Accessing by Index
let firstElement = arr[0]; // 1
let thirdElement = arr[2]; // 3

// 2. Using for Loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3, 4, 5
}

// 3. Using for...of Loop
for (let value of arr) {
  console.log(value); // 1, 2, 3, 4, 5
}

// 4. Using forEach Method
arr.forEach((value, index) => {
  console.log(value); // 1, 2, 3, 4, 5
});

// 5. Using map Method
arr.map((value, index) => {
  console.log(value); // 1, 2, 3, 4, 5
});

// 6. Using filter Method
let evenNumbers = arr.filter((value) => value % 2 === 0);
console.log(evenNumbers);

// 7. Using reduce Method
let sum = arr.reduce((accumulator, value) => accumulator + value, 0);
console.log(sum); // 15

// 8. Using find Method
let foundValue = arr.find((value) => value > 3);
console.log(foundValue); // 4

// 9. Using findIndex Method
let foundIndex = arr.findIndex((value) => value > 3);
console.log(foundIndex); // 3

// 10. Using some Method
let hasEven = arr.some((value) => value % 2 === 0);
console.log(hasEven); // true

// 11. Using every Method
let allEven = arr.every((value) => value % 2 === 0);
console.log(allEven); // false

// 12. Using at Method
let secondElement = arr.at(1); // 2
let lastElement = arr.at(-1); // 5
