/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "date": () => (/* binding */ date)
/* harmony export */ });
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/utils */ "./scripts/utils/index.js");
/* harmony import */ var _scripts_makeCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/makeCalendar */ "./scripts/makeCalendar.js");
/* harmony import */ var _scripts_scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/scheduler */ "./scripts/scheduler/index.js");
/* harmony import */ var _scripts_changers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/changers */ "./scripts/changers/index.js");
/* harmony import */ var _scripts_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/weather */ "./scripts/weather/index.js");





let date = new Date();

const calendarClockTime = document.querySelector(`.calendar__clockTime`);


(0,_scripts_makeCalendar__WEBPACK_IMPORTED_MODULE_1__.makeCalendar)();
(0,_scripts_changers__WEBPACK_IMPORTED_MODULE_3__.changeSettings)();
(0,_scripts_changers__WEBPACK_IMPORTED_MODULE_3__.changeDate)();
(0,_scripts_scheduler__WEBPACK_IMPORTED_MODULE_2__.scheduler)();
(0,_scripts_weather__WEBPACK_IMPORTED_MODULE_4__.weather)();

calendarClockTime.innerHTML = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_0__.getTime)(new Date());
setInterval(() => {
  calendarClockTime.innerHTML = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_0__.getTime)(new Date());
}, 1000);
setInterval(() => (0,_scripts_weather__WEBPACK_IMPORTED_MODULE_4__.weather)(), 60000);


/***/ }),

/***/ "./scripts/changers/changeDate.js":
/*!****************************************!*\
  !*** ./scripts/changers/changeDate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDate": () => (/* binding */ changeDate)
/* harmony export */ });
/* harmony import */ var _makeCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../makeCalendar */ "./scripts/makeCalendar.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./index.js");



function changeDate() {
  const calendarClock = document.querySelector(".calendar__clock");
  const calendarDateContainer = document.querySelector(".calendar__dateContainer");
  const calendarDateControls = document.querySelector(".calendar__dateControls");

  calendarClock.addEventListener("click", () => {
    _index__WEBPACK_IMPORTED_MODULE_1__.date.setDate(new Date().getDate());
    _index__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(new Date().getMonth());
    _index__WEBPACK_IMPORTED_MODULE_1__.date.setFullYear(new Date().getFullYear());
    (0,_makeCalendar__WEBPACK_IMPORTED_MODULE_0__.makeCalendar)();
  });

  calendarDateContainer.addEventListener("change", (e) => {
    const value = +e.target.value;
    switch (e.target.dataset.action) {
      case "day":
        _index__WEBPACK_IMPORTED_MODULE_1__.date.setDate(value);
        break;
      case "month":
        _index__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(value);
        break;
      case "year":
        _index__WEBPACK_IMPORTED_MODULE_1__.date.setFullYear(value);
        break;
    }
    (0,_makeCalendar__WEBPACK_IMPORTED_MODULE_0__.makeCalendar)();
  });

  calendarDateControls.addEventListener("click", (e) => {
    switch (e.target.dataset.action) {
      case "prevMonth":
        _index__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(_index__WEBPACK_IMPORTED_MODULE_1__.date.getMonth() + 1);
        (0,_makeCalendar__WEBPACK_IMPORTED_MODULE_0__.makeCalendar)();
        break;
      case "nextMonth":
        _index__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(_index__WEBPACK_IMPORTED_MODULE_1__.date.getMonth() - 1);
        (0,_makeCalendar__WEBPACK_IMPORTED_MODULE_0__.makeCalendar)();
        break;
    }
  });
}


/***/ }),

/***/ "./scripts/changers/changeSettings.js":
/*!********************************************!*\
  !*** ./scripts/changers/changeSettings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSettings": () => (/* binding */ changeSettings)
/* harmony export */ });
/* harmony import */ var _makeCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../makeCalendar */ "./scripts/makeCalendar.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



function changeSettings() {
  const settings = document.querySelector(".settings");

  settings.addEventListener("change", (e) => {
    const { id, checked, value } = e.target;
    switch (id) {
      case "showLastDays":
      case "showNextDays":
      case "scheduler":
        fetchFunc({ id, value: checked });
        break;
      case "firstDayWeek":
      case "firstHoliday":
      case "secondHoliday":
        fetchFunc({ id, value });
        break;
    }
  });
}

const putMethod = (params) => {
  const { idValue, value } = params;
  const someData = {
    id: idValue,
    idValue: value,
  };
  return {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };
};

const fetchFunc = ({ id, value }) => {
  fetch(`${_utils__WEBPACK_IMPORTED_MODULE_1__.urlApi}/config/${id}`, putMethod({ idValue: id, value: value }))
    .then((res) => res.json())
    .then(() => (0,_makeCalendar__WEBPACK_IMPORTED_MODULE_0__.makeCalendar)())
    .catch((err) => console.log(err));
};


/***/ }),

/***/ "./scripts/changers/index.js":
/*!***********************************!*\
  !*** ./scripts/changers/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDate": () => (/* reexport safe */ _changeDate__WEBPACK_IMPORTED_MODULE_0__.changeDate),
