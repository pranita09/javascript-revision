// 1. Using array literals
let arr1 = [1, 2, 3, 4, 5];
let emptyArr1 = [];

// 2. Using the Array Constructor
let arr2 = new Array(1, 2, 3, 4, 5);
let emptyArr2 = new Array();
let specificLengthArr2 = new Array(10); // Creates an array with length 10, but elements are undefined

// 3. Using the Array.of Method
let arr3 = Array.of(1, 2, 3, 4, 5);
let singleElementArr3 = Array.of(10); // Creates an array with one element: 10

// 4. Using the Array.from Method
let arr4 = Array.from([1, 2, 3, 4, 5]);
let arrFromString4 = Array.from("hello"); // Creates ['h', 'e', 'l', 'l', 'o']
let arrFromSe4t = Array.from(new Set([1, 2, 3, 4, 5])); // Creates an array from a Set

// 5. Using the Spread Operator
let arr5 = [...[1, 2, 3, 4, 5]];
let arrFromString5 = [..."hello"]; // Creates ['h', 'e', 'l', 'l', 'o']

// 6. Using the fill Method
let arr6 = new Array(5).fill(0); // Creates an array with 5 elements, all set to 0

// 7. Using the concat Method
let arr71 = [1, 2];
let arr72 = [3, 4, 5];
let combinedArr = arr71.concat(arr72); // Creates [1, 2, 3, 4, 5]
