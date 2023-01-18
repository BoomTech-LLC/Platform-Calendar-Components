"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

var _location = require("../helpers/location");

var _globalStyles = _interopRequireDefault(require("../assets/styles/globalStyles"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Location = _ref => {
  let {
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
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    className: (0, _commons.combineClassNames)([...wrapperCustomClassNames, ...(isLink ? linkCustomClassNames : textCustomClassNames)])
  }, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), showIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-location"
  }), /*#__PURE__*/_react.default.createElement(_styles.LineBraker, {
    elipsis: elipsis
  }, isLink ? /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer"
  }, value) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, value)));
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