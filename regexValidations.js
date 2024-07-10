// Regular expressions (regex) is a sequence of characters that forms a search pattern.
// They are used to search, match, and manipulate text based on specific patterns.

// Syntax
// Literal Characters: Matches the exact characters in the string. For example, `/abc/` matches "abc".
// Metacharacters: Special characters with specific meanings:
/* 
    `.` matches any character except newline.
    `\d` matches any digit (equivalent to [0-9]).
    `\w` matches any word character (alphanumeric + underscore).
    `\s` matches any whitespace character (space, tab, newline).
    `^` matches the beginning of a string.
    `$` matches the end of a string.
    `*` matches 0 or more repetitions of the preceding element.
    `+` matches 1 or more repetitions of the preceding element.
    `?` makes the preceding element optional (0 or 1 time).
    `{n}` matches exactly n repetitions of the preceding element.
    `{n,}` matches n or more repetitions of the preceding element.
    `{n,m}` matches between n and m repetitions of the preceding element.
    `|` acts as an OR operator.
*/

// Examples

// 1. Match a Simple Pattern
const regex1 = /hello/;
console.log(regex1.test("hello world")); // true

// 2. Match a Digit
const regex2 = /\d/;
console.log(regex2.test("abc123")); // true

// 3. Match a Word Character
const regex3 = /\w/;
console.log(regex3.test("_asd2")); // true

// 4. Match a Specific Pattern
const regex = /^abc$/; // Matches only "abc"
console.log(regex.test("abc")); // true
console.log(regex.test("abcd")); // false

// Practical Examples

// 1. Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("example@example.com")); // true
console.log(emailRegex.test("invalid-email")); // false
/*
    `^[^\s@]+`: The email must start with one or more characters that are not whitespace or `@`.
    `@[^\s@]+`: Followed by an `@` and one or more characters that are not whitespace or `@`.
    `\.[^\s@]+$`: Followed by a dot `.` and one or more characters that are not whitespace or `@`.
*/

// 2. Phone Number Validation
const mobileNumberRegex = /^[1-9]\d{9}$/;
console.log(mobileNumberRegex.test("1234567890")); // true
console.log(mobileNumberRegex.test("0123456789")); // false
console.log(mobileNumberRegex.test("987654321")); // false
console.log(mobileNumberRegex.test("98765432101")); // false
/*
    `^`: Asserts the position at the start of the string.
    `[1-9]`: Matches any digit from 1 to 9. This ensures that the first digit is not 0.
    `\d{9}`: Matches exactly 9 digits (0-9). Combined with the previous part, this ensures the total length is 10 digits.
    `$`: Asserts the position at the end of the string.
*/

// 3. Password Validation
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(passwordRegex.test("Password1!")); // true
console.log(passwordRegex.test("password")); // false
/*
    `^(?=.*[A-Za-z])`: Ensure there is at least one letter.
    `(?=.*\d)`: Ensure there is at least one digit.
    `(?=.*[@$!%*?&])`: Ensure there is at least one special character.
    `[A-Za-z\d@$!%*?&]{8,}$`: Ensure the length is at least 8 characters.
*/

// 4. Replacing Text
const text = "This is a sample text";
const replacedText = text.replace(/\s+/g, "-");
console.log(replacedText); // This-is-a-sample-text
/*
    `\s+`: Matches one or more whitespace characters.
    `g`: Global flag to replace all occurrences.
*/
