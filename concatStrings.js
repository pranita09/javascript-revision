// 1. Using + operator
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // Output: "Hello World"

// 2. Using += operator - shorthand way to append a string to another
let str3 = "Hello";
str3 += " World";
console.log(str3); // Output: "Hello World"

// 3. Using concat() method -  concating multiple strings
let str4 = "Hello";
let str5 = "beautiful";
let str6 = "world";
let concatedStr = string1.concat(" ", string2, " ", string3, "!");
console.log(concatedStr); // Output: "Hello beautiful world!"

// 4. Using template literal
let str7 = "Hello";
let str8 = "World";
let concatedStr1 = `${str7} ${str8}`;
console.log(concatedStr1); // Output: "Hello World"

// 5. Using Array.join() method
let arr = ["Hello", "World"];
let concatedStr2 = arr.join(" ");
console.log(concatedStr2); // Output: "Hello World"
