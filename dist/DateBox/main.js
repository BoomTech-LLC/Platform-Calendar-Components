"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateBox = _interopRequireDefault(require("./DateBox"));

var _TimeBox = _interopRequireDefault(require("./timeBox/TimeBox"));

var _OneLineDateBox = _interopRequireDefault(require("./oneLineDateBox/OneLineDateBox"));

var _globalStyles = _interopRequireDefault(require("../assets/styles/globalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DateBox = _ref => {
  let {
    start,
    end = '9999-12-12',
    locale = 'en',
    showIcons = true,
    dateFormat = 'DD/MM/YYYY',
    timeFormat = 'am/pm',
    allDay = true,
    showTimeZone = false,
    timeZone = '',
    wrapperCustomClassNames = [],
    agenda = false,
    type = 'dateBox',
    allDayText = 'All Day',
    oneLine = false,
    direction = 'row',
    startDateOnly = false,
    ticketEnabled = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), type === 'timeBox' ? /*#__PURE__*/_react.default.createElement(_TimeBox.default, {
    start: start,
    end: end,
    locale: locale,
    showIcons: showIcons,
    dateFormat: dateFormat,
    timeFormat: timeFormat,
    allDay: allDay,
    showTimeZone: showTimeZone,
    timeZone: timeZone,
    wrapperCustomClassNames: wrapperCustomClassNames,
    agenda: agenda,
    allDayText: allDayText,
    oneLine: oneLine,
    startDateOnly: startDateOnly,
    ticketEnabled: ticketEnabled
  }) : type === 'oneLineDateBox' ? /*#__PURE__*/_react.default.createElement(_OneLineDateBox.default, {
    start: start,
    end: end,
    locale: locale,
    showIcons: showIcons,
    timeFormat: timeFormat,
    dateFormat: dateFormat,
    allDay: allDay,
    wrapperCustomClassNames: wrapperCustomClassNames
  }) : /*#__PURE__*/_react.default.createElement(_DateBox.default, {
    start: start,
    end: end,
    locale: locale,
    wrapperCustomClassNames: wrapperCustomClassNames,
    direction: direction
  }));
};

DateBox.propTypes = {
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string,
  locale: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  dateFormat: _propTypes.default.string,
  timeFormat: _propTypes.default.string,
  allDay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  showTimeZone: _propTypes.default.bool,
  timeZone: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  agenda: _propTypes.default.bool,
  type: _propTypes.default.string,
  allDayText: _propTypes.default.string,
  oneLine: _propTypes.default.bool,
  direction: _propTypes.default.string,
  fixedHeight: _propTypes.default.bool,
  startDateOnly: _propTypes.default.bool
};
var _default = DateBox;
exports.default = _default;