import { TICKET_PRICING_TYPES, TICKET_TYPES } from "./commonPropTypes";

export const getTicketDisplayPrice = ({ticket, currency, showCurrencyAs}) => {
    console.log(ticket, currency, showCurrencyAs);
    if(ticket.type === TICKET_TYPES[2]){
        return 'Donation';
    }else if(ticket.type === TICKET_TYPES[1]){
        const prices = ticket.plans.map(plan => plan.price);
        const minPrice = Math.min(...prices);
        const maxProce = Math.max(...prices);
        return `${currency[showCurrencyAs]} ${minPrice === maxProce ? minPrice : `${minPrice} - ${maxProce}`}`;
    }else if(ticket.price.type === TICKET_PRICING_TYPES[1]){
        return 'Free';
    }else{
        return `${currency[showCurrencyAs]} ${ticket.price.amount}`;
    }
}