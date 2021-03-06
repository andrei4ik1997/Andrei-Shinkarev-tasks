"use strict";

const calculateWordLength = function (string) {
  if (typeof string !== "string") {
    if (!arguments.length) return `You haven't passed anything to the function`;
    return `Please enter a valid string value, but you enter a ${typeof string} value`;
  }
  const wordsArray = string
    .split(" ")
    .filter(
      (word) =>
        !Number.isInteger(Math.floor(+word)) &&
        word !== "null" &&
        word !== "undefined"
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
console.log(calculateWordLength("hello 6 74.1 worldd null undefined"));
console.log(calculateWordLength("be happy"));
