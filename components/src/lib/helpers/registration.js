import moment from "moment";
import {encodeId} from './commons'

export function getShowRegistrationButtonStatus(event, enabled) {
  if(moment(event.end).isBefore(moment())) return false
  return enabled
}

export function generateRegistrationURL(cid, event, registration, urlBase) {
  if(registration.general.external) return registration.general.url
  return `${urlBase}${encodeId(event.id.toString())}?cid=${cid}${event?.repeat?.type ? '&startDate='+event.start.split('T')[0] : ''}`
}

export function getGuestsOptions(event, registration, tickets) {
  if(!registration.enabled) return null
  if(tickets?.enabled && event.guests?.length && event.guests?.tickets?.length) return calcGuestsOptionsByTickets(event, tickets)
  return {
    count: event?.guests?.length ?? 0,
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
      if(
        !guest.date || 
        (event?.repeat?.type && moment(guest.date).format('DD-MM-YYYY') === moment(event.start).format('DD-MM-YYYY'))
      ) {
        result.count += guestTicket.quantity
      }
    })
  }
  return result
}