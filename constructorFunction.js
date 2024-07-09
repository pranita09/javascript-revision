// A constructor function is a special type of function used to create and initialize objects.
// Constructor functions are designed to be used with the `new` keyword, which creates a new object and binds `this` to the newly created object.

// Syntax
function ConstructorFunctionName(param1, param2, n) {
  // Initialize properties
  this.property1 = param1;
  this.property2 = param2;
  // Other initializations
}

// Examples
// 1. Creating an Object with a Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// Creating a new object using the constructor function
const person1 = new Person("Yash", 30);
person1.greet(); // Output: Hello, my name is Yash and I am 30 years old.

const person2 = new Person("Sai", 25);
person2.greet(); // Output: Hello, my name is Sai and I am 25 years old.

// 2. Adding Methods to the Prototype - To save memory and avoid duplicating methods for each instance, you can add methods to the constructor function's prototype.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person3 = new Person("Yash", 30);
person3.greet(); // Output: Hello, my name is Yash and I am 30 years old.

const person4 = new Person("Sai", 25);
person4.greet(); // Output: Hello, my name is Sai and I am 25 years old.

// 3. Inheritance with Constructor Functions
// Constructor functions can also be used to implement inheritance.
// Let's create a Student constructor that inherits from the Person constructor.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Student(name, age, grade) {
  Person.call(this, name, age); // Call the Person constructor
  this.grade = grade;
}

// Inherit methods from Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log(`${this.name} is studying in grade ${this.grade}.`);
};

const student1 = new Student("Charlie", 20, "A");
student1.greet(); // Output: Hello, my name is Charlie and I am 20 years old.
student1.study(); // Output: Charlie is studying in grade A.
