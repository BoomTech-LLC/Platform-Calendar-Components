"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../../helpers/dateBox");

var _commons = require("../../helpers/commons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tgap: 8px;\n\t& p {\n\t\tmargin: 0;\n\t}\n"])));

const OneLineDateBox = _ref => {
  let {
    start,
    end,
    locale,
    showIcons,
    dateFormat,
    timeFormat,
    allDay,
    wrapperCustomClassNames = []
  } = _ref;
  const {
    startDate,
    endDate
  } = (0, _dateBox.formatDate)(start, end, dateFormat, locale);
  const {
    startTime,
    endTime
  } = (0, _dateBox.formatTime)(start, end, timeFormat, allDay, locale);
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-clock"
  }), /*#__PURE__*/_react.default.createElement("span", null, startDate, " ", startTime && !allDay ? startTime : null), start !== end && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("span", null, endDate !== startDate ? endDate : null, ' ', startTime && endTime ? endTime : null)));
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