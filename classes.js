// A class is a blueprint for creating objects with specific properties and methods.
// It allows to define a type of object that can be instantiated multiple times, each time creating a new object with the same structure and behavior.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, My name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
  }
}

const person1 = new Person("Yash", 15);
person1.greet(); // Hello, my name is Yash and I am 15 years old.
person1.haveBirthday(); // Happy Birthday! I am now 16 years old.

// Practical Example

// 1. Employee Management
class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  promote(newPosition) {
    this.position = newPosition;
    console.log(`${this.name} has been promoted to ${this.position}`);
  }

  giveRaise(amount) {
    this.salary += amount;
    console.log(
      `${this.name} has received a raise. New salary: ${this.salary}`
    );
  }
}

const emp1 = new Employee(1, "John Doe", "Software Developer", 50000);
const emp2 = new Employee(2, "Jane Smith", "Product Manager", 60000);
emp1.promote("Senior Software Developer"); // John Doe has been promoted to Senior Software Developer
emp2.giveRaise(10000); // Jane Smith has received a raise. New salary: 70000

// 2. Library Management
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} by ${this.author} has been borrowed.`);
    } else {
      console.log(`${this.title} by ${this.author} is currently unavailable.`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} by ${this.author} has been returned.`);
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
const book2 = new Book("1984", "George Orwell", "0987654321");

book1.borrow(); // The Great Gatsby by F. Scott Fitzgerald has been borrowed.
book1.borrow(); // The Great Gatsby by F. Scott Fitzgerald is currently unavailable.
book2.returnBook(); // 1984 by George Orwell has been returned.
