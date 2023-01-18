"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commonPropTypes = require("../helpers/commonPropTypes");

var _commons = require("./../helpers/commons");

var _ticket = require("./../helpers/ticket");

var _globalStyles = _interopRequireDefault(require("../assets/styles/globalStyles"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TicketPrice = _ref => {
  let {
    tickets,
    currency,
    showIcon = true,
    wrapperCustomClassNames = [],
    priceFormat
  } = _ref;
  if (!tickets.length) return null;
  const priceRange = (0, _ticket.calculateTicketsPriceRange)({
    tickets,
    currency,
    priceFormat
  });
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), showIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-ticket"
  }), /*#__PURE__*/_react.default.createElement("div", null, priceRange));
};

TicketPrice.propTypes = {
  ticket: _commonPropTypes.SHAPE_TICKETS,
  Icon: _propTypes.default.any,
  currency: _commonPropTypes.SHAPE_CURRENCY,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  priceFormat: _propTypes.default.string
};
var _default = TicketPrice;
exports.default = _default;