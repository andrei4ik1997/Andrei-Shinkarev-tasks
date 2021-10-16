"use strict";

const person = {
  name: "Andrei",
};

const person2 = {
  name: "Maxim",
};

function sayHello(surname, age) {
  return `Hello ${this.name} ${surname}, age: ${age}`;
}

Function.prototype.apply = function (context, args) {
  const randomValue = Date.now().toString();
  context.randomValue = this;
  const result = context.randomValue(...args);
  delete context[randomValue];
  return result;
};

console.log(sayHello.apply(person, ["Shinkarev", 24]));
console.log(sayHello.apply(person2, ["Shinkarev", 24]));
console.log(sayHello.apply(person, ["Ivanov", 42]));
console.log(sayHello.apply(person2, ["Ivanov", 24]));
console.log(sayHello.apply(person, ["Petrov", 37]));
console.log(sayHello.apply(person2, ["Petrov", 24]));
console.log(sayHello.apply(person, ["Sidorov", 27]));
console.log(sayHello.apply(person2, ["Sidorov", 24]));

