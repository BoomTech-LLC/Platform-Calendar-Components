"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.formatDate = exports.getDateForDateBox = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.replace.js");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getDateForDateBox = (start, end, locale) => {
  const [startDate] = start.split('T');
  const [endDate] = end.split('T');
  const currentDate = (0, _moment.default)().format('YYYY-MM-DD');
  const isUpcoming = (0, _moment.default)(startDate).isSameOrBefore(currentDate) && (0, _moment.default)(endDate).isSameOrAfter(currentDate);
  const dateToShow = isUpcoming ? undefined : startDate;
  return {
    day: (0, _moment.default)(dateToShow).locale(locale).format('DD'),
    week: (0, _moment.default)(dateToShow).locale(locale).format('dddd'),
    month: (0, _moment.default)(dateToShow).locale(locale).format('MMMM')
  };
};

exports.getDateForDateBox = getDateForDateBox;

const getFormattedDate = (date, dateFormat, locale) => {
  let format = dateFormat;

  if (dateFormat.includes('YYYY') && (0, _moment.default)(date).format('YYYY') === (0, _moment.default)().format('YYYY')) {
    const yearRegex = new RegExp(',? ?,?YYYY,? ?,?');
    format = dateFormat.split(yearRegex)[1] ? dateFormat.replace(/,? ?,?YYYY/, '').trim() : dateFormat.replace(yearRegex, '').trim();
  }

  return (0, _moment.default)(date).locale(locale).format(format);
};

const formatDate = (start, end, dateFormat, locale) => ({
  startDate: getFormattedDate(start.replace('T', ' '), dateFormat, locale),
  endDate: getFormattedDate(end.replace('T', ' '), dateFormat, locale)
});

exports.formatDate = formatDate;

const formatTime = (start, end, timeFormat, all_day, locale) => {
  const format = timeFormat.toLowerCase() === 'am/pm' ? ' hh:mm a' : ' HH:mm';
  return {
    startTime: all_day ? '' : (0, _moment.default)(start.replace('T', ' ')).locale(locale).format(format),
    endTime: all_day ? '' : (0, _moment.default)(end.replace('T', ' ')).locale(locale).format(format)
  };
};

exports.formatTime = formatTime;