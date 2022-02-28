"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowRegistrationButtonStatus = getShowRegistrationButtonStatus;
exports.generateRegistrationURL = generateRegistrationURL;
exports.getGuestsOptions = getGuestsOptions;
exports.calcGuestsOptionsByTickets = calcGuestsOptionsByTickets;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _moment = _interopRequireDefault(require("moment"));

var _commons = require("./commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getShowRegistrationButtonStatus(event, enabled) {
  if ((0, _moment.default)(event.end).isBefore((0, _moment.default)())) return false;
  return enabled;
}

function generateRegistrationURL(cid, event, registration, urlBase) {
  var _event$repeat;

  if (registration.external) return registration.url;
  return "".concat(urlBase).concat((0, _commons.encodeId)(String(event.id)), "?cid=").concat(cid).concat(event !== null && event !== void 0 && (_event$repeat = event.repeat) !== null && _event$repeat !== void 0 && _event$repeat.type ? '&startDate=' + event.start.split('T')[0] : '');
}

function getGuestsOptions(event, registration, tickets) {
  var _event$guests, _event$guests2, _event$guests2$ticket, _event$guests$length, _event$guests3;

  if (!registration.enabled || registration.external) return null;
  if (tickets !== null && tickets !== void 0 && tickets.enabled && (_event$guests = event.guests) !== null && _event$guests !== void 0 && _event$guests.length && (_event$guests2 = event.guests) !== null && _event$guests2 !== void 0 && (_event$guests2$ticket = _event$guests2.tickets) !== null && _event$guests2$ticket !== void 0 && _event$guests2$ticket.length) return calcGuestsOptionsByTickets(event, tickets);
  return {
    count: (_event$guests$length = event === null || event === void 0 ? void 0 : (_event$guests3 = event.guests) === null || _event$guests3 === void 0 ? void 0 : _event$guests3.length) !== null && _event$guests$length !== void 0 ? _event$guests$length : 0,
    limit: registration.guestsLimit
  };
}

function calcGuestsOptionsByTickets(event, tickets) {
  if (!tickets.showLimit) return null;
  let result = {
    count: event.guests.length,
    limit: tickets.list.length
  };

  for (let guest of event.guests) {
    guest.tickets.forEach(guestTicket => {
      var _event$repeat2;

      if (!guest.date || event !== null && event !== void 0 && (_event$repeat2 = event.repeat) !== null && _event$repeat2 !== void 0 && _event$repeat2.type && (0, _moment.default)(guest.date).format('DD-MM-YYYY') === (0, _moment.default)(event.start).format('DD-MM-YYYY')) {
        result.count += guestTicket.quantity;
      }
    });
  }

  return result;
}