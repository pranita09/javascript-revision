// The Observer and Observable are design patterns often used in JavaScript for managing and handling asynchronous data streams or events.

// Observer Pattern
// The Observer pattern is a behavioral design pattern where an object, known as the subject (or observable), maintains a list
// of its dependents, called observers, and notifies them of any state changes, usually by calling one of their methods.

// Observable Pattern
// The Observable pattern involves an object (observable) that can emit multiple values over time and another object (observer) that subscribes to these values and reacts to them.

// Example
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs != observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} receives data: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1);

subject.notify("Hello Observers!"); // Observer 2 receives data: Hello Observers!
