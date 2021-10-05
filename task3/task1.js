"use strict";

const calculateWordLength = function (string) {
  const wordsArray = string
    .split(" ")
    .filter((word) => !Number.isInteger(Math.floor(+word)) && word !== "null" && word !== "underfined");
  return wordsArray.map((word) => `${word} ${word.length}`);
};

console.log(calculateWordLength("hello worldd"));
console.log(calculateWordLength("hello 6 74.1 worldd null"));
console.log(calculateWordLength("hello 6 74.1 worldd null underfined"));
console.log(calculateWordLength("be happy"));
