"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTicketsPriceRange = exports.getTicketPrice = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _commonPropTypes = require("./commonPropTypes");

const getTicketPrice = ticket => {
  if (ticket.type === _commonPropTypes.TICKET_TYPES[2]) {
    return [];
  } else if (ticket.price.type === _commonPropTypes.TICKET_PRICING_TYPES[1]) {
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
    priceFormat
  } = _ref;
  const prices = [];
  const types = [];

  for (let ticket of tickets) {
    if (ticket.type === _commonPropTypes.TICKET_TYPES[2] && !types.includes(_commonPropTypes.TICKET_TYPES[2])) {
      types.push(_commonPropTypes.TICKET_TYPES[2]);
    }

    if (!types.includes(ticket.price.type)) {
      types.push(ticket.price.type);
    }

    prices.push(...getTicketPrice(ticket));
  }

  if (types.length === 1 && types[0] !== _commonPropTypes.TICKET_PRICING_TYPES[0]) {
    return types[0];
  }

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const formatWithCurrency = priceFormat.replace('$', currency.symbol);
  return "".concat(formatWithCurrency.replace('100', min), " ").concat(max !== min ? "- ".concat(formatWithCurrency.replace('100', max)) : '');
};

exports.calculateTicketsPriceRange = calculateTicketsPriceRange;