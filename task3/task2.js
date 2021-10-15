"use strict";

const wordPattern = function (word) {
  if (typeof word !== "string") {
    return `Please enter a valid string value, but you enter a ${typeof word} value`;
  }
  let letterArray = word.toLowerCase().split("");
  const onlyString = letterArray.some((elem) => Number.isInteger(+elem));
  if (!onlyString) {
    let arr = [...new Set(letterArray)];
    for (let i = 0; i < letterArray.length; i++) {
      letterArray[i] = arr.indexOf(letterArray[i]);
    }
    return letterArray.join(".");
  } 
  return `Please enter a string value without number`;
};

console.log(wordPattern());
console.log(wordPattern(12));
console.log(wordPattern(undefined));
console.log(wordPattern(null));
console.log(wordPattern(true));
console.log(wordPattern("hello"));
console.log(wordPattern("heLlo"));
console.log(wordPattern("helLo"));
console.log(wordPattern("helLo1234"));
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
