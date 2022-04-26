"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTicketsPriceRange = exports.getTicketPrice = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _commonPropTypes = require("./commonPropTypes");

const getTicketPrice = ticket => {
  if (ticket.type === _commonPropTypes.TICKET_TYPES[2] || ticket.price.type === _commonPropTypes.TICKET_PRICING_TYPES[1]) {
    return [0];
  } else if (ticket.type === _commonPropTypes.TICKET_TYPES[1]) {
    const prices = ticket.plans.map(plan => plan.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return [minPrice, maxPrice];
  } else {
    return [ticket.price.amount];
  }
};

exports.getTicketPrice = getTicketPrice;

const calculateTicketsPriceRange = _ref => {
  let {
    tickets,
    currency,
    showCurrencyAs
  } = _ref;
  const prices = [];

  for (let ticket of tickets) {
    prices.push(...getTicketPrice(ticket));
  }

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === 0 && max === 0) {
    return 'Free';
  }

  return "".concat(currency[showCurrencyAs]).concat(min, " ").concat(max !== min ? "- ".concat(currency[showCurrencyAs]).concat(max) : '');
};

exports.calculateTicketsPriceRange = calculateTicketsPriceRange;