"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _commons = require("./../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

var _registration = require("../helpers/registration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GuestLimit = _ref => {
  var _event$registration;

  let {
    foreword = 'Guests Limit',
    event,
    globalRegistration,
    tickets,
    wrapperCustomClassNames = [],
    showIcon = false
  } = _ref;
  const registration = (_event$registration = event.registration) !== null && _event$registration !== void 0 ? _event$registration : globalRegistration;
  const eventTickets = !event.ticketEnabled || !(tickets !== null && tickets !== void 0 && tickets.length) ? null : [...tickets];
  const show = (0, _registration.getShowRegistrationButtonStatus)(event, registration === null || registration === void 0 ? void 0 : registration.enabled);
  if (!show) return null;
  if (!eventTickets && (!registration.guestsOptions.isLimited || !registration.guestsOptions.show)) return null;
  const guestsOptions = (0, _registration.getGuestsOptions)(event, registration, eventTickets);
  if (!guestsOptions) return null;
  const {
    count,
    limit
  } = guestsOptions;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.guest_limit_parent, ...wrapperCustomClassNames])
  }, showIcon && /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-guests"
  }), /*#__PURE__*/_react.default.createElement("p", null, foreword, ": ", count, " / ", limit));
};

GuestLimit.propTypes = {
  foreword: _propTypes.default.string,
  event: _commonPropTypes.SHAPE_EVENT,
  globalRegistration: _commonPropTypes.SHAPE_REGISTRATION,
  tickets: _commonPropTypes.SHAPE_TICKETS,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  showIcon: _propTypes.default.bool
};
var _default = GuestLimit;
exports.default = _default;