/* harmony export */   "changeSettings": () => (/* reexport safe */ _changeSettings__WEBPACK_IMPORTED_MODULE_1__.changeSettings)
/* harmony export */ });
/* harmony import */ var _changeDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeDate */ "./scripts/changers/changeDate.js");
/* harmony import */ var _changeSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeSettings */ "./scripts/changers/changeSettings.js");






/***/ }),

/***/ "./scripts/creators/createDays.js":
/*!****************************************!*\
  !*** ./scripts/creators/createDays.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDays": () => (/* binding */ createDays)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./scripts/creators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



function createDays(params) {
  const { date, firstDayWeek, restDays, notes } = params;
  const calendarDays = document.querySelector(".calendar__days");
  const calendarDateDay = document.querySelector(".calendar__dateDay");
  const calendarDateMonth = document.querySelector(".calendar__dateMonth");
  const calendarDateYear = document.querySelector(".calendar__dateYear");
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 0).getDay();
  const lastDayIndex = new Date(currentYear, currentMonth + 1, 0).getDay();
  const totalDays = lastDay + firstDayIndex;
  const twoWeekInDays = 14;
  const oneWeekInDays = 7
  let nextDays = null;

  if (totalDays < 35) {
    nextDays = twoWeekInDays - lastDayIndex;
  } else {
    nextDays = oneWeekInDays - lastDayIndex;
  }

  const restDaysInMonth = restDays
    .filter((holiday) => {
      return holiday.month === currentMonth + 1;
    })
    .map((item) => item.day);

  const toDoDaysInMonth = notes
    .filter((item) => {
      return item.month === currentMonth && item.year === currentYear;
    })
    .map((item) => item.day);

  const toDoDaysInPrevMonth = notes
    .filter((item) => {
      return item.month === currentMonth - 1 && item.year === currentYear;
    })
    .map((item) => item.day);

  const toDoDaysInNextMonth = notes
    .filter((item) => {
      return item.month === currentMonth + 1 && item.year === currentYear;
    })
    .map((item) => item.day);

  calendarDays.innerHTML = "";
  calendarDateDay.value = currentDay;
  calendarDateMonth.value = currentMonth;
  calendarDateYear.value = currentYear;

  if (firstDayWeek === _utils__WEBPACK_IMPORTED_MODULE_1__.weekDays[1]) {
    for (let i = 0; i < firstDayIndex; i++) {
      let number = prevLastDay - (firstDayIndex - 1) + i;
      if (toDoDaysInPrevMonth.includes(number)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_to-do calendar__day_prev-mounth-day ",
          innerText: number,
        });
      } else {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_prev-mounth-day",
          innerText: number,
        });
      }
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === currentDay) {
        if (toDoDaysInMonth.includes(i)) {
          (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
            divClass: "calendar__day calendar__day_today calendar__day_to-do",
            innerText: i,
          });
        } else {
          (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
            divClass: "calendar__day calendar__day_today ",
            innerText: i,
          });
        }
      } else if (toDoDaysInMonth.includes(i)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_to-do",
          innerText: i,
        });
      } else if (restDaysInMonth.includes(i)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_holiday",
          innerText: i,
        });
      } else {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day",
          innerText: i,
        });
      }
    }

    for (let i = 1; i <= nextDays; i++) {
      if (toDoDaysInNextMonth.includes(i)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_to-do calendar__day_next-mounth-day ",
          innerText: i,
        });
      } else {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_next-mounth-day",
          innerText: i,
        });
      }
    }
  }
  if (firstDayWeek === _utils__WEBPACK_IMPORTED_MODULE_1__.weekDays[0]) {
    for (let i = 0; i <= firstDayIndex; i++) {
      let number = prevLastDay - firstDayIndex + i;
      if (toDoDaysInPrevMonth.includes(number)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_to-do calendar__day_prev-mounth-day",
          innerText: number,
        });
      } else {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_prev-mounth-day",
          innerText: number,
        });
      }
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === currentDay) {
        if (toDoDaysInMonth.includes(i)) {
          (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
            divClass: "calendar__day calendar__day_today calendar__day_to-do",
            innerText: i,
          });
        } else {
          (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
            divClass: "calendar__day calendar__day_today ",
            innerText: i,
          });
        }
      } else if (toDoDaysInMonth.includes(i)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_to-do",
          innerText: i,
        });
      } else if (restDaysInMonth.includes(i)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_holiday",
          innerText: i,
        });
      } else {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day",
          innerText: i,
        });
      }
    }

    for (let i = 1; i < nextDays; i++) {
      if (toDoDaysInNextMonth.includes(i)) {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_to-do calendar__day_next-mounth-day",
          innerText: i,
        });
      } else {
        (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
          divClass: "calendar__day calendar__day_next-mounth-day",
          innerText: i,
        });
      }
    }
  }
}


/***/ }),

/***/ "./scripts/creators/createDiv.js":
/*!***************************************!*\
  !*** ./scripts/creators/createDiv.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDiv": () => (/* binding */ createDiv)
