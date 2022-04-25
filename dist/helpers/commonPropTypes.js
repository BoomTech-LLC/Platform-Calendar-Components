"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHAPE_EVENT = exports.SHAPE_REPEAT = exports.SHAPE_TICKETS = exports.SHAPE_TICKET = exports.TICKET_LIMITATION_TYPES = exports.TICKET_SALES_TYPES = exports.TICKET_PRICING_TYPES = exports.TICKET_TYPES = exports.CURRENCY_TYPES = exports.SHAPE_CURRENCY = exports.SHAPE_PLAN = exports.TICKET_BILLING_CYCLE_TYPES = exports.SHAPE_REGISTRATION = exports.REGISTRATION_COUNTDOWN_OPTIONS = exports.SHAPE_ORGANIZER = exports.SHAPE_LOCATION = exports.SHAPE_GUEST = exports.SHAPE_GUEST_TICKET = exports.SHAPE_PHYSICAL_LOCATION = exports.PT_UID = exports.PT_CID = exports.PT_CLASSNAMES = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PT_CLASSNAMES = _propTypes.default.arrayOf(_propTypes.default.string);

exports.PT_CLASSNAMES = PT_CLASSNAMES;
const PT_CID = _propTypes.default.string;
exports.PT_CID = PT_CID;
const PT_UID = _propTypes.default.string;
exports.PT_UID = PT_UID;

const SHAPE_PHYSICAL_LOCATION = _propTypes.default.shape({
  address: _propTypes.default.string,
  email: _propTypes.default.string,
  name: _propTypes.default.string,
  phone: _propTypes.default.string,
  website: _propTypes.default.string,
  city: _propTypes.default.string,
  statesList: _propTypes.default.string,
  country: _propTypes.default.string,
  postal: _propTypes.default.string,
  lat: _propTypes.default.number,
  lng: _propTypes.default.number
});

exports.SHAPE_PHYSICAL_LOCATION = SHAPE_PHYSICAL_LOCATION;

const SHAPE_GUEST_TICKET = _propTypes.default.shape({
  label: _propTypes.default.string,
  currency: _propTypes.default.string,
  quantity: _propTypes.default.number,
  price: _propTypes.default.number
});

exports.SHAPE_GUEST_TICKET = SHAPE_GUEST_TICKET;

const SHAPE_GUEST = _propTypes.default.shape({
  id: _propTypes.default.string,
  date: _propTypes.default.string,
  firstName: _propTypes.default.string,
  lastName: _propTypes.default.string,
  tickets: _propTypes.default.arrayOf(SHAPE_GUEST_TICKET)
});

exports.SHAPE_GUEST = SHAPE_GUEST;

const SHAPE_LOCATION = _propTypes.default.shape({
  type: _propTypes.default.oneOf(['physical', 'online', 'tbd']),
  values: _propTypes.default.shape({
    physical: SHAPE_PHYSICAL_LOCATION,
    online: _propTypes.default.string,
    tbd: _propTypes.default.string
  })
});

exports.SHAPE_LOCATION = SHAPE_LOCATION;

const SHAPE_ORGANIZER = _propTypes.default.shape({
  email: _propTypes.default.string,
  name: _propTypes.default.string,
  phone: _propTypes.default.string,
  website: _propTypes.default.string
});

exports.SHAPE_ORGANIZER = SHAPE_ORGANIZER;

const REGISTRATION_COUNTDOWN_OPTIONS = _propTypes.default.oneOf(['15 mins', '30 mins', '45 mins', '60 mins']);

exports.REGISTRATION_COUNTDOWN_OPTIONS = REGISTRATION_COUNTDOWN_OPTIONS;

const SHAPE_REGISTRATION = _propTypes.default.shape({
  cid: PT_CID,
  enabled: _propTypes.default.bool,
  general: _propTypes.default.shape({
    admin: _propTypes.default.string,
    external: _propTypes.default.bool,
    url: _propTypes.default.string,
    countDount: REGISTRATION_COUNTDOWN_OPTIONS
  }),
  guestsOptions: _propTypes.default.shape({
    isLimited: _propTypes.default.bool,
    limit: _propTypes.default.number,
    show: _propTypes.default.bool
  })
});

exports.SHAPE_REGISTRATION = SHAPE_REGISTRATION;
const TICKET_BILLING_CYCLE_TYPES = ['Weekly', 'Monthly', 'Yearly'];
exports.TICKET_BILLING_CYCLE_TYPES = TICKET_BILLING_CYCLE_TYPES;

const SHAPE_PLAN = _propTypes.default.shape({
  cycle: _propTypes.default.oneOf(TICKET_BILLING_CYCLE_TYPES),
  price: _propTypes.default.number,
  duration: _propTypes.default.number,
  id: _propTypes.default.number
});

exports.SHAPE_PLAN = SHAPE_PLAN;

const SHAPE_CURRENCY = _propTypes.default.shape({
  id: _propTypes.default.number,
  value: _propTypes.default.string,
  code: _propTypes.default.string,
  symbol: _propTypes.default.string
});

