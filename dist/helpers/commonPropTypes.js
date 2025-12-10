"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TICKET_TYPES = exports.TICKET_SALES_TYPES = exports.TICKET_PRICING_TYPES = exports.TICKET_LIMITATION_TYPES = exports.TICKET_BILLING_CYCLE_TYPES = exports.SHAPE_TICKETS = exports.SHAPE_TICKET = exports.SHAPE_REPEAT = exports.SHAPE_REGISTRATION = exports.SHAPE_PLAN = exports.SHAPE_PHYSICAL_LOCATION = exports.SHAPE_ORGANIZER = exports.SHAPE_LOCATION = exports.SHAPE_GUEST_TICKET = exports.SHAPE_GUEST = exports.SHAPE_EVENT = exports.SHAPE_CURRENCY = exports.REGISTRATION_COUNTDOWN_OPTIONS = exports.PT_UID = exports.PT_CLASSNAMES = exports.PT_CID = exports.PLAN_NAME_TYPE = exports.PLAN_NAMES = exports.CURRENCY_TYPES = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PT_CLASSNAMES = exports.PT_CLASSNAMES = _propTypes.default.arrayOf(_propTypes.default.string);
const PT_CID = exports.PT_CID = _propTypes.default.string;
const PT_UID = exports.PT_UID = _propTypes.default.string;
const SHAPE_PHYSICAL_LOCATION = exports.SHAPE_PHYSICAL_LOCATION = _propTypes.default.shape({
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
const SHAPE_GUEST_TICKET = exports.SHAPE_GUEST_TICKET = _propTypes.default.shape({
  label: _propTypes.default.string,
  currency: _propTypes.default.string,
  quantity: _propTypes.default.number,
  price: _propTypes.default.number
});
const SHAPE_GUEST = exports.SHAPE_GUEST = _propTypes.default.shape({
  id: _propTypes.default.string,
  date: _propTypes.default.string,
  firstName: _propTypes.default.string,
  lastName: _propTypes.default.string,
  tickets: _propTypes.default.arrayOf(SHAPE_GUEST_TICKET)
});
const SHAPE_LOCATION = exports.SHAPE_LOCATION = _propTypes.default.shape({
  type: _propTypes.default.oneOf(["physical", "online", "tbd"]),
  values: _propTypes.default.shape({
    physical: SHAPE_PHYSICAL_LOCATION,
    online: _propTypes.default.string,
    tbd: _propTypes.default.string
  })
});
const SHAPE_ORGANIZER = exports.SHAPE_ORGANIZER = _propTypes.default.shape({
  email: _propTypes.default.string,
  name: _propTypes.default.string,
  phone: _propTypes.default.string,
  website: _propTypes.default.string
});
const REGISTRATION_COUNTDOWN_OPTIONS = exports.REGISTRATION_COUNTDOWN_OPTIONS = _propTypes.default.oneOf(["15 mins", "30 mins", "45 mins", "60 mins"]);
const SHAPE_REGISTRATION = exports.SHAPE_REGISTRATION = _propTypes.default.shape({
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
const TICKET_BILLING_CYCLE_TYPES = exports.TICKET_BILLING_CYCLE_TYPES = ["Weekly", "Monthly", "Yearly"];
const PLAN_NAMES = exports.PLAN_NAMES = ["", "starter", "pro", "business"];
const SHAPE_PLAN = exports.SHAPE_PLAN = _propTypes.default.shape({
  cycle: _propTypes.default.oneOf(TICKET_BILLING_CYCLE_TYPES),
  price: _propTypes.default.number,
  duration: _propTypes.default.number,
  id: _propTypes.default.number
});
const SHAPE_CURRENCY = exports.SHAPE_CURRENCY = _propTypes.default.shape({
  id: _propTypes.default.number,
  value: _propTypes.default.string,
  code: _propTypes.default.string,
  symbol: _propTypes.default.string
});
const CURRENCY_TYPES = exports.CURRENCY_TYPES = [{
  id: 0,
  value: "$ Dollar",
  code: "USD",
  symbol: "$"
}, {
  id: 1,
  value: "$ Australian Dollar",
  code: "AUD",
  symbol: "$"
}, {
  id: 2,
  value: "฿ Baht",
  code: "THB",
  symbol: "฿"
}, {
  id: 3,
  value: "DKK Danish Krone",
  code: "DKK",
  symbol: "DKK"
}, {
  id: 4,
  value: "€ Euros",
  code: "EUR",
  symbol: "€"
}, {
  id: 5,
  value: "Ft Forint",
  code: "HUF",
  symbol: "Ft"
}, {
  id: 6,
  value: "CHF Francs",
  code: "CHF",
  symbol: "CHF"
}, {
  id: 7,
  value: "¥ Japanese Yen",
  code: "JPY",
  symbol: "¥"
}, {
  id: 8,
  value: "Kč Koruna",
  code: "CZK",
  symbol: "Kč"
}, {
  id: 9,
  value: "kr Krona",
  code: "SEK",
  symbol: "kr"
}, {
  id: 10,
  value: "$ Mexican Pesos",
  code: "MXN",
  symbol: "$"
}, {
  id: 11,
  value: "£ Pounds Sterling",
  code: "GBP",
  symbol: "£"
}, {
  id: 12,
  value: "RM Ringgit",
  code: "MYR",
  symbol: "RM"
}, {
  id: 13,
  value: "₹ Rupee",
  code: "INR",
  symbol: "₹"
}, {
  id: 14,
  value: "₪ Shekel",
  code: "ILS",
  symbol: "₪"
}, {
  id: 15,
  value: "zł Zloty",
  code: "PLN",
  symbol: "zł"
}];
const TICKET_TYPES = exports.TICKET_TYPES = ["Ticket", "Plan", "Donation"];
const TICKET_PRICING_TYPES = exports.TICKET_PRICING_TYPES = ["Paid", "Free"];
const TICKET_SALES_TYPES = exports.TICKET_SALES_TYPES = ["Dynamic", "Fixed"];
const TICKET_LIMITATION_TYPES = exports.TICKET_LIMITATION_TYPES = ["Unlimited", "Limited"];
const SHAPE_TICKET = exports.SHAPE_TICKET = _propTypes.default.shape({
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
const SHAPE_TICKETS = exports.SHAPE_TICKETS = _propTypes.default.arrayOf(SHAPE_TICKET);
const SHAPE_REPEAT = exports.SHAPE_REPEAT = _propTypes.default.shape({
  type: _propTypes.default.oneOf(["Day", "Week", "Month", "Year"]),
  interval: _propTypes.default.number,
  end: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});
const SHAPE_EVENT = exports.SHAPE_EVENT = _propTypes.default.shape({
  id: _propTypes.default.number.isRequired,
  origId: _propTypes.default.number,
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
  ticketIds: _propTypes.default.arrayOf(_propTypes.default.number),
  ticketEnabled: _propTypes.default.bool,
  repeat: SHAPE_REPEAT
});
const PLAN_NAME_TYPE = exports.PLAN_NAME_TYPE = _propTypes.default.oneOf(PLAN_NAMES);