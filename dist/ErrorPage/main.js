"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _error = _interopRequireDefault(require("./../assets/images/error.png"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorPage = _ref => {
  let {
    title = 'Oops! Something went wrong',
    pageCover = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.container, pageCover ? _mainModule.default.page_cover : ''])
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: _mainModule.default.title
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.image_wrapper
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _error.default
  })));
};

ErrorPage.propTypes = {
  title: _propTypes.default.string,
  pageCover: _propTypes.default.bool
};
var _default = ErrorPage;
exports.default = _default;