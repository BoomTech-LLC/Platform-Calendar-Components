"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dateBox = require("../helpers/dateBox");
var _commons = require("../helpers/commons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
  const container = (0, _react.useRef)();

  // useLayoutEffect(() => {
  //   container.current.style.height = container.current.offsetHeight + 'px';
  // },[])

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.container, _mainModule.default[direction], ...wrapperCustomClassNames]),
    ref: container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.day_of_month
  }, /*#__PURE__*/_react.default.createElement("p", null, day)), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.month_day_of_week_parent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.day_of_week
  }, /*#__PURE__*/_react.default.createElement("p", null, month)), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.month
  }, /*#__PURE__*/_react.default.createElement("p", null, week))));
};
var _default = exports.default = DateBox;
DateBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  locale: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  font: _propTypes.default.string
};