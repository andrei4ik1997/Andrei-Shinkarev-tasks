"use strict";

const etalonObject = {
  name: "Andrei",
  age: 24,
  location: {
    country: "Belarus",
    city: "Mogilev",
  },
  technologyStack: {
    JS: {
      core: "basic",
      frameworks: "React",
    },
    Html: "HTML5",
    Css: "CSS3",
  },
};

function cloneObject(obj) {
  const clone = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] != null) {
      clone[key] = cloneObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

const copyObject = cloneObject(etalonObject);
copyObject.location.city = "Minsk";
copyObject.hobbies = "Voleyball";
console.log("Etalon Object:", etalonObject);
console.log("Copy Object:", copyObject);
