import moment from "moment";
import { validateURL } from "./../helpers/commons";
import {
  PAYMENT_STATUSES,
  PAYMENT_TYPES,
  SYNCED_EVENT_KINDS,
} from "./constants";

export function getShowRegistrationButtonStatus(event, enabled) {
  if (event.isDefault) return false;
  if (SYNCED_EVENT_KINDS.includes(event.kind)) return false;
  const dateToCompare = event.allDay
    ? moment(event.end).add(1, "d")
    : moment(event.end);
  if (dateToCompare.isSameOrBefore(moment())) return false;
  return enabled;
}

export function generateRegistrationURL(
  cid,
  uid,
  event,
  registration,
  urlBase,
  hasTickets
) {
  if (registration.general?.external && !hasTickets) {
    return validateURL(registration.general?.url);
  }

  return `${urlBase}?uid=${uid}&cid=${cid}&eventId=${String(
    event.origId ?? event.id
  )}${
    event?.repeat?.type || event?.repeated
      ? "&startDate=" + event.start.split("T")[0]
      : ""
  }`;
}

export function getGuestsOptions(event, registration, tickets) {
  const eventCopy = {
    ...event,
    guests: filterEventGuests(event),
  };

  if (!registration.enabled) return null;
  if (SYNCED_EVENT_KINDS.includes(event.kind)) return null;
  if (event.ticketEnabled && tickets?.length)
    return calcGuestsOptionsByTickets(eventCopy, tickets);

  return {
    count: eventCopy?.guests?.length ?? 0,
    limit: registration.guestsOptions.isLimited
      ? registration.guestsOptions.limit
      : "unlimited",
  };
}

export function calcGuestsOptionsByTickets(event, tickets) {
  const result = {
    count: 0,
    limit: 0,
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

export const filterEventGuests = ({ guests, start, repeat, repeated }) => {
  return guests.filter((guest) => {
    if (
      guest.tickets.length &&
      guest.status === PAYMENT_STATUSES.unpaid &&
      guest.paymentType !== PAYMENT_TYPES.cash
    ) {
      return false;
    }

    if (repeat !== null || repeated) {
      return moment(guest.date).isSame(start);
    }

    return true;
  });
};
