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
  var _event$registration, _event$tickets, _tickets$list;

  let {
    foreword = 'Guests Limit',
    event,
    globalRegistration,
    globalTickets,
    wrapperCustomClassNames = []
  } = _ref;
  const registration = (_event$registration = event.registration) !== null && _event$registration !== void 0 ? _event$registration : globalRegistration;
  const tickets = (_event$tickets = event.tickets) !== null && _event$tickets !== void 0 ? _event$tickets : globalTickets;
  const show = (0, _registration.getShowRegistrationButtonStatus)(event, (tickets === null || tickets === void 0 ? void 0 : tickets.enabled) || (registration === null || registration === void 0 ? void 0 : registration.enabled));
  if (!show) return null;
  if (!(tickets !== null && tickets !== void 0 && (_tickets$list = tickets.list) !== null && _tickets$list !== void 0 && _tickets$list.length) && (registration.guestsLimited || !registration.showGuests)) return null;
  const guestsOptions = (0, _registration.getGuestsOptions)(event, registration, tickets);
  if (!guestsOptions) return null;
  const {
    count,
    limit
  } = guestsOptions;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.guest_limit_parent, ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("p", null, foreword, ": ", count, " / ", limit));
};

GuestLimit.propTypes = {
  foreword: _propTypes.default.string,
  guests: _propTypes.default.arrayOf(_propTypes.default.shape(_commonPropTypes.SHAPE_GUEST)),
  globalRegistration: _commonPropTypes.SHAPE_REGISTRATION,
  globalTickets: _commonPropTypes.SHAPE_TICKETS,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES
};
var _default = GuestLimit;
exports.default = _default;