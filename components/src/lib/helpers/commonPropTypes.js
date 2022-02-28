import PropTypes from "prop-types";

export const PT_CLASSNAMES = PropTypes.arrayOf(PropTypes.string)

export const PT_CID = PropTypes.string

export const SHAPE_PHYSICAL_LOCATION = PropTypes.shape({
    address: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    city: PropTypes.string,
    statesList: PropTypes.string,
    country: PropTypes.string,
    postal: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number
})

export const SHAPE_GUEST_TICKET = PropTypes.shape({
    label: PropTypes.string,
    currency: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
})

export const SHAPE_GUEST = PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    tickets: PropTypes.arrayOf(SHAPE_GUEST_TICKET)
})

export const SHAPE_LOCATION = PropTypes.shape({
    type: PropTypes.oneOf(['physical', 'online', 'tbd']),
    values: PropTypes.shape({
        physical: SHAPE_PHYSICAL_LOCATION,
        online: PropTypes.string,
        tbd: PropTypes.string
    })
})

export const SHAPE_ORGANIZER = PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string
})

export const SHAPE_REGISTRATION = PropTypes.shape({
    cid: PT_CID,
    enabled: PropTypes.bool,
    external: PropTypes.bool,
    adminEmail: PropTypes.string,
    url: PropTypes.string,
    limited: PropTypes.bool,
    limit: PropTypes.number,
    showGuests: PropTypes.bool
})

export const CURRENCY_TYPES = PropTypes.oneOf(["$ Dollars", "฿ Baht", "€ Euros", "Ft Forint", "CHF Francs", "Kč Koruna", "kr Krona", "$ Mexican Pesos", "£ Pounds Sterling", "RM Ringgit", "₪ Shekel", "zł Zloty", "₹ Rupee"])

export const SHAPE_TICKET_FIELDS = PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.number,
    free: PropTypes.bool,
    limited: PropTypes.bool,
    limit: PropTypes.number
})

export const SHAPE_TICKETS = PropTypes.shape({
    enabled: PropTypes.bool,
    fee: PropTypes.number,
    showLimit: PropTypes.bool,
    currency: CURRENCY_TYPES,
    list: PropTypes.arrayOf(SHAPE_TICKET_FIELDS)
})

export const SHAPE_REPEAT = PropTypes.shape({
    type: PropTypes.oneOf([ 'Day', 'Week', 'Month', 'Year']),
    interval: PropTypes.number,
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
})

export const SHAPE_EVENT = PropTypes.shape({
    id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    kind: PropTypes.number,
    title: PropTypes.string,
    start: PropTypes.string,
    allDay: PropTypes.bool,
    startMs: PropTypes.number,
    end: PropTypes.string,
    endMs: PropTypes.number,
    image: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
    scheduledOn: PropTypes.string,
    location: SHAPE_LOCATION,
    organizer: SHAPE_ORGANIZER,
    guests: PropTypes.arrayOf(SHAPE_GUEST),
    registration: SHAPE_REGISTRATION,
    tickets: SHAPE_TICKETS,
    repeat: SHAPE_REPEAT
})

