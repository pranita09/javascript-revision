let arr = [1, 2, 3, 4, 5];

// 1. Using for Loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2. Using for...of Loop
for (let element of arr) {
  console.log(element);
}

// 3. Using forEach Method
arr.forEach((element, index) => {
  console.log(element);
});

// 4. Using map Method
let squaredArr = arr.map((element) => element * element);
console.log(squaredArr); // [1, 4, 9, 16, 25]

// 5. Using while Loop
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