/* harmony export */ });
function createDiv(params) {
  const { divClass = "", innerText = "", parentDiv = "calendar__days" } = params;
  const divElem = document.createElement("div");
  divElem.className = divClass;
  divElem.innerText = innerText;
  document.querySelector(`.${parentDiv}`).append(divElem);
}


/***/ }),

/***/ "./scripts/creators/createHolidays.js":
/*!********************************************!*\
  !*** ./scripts/creators/createHolidays.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHolidays": () => (/* binding */ createHolidays)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");


function createHolidays(params) {
  const { firstHoliday, secondHoliday, firstDayWeek } = params;
  const calendarDays = document.querySelector(".calendar__days");
  const calendarDaysChildren = calendarDays.children;
  let firstHolidayIndex;
  let secondHolidayIndex;

  switch (firstDayWeek) {
    case _utils__WEBPACK_IMPORTED_MODULE_0__.weekDays[0]:
      firstHolidayIndex = _utils__WEBPACK_IMPORTED_MODULE_0__.weekDays.findIndex((day) => day === firstHoliday);
      secondHolidayIndex = _utils__WEBPACK_IMPORTED_MODULE_0__.weekDays.findIndex((day) => day === secondHoliday);
      break;
    case _utils__WEBPACK_IMPORTED_MODULE_0__.weekDays[1]:
      const newWeekDays = [_utils__WEBPACK_IMPORTED_MODULE_0__.weekDays[1], ..._utils__WEBPACK_IMPORTED_MODULE_0__.weekDays.slice(2, 7), _utils__WEBPACK_IMPORTED_MODULE_0__.weekDays[0]];
      firstHolidayIndex = newWeekDays.findIndex((day) => day === firstHoliday);
      secondHolidayIndex = newWeekDays.findIndex((day) => day === secondHoliday);
      break;
  }

  for (let i = firstHolidayIndex; i < calendarDaysChildren.length; i += 7) {
    calendarDaysChildren[i].classList.add("calendar__day_holiday");
  }
  for (let i = secondHolidayIndex; i < calendarDaysChildren.length; i += 7) {
    calendarDaysChildren[i].classList.add("calendar__day_holiday");
  }
}


/***/ }),

/***/ "./scripts/creators/createLastNextDays.js":
/*!************************************************!*\
  !*** ./scripts/creators/createLastNextDays.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLastNextDays": () => (/* binding */ createLastNextDays)
/* harmony export */ });
function createLastNextDays(params) {
  const { showLastDays, showNextDays } = params;

  const createrDays = ({ selector }) => {
    const calendarDay = document.querySelectorAll(`${selector}`);
    calendarDay.forEach((day) => {
      day.style.visibility = "hidden";
    });
  };

  if (!showLastDays) {
    createrDays({ selector: ".calendar__day_prev-mounth-day" });
  }
  if (!showNextDays) {
    createrDays({ selector: ".calendar__day_next-mounth-day" });
  }
}


/***/ }),

/***/ "./scripts/creators/createNotes.js":
/*!*****************************************!*\
  !*** ./scripts/creators/createNotes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotes": () => (/* binding */ createNotes)
/* harmony export */ });
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler */ "./scripts/scheduler/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./scripts/creators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");




function createNotes(date) {
  const spinnerScheduler = new _utils__WEBPACK_IMPORTED_MODULE_2__.SpinnerScheduler();
  spinnerScheduler.create();
  fetch(`${_utils__WEBPACK_IMPORTED_MODULE_2__.urlApi}/notes`)
    .then((res) => res.json())
    .then((result) => {
      spinnerScheduler.remove();
      create({ posts: result, date });
    })
    .catch((err) => console.log(err));
}

const create = (params) => {
  const { posts, date } = params;
  const schedulerNotes = document.querySelector(".scheduler__notes");
  schedulerNotes.innerHTML = "";
  const filterPosts = posts.filter((item) => {
    return item.year === date.getFullYear() && item.month === date.getMonth() && item.day === date.getDate();
  });

  if (filterPosts.length) {
    filterPosts.forEach((item) => {
      const divElem = document.createElement("div");
      divElem.className = `scheduler__notes-note note`;
      divElem.id = item.id;
      divElem.innerHTML = `<div class="note__text">${item.value}</div>
      <button class="note__icon note__icon_trash">
        <i id=${item.id} class="fas fa-trash" data-action="trash"></i>
      </button>
      <button class="note__icon note__icon_edit">
        <i id=${item.id} class="far fa-edit" data-action="edit"></i>
      </button>`;
      document.querySelector(".scheduler__notes").append(divElem);
    });
  } else {
    (0,___WEBPACK_IMPORTED_MODULE_1__.createDiv)({
      divClass: "scheduler__notes-empty",
      innerText: "No tasks today",
      parentDiv: "scheduler__notes",
    });
  }
  const notes = document.querySelectorAll(".note");

  notes.forEach((note) => {
    note.addEventListener("click", (e) => {
      switch (e.target.dataset.action) {
        case "trash":
          (0,_scheduler__WEBPACK_IMPORTED_MODULE_0__.deleteNote)({ date, id: e.target.id });
          break;
        case "edit":
          (0,_scheduler__WEBPACK_IMPORTED_MODULE_0__.editNote)({ posts, date, id: e.target.id });
          break;
      }
    });
  });
};


