// JavaScript has a dynamic type system, meaning that variables can hold values of any data type without declaring the type initially.

// A. Primitive Datatypes

// 1. Number - Represents both integer and floating-point numbers.
let integer = 42;
let float = 3.14;
let negative = -7;
let scientific = 2.1e6; // 2.1 * 10^6

// 2. BigInt - Used for integers of arbitrary length.
let bigInt = 1234567890123456789012345678901234567890n;

// 3. String - Represents sequences of characters.
let singleQuote = "Hello, World!";
let doubleQuote = "Hello, World!";
let templateLiteral = `Hello, ${singleQuote}!`;

// 4. Boolean - Represents logical entities.
let isTrue = true;
let isFalse = false;

// 5. Undefined - A variable that has been declared but not yet assigned a value.
let undefinedVariable;
console.log(undefinedVariable); // undefined

// 6. Null - Represents the intentional absence of any object value.
let emptyValue = null;

// 7. Symbol - A unique and immutable data type used to create unique identifiers for objects.
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");
console.log(symbol1 === symbol2); // false

// B. Comples Datatypes

// 1. Object - Used to store collections of data and more complex entities.
let person = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// 2. Array - A special type of object used to store ordered collections of values.
let array = [1, 2, 3, "four", { five: 5 }];

// C. Type Conversion - JavaScript is dynamically typed, and it can automatically convert between data types.

// 1. Implicit Type Conversion (Type Coercion)
let result = "5" + 2; // "52" (string concatenation)
let sum = "5" - 2; // 3 (string converted to number)

// 2. Explicit Type Conversion
let num = Number("123"); // 123
let str = String(123); // "123"
let bool = Boolean(1); // true

// D. Special Values

// 1. NaN - Stands for "Not-a-Number". It is a result of an undefined or erroneous mathematical operation.
let notANumber = "abc" / 3; // NaN

// 2. Infinity and -Infinity - Represents positive and negative infinity.
let positiveInfinity = 1 / 0; // Infinity
let negativeInfinity = -1 / 0; // -Infinity

// E. Checking Datatypes

// 1. `typeof` operator - Returns the type of a variable as a string.
console.log(typeof 123); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a historical bug in JavaScript)
console.log(typeof { a: 1 }); // "object"
console.log(typeof Symbol()); // "symbol"

// 2. `instanceof` operator - Tests whether an object is an instance of a specific constructor.
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
