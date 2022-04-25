import { TICKET_PRICING_TYPES, TICKET_TYPES } from "./commonPropTypes";

export const getTicketPrice = (ticket) => {
    if(ticket.type === TICKET_TYPES[2] || ticket.price.type === TICKET_PRICING_TYPES[1]){
        return [0];
    }else if(ticket.type === TICKET_TYPES[1]){
        const prices = ticket.plans.map(plan => plan.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        return [minPrice, maxPrice]
    }else{
        return [ticket.price.amount];
    }
}

export const calculateTicketsPriceRange = ({tickets, currency, showCurrencyAs}) => {
    const prices = [];
    for(let ticket of tickets){
        prices.push(...getTicketPrice(ticket));
    }
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    if(min === 0 && max === 0){
        return 'Free';
    }
    return `${currency[showCurrencyAs]} ${min} ${max !== min ? `- ${max}` : ''}`;
}