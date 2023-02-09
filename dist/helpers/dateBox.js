"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.formatDate = exports.getDateForDateBox = exports.isDatesInCurrentYear = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.trim.js");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDatesInCurrentYear = (start, end) => {
  const currentYear = (0, _moment.default)().format("YYYY");
  const dates = [(0, _moment.default)(start.replace("T", " ")).format("YYYY"), (0, _moment.default)(end.replace("T", " ")).format("YYYY")];
  return dates.every(date => date === currentYear);
};

exports.isDatesInCurrentYear = isDatesInCurrentYear;

const getDateForDateBox = (start, end, locale) => {
  const [startDate] = start.split("T");
  const [endDate] = end.split("T");
  const currentDate = (0, _moment.default)().format("YYYY-MM-DD");
  const isUpcoming = (0, _moment.default)(startDate).isSameOrBefore(currentDate) && (0, _moment.default)(endDate).isSameOrAfter(currentDate);
  const dateToShow = isUpcoming ? undefined : startDate;
  return {
    day: (0, _moment.default)(dateToShow).locale(locale).format("DD"),
    week: (0, _moment.default)(dateToShow).locale(locale).format("dddd"),
    month: (0, _moment.default)(dateToShow).locale(locale).format("MMMM")
  };
};

exports.getDateForDateBox = getDateForDateBox;

const getFormattedDate = (date, dateFormat, locale, showYearAnyway) => {
  let format = dateFormat;

  if (dateFormat.includes("YYYY") && !showYearAnyway && (0, _moment.default)(date).format("YYYY") === (0, _moment.default)().format("YYYY")) {
    const yearRegex = new RegExp(",? ?,?YYYY,? ?,?");
    format = dateFormat.split(yearRegex)[1] ? dateFormat.replace(/,? ?,?YYYY/, "").trim() : dateFormat.replace(yearRegex, "").trim();
  }

  return (0, _moment.default)(date).locale(locale).format(format);
};

const formatDate = (start, end, dateFormat, locale) => {
  const startDate = start.replace("T", " ");
  const endDate = end.replace("T", " ");
  const showYearAnyway = dateFormat.includes("YYYY") && !isDatesInCurrentYear(startDate, endDate);
  return {
    startDate: getFormattedDate(startDate, dateFormat, locale, showYearAnyway),
    endDate: getFormattedDate(endDate, dateFormat, locale, showYearAnyway)
  };
};

exports.formatDate = formatDate;

const formatTime = (start, end, timeFormat, all_day, locale) => {
  const format = timeFormat.toLowerCase() === "am/pm" ? " hh:mm a" : " HH:mm";
  return {
    startTime: all_day ? "" : (0, _moment.default)(start.replace("T", " ")).locale(locale).format(format),
    endTime: all_day ? "" : (0, _moment.default)(end.replace("T", " ")).locale(locale).format(format)
  };
};

exports.formatTime = formatTime;