/***/ }),

/***/ "./scripts/creators/createWeekDays.js":
/*!********************************************!*\
  !*** ./scripts/creators/createWeekDays.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeekDays": () => (/* binding */ createWeekDays)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./scripts/creators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



function createWeekDays(day) {
  const calendarDaysOfWeek = document.querySelector(".calendar__daysOfWeek");
  calendarDaysOfWeek.innerHTML = "";

  const createWeekDaysFunc = (array) => {
    array.forEach((day) => {
      (0,___WEBPACK_IMPORTED_MODULE_0__.createDiv)({
        divClass: "calendar__daysOfWeekDay",
        parentDiv: "calendar__daysOfWeek",
        innerText: day.substr(0, 3),
      });
    });
  };

  switch (day) {
    case _utils__WEBPACK_IMPORTED_MODULE_1__.weekDays[0]:
      createWeekDaysFunc(_utils__WEBPACK_IMPORTED_MODULE_1__.weekDays);
      break;
    case _utils__WEBPACK_IMPORTED_MODULE_1__.weekDays[1]:
      const newWeekDays = [_utils__WEBPACK_IMPORTED_MODULE_1__.weekDays[1], ..._utils__WEBPACK_IMPORTED_MODULE_1__.weekDays.slice(2, 7), _utils__WEBPACK_IMPORTED_MODULE_1__.weekDays[0]];
      createWeekDaysFunc(newWeekDays);
      break;
  }
}


/***/ }),

/***/ "./scripts/creators/index.js":
/*!***********************************!*\
  !*** ./scripts/creators/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDays": () => (/* reexport safe */ _createDays__WEBPACK_IMPORTED_MODULE_0__.createDays),
/* harmony export */   "createDiv": () => (/* reexport safe */ _createDiv__WEBPACK_IMPORTED_MODULE_1__.createDiv),
/* harmony export */   "createHolidays": () => (/* reexport safe */ _createHolidays__WEBPACK_IMPORTED_MODULE_2__.createHolidays),
/* harmony export */   "createLastNextDays": () => (/* reexport safe */ _createLastNextDays__WEBPACK_IMPORTED_MODULE_3__.createLastNextDays),
/* harmony export */   "createWeekDays": () => (/* reexport safe */ _createWeekDays__WEBPACK_IMPORTED_MODULE_4__.createWeekDays),
/* harmony export */   "createNotes": () => (/* reexport safe */ _createNotes__WEBPACK_IMPORTED_MODULE_5__.createNotes)
/* harmony export */ });
/* harmony import */ var _createDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDays */ "./scripts/creators/createDays.js");
/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDiv */ "./scripts/creators/createDiv.js");
/* harmony import */ var _createHolidays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHolidays */ "./scripts/creators/createHolidays.js");
/* harmony import */ var _createLastNextDays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createLastNextDays */ "./scripts/creators/createLastNextDays.js");
/* harmony import */ var _createWeekDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWeekDays */ "./scripts/creators/createWeekDays.js");
/* harmony import */ var _createNotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createNotes */ "./scripts/creators/createNotes.js");










/***/ }),

/***/ "./scripts/makeCalendar.js":
/*!*********************************!*\
  !*** ./scripts/makeCalendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCalendar": () => (/* binding */ makeCalendar)
/* harmony export */ });
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creators */ "./scripts/creators/index.js");
/* harmony import */ var _scheduler_showScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/showScheduler */ "./scripts/scheduler/showScheduler.js");
/* harmony import */ var _setSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setSettings */ "./scripts/setSettings.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./scripts/utils/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./index.js");






function makeCalendar() {
  const calendarClockDate = document.querySelector(".calendar__clockDate");
  calendarClockDate.innerText = `${(0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDate)(new Date())}`;

  const spinnerCalendar = new _utils__WEBPACK_IMPORTED_MODULE_3__.SpinnerCalendar();
  spinnerCalendar.create();

  fetch(`${_utils__WEBPACK_IMPORTED_MODULE_3__.urlApi}/db`)
    .then((response) => response.json())
    .then((result) => {
      const { config, restDays, notes } = result;
      const arrValues = [];
      for (let key in config) {
        let values = Object.values(config[key]);
        arrValues.push(values);
      }
      const newConfig = Object.fromEntries(arrValues);
      const { firstDayWeek, firstHoliday, secondHoliday, showLastDays, showNextDays, scheduler } = newConfig;

      spinnerCalendar.remove();
      (0,_setSettings__WEBPACK_IMPORTED_MODULE_2__.setSettings)(newConfig);
      (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createWeekDays)(firstDayWeek);
      (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createDays)({ date: _index__WEBPACK_IMPORTED_MODULE_4__.date, firstDayWeek, restDays, notes });
      (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createHolidays)({ firstHoliday, secondHoliday, firstDayWeek });
      (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createLastNextDays)({ showLastDays, showNextDays });
      scheduler ? (0,_scheduler_showScheduler__WEBPACK_IMPORTED_MODULE_1__.showScheduler)(_index__WEBPACK_IMPORTED_MODULE_4__.date) : null;
    })
    .catch((err) => console.log(err));
}


