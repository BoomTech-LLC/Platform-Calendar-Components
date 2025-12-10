"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcGuestsOptionsByTickets = calcGuestsOptionsByTickets;
exports.filterEventGuests = void 0;
exports.generateRegistrationURL = generateRegistrationURL;
exports.getGuestsOptions = getGuestsOptions;
exports.getShowRegistrationButtonStatus = getShowRegistrationButtonStatus;
var _moment = _interopRequireDefault(require("moment"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _commons = require("./../helpers/commons");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function getShowRegistrationButtonStatus(event, enabled, convertDate) {
  if (event.isDefault) return false;
  if (_constants.SYNCED_EVENT_KINDS.includes(event.kind)) return false;
  const eventEndDate = event.allDay ? (0, _momentTimezone.default)(event.end).add(1, "d").format("YYYY-MM-DD") : (0, _momentTimezone.default)(event.end).format("YYYY-MM-DDTHH:mm:ss");
  const eventTimezone = event.time_zone || _momentTimezone.default.tz.guess();
  const now = _momentTimezone.default.tz(convertDate ? _momentTimezone.default.tz.guess() : eventTimezone).format(event.allDay ? "YYYY-MM-DD" : "YYYY-MM-DDTHH:mm:ss");
  if (eventEndDate <= now) return false;
  return enabled;
}
function generateRegistrationURL(cid, event, registration, urlBase, hasTickets) {
  var _registration$general, _event$origId, _event$repeat;
  if ((_registration$general = registration.general) !== null && _registration$general !== void 0 && _registration$general.external && !hasTickets) {
    var _registration$general2;
    return (0, _commons.validateURL)((_registration$general2 = registration.general) === null || _registration$general2 === void 0 ? void 0 : _registration$general2.url);
  }
  return "".concat(urlBase, "?cid=").concat(cid, "&eventId=").concat(String((_event$origId = event.origId) !== null && _event$origId !== void 0 ? _event$origId : event.id)).concat(event !== null && event !== void 0 && (_event$repeat = event.repeat) !== null && _event$repeat !== void 0 && _event$repeat.type || event !== null && event !== void 0 && event.repeated ? "&startDate=" + event.start.split("T")[0] : "");
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
    count: (_eventCopy$guests$len = eventCopy === null || eventCopy === void 0 || (_eventCopy$guests = eventCopy.guests) === null || _eventCopy$guests === void 0 ? void 0 : _eventCopy$guests.length) !== null && _eventCopy$guests$len !== void 0 ? _eventCopy$guests$len : 0,
    limit: registration.guestsOptions.isLimited ? registration.guestsOptions.limit : "unlimited"
  };
}
function calcGuestsOptionsByTickets(event, tickets) {
  const result = {
    count: 0,
    limit: 0
  };

  //This function is temporary, we should improve this logic.
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