"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

require("../assets/styles/icons.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    id: _propTypes.default.string,
    name: _propTypes.default.string,
    color: _propTypes.default.string,
    selected: _propTypes.default.bool
  }),
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = CategoryItem;
exports.default = _default;