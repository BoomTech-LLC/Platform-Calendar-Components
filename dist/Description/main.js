"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _commons = require("../helpers/commons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commonPropTypes = require("../helpers/commonPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  }, title), descriptionNode);
};

Description.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.string,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = Description;
exports.default = _default;