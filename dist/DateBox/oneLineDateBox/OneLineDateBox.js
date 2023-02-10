"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _mainModule = _interopRequireDefault(require("./../main.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../../helpers/dateBox");

var _commons = require("../../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OneLineDateBox = _ref => {
  let {
    start,
    end,
    locale,
    showIcons,
    dateFormat,
    timeFormat,
    allDay,
    wrapperCustomClassNames = [],
    showYear
  } = _ref;
  const {
    startDate,
    endDate
  } = (0, _dateBox.formatDate)(start, end, dateFormat, locale, showYear);
  const {
    startTime,
    endTime
  } = (0, _dateBox.formatTime)(start, end, timeFormat, allDay, locale);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, _mainModule.default.two_line_start])
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-clock"
  }), /*#__PURE__*/_react.default.createElement("span", null, startDate, " ", startTime && !allDay ? startTime : null), start !== end && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("span", null, endDate !== startDate ? endDate : null, " ", startTime && endTime ? endTime : null)));
};

OneLineDateBox.propTypes = {
  start: _propTypes.default.string.isRequired,
  end: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  dateFormat: _propTypes.default.string,
  timeFormat: _propTypes.default.string,
  allDay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  wrapperCustomClassNames: _propTypes.default.array,
  agenda: _propTypes.default.bool,
  allDayText: _propTypes.default.string
};
var _default = OneLineDateBox;
exports.default = _default;