"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _mainModule = _interopRequireDefault(require("./../main.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StartTimeRow = _interopRequireDefault(require("./StartTimeRow"));

var _EndTimeRow = _interopRequireDefault(require("./EndTimeRow"));

var _dateBox = require("../../helpers/dateBox");

var _commons = require("../../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TimeBox = _ref => {
  let {
    start,
    end,
    showIcons,
    locale,
    dateFormat,
    timeFormat,
    allDay,
    showTimeZone,
    timeZone,
    wrapperCustomClassNames = [],
    agenda,
    allDayText,
    oneLine,
    fixedHeight,
    startDateOnly
  } = _ref;
  const {
    startDate,
    endDate
  } = (0, _dateBox.formatDate)(start, end, dateFormat, locale);
  const {
    startTime,
    endTime
  } = (0, _dateBox.formatTime)(start, end, timeFormat, allDay, locale);
  const timeZoneToShow = allDay || !showTimeZone ? '' : timeZone;
  const datesEqual = startDate === endDate;
  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, _mainModule.default.timebox_wrapper])
  }, /*#__PURE__*/_react.default.createElement(_StartTimeRow.default, {
    showIcons: showIcons,
    datesEqual: datesEqual,
    oneLine: oneLine,
    startDate: startDate,
    startTime: startTime,
    timeZoneToShow: timeZoneToShow
  }), /*#__PURE__*/_react.default.createElement(_EndTimeRow.default, {
    datesEqual: datesEqual,
    allDay: allDay,
    startDateOnly: startDateOnly,
    showIcons: showIcons,
    oneLine: oneLine,
    startTime: startTime,
    endTime: endTime,
    endDate: endDate,
    timeZoneToShow: timeZoneToShow,
    agenda: agenda,
    allDayText: allDayText
  }), showHiddenRow && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.two_line_start, _mainModule.default.hidden])
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, "hidden row")));
};

TimeBox.propTypes = {
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired,
  showIcons: _propTypes.default.bool,
  locale: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  timeFormat: _propTypes.default.string,
  allDay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  showTimeZone: _propTypes.default.bool,
  timeZone: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  agenda: _propTypes.default.bool,
  allDayText: _propTypes.default.string,
  oneLine: _propTypes.default.bool,
  fixedHeight: _propTypes.default.bool,
  startDateOnly: _propTypes.default.bool
};
var _default = TimeBox;
exports.default = _default;