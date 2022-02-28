"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commonPropTypes = require("../helpers/commonPropTypes");

var _commons = require("../helpers/commons");

var _mainModule = _interopRequireDefault(require("./main.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TicketList = _ref => {
  let {
    enabled = false,
    tickets = [],
    wrapperCustomClassNames = []
  } = _ref;
  if (!enabled || tickets.length === 0) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.wrapper, ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-ticket"
  }), /*#__PURE__*/_react.default.createElement("div", null, tickets.map(ticket => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: ticket.label + ticket.limit
    }, /*#__PURE__*/_react.default.createElement("span", null, "".concat(ticket.quantity, " x ").concat(ticket.label)), ticket.price ? /*#__PURE__*/_react.default.createElement("span", {
      className: _mainModule.default.price
    }, "".concat(ticket.currency).concat(ticket.price)) : null);
  })));
};

TicketList.propTypes = {
  enabled: _propTypes.default.bool,
  tickets: _propTypes.default.arrayOf(_commonPropTypes.SHAPE_GUEST_TICKET),
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = TicketList;
exports.default = _default;