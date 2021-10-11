"use strict";

const multiplyAll = function () {
  const arr = arguments[0];
  return (n) => arr.map((number) => number * n);
};

console.log(multiplyAll([1, 2, 3])(1));
console.log(multiplyAll([1, 2, 3])(2));
console.log(multiplyAll([1, 2, 3])(0));
console.log(multiplyAll([])(10));
