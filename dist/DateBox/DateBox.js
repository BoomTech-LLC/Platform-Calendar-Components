"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../helpers/dateBox");

var _commons = require("../helpers/commons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n\t", "\n"])), props => props.direction === 'column' ? "  display: flex;\n          align-items: center;" : '');

const DayOfMonth = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tline-height: 0.9;\n\t& p {\n\t\tmargin-top: 0;\n\t\tmargin-right: 0.3rem;\n\t\tmargin-bottom: 0;\n\t\tmargin-left: 0;\n\t}\n\n\t@media only screen and (max-width: 650px) {\n\t\t.day_of_month p {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n"])));

const MonthDayOfWeek = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: flex-start;\n\theight: 100%;\n"])));

const DayOfWeek = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"])));

const DateBox = _ref => {
  let {
    start,
    end,
    locale,
    wrapperCustomClassNames = [],
    direction = 'row'
  } = _ref;
  const {
    day,
    week,
    month
  } = (0, _dateBox.getDateForDateBox)(start, end, locale);
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    direction: direction,
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, /*#__PURE__*/_react.default.createElement(DayOfMonth, null, /*#__PURE__*/_react.default.createElement("p", null, day)), /*#__PURE__*/_react.default.createElement(MonthDayOfWeek, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, month)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, week))));
};

var _default = DateBox;
exports.default = _default;
DateBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  locale: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  font: _propTypes.default.string
};