"use strict";

function stringParse(string) {
  if (typeof string !== "string") {
    return "Please enter a valid string";
  }
  const letterArray = string.split("");
  const resultArray = [];
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== letterArray[i + 1]) {
      resultArray.push(letterArray[i]);
    } else {
      resultArray.push(letterArray[i]);
      resultArray.push(letterArray[i + 1]);
      if (letterArray[i] === letterArray[i + 2]) {
        const duplicateLetter = letterArray[i];
        let pointer = i + 1;
        resultArray.push("[");
        while (duplicateLetter === letterArray[pointer + 1]) {
          resultArray.push(letterArray[i]);
          pointer++;
        }
        resultArray.push("]");
        i = pointer;
      } else {
        i = i + 1;
      }
    }
  }
  return resultArray.join("");
}

console.log(stringParse("aaaabbcdefffffffg"));
console.log(stringParse("boopdedoop"));
console.log(stringParse("helloookat"));
