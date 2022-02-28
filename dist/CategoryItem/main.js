"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

require("../assets/styles/icons.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CategoryItem = props => {
  if (!props.category || !props.category.id) return null;
  const {
    category: {
      id,
      name,
      color
    },
    wrapperCustomClassNames = []
  } = props;
  if (!id) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color
    },
    className: (0, _commons.combineClassNames)([_mainModule.default.category_item, ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-tag"
  }), /*#__PURE__*/_react.default.createElement("span", null, name));
};

CategoryItem.propTypes = {
  category: _propTypes.default.shape({
    id: _propTypes.default.number,
    name: _propTypes.default.string,
    color: _propTypes.default.string
  }),
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};

var _default = /*#__PURE__*/(0, _react.memo)(CategoryItem);

exports.default = _default;