"use strict";

require("core-js/modules/es.object.assign.js");

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

var _constants = require("../helpers/constants");

var _Location = _interopRequireDefault(require("./../Location"));

var _commonPropTypes = require("../helpers/commonPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ListedDetails = _ref => {
  let {
    id,
    values,
    title = '',
    titleBorderHidden = false,
    wrapperCustomClassNames = [],
    textDetailsCustomClassNames = [],
    linkDetailsCustomClassNames = [],
    rowSpace = '0.25rem'
  } = _ref;
  const parsedValues = (0, _commons.parseJson)(values);
  const hasAcceptableValues = Object.entries(parsedValues).some(_ref2 => {
    let [key, value] = _ref2;
    return _constants.LISTED_DETAILS_CONSTRUCTOR[key] && value;
  });
  if ((0, _commons.isObjectEmpty)(parsedValues) || !hasAcceptableValues) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.listed_details_block, ...wrapperCustomClassNames]),
    style: {
      gap: rowSpace
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: titleBorderHidden ? '' : _mainModule.default.bordered
  }, title), Object.entries(parsedValues).map(val => {
    const itemKey = "listed-details-".concat(id, "-").concat(val[0], "}");
    if (val[0] === 'location') return /*#__PURE__*/_react.default.createElement(_Location.default, _extends({
      key: itemKey,
      linkClassName: linkDetailsCustomClassNames.join(' ')
    }, val[1]));
    let [key, value] = val;
    if (!value) return null;
    const template = _constants.LISTED_DETAILS_CONSTRUCTOR[key];
    if (!template) return null;
    if (template.validate) value = template.validate(value);
    return /*#__PURE__*/_react.default.createElement(DetailsItem, {
      key: itemKey,
      value: value,
      template: template,
      rowCustomClassNames: (0, _commons.isDefined)(template.preposition) ? linkDetailsCustomClassNames : textDetailsCustomClassNames
    });
  }));
};

const DetailsItem = _ref3 => {
  let {
    value,
    template,
    rowCustomClassNames
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.listed_details_row, ...rowCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'icon-' + template.iconName
  }), /*#__PURE__*/_react.default.createElement("div", null, !(0, _commons.isDefined)(template.preposition) ? /*#__PURE__*/_react.default.createElement("div", null, value) : /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: template.preposition + value,
    onClick: _commons.stopPropagation
  }, value)));
};

ListedDetails.propTypes = {
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  titleBorderHidden: _propTypes.default.bool,
  values: _propTypes.default.object.isRequired,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  textDetailsCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  linkDetailsCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};

var _default = /*#__PURE__*/(0, _react.memo)(ListedDetails);

exports.default = _default;