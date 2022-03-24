import moment from "moment";
import { validateURL } from './../helpers/commons'

export function getShowRegistrationButtonStatus(event, enabled) {
  if(event.isDefault) return false
  const dateToCompare = event.allDay ? moment(event.end).add(1, 'd') : moment(event.end)
  if(dateToCompare.isSameOrBefore(moment())) return false
  return enabled
}

export function generateRegistrationURL(cid, uid, event, registration, urlBase) {
  if(registration.general?.external) return validateURL(registration.general?.url)
  return `${urlBase}${uid}/${cid}/${String(event.id)}${(event?.repeat?.type || event?.repeated) ? '?startDate='+event.start.split('T')[0] : ''}`
}

export function getGuestsOptions(event, registration, tickets) {
  const eventCopy = {
    ...event,
    guests: filterEventGuests(event)
  }
  
  if(!registration.enabled) return null
  if(tickets?.enabled && eventCopy.guests?.length && eventCopy.guests?.tickets?.length) return calcGuestsOptionsByTickets(eventCopy, tickets)
  return {
    count: eventCopy?.guests?.length ?? 0,
    limit: registration.guestsOptions.limit
  }
}

export function calcGuestsOptionsByTickets(event, tickets) {
  if(!tickets.showLimit) return null
  let result = {
    count: event.guests.length,
    limit: tickets.list.length
  }
  for(let guest of event.guests) {
    guest.tickets.forEach(guestTicket => {
        result.count += guestTicket.quantity
    })
  }
  return result
}

export const filterEventGuests = ({guests, start, repeat, repeated}) => {
  if(!repeat?.type && !repeated) return guests;

  return guests.filter(({date}) => moment(date).isSame(start))
}