exports.SHAPE_CURRENCY = SHAPE_CURRENCY;
const CURRENCY_TYPES = [{
  id: 0,
  value: '$ Dollars',
  code: 'USD',
  symbol: '$'
}, {
  id: 1,
  value: '฿ Baht',
  code: 'THB',
  symbol: '฿'
}, {
  id: 2,
  value: '€ Euros',
  code: 'EUR',
  symbol: '€'
}, {
  id: 3,
  value: 'Ft Forint',
  code: 'HUF',
  symbol: 'Ft'
}, {
  id: 4,
  value: 'CHF Francs',
  code: 'CHF',
  symbol: 'CHF'
}, {
  id: 5,
  value: 'Kč Koruna',
  code: 'CZK',
  symbol: 'Kč'
}, {
  id: 6,
  value: 'kr Krona',
  code: 'SEK',
  symbol: 'kr'
}, {
  id: 7,
  value: '$ Mexican Pesos',
  code: 'MXN',
  symbol: '$'
}, {
  id: 8,
  value: '£ Pounds Sterling',
  code: 'GBP',
  symbol: '£'
}, {
  id: 9,
  value: 'RM Ringgit',
  code: 'MYR',
  symbol: 'RM'
}, {
  id: 10,
  value: '₪ Shekel',
  code: 'ILS',
  symbol: '₪'
}, {
  id: 11,
  value: 'zł Zloty',
  code: 'PLN',
  symbol: 'zł'
}, {
  id: 13,
  value: '₹ Rupee',
  code: 'INR',
  symbol: '₹'
}];
exports.CURRENCY_TYPES = CURRENCY_TYPES;
const TICKET_TYPES = ['Ticket', 'Plan', 'Donation'];
exports.TICKET_TYPES = TICKET_TYPES;
const TICKET_PRICING_TYPES = ['Paid', 'Free'];
exports.TICKET_PRICING_TYPES = TICKET_PRICING_TYPES;
const TICKET_SALES_TYPES = ['Dynamic', 'Fixed'];
exports.TICKET_SALES_TYPES = TICKET_SALES_TYPES;
const TICKET_LIMITATION_TYPES = ['Unlimited', 'Limited'];
exports.TICKET_LIMITATION_TYPES = TICKET_LIMITATION_TYPES;

const SHAPE_TICKET = _propTypes.default.shape({
  id: _propTypes.default.number,
  name: _propTypes.default.string,
  type: _propTypes.default.oneOf(TICKET_TYPES),
  price: _propTypes.default.shape({
    type: _propTypes.default.oneOf(TICKET_PRICING_TYPES),
    amount: _propTypes.default.number
  }),
  plans: _propTypes.default.arrayOf(SHAPE_PLAN),
  sales: _propTypes.default.shape({
    type: _propTypes.default.oneOf(TICKET_SALES_TYPES),
    Dynamic: _propTypes.default.shape({
      start: _propTypes.default.string
    }),
    Fixed: _propTypes.default.shape({
      start: _propTypes.default.string,
      end: _propTypes.default.string
    })
  }),
  limit: _propTypes.default.shape({
    type: _propTypes.default.oneOf(TICKET_LIMITATION_TYPES),
    quantity: _propTypes.default.number,
    show: _propTypes.default.bool,
    perOrder: _propTypes.default.shape({
      min: _propTypes.default.number,
      max: _propTypes.default.number
    })
  }),
  description: _propTypes.default.string
});

exports.SHAPE_TICKET = SHAPE_TICKET;

const SHAPE_TICKETS = _propTypes.default.arrayOf(SHAPE_TICKET);

exports.SHAPE_TICKETS = SHAPE_TICKETS;

const SHAPE_REPEAT = _propTypes.default.shape({
  type: _propTypes.default.oneOf(['Day', 'Week', 'Month', 'Year']),
  interval: _propTypes.default.number,
  end: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});

exports.SHAPE_REPEAT = SHAPE_REPEAT;

const SHAPE_EVENT = _propTypes.default.shape({
  id: _propTypes.default.number.isRequired,
  key: _propTypes.default.string.isRequired,
  kind: _propTypes.default.number,
  title: _propTypes.default.string,
  start: _propTypes.default.string,
  allDay: _propTypes.default.bool,
  startMs: _propTypes.default.number,
  end: _propTypes.default.string,
  endMs: _propTypes.default.number,
  image: _propTypes.default.string,
  desc: _propTypes.default.string,
  color: _propTypes.default.string,
  scheduledOn: _propTypes.default.string,
  location: SHAPE_LOCATION,
  organizer: SHAPE_ORGANIZER,
  guests: _propTypes.default.arrayOf(SHAPE_GUEST),
  registration: SHAPE_REGISTRATION,
  ticketIds: _propTypes.default.arrayOf(SHAPE_TICKET.id),
  ticketEnabled: _propTypes.default.bool,
  repeat: SHAPE_REPEAT
});

exports.SHAPE_EVENT = SHAPE_EVENT;