/***/ }),

/***/ "./scripts/scheduler/addNote.js":
/*!**************************************!*\
  !*** ./scripts/scheduler/addNote.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNote": () => (/* binding */ addNote)
/* harmony export */ });
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creators */ "./scripts/creators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



function addNote() {
  const addForm = document.querySelector(".scheduler__form");
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formInput = document.querySelector(".form__input");
    const modalDate = document.querySelector(".modal__date");
    const dateString = modalDate.innerText.split(" ");
    const date = new Date(
      +dateString[2],
      _utils__WEBPACK_IMPORTED_MODULE_1__.month.findIndex((month) => month === dateString[1]),
      +dateString[0]
    );

    const obj = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      value: formInput.value,
    };

    fetch(`${_utils__WEBPACK_IMPORTED_MODULE_1__.urlApi}/notes`, postMethod(obj))
      .then((res) => res.json())
      .then(() => {
        addForm.reset();
        (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createNotes)(date);
      })
      .catch((err) => console.log(err));
  });
}

const postMethod = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
};


/***/ }),

/***/ "./scripts/scheduler/closeScheduler.js":
/*!*********************************************!*\
  !*** ./scripts/scheduler/closeScheduler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeScheduler": () => (/* binding */ closeScheduler)
/* harmony export */ });
/* harmony import */ var _makeCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../makeCalendar */ "./scripts/makeCalendar.js");


function closeScheduler() {
  const schedulerClose = document.querySelector(".scheduler__close");
  const schedulerModal = document.querySelector(".scheduler");
  
  schedulerClose.addEventListener("click", () => {
    schedulerModal.classList.remove("show");
    (0,_makeCalendar__WEBPACK_IMPORTED_MODULE_0__.makeCalendar)();
  });
}


/***/ }),

/***/ "./scripts/scheduler/deleteNote.js":
/*!*****************************************!*\
  !*** ./scripts/scheduler/deleteNote.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteNote": () => (/* binding */ deleteNote),
/* harmony export */   "deleteAllNotes": () => (/* binding */ deleteAllNotes)
/* harmony export */ });
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creators */ "./scripts/creators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



function deleteNote(params) {
  const { date, id } = params;

  fetch(`${_utils__WEBPACK_IMPORTED_MODULE_1__.urlApi}/notes/${id}`, deleteMethod)
    .then((response) => response.json())
    .then(() => (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createNotes)(date))
    .catch((err) => console.log(err));
}

function deleteAllNotes() {
  const deleteAll = document.querySelector(".delete__button");

  deleteAll.addEventListener("click", () => {
    const iconTrashAll = document.querySelectorAll(".fa-trash");
    iconTrashAll.forEach((elem) => elem.click());
  });
}

const deleteMethod = {
  method: "DELETE",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};


/***/ }),

/***/ "./scripts/scheduler/editNote.js":
/*!***************************************!*\
  !*** ./scripts/scheduler/editNote.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editNote": () => (/* binding */ editNote)
/* harmony export */ });
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creators */ "./scripts/creators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



function editNote(params) {
  const { posts, date, id } = params;
  const schedulerNotes = document.querySelector(".scheduler__notes");
  const index = posts.findIndex((item) => item.id === +id);
  const editElem = document.getElementById(id);
  editElem.innerHTML = `<input class="note__text" type='text' value=${posts[index].value}>
    <button class="note__icon note__icon_check" >
        <i class="fas fa-check" data-action="check"></i>
    </button>
     <button class="note__icon note__icon_cancel" >
        <i class="fas fa-times" data-action="cancel"></i>
    </button>`;
  const editInput = editElem.firstChild;
  editInput.focus();
  editInput.selectionStart = editInput.value.length;

  schedulerNotes.addEventListener("click", (e) => {
    switch (e.target.dataset.action) {
      case "check":
        fetch(`${_utils__WEBPACK_IMPORTED_MODULE_1__.urlApi}/notes/${id}`, putMethod({ id, value: editInput.value, date }))
          .then((res) => res.json())
          .then(() => (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createNotes)(date))
          .catch((err) => console.log(err));
        break;
      case "cancel":
        (0,_creators__WEBPACK_IMPORTED_MODULE_0__.createNotes)(date);
        break;
    }
  });
}

const putMethod = (params) => {
  const { id, value, date } = params;
  const someData = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    value,
    id,
  };
  return {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(someData),
  };
};


/***/ }),

/***/ "./scripts/scheduler/index.js":
/*!************************************!*\
  !*** ./scripts/scheduler/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNote": () => (/* reexport safe */ _addNote__WEBPACK_IMPORTED_MODULE_0__.addNote),
