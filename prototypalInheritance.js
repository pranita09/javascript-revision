// Prototypal inheritance is a feature in JavaScript where objects inherit properties and methods from other objects.

// Every JavaScript object has an internal property called [[Prototype]], which points to another object.
// When you try to access a property or method on an object, JavaScript will first look for that property on the object itself.
// If it doesn't find it, it will look on the object's prototype, and so on up the chain until it either finds the property or reaches the end of the chain.

// 1. Using Object.create()
// Define a prototype object
const animal = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
};

const dog = Object.create(animal); // object that inherits from the prototype
dog.name = "Buddy";
dog.bark = function () {
  console.log(`${this.name} is barking.`);
};

dog.eat(); // Buddy is eating.
dog.bark(); // Buddy is barking.

// 2. Using Constructor Functions
// Define a constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

const dog = new Animal("Buddy"); // object using the constructor function
dog.bark = function () {
  console.log(`${this.name} is barking.`);
};

dog.eat(); // Buddy is eating.
dog.bark(); // Buddy is barking.

// 3.  Using Class Syntax
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Buddy");
dog.eat(); // Buddy is eating.
dog.bark(); // Buddy is barking.

// Practical examples

// 1. Extending Built-in Objects
Array.prototype.last = function () {
  return this[this.length - 1];
};

const numbers = [1, 2, 3, 4];
console.log(numbers.last()); // 4
// added a `last` method to the `Array` prototype, making it available to all array instances.

// 2. Creating a Chain of Inheritance for Custom Objects
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.work = function () {
  console.log(`${this.name} is working.`);
};

function Manager(name, salary, department) {
  Employee.call(this, name, salary); // Call the parent constructor
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype); // Inherit from Employee
Manager.prototype.constructor = Manager;

Manager.prototype.manage = function () {
  console.log(`${this.name} is managing the ${this.department} department.`);
};

const manager = new Manager("Alice", 90000, "IT");
manager.work(); // Alice is working.
manager.manage(); // Alice is managing the IT department.
