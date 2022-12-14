import { TICKET_PRICING_TYPES, TICKET_TYPES } from "./commonPropTypes";

export const roundNumber = (num) => {
  if (num % 1 === 0) return num;

  if (num * 100 > Number.MAX_SAFE_INTEGER) return Math.round(num);

  return Math.round(num * 100) / 100;
};

export const getPlanCycleMonthlyPrice = ({
  cycle,
  price,
  showPriceMonthly,
  duration,
}) => {
  const countedPrice = price / duration;

  if (showPriceMonthly && cycle === TICKET_BILLING_CYCLE_TYPES[2])
    return roundNumber(countedPrice / 12);

  return roundNumber(countedPrice);
};

export const getTicketPrice = (ticket) => {
  if (ticket.type === TICKET_TYPES[2]) {
    return [];
  } else if (ticket.price.type === TICKET_PRICING_TYPES[1]) {
    return [0];
  } else if (ticket.type === TICKET_TYPES[1]) {
    const prices = ticket.plans.map((plan) => getPlanCycleMonthlyPrice(plan));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return [minPrice, maxPrice];
  } else {
    return [ticket.price.amount];
  }
};

export const calculateTicketsPriceRange = ({
  tickets,
  currency,
  priceFormat,
}) => {
  const prices = [];
  const types = [];

  for (let ticket of tickets) {
    if (ticket.type === TICKET_TYPES[2] && !types.includes(TICKET_TYPES[2])) {
      types.push(TICKET_TYPES[2]);
    }
    if (!types.includes(ticket.price.type) && ticket.type !== TICKET_TYPES[2]) {
      types.push(ticket.price.type);
    }
    prices.push(...getTicketPrice(ticket));
  }

  if (types.length === 1 && types[0] !== TICKET_PRICING_TYPES[0])
    return types[0];

  if (!types.includes(TICKET_PRICING_TYPES[0])) return TICKET_PRICING_TYPES[1];

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const formatWithCurrency = priceFormat.replace("$", currency.symbol);

  return `${formatWithCurrency.replace("100", min)} ${
    max !== min ? `- ${formatWithCurrency.replace("100", max)}` : ""
  }`;
};
