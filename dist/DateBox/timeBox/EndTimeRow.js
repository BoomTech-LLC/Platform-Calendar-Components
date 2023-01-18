"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tgap: 8px;\n"])));

const Text = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tmargin: 0;\n\t", "\n"])), props => props.oneLine ? "  white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;" : '');

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
  return !(datesEqual && allDay && !agenda) && !startDateOnly && /*#__PURE__*/_react.default.createElement(Wrapper, null, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-clock"
  }), /*#__PURE__*/_react.default.createElement(Text, {
    oneLine: oneLine
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