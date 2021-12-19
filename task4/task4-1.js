const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;
const plusFive = (n) => n + 5;

const pipe = function (funcs) {
  funcs = [...arguments];
  return function (n) {
    let result = n;
    for (let func of funcs) {
      result = func(result);
    }
    return result;
  };
};

console.log(pipe(multiplyTwo, minusFour)(10));
console.log(pipe(multiplyTwo, minusFour)(20));
console.log(pipe(multiplyTwo, minusFour, plusFive)(25));
