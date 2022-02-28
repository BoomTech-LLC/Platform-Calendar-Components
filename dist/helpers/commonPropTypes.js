"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHAPE_EVENT = exports.SHAPE_REPEAT = exports.SHAPE_TICKETS = exports.SHAPE_TICKET_FIELDS = exports.CURRENCY_TYPES = exports.SHAPE_REGISTRATION = exports.SHAPE_ORGANIZER = exports.SHAPE_LOCATION = exports.SHAPE_GUEST = exports.SHAPE_GUEST_TICKET = exports.SHAPE_PHYSICAL_LOCATION = exports.PT_CID = exports.PT_CLASSNAMES = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PT_CLASSNAMES = _propTypes.default.arrayOf(_propTypes.default.string);

exports.PT_CLASSNAMES = PT_CLASSNAMES;
const PT_CID = _propTypes.default.string;
exports.PT_CID = PT_CID;

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

const SHAPE_REGISTRATION = _propTypes.default.shape({
  cid: PT_CID,
  enabled: _propTypes.default.bool,
  external: _propTypes.default.bool,
  adminEmail: _propTypes.default.string,
  url: _propTypes.default.string,
  limited: _propTypes.default.bool,
  limit: _propTypes.default.number,
  showGuests: _propTypes.default.bool
});

exports.SHAPE_REGISTRATION = SHAPE_REGISTRATION;

const CURRENCY_TYPES = _propTypes.default.oneOf(["$ Dollars", "฿ Baht", "€ Euros", "Ft Forint", "CHF Francs", "Kč Koruna", "kr Krona", "$ Mexican Pesos", "£ Pounds Sterling", "RM Ringgit", "₪ Shekel", "zł Zloty", "₹ Rupee"]);

exports.CURRENCY_TYPES = CURRENCY_TYPES;

const SHAPE_TICKET_FIELDS = _propTypes.default.shape({
  label: _propTypes.default.string,
  price: _propTypes.default.number,
  free: _propTypes.default.bool,
  limited: _propTypes.default.bool,
  limit: _propTypes.default.number
});

exports.SHAPE_TICKET_FIELDS = SHAPE_TICKET_FIELDS;

const SHAPE_TICKETS = _propTypes.default.shape({
  enabled: _propTypes.default.bool,
  fee: _propTypes.default.number,
  showLimit: _propTypes.default.bool,
  currency: CURRENCY_TYPES,
  list: _propTypes.default.arrayOf(SHAPE_TICKET_FIELDS)
});

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
  tickets: SHAPE_TICKETS,
  repeat: SHAPE_REPEAT
});

exports.SHAPE_EVENT = SHAPE_EVENT;