/* harmony export */   "closeScheduler": () => (/* reexport safe */ _closeScheduler__WEBPACK_IMPORTED_MODULE_1__.closeScheduler),
/* harmony export */   "createNotes": () => (/* reexport safe */ _creators_createNotes__WEBPACK_IMPORTED_MODULE_2__.createNotes),
/* harmony export */   "deleteNote": () => (/* reexport safe */ _deleteNote__WEBPACK_IMPORTED_MODULE_3__.deleteNote),
/* harmony export */   "deleteAllNotes": () => (/* reexport safe */ _deleteNote__WEBPACK_IMPORTED_MODULE_3__.deleteAllNotes),
/* harmony export */   "editNote": () => (/* reexport safe */ _editNote__WEBPACK_IMPORTED_MODULE_4__.editNote),
/* harmony export */   "scheduler": () => (/* reexport safe */ _scheduler__WEBPACK_IMPORTED_MODULE_5__.scheduler),
/* harmony export */   "showScheduler": () => (/* reexport safe */ _showScheduler__WEBPACK_IMPORTED_MODULE_6__.showScheduler)
/* harmony export */ });
/* harmony import */ var _addNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNote */ "./scripts/scheduler/addNote.js");
/* harmony import */ var _closeScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeScheduler */ "./scripts/scheduler/closeScheduler.js");
/* harmony import */ var _creators_createNotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creators/createNotes */ "./scripts/creators/createNotes.js");
/* harmony import */ var _deleteNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteNote */ "./scripts/scheduler/deleteNote.js");
/* harmony import */ var _editNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editNote */ "./scripts/scheduler/editNote.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler */ "./scripts/scheduler/scheduler.js");
/* harmony import */ var _showScheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showScheduler */ "./scripts/scheduler/showScheduler.js");











/***/ }),

/***/ "./scripts/scheduler/scheduler.js":
/*!****************************************!*\
  !*** ./scripts/scheduler/scheduler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduler": () => (/* binding */ scheduler)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./scripts/scheduler/index.js");


function scheduler() {
  (0,___WEBPACK_IMPORTED_MODULE_0__.addNote)();
  (0,___WEBPACK_IMPORTED_MODULE_0__.deleteAllNotes)();
  (0,___WEBPACK_IMPORTED_MODULE_0__.closeScheduler)();
}


/***/ }),

/***/ "./scripts/scheduler/showScheduler.js":
/*!********************************************!*\
  !*** ./scripts/scheduler/showScheduler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showScheduler": () => (/* binding */ showScheduler)
/* harmony export */ });
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDate */ "./scripts/utils/getDate.js");
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creators */ "./scripts/creators/index.js");



function showScheduler(date) {
  const calendarDays = document.querySelectorAll(".calendar__day");
  const modalDate = document.querySelector(".modal__date");
  const scheduler = document.querySelector(".scheduler");
  let clickDay = null;
  calendarDays.forEach((day) =>
    day.addEventListener("click", (e) => {
      scheduler.classList.add("show");
      if ([...e.target.classList].includes("calendar__day_prev-mounth-day")) {
        clickDay = new Date(date.getFullYear(), date.getMonth() - 1, +e.target.innerText);
        modalDate.innerText = `${(0,_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.getDate)(clickDay)}`;
      } else if ([...e.target.classList].includes("calendar__day_next-mounth-day")) {
        clickDay = new Date(date.getFullYear(), date.getMonth() + 1, +e.target.innerText);
        modalDate.innerText = `${(0,_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.getDate)(clickDay)}`;
      } else {
        clickDay = new Date(date.getFullYear(), date.getMonth(), +e.target.innerText);
        modalDate.innerText = `${(0,_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.getDate)(clickDay)}`;
      }
      (0,_creators__WEBPACK_IMPORTED_MODULE_1__.createNotes)(clickDay);
    })
  );
}


/***/ }),

/***/ "./scripts/setSettings.js":
/*!********************************!*\
  !*** ./scripts/setSettings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSettings": () => (/* binding */ setSettings)
/* harmony export */ });
function setSettings(config) {
  const { firstDayWeek, firstHoliday, secondHoliday, showLastDays, showNextDays, scheduler } = config;

  const settingsSelectFirstDay = document.querySelector(".settings__select_first-day");
  const settingsHolidayFirst = document.querySelector(".settings__holidayFirst");
  const settingsHolidaySecond = document.querySelector(".settings__holidaySecond");
  const settingsInputLastDays = document.querySelector(".settings__input_lastDays");
  const settingsInputNextDays = document.querySelector(".settings__input_nextDays");
  const settingsInputScheduler = document.querySelector(".settings__input_scheduler");

  settingsSelectFirstDay.value = firstDayWeek;
  settingsHolidayFirst.value = firstHoliday;
  settingsHolidaySecond.value = secondHoliday;
  settingsInputLastDays.checked = showLastDays;
  settingsInputNextDays.checked = showNextDays;
  settingsInputScheduler.checked = scheduler;
}


/***/ }),

/***/ "./scripts/utils/Spinners.js":
/*!***********************************!*\
  !*** ./scripts/utils/Spinners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerCalendar": () => (/* binding */ SpinnerCalendar),
/* harmony export */   "SpinnerScheduler": () => (/* binding */ SpinnerScheduler),
/* harmony export */   "SpinnerWeather": () => (/* binding */ SpinnerWeather)
/* harmony export */ });
class SpinnerCalendar {
  constructor() {
    this.calendar = document.querySelector(".calendar");
    this.calendarDays = document.querySelector(".calendar__days");
    this.spinner = document.createElement("img");
  }
  create() {
    this.calendarDays.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "300px";
    this.spinner.style.height = "300px";
    this.calendar.append(this.spinner);
  }
  remove() {
    this.spinner.remove();
    this.calendarDays.style.display = "flex";
  }
}

