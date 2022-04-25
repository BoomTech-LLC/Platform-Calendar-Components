"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commonPropTypes = require("../helpers/commonPropTypes");

var _commons = require("./../helpers/commons");

var _ticket = require("./../helpers/ticket");

var _mainModule = _interopRequireDefault(require("./main.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TicketPrice = _ref => {
  let {
    ticket,
    currency,
    showCurrencyAs,
    Icon,
    wrapperCustomClassNames = []
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.wrapper, ...wrapperCustomClassNames])
  }, Icon ? /*#__PURE__*/_react.default.createElement(Icon, null) : /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-ticket"
  }), /*#__PURE__*/_react.default.createElement("div", null, (0, _ticket.getTicketDisplayPrice)({
    ticket,
    currency,
    showCurrencyAs
  })));
};

TicketPrice.propTypes = {
  ticket: _commonPropTypes.SHAPE_TICKET,
  Icon: _propTypes.default.any,
  currency: _propTypes.default.oneOf(_commonPropTypes.CURRENCY_TYPES),
  showCurrencyAs: _propTypes.default.oneOf(['code', 'symbol']),
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = TicketPrice;
exports.default = _default;