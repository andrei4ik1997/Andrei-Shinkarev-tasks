"use strict";

const person = {
  name: "Andrei",
};

function myApply(func, context, args) {
  context.applyFunc = func;
  const result = context.applyFunc(...args);
  delete context.applyFunc;
  return result;
}

function sayHello(surname, age) {
  return `Hello ${this.name} ${surname}, age: ${age}`;
}

console.log(myApply(sayHello, person, ["Shinkarev", 24]));
console.log(myApply(sayHello, person, ["Ivanov", 42]));
console.log(myApply(sayHello, person, ["Petrov", 37]));
console.log(myApply(sayHello, person, ["Sidorov", 27]));