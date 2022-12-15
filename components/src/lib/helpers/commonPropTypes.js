import PropTypes from "prop-types";

export const PT_CLASSNAMES = PropTypes.arrayOf(PropTypes.string)

export const PT_CID = PropTypes.string
export const PT_UID = PropTypes.string

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

export const REGISTRATION_COUNTDOWN_OPTIONS = PropTypes.oneOf([
    '15 mins',
    '30 mins',
    '45 mins',
    '60 mins',
])

export const SHAPE_REGISTRATION = PropTypes.shape({
    cid: PT_CID,
    enabled: PropTypes.bool,
    general: PropTypes.shape({
        admin: PropTypes.string,
        external: PropTypes.bool,
        url: PropTypes.string,
        countDount: REGISTRATION_COUNTDOWN_OPTIONS,
    }),
    guestsOptions: PropTypes.shape({
        isLimited: PropTypes.bool,
        limit: PropTypes.number,
        show: PropTypes.bool,
    })
})

export const TICKET_BILLING_CYCLE_TYPES = [ 'Weekly', 'Monthly', 'Yearly' ]

export const PLAN_NAMES = [ '', 'starter', 'pro', 'bussiness' ]

export const SHAPE_PLAN = PropTypes.shape({
    cycle: PropTypes.oneOf(TICKET_BILLING_CYCLE_TYPES),
    price: PropTypes.number,
    duration: PropTypes.number,
    id: PropTypes.number
})

export const SHAPE_CURRENCY = PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    code: PropTypes.string,
    symbol: PropTypes.string
})

export const CURRENCY_TYPES = [
    { id: 0, value: '$ Dollars', code:'USD', symbol: '$' },
    { id: 1, value: '฿ Baht', code:'THB', symbol: '฿' },
    { id: 2, value: '€ Euros', code:'EUR', symbol: '€' },
    { id: 3, value: 'Ft Forint', code:'HUF', symbol: 'Ft' },
    { id: 4, value: 'CHF Francs', code:'CHF', symbol: 'CHF' },
    { id: 5, value: 'Kč Koruna', code:'CZK', symbol: 'Kč' },
    { id: 6, value: 'kr Krona', code:'SEK', symbol: 'kr' },
    { id: 7, value: '$ Mexican Pesos', code:'MXN', symbol: '$'},
    { id: 8, value: '£ Pounds Sterling', code:'GBP', symbol: '£'},
    { id: 9, value: 'RM Ringgit', code:'MYR', symbol: 'RM' },
    { id: 10, value: '₪ Shekel', code:'ILS', symbol: '₪' },
    { id: 11, value: 'zł Zloty', code:'PLN', symbol: 'zł' },
    { id: 13, value: '₹ Rupee', code:'INR', symbol: '₹' },
]

export const TICKET_TYPES = [ 'Ticket', 'Plan', 'Donation' ]

export const TICKET_PRICING_TYPES = [ 'Paid', 'Free' ]

export const TICKET_SALES_TYPES = [ 'Dynamic', 'Fixed' ]

export const TICKET_LIMITATION_TYPES = [ 'Unlimited', 'Limited' ]

export const SHAPE_TICKET= PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.oneOf(TICKET_TYPES),
    price: PropTypes.shape({
        type: PropTypes.oneOf(TICKET_PRICING_TYPES),
        amount: PropTypes.number
    }),
    plans: PropTypes.arrayOf(SHAPE_PLAN),
    sales: PropTypes.shape({
        type: PropTypes.oneOf(TICKET_SALES_TYPES),
        Dynamic: PropTypes.shape({
            start: PropTypes.string
        }),
        Fixed: PropTypes.shape({
            start: PropTypes.string,
            end: PropTypes.string
        })
    }),
    limit: PropTypes.shape({
        type: PropTypes.oneOf(TICKET_LIMITATION_TYPES),
        quantity: PropTypes.number,
        show: PropTypes.bool,
        perOrder: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number
        })
    }),
    description: PropTypes.string
})

export const SHAPE_TICKETS = PropTypes.arrayOf(SHAPE_TICKET)

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
    ticketIds: PropTypes.arrayOf(PropTypes.number),
    ticketEnabled: PropTypes.bool,
    repeat: SHAPE_REPEAT
})

export const PLAN_NAME_TYPE = PropTypes.oneOf(PLAN_NAMES)