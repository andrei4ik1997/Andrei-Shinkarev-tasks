"use strict";

const sum = (a, b) => a + b;

const memo = function (func) {
  const cache = {};
  return function (a, b) {
    let result;
    cache[a] = cache[a] || {};
    if (a in cache && b in cache[a]) {
      console.log("In cache");
      result = cache[a][b];
    } else {
      console.log("Calculating");
      result = func(a, b);
      cache[a][b] = result;
    }
    return result;
  };
};

const memedSum = memo(sum);

console.log(memedSum(1, 2));
console.log(memedSum(1, 2));
console.log(memedSum(1, 3));
console.log(memedSum(2, 3));
console.log(memedSum(1, 3));
console.log(memedSum(2, 3));
