// Type Coercion is automatic or implicit conversion of values from one data type to another

const value1 = "10";
const value2 = 4;

console.log(value1 * value2); // 40 Implicit Conversion

console.log(Number(value1) * value2); // 40 Explicit Conversions

// Practical Example
// 1. A input box with type text. When we enter a number into the box and try to do some operation on the number like doubling the number.
// Then type coercion happens.
// It's advised to use explicit conversion to avoid unexpected results like NaN.

// NaN (Not-a-Number)
"a" * 10;
0 / 0;
Infinity / Infinity;
Math.sqrt(-1);
Math.log(-1);
Math.pow("string", 2); // Invalid base for power function
parseInt("abc");
parseFloat("123abc"); // output - 123
parseFloat("abc123"); // NaN
NaN + 5;
NaN * 10;
