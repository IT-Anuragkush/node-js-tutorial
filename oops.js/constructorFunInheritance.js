function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

function Student(name, subject) {
  Person.call(this, name); // Inherit properties
  this.subject = subject;
}

Student.prototype = Object.create(Person.prototype); // Inherit methods
Student.prototype.constructor = Student;

const student1 = new Student('Alice', 'Math');
student1.greet(); // Hello, my name is Alice