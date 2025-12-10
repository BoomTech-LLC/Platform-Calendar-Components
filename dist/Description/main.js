"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _commons = require("../helpers/commons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _commonPropTypes = require("../helpers/commonPropTypes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Description = _ref => {
  let {
    title,
    children,
    wrapperCustomClassNames = []
  } = _ref;
  const descriptionNode = (0, _react.useMemo)(() => (0, _htmlReactParser.default)(children), [children]);
  if (!children) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.description, ...wrapperCustomClassNames])
  }, title && /*#__PURE__*/_react.default.createElement("h3", {
    className: _mainModule.default.description_title
  }, title), descriptionNode && /*#__PURE__*/_react.default.createElement("p", {
    className: _mainModule.default.description_text
  }, descriptionNode));
};
Description.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.string,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = exports.default = Description;