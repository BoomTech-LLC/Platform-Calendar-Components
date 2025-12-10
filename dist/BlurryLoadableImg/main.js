"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mainModule = _interopRequireDefault(require("./main.module.css"));
var _blurryLoadableImage = require("../helpers/blurryLoadableImage");
var _commons = require("../helpers/commons");
var _commonPropTypes = require("../helpers/commonPropTypes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BlurryLoadableImg = _ref => {
  let {
    url,
    showColorAsBackground = true,
    color,
    title,
    wrapperCustomClassNames = [],
    imgCustomClassNames = []
  } = _ref;
  const [isOrigLoaded, setIsOrigLoaded] = (0, _react.useState)(false);
  const [blurredImgLoadingFailed, setBlurredImgLoadingFailed] = (0, _react.useState)(false);
  const [originalLoadingFailed, setOriginalLoadingFailed] = (0, _react.useState)(false);
  const wrapperClassNames = (0, _commons.combineClassNames)([_mainModule.default.imgWrapper, ...wrapperCustomClassNames]);
  if (!url) {
    if (!showColorAsBackground) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: wrapperClassNames,
      style: {
        backgroundColor: blurredImgLoadingFailed ? "transparent" : color
      }
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassNames,
    style: {
      backgroundColor: blurredImgLoadingFailed ? color : "transparent"
    }
  }, blurredImgLoadingFailed && !isOrigLoaded && /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([_mainModule.default.blurred, ...imgCustomClassNames]),
    src: (0, _blurryLoadableImage.decreaseImgQuality)(url),
    title: title,
    alt: title,
    onError: () => setBlurredImgLoadingFailed(true)
  }), !originalLoadingFailed && /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([...imgCustomClassNames, isOrigLoaded ? _mainModule.default.shown : _mainModule.default.hidden]),
    onLoad: () => {
      setIsOrigLoaded(true);
    },
    src: url,
    title: title,
    alt: title,
    onError: () => setOriginalLoadingFailed(true)
  }));
};
BlurryLoadableImg.propTypes = {
  url: _propTypes.default.string,
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  showColorAsBackground: _propTypes.default.bool,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  imgCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = exports.default = BlurryLoadableImg;