"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireDefault(require("react"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../helpers/dateBox");

var _commons = require("../helpers/commons");

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
    fixedHeight
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

  if (datesEqual && allDay && agenda) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _commons.combineClassNames)([_mainModule.default.all_day_text_parent, ...wrapperCustomClassNames])
    }, /*#__PURE__*/_react.default.createElement("p", null, allDayText), fixedHeight && /*#__PURE__*/_react.default.createElement("p", {
      className: _mainModule.default.hidden
    }, "hidden row"));
  }

  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, _mainModule.default.timebox_wrapper])
  }, !(datesEqual && agenda) && /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_start
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: datesEqual ? 'icon-date' : _mainModule.default.start_date_icon + ' icon-clock'
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : 'undefined'
  }, startDate + (datesEqual ? '' : startTime + ' ' + timeZoneToShow))), !(datesEqual && allDay) && /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_end
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: (datesEqual ? _mainModule.default.start_date_icon : '') + ' icon-clock'
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : null
  }, datesEqual ? startTime.trim() + (startTime === endTime ? '' : ' -' + endTime) + ' ' + timeZoneToShow : endDate + endTime + ' ' + timeZoneToShow)), showHiddenRow ? /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.two_line_start, _mainModule.default.hidden])
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, "hidden row")) : null);
};

var _default = TimeBox;
exports.default = _default;
TimeBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  wrapperCustomClassNames: _propTypes.default.array,
  oneLine: _propTypes.default.bool,
  fixedHeight: _propTypes.default.bool
};