"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _blurryLoadableImage = require("../helpers/blurryLoadableImage");

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BlurryLoadableImg = _ref => {
  let {
    url,
    showColorAsBackground = true,
    color,
    title,
    wrapperCustomClassNames = [],
    imgCustomClassNames = []
  } = _ref;
  const [isOrigLoaded, setIsOrigLoaded] = (0, _react.useState)((0, _blurryLoadableImage.isImgCached)(url));
  const [imgLoadingFailed, setImgLoadingFailed] = (0, _react.useState)(false);
  const wrapperClassNames = (0, _commons.combineClassNames)([_mainModule.default.imgWrapper, ...wrapperCustomClassNames]);

  if (!url) {
    if (showColorAsBackground === false) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: wrapperClassNames,
      style: {
        backgroundColor: imgLoadingFailed ? 'transparent' : color
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClassNames,
    style: {
      backgroundColor: imgLoadingFailed ? color : 'transparent'
    }
  }, !imgLoadingFailed && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _blurryLoadableImage.isImgDecreasable)(url) && !isOrigLoaded && /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([_mainModule.default.blurred, ...imgCustomClassNames]),
    src: (0, _blurryLoadableImage.decreaseImgQuality)(url),
    title: title,
    alt: title,
    onError: () => setImgLoadingFailed(true)
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _commons.combineClassNames)([...imgCustomClassNames, !(0, _blurryLoadableImage.isImgDecreasable)(url) || isOrigLoaded ? _mainModule.default.shown : _mainModule.default.hidden]),
    onLoad: () => setIsOrigLoaded(true),
    src: url,
    title: title,
    alt: title,
    onError: () => setImgLoadingFailed(true)
  })));
};

BlurryLoadableImg.propTypes = {
  url: _propTypes.default.string,
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  showColorAsBackground: _propTypes.default.bool,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  imgCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = BlurryLoadableImg;
exports.default = _default;