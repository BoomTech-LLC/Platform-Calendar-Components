"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowRegistrationButtonStatus = getShowRegistrationButtonStatus;
exports.generateRegistrationURL = generateRegistrationURL;
exports.getGuestsOptions = getGuestsOptions;
exports.calcGuestsOptionsByTickets = calcGuestsOptionsByTickets;
exports.filterEventGuests = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _moment = _interopRequireDefault(require("moment"));

var _commons = require("./../helpers/commons");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getShowRegistrationButtonStatus(event, enabled) {
  if (event.isDefault) return false;
  if (_constants.SYNCED_EVENT_KINDS.includes(event.kind)) return false;
  const dateToCompare = event.allDay ? (0, _moment.default)(event.end).add(1, "d") : (0, _moment.default)(event.end);
  if (dateToCompare.isSameOrBefore((0, _moment.default)())) return false;
  return enabled;
}

function generateRegistrationURL(cid, uid, event, registration, urlBase, hasTickets) {
  var _registration$general, _event$origId, _event$repeat;

  if ((_registration$general = registration.general) !== null && _registration$general !== void 0 && _registration$general.external && !hasTickets) {
    var _registration$general2;

    return (0, _commons.validateURL)((_registration$general2 = registration.general) === null || _registration$general2 === void 0 ? void 0 : _registration$general2.url);
  }

  return "".concat(urlBase, "?uid=").concat(uid, "&cid=").concat(cid, "&eventId=").concat(String((_event$origId = event.origId) !== null && _event$origId !== void 0 ? _event$origId : event.id)).concat(event !== null && event !== void 0 && (_event$repeat = event.repeat) !== null && _event$repeat !== void 0 && _event$repeat.type || event !== null && event !== void 0 && event.repeated ? "&startDate=" + event.start.split("T")[0] : "");
}

function getGuestsOptions(event, registration, tickets) {
  var _eventCopy$guests$len, _eventCopy$guests;

  const eventCopy = _objectSpread(_objectSpread({}, event), {}, {
    guests: filterEventGuests(event)
  });

  if (!registration.enabled) return null;
  if (_constants.SYNCED_EVENT_KINDS.includes(event.kind)) return null;
  if (event.ticketEnabled && tickets !== null && tickets !== void 0 && tickets.length) return calcGuestsOptionsByTickets(eventCopy, tickets);
  return {
    count: (_eventCopy$guests$len = eventCopy === null || eventCopy === void 0 ? void 0 : (_eventCopy$guests = eventCopy.guests) === null || _eventCopy$guests === void 0 ? void 0 : _eventCopy$guests.length) !== null && _eventCopy$guests$len !== void 0 ? _eventCopy$guests$len : 0,
    limit: registration.guestsOptions.isLimited ? registration.guestsOptions.limit : "unlimited"
  };
}

function calcGuestsOptionsByTickets(event, tickets) {
  const result = {
    count: 0,
    limit: 0
  }; //This function is temporary, we should improve this logic.

  for (const guest of event.guests) {
    for (const guestTicket of guest.tickets) {
      for (const ticket of tickets) {
        if (ticket.id === guestTicket.ticketId) result.count++;
      }
    }
  }

  for (let ticket of tickets) {
    if (ticket.limit.type === "Unlimited") {
      result.limit = "unlimited";
      break;
    }

    result.limit += ticket.limit.quantity;
  }

  return result;
}

const filterEventGuests = _ref => {
  let {
    guests,
    start,
    repeat,
    repeated
  } = _ref;
  return guests.filter(guest => {
    if (guest.tickets.length && guest.status === _constants.PAYMENT_STATUSES.unpaid && guest.paymentType !== _constants.PAYMENT_TYPES.cash) {
      return false;
    }

    if (repeat !== null || repeated) {
      return (0, _moment.default)(guest.date).isSame(start);
    }

    return true;
  });
};

exports.filterEventGuests = filterEventGuests;