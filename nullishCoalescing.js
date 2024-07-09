// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// Practical example

// 1. Defaultalues for function parameters
function createUserProfile(user) {
  const name = user.name ?? "Guest";
  const age = user.age ?? 18;
  const country = user.country ?? "Unknown";
  return {
    name,
    age,
    country,
  };
}
const user1 = {
  name: "Alice",
  age: 25,
};
const user2 = {
  name: null,
  age: undefined,
  country: "USA",
};

console.log(createUserProfile(user1));
// { name: 'Alice', age: 25, country: 'Unknown' }
console.log(createUserProfile(user2));
// { name: 'Guest', age: 18, country: 'USA' }

// 2. Handling Missing Configuration Values
const config = {
  timeout: 0,
  retryAttempts: undefined,
};

const timeout = config.timeout ?? 3000;
const retryAttempts = config.retryAttempts ?? 5;

console.log(timeout); // 0 (0 is a valid value and not nullish)
console.log(retryAttempts); // 5 (fallback to default as it's undefined)

// 3. Setting Default User Preferences
const userSettings = {
  theme: "dark",
  notifications: null,
  language: undefined,
};

const theme = userSettings.theme ?? "light";
const notifications = userSettings.notifications ?? true;
const language = userSettings.language ?? "en";

console.log(theme); // 'dark'
console.log(notifications); // true (default value because notifications is null)
console.log(language); // 'en' (default value because language is undefined)

// 4. Combining with Optional Chaining
const user = {
  preferences: {
    theme: "dark",
  },
};

const theme1 = user.preferences?.theme ?? "light";
const fontSize = user.preferences?.fontSize ?? 14;

console.log(theme1); // 'dark'
console.log(fontSize); // 14 (default value because fontSize is undefined)
