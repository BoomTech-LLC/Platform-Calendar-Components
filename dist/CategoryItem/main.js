"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

var _globalStyles = _interopRequireDefault(require("../assets/styles/globalStyles"));

var _styles = require("./styles");

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
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    style: {
      color
    },
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement("span", {
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