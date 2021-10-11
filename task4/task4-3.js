"use strict";

const person = {
  name: "Andrei",
};

function sayHello(surname, age) {
  console.log(`Hello  ${this.name} ${surname}, age: ${age}`);
}

function myApply(func, context, args) {
  const age = Math.random() * 100;
  context[uniqId] = func;
  const result = context[age](...args);
  delete context[age];
  return result;
}

myApply(sayHello, person, ["Sinkarev", 1234]);
