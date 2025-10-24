"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

var _location = require("../helpers/location");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Location = _ref => {
  let {
    isRedirectToMap = true,
    data,
    tbdText,
    elipsis = false,
    linkCustomClassNames = [],
    textCustomClassNames = [],
    wrapperCustomClassNames = [],
    showIcon = true
  } = _ref;
  if (!data) return null;
  const {
    isLink,
    value,
    href
  } = (0, _location.getLocationOptions)(data, tbdText);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.wrapper, ...wrapperCustomClassNames, ...(isLink ? linkCustomClassNames : textCustomClassNames)])
  }, showIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-location"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.line_breaker, elipsis ? _mainModule.default.text_elipsis : ""])
  }, isLink && isRedirectToMap ? /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer"
  }, value) : /*#__PURE__*/_react.default.createElement("p", null, value)));
};

Location.propTypes = {
  data: _commonPropTypes.SHAPE_LOCATION,
  tbdText: _propTypes.default.string,
  elipsis: _propTypes.default.bool,
  linkCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  textCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  showIcon: _propTypes.default.bool
};
var _default = Location;
exports.default = _default;