class SpinnerScheduler {
  constructor() {
    this.deleteButton = document.querySelector(".delete__button");
    this.schedulerNotes = document.querySelector(".scheduler__notes");
    this.spinner = document.createElement("img");
  }
  create() {
    this.schedulerNotes.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "50px";
    this.spinner.style.height = "50px";
    this.deleteButton.before(this.spinner);
  }
  remove() {
    this.spinner.remove();
    this.schedulerNotes.style.display = "block";
  }
}

class SpinnerWeather {
  constructor() {
    this.weather = document.querySelector(".weather");
    this.weatherDaily = document.querySelector(".weather__daily");
    this.weatherToday = document.querySelector(".weather__today");
    this.spinner = document.createElement("img");
  }
  create() {
    this.weatherDaily.style.display = "none";
    this.weatherToday.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "300px";
    this.spinner.style.height = "300px";
    this.weather.append(this.spinner);
  }
  remove() {
    this.spinner.remove();
    this.weatherDaily.style.display = "flex";
    this.weatherToday.style.display = "block";
  }
}


/***/ }),

/***/ "./scripts/utils/constantValues.js":
/*!*****************************************!*\
  !*** ./scripts/utils/constantValues.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weekDays": () => (/* binding */ weekDays),
/* harmony export */   "month": () => (/* binding */ month),
/* harmony export */   "urlApi": () => (/* binding */ urlApi)
/* harmony export */ });
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const urlApi = "http://localhost:3000";


/***/ }),

/***/ "./scripts/utils/getDate.js":
/*!**********************************!*\
  !*** ./scripts/utils/getDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./scripts/utils/index.js");


function getDate(date) {
  return `${date.getDate()} ${___WEBPACK_IMPORTED_MODULE_0__.month[date.getMonth()]} ${date.getFullYear()}`;
}


/***/ }),

/***/ "./scripts/utils/getTime.js":
/*!**********************************!*\
  !*** ./scripts/utils/getTime.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTime": () => (/* binding */ getTime)
/* harmony export */ });
function getTime(date) {
  let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  if (time[0] < 10) {
    time[0] = "0" + time[0];
  }
  if (time[1] < 10) {
    time[1] = "0" + time[1];
  }
  if (time[2] < 10) {
    time[2] = "0" + time[2];
  }
  return time.join(":");
}


/***/ }),

/***/ "./scripts/utils/index.js":
/*!********************************!*\
  !*** ./scripts/utils/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTime": () => (/* reexport safe */ _getTime__WEBPACK_IMPORTED_MODULE_0__.getTime),
/* harmony export */   "month": () => (/* reexport safe */ _constantValues__WEBPACK_IMPORTED_MODULE_1__.month),
/* harmony export */   "weekDays": () => (/* reexport safe */ _constantValues__WEBPACK_IMPORTED_MODULE_1__.weekDays),
/* harmony export */   "getDate": () => (/* reexport safe */ _getDate__WEBPACK_IMPORTED_MODULE_2__.getDate),
/* harmony export */   "urlApi": () => (/* reexport safe */ _constantValues__WEBPACK_IMPORTED_MODULE_1__.urlApi),
/* harmony export */   "SpinnerCalendar": () => (/* reexport safe */ _Spinners__WEBPACK_IMPORTED_MODULE_3__.SpinnerCalendar),
/* harmony export */   "SpinnerScheduler": () => (/* reexport safe */ _Spinners__WEBPACK_IMPORTED_MODULE_3__.SpinnerScheduler),
/* harmony export */   "SpinnerWeather": () => (/* reexport safe */ _Spinners__WEBPACK_IMPORTED_MODULE_3__.SpinnerWeather)
/* harmony export */ });
/* harmony import */ var _getTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTime */ "./scripts/utils/getTime.js");
/* harmony import */ var _constantValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constantValues */ "./scripts/utils/constantValues.js");
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDate */ "./scripts/utils/getDate.js");
/* harmony import */ var _Spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spinners */ "./scripts/utils/Spinners.js");








/***/ }),

/***/ "./scripts/weather/index.js":
/*!**********************************!*\
  !*** ./scripts/weather/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setWeather": () => (/* reexport safe */ _setWeather__WEBPACK_IMPORTED_MODULE_0__.setWeather),
/* harmony export */   "setWeatherCurrent": () => (/* reexport safe */ _setWeatherCurrent__WEBPACK_IMPORTED_MODULE_1__.setWeatherCurrent),
/* harmony export */   "setWeatherDaily": () => (/* reexport safe */ _setWeatherDaily__WEBPACK_IMPORTED_MODULE_2__.setWeatherDaily),
/* harmony export */   "weather": () => (/* reexport safe */ _weather__WEBPACK_IMPORTED_MODULE_3__.weather)
/* harmony export */ });
/* harmony import */ var _setWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setWeather */ "./scripts/weather/setWeather.js");
/* harmony import */ var _setWeatherCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setWeatherCurrent */ "./scripts/weather/setWeatherCurrent.js");
/* harmony import */ var _setWeatherDaily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setWeatherDaily */ "./scripts/weather/setWeatherDaily.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather */ "./scripts/weather/weather.js");








/***/ }),

/***/ "./scripts/weather/setWeather.js":
/*!***************************************!*\
  !*** ./scripts/weather/setWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setWeather": () => (/* binding */ setWeather)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./scripts/weather/index.js");


function setWeather(arr) {
  const { current, daily } = arr;
  (0,___WEBPACK_IMPORTED_MODULE_0__.setWeatherCurrent)(current);
  (0,___WEBPACK_IMPORTED_MODULE_0__.setWeatherDaily)(daily);
}


/***/ }),

/***/ "./scripts/weather/setWeatherCurrent.js":
/*!**********************************************!*\
  !*** ./scripts/weather/setWeatherCurrent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setWeatherCurrent": () => (/* binding */ setWeatherCurrent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");


function setWeatherCurrent(arr) {
  const { dt, temp, weather, feels_like, wind_speed, humidity, pressure } = arr;
  const { icon, description } = weather[0];
  const dateUpdateWeather = new Date(dt * 1000);
  const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  const weatherDate = document.querySelector(".weather__date");
  const weatherTempValue = document.querySelector(".weather__tempValue");
  const weatherIconImage = document.querySelector(".weather__icon-image");
  const weatherDescription = document.querySelector(".weather__description");
  const weatherFeelsLikeValue = document.querySelector(".weather__feelsLikeValue");
  const weatherWindSpeedValue = document.querySelector(".weather__windSpeedValue");
  const weatherHumidityValue = document.querySelector(".weather__humidityValue");
  const weatherPressureValue = document.querySelector(".weather__pressureValue");
  const MILLIMETREOFMERCURY = 133.3224;
  const pressureMillimetreOfMercury = (pressure * 100) / MILLIMETREOFMERCURY;

  weatherDate.innerText = `${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDate)(dateUpdateWeather)} ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTime)(dateUpdateWeather)}`;
  weatherTempValue.innerHTML = `${Math.round(temp)}&deg`;
  weatherIconImage.src = iconurl;
  weatherDescription.innerText = description;
  weatherFeelsLikeValue.innerHTML = `${Math.round(feels_like)}&deg`;
  weatherWindSpeedValue.innerText = `${wind_speed} metre/sec`;
  weatherHumidityValue.innerText = `${humidity} %`;
  weatherPressureValue.innerText = `${Math.round(pressureMillimetreOfMercury)} mmHg`;
}


/***/ }),

/***/ "./scripts/weather/setWeatherDaily.js":
/*!********************************************!*\
  !*** ./scripts/weather/setWeatherDaily.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setWeatherDaily": () => (/* binding */ setWeatherDaily)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");


function setWeatherDaily(arr) {
  const weatherDaily = document.querySelector(".weather__daily");
  weatherDaily.innerHTML = ``;
  arr.forEach((element) => {
    const {
      dt,
      temp: { day: tempDay, night: tempNight },
      weather,
    } = element;
    const { icon, main } = weather[0];
    const dateWeather = new Date(dt * 1000);
    const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    const divElem = document.createElement("div");
    divElem.className = `weather__day`;
    divElem.innerHTML = `<div class="weather__day-week">${_utils__WEBPACK_IMPORTED_MODULE_0__.weekDays[dateWeather.getDay()].slice(0, 3)}</div>
      <div class="weather__date">${dateWeather.getDate()} ${_utils__WEBPACK_IMPORTED_MODULE_0__.month[dateWeather.getMonth()]}</div>
      <div class="weather__icon weather__icon_margin-top-bottom-10px">
      <img class="weather__icon-image" src=${iconurl} alt="Weather icon" />
      </div>
      <div class="weather__temp-day">
      Day: <span class="weather__temp-day-value">${Math.round(tempDay)}&deg</span>
      </div>
      <div class="weather__temp-night">
      Night: <span class="weather__temp-night-value">${Math.round(tempNight)}&deg</span>
      </div>
      <div
        class="weather__description weather__description_margin-top-10px"
      >${main}
      </div>`;
    weatherDaily.append(divElem);
  });
}


/***/ }),

/***/ "./scripts/weather/weather.js":
/*!************************************!*\
  !*** ./scripts/weather/weather.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./scripts/weather/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./scripts/utils/index.js");



const apiKey = "e9cb0113e83d5fb7d38d6909b07913cf";
const lat = "53.8931";
const lon = "30.3325";
const part = "hourly,minutely";
const language = "en";
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${language}&units=${units}&exclude=${part}&appid=${apiKey} `;

function weather() {
  const spinnerWeather = new _utils__WEBPACK_IMPORTED_MODULE_1__.SpinnerWeather();
  spinnerWeather.create();

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      spinnerWeather.remove();
      (0,___WEBPACK_IMPORTED_MODULE_0__.setWeather)(result);
    })
    .catch((err) => console.log(err));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map