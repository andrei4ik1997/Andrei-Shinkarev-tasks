"use strict";

const wordPattern = function (word) {
  if (!arguments.length) return `You haven't entered anything`;
  let letterArray = word.toLowerCase().split("");
  let arr = [...new Set(letterArray)];
  for (let i = 0; i < letterArray.length; i++) {
    letterArray[i] = arr.indexOf(letterArray[i]);
  }
  return letterArray.join(".");
};

console.log(wordPattern("hello"));
console.log(wordPattern("heLlo"));
console.log(wordPattern("helLo"));
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
