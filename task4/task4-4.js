"use strict";

const multiplyAll = function () {
  if (!arguments.length) [];
  const arr = arguments[0];
  return function (n) {
    return arr.map((number) => number * n);
  };
};

console.log(multiplyAll([1, 2, 3])(1));
console.log(multiplyAll([1, 2, 3])(2));
console.log(multiplyAll([1, 2, 3])(0));
console.log(multiplyAll([])(10));
