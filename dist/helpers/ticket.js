"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTicketDisplayPrice = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _commonPropTypes = require("./commonPropTypes");

const getTicketDisplayPrice = _ref => {
  let {
    ticket,
    currency,
    showCurrencyAs
  } = _ref;
  console.log(ticket, currency, showCurrencyAs);

  if (ticket.type === _commonPropTypes.TICKET_TYPES[2]) {
    return 'Donation';
  } else if (ticket.type === _commonPropTypes.TICKET_TYPES[1]) {
    const prices = ticket.plans.map(plan => plan.price);
    const minPrice = Math.min(...prices);
    const maxProce = Math.max(...prices);
    return "".concat(currency[showCurrencyAs], " ").concat(minPrice === maxProce ? minPrice : "".concat(minPrice, " - ").concat(maxProce));
  } else if (ticket.price.type === _commonPropTypes.TICKET_PRICING_TYPES[1]) {
    return 'Free';
  } else {
    return "".concat(currency[showCurrencyAs], " ").concat(ticket.price.amount);
  }
};

exports.getTicketDisplayPrice = getTicketDisplayPrice;