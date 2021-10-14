"use strict";

const calculateWordLength = function () {
  if (!arguments.length) return `You haven't entered anything`;
  else if (typeof arguments[0] !== "string") {
    return `You have not entered a string, but a ${typeof arguments[0]}`;
  }
  const wordsArray = arguments[0]
    .split(" ")
    .filter(
      (word) =>
        !Number.isInteger(Math.floor(+word)) &&
        word !== "null" &&
        word !== "underfined"
    );
  return wordsArray.map((word) => `${word} ${word.length}`);
};

console.log(calculateWordLength());
console.log(calculateWordLength(12));
console.log(calculateWordLength(undefined));
console.log(calculateWordLength(null));
console.log(calculateWordLength(true));
console.log(calculateWordLength("hello worldd"));
console.log(calculateWordLength("hello worldd"));
console.log(calculateWordLength("hello 6 74.1 worldd null"));
console.log(calculateWordLength("hello 6 74.1 worldd null underfined"));
console.log(calculateWordLength("be happy"));
