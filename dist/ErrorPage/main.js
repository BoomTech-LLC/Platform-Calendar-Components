"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Error = _interopRequireDefault(require("./../assets/images/Error.svg"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorPage = _ref => {
  let {
    title = 'Oops! Something went wrong'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.container
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: _mainModule.default.title
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.image_wrapper
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Error.default
  })));
};

ErrorPage.propTypes = {
  title: _propTypes.default.string
};
var _default = ErrorPage;
exports.default = _default;