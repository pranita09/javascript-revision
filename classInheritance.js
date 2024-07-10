// Class inheritance in JavaScript allows one class to inherit properties and methods from another class.
// This helps to create a hierarchical class structure, promoting code reuse and making it easier to manage and maintain large applications.

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call the constructor of the superclass
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog1 = new Dog("Buddy", 3, "Golden Retriever");

dog1.eat(); // Buddy is eating.
dog1.sleep(); // Buddy is sleeping.
dog1.bark(); // Buddy is barking.

// Practical examples

// 1. Employee Mgnt
class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working.`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(id, name, salary, benefits) {
    super(id, name, salary);
    this.benefits = benefits;
  }

  getBenefits() {
    console.log(`${this.name} has benefits: ${this.benefits}`);
  }
}

class PartTimeEmployee extends Employee {
  constructor(id, name, salary, hourlyRate) {
    super(id, name, salary);
    this.hourlyRate = hourlyRate;
  }

  calculatePay(hours) {
    const pay = hours * this.hourlyRate;
    console.log(
      `${this.name} earned ${pay} dollars for ${hours} hours of work.`
    );
  }
}

const emp1 = new FullTimeEmployee(1, "John Doe", 60000, "Health Insurance");
const emp2 = new PartTimeEmployee(2, "Jane Smith", 0, 20);

emp1.work(); // John Doe is working.
emp1.getBenefits(); // John Doe has benefits: Health Insurance.

emp2.work(); // Jane Smith is working.
emp2.calculatePay(10); // Jane Smith earned 200 dollars for 10 hours of work.

// 2. Vehicle Hierarchy
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} is stopping.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model);
    this.doors = doors;
  }

  honk() {
    console.log(`${this.make} ${this.model} is honking.`);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, type) {
    super(make, model);
    this.type = type;
  }

  wheelie() {
    console.log(`${this.make} ${this.model} is doing a wheelie.`);
  }
}

const car1 = new Car("Toyota", "Corolla", 4);
const motorcycle1 = new Motorcycle("Harley-Davidson", "Sportster", "Cruiser");

car1.start(); // Toyota Corolla is starting.
car1.honk(); // Toyota Corolla is honking.

motorcycle1.start(); // Harley-Davidson Sportster is starting.
motorcycle1.wheelie(); // Harley-Davidson Sportster is doing a wheelie.
