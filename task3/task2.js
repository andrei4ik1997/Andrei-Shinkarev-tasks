"use strict";

const wordPattern = function (word) {
  let letterArray = word.toLowerCase().split(""),
    arr = [...new Set(letterArray)];
  for (let i = 0; i < letterArray.length; i++) {
    letterArray[i] = arr.indexOf(letterArray[i]);
  }
  return letterArray.join(".");
};

console.log(wordPattern("hello"));
console.log(wordPattern("heLlo"));
console.log(wordPattern("helLo"));
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
