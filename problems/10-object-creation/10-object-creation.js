/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

function Car() {
  this.name = "";
  this.age = 0;
}

var Car = {
  name: "Pontiac",
  age: 33
};

class Car {
  constructor(name, age) {
    this.name = "";
    this.age = 0;
  }
}
