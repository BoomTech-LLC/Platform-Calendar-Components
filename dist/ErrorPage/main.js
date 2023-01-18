"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _error = _interopRequireDefault(require("./../assets/images/error.png"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorPage = _ref => {
  let {
    title = 'Oops! Something went wrong',
    pageCover = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    pageCover: pageCover
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title), /*#__PURE__*/_react.default.createElement(_styles.ImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _error.default
  })));
};

ErrorPage.propTypes = {
  title: _propTypes.default.string,
  pageCover: _propTypes.default.bool
};
var _default = ErrorPage;
exports.default = _default;