"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./../main.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EndTimeRow = _ref => {
  let {
    datesEqual,
    allDay,
    startDateOnly,
    showIcons,
    oneLine,
    startTime,
    endTime,
    endDate,
    timeZoneToShow,
    agenda,
    allDayText
  } = _ref;
  return !(datesEqual && allDay && !agenda) && !startDateOnly && /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_end
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-clock"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: oneLine ? _mainModule.default.oneLine : undefined
  }, datesEqual && allDay && agenda ? allDayText : datesEqual ? "".concat(startTime).concat(startTime === endTime ? '' : " -".concat(endTime), " ").concat(timeZoneToShow) : "".concat(endDate).concat(endTime, " ").concat(timeZoneToShow)));
};

EndTimeRow.propTypes = {
  datesEqual: _propTypes.default.bool,
  startDate: _propTypes.default.string,
  startTime: _propTypes.default.string,
  timeZoneToShow: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  oneLine: _propTypes.default.bool,
  allDay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  startDateOnly: _propTypes.default.bool,
  endTime: _propTypes.default.string,
  endDate: _propTypes.default.string,
  agenda: _propTypes.default.bool,
  allDayText: _propTypes.default.string
};
var _default = EndTimeRow;
exports.default = _default;