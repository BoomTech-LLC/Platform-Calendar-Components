"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
    startDateOnly,
    showTimeOnly
  } = _ref;
  const {
    startDate,
    endDate
  } = (0, _dateBox.formatDate)(start, end, dateFormat, locale);
  const {
    startTime,
    endTime
  } = (0, _dateBox.formatTime)(start, end, timeFormat, allDay, locale);
  const timeZoneToShow = allDay || !showTimeZone ? "" : timeZone;
  const datesEqual = startDate === endDate;
  const datesInCurrentYear = (0, _dateBox.isDatesInCurrentYear)(start, end);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, _mainModule.default.timebox_wrapper])
  }, (!datesInCurrentYear || !(showTimeOnly && datesEqual)) && /*#__PURE__*/_react.default.createElement(_StartTimeRow.default, {
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
  }));
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
  startDateOnly: _propTypes.default.bool
};
var _default = TimeBox;
exports.default = _default;