"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadSharer = downloadSharer;
exports.openAddToUrl = openAddToUrl;
exports.setLocation = setLocation;
exports.openShareUrl = openShareUrl;
exports.generateEventUrl = generateEventUrl;
exports.copyLink = copyLink;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _moment = _interopRequireDefault(require("moment"));

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function downloadSharer(e, type, event) {
  var _event$venue, _event$organizer;

  const venue = (_event$venue = event === null || event === void 0 ? void 0 : event.venue) !== null && _event$venue !== void 0 ? _event$venue : {};
  const organizer = (_event$organizer = event === null || event === void 0 ? void 0 : event.organizer) !== null && _event$organizer !== void 0 ? _event$organizer : {};
  e.stopPropagation();
  let desc = "\n        ".concat(event.desc ? "".concat(event.desc.replace(/&lt/g, '<').replace(/&gt/g, '>').replace(/&nbsp/g, ' '), "  ") : '', "\n        ").concat(venue.name || venue.phone || venue.email || venue.website ? '<p><b>Venue Details.</b></p>  ' : '').concat(venue.name ? "".concat(venue.name, ",<br/>  ") : '').concat(venue.phone ? "".concat(venue.phone, ",<br/>  ") : '').concat(venue.email ? "".concat(venue.email, ",<br/>  ") : '').concat(venue.website ? "".concat(venue.website, ".<br/>  ") : '', "\n        ").concat(organizer.name || organizer.phone || organizer.email || organizer.website ? '<p><b>Organizer</b></p>  ' : '').concat(organizer.name ? "".concat(organizer.name, ",<br/>  ") : '').concat(organizer.phone ? "".concat(organizer.phone, ",<br/>  ") : '').concat(organizer.email ? "".concat(organizer.email, ",<br/>  ") : '').concat(organizer.website ? "".concat(organizer.website, ".<br/>  ") : '', "\n    ");
  let icsSharer = "https://calendar.boomte.ch/createIcsFile?title=".concat(event.title, "&desc=").concat(encodeURIComponent(type === 'icalendar' ? desc.replace(/(<([^>]+)>)/ig, '') : desc), "&start=").concat(event.start, "&end=").concat(event.end, "&address=").concat(encodeURIComponent(venue.address));
  window.location.href = icsSharer;
}

function openAddToUrl(e, type, event) {
  e.stopPropagation();
  let eventDescription = '';
  let url;

  switch (type) {
    case 'google':
      eventDescription = event.desc ? createDesc(event, 'google') : '';
      if (event.all_day) url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + (0, _moment.default)(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + '/' + (0, _moment.default)(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD') + '&details=' + (event.desc ? eventDescription : '') + '&location=' + setLocation(event, 'encode') + '&sprop=name';else url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + (0, _moment.default)(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + '/' + (0, _moment.default)(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&details=' + (event.desc ? eventDescription : '') + '&location=' + setLocation(event, 'encode') + '&sprop=name';
      break;

    case 'yahoo':
      eventDescription = event.desc ? createDesc(event, 'yahoo') : '';
      if (event.all_day) url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=' + (event.all_day ? 'all_day' : '') + '&TITLE=' + encodeURIComponent(event.title) + '&ST=' + (0, _moment.default)(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + '&ET=' + (0, _moment.default)(formatForAddtoCalendar(event, 'end', 'yahoo')).format('YYYYMMDD') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);else url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=' + encodeURIComponent(event.title) + '&ST=' + (0, _moment.default)(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + '&ET=' + (0, _moment.default)(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);
      break;

    default:
      console.error('undefined calendar type');
  }

  window.open(url, '_blank');
  return;
}

function formatForAddtoCalendar(event, key, type) {
  let fullStart, fullEnd;

  if (event.all_day) {
    fullStart = (0, _moment.default)(event.start).format('YYYY-MM-DD');

    if (event.end !== event.start) {
      fullEnd = (0, _moment.default)(event.end).add(1, 'days').format('YYYY-MM-DD');
    } else {
      fullEnd = (0, _moment.default)(event.end).format('YYYY-MM-DD');
      if (type !== 'yahoo') fullEnd = (0, _moment.default)(event.end).add(1, 'days').format('YYYY-MM-DD');
    }
  } else {
    fullStart = (0, _moment.default)(event.start).format('YYYY-MM-DDTHH:mm:ss');
    fullEnd = (0, _moment.default)(event.end).format('YYYY-MM-DDTHH:mm:ss');
  }

  if (type === 'yahoo' && event.end !== event.start) fullEnd = (0, _moment.default)(fullEnd).subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss');
  return key === 'start' ? fullStart : fullEnd;
}

function setLocation(event, key) {
  if (event.location) {
    if (key === 'encode') return encodeURIComponent(event.location);else return event.location;
  }

  let venue = event.venue;

  if (venue && venue.address) {
    const subDataToProcess = [venue.address, venue.city, venue.statesList, venue.postal, venue.country];
    return arrStringify(subDataToProcess, '+');
  }

  return '';
}

const arrStringify = function arrStringify(arr) {
  let separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return arr.filter(v => !!v).map(v => encodeURIComponent(v)).join(separator);
};

const plainTextFromHTML = htmlStr => {
  let div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.textContent || div.innerText || "";
};

const createDesc = (event, type) => {
  var _event$venue2, _event$organizer2, _Object$values, _Object$values2;

  const venue = (_event$venue2 = event.venue) !== null && _event$venue2 !== void 0 ? _event$venue2 : {};
  const organizer = (_event$organizer2 = event.organizer) !== null && _event$organizer2 !== void 0 ? _event$organizer2 : {};
  return "".concat(event.desc ? "".concat(encodeURIComponent(type === 'yahoo' ? plainTextFromHTML(event.desc) : event.desc)) : "", "\n    ").concat(((_Object$values = Object.values(venue)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0 ? "%0D%0A%0D%0AVenue Details:%0D%0A" : "", "\n    ").concat(venue.name ? "".concat(encodeURIComponent(venue.name), "%0D%0A") : "", "\n    ").concat(venue.phone ? "".concat(encodeURIComponent(venue.phone), "%0D%0A") : "", "\n    ").concat(venue.email ? "".concat(encodeURIComponent(venue.email), "%0D%0A") : "", "\n    ").concat(venue.website ? "".concat(encodeURIComponent(venue.website), "%0D%0A%0D%0A") : "", "\n    ").concat(((_Object$values2 = Object.values(organizer)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.length) > 0 ? "%0D%0A%0D%0AOrganizer Details:%0D%0A" : "", "\n    ").concat(organizer.name ? "".concat(encodeURIComponent(organizer.name), "%0D%0A") : "", "\n    ").concat(organizer.phone ? "".concat(encodeURIComponent(organizer.phone), "%0D%0A") : "", "\n    ").concat(organizer.email ? "".concat(encodeURIComponent(organizer.email), "%0D%0A") : "", "\n    ").concat(organizer.website ? "".concat(encodeURIComponent(organizer.website)) : "");
};

function openShareUrl(e, type, eventUrl) {
  e.stopPropagation();
  let base,
      isFb = type === 'facebook';

  switch (type) {
    case 'facebook':
      base = 'https://facebook.com/sharer/sharer.php?u=';
      break;

    case 'linkedin':
      base = 'https://www.linkedin.com/sharing/share-offsite/?url=';
      break;

    case 'twitter':
      base = 'http://twitter.com/share?url=';
      break;

    default:
      console.error('undefined share url type');
  }

  window.open(base + eventUrl, !isFb && '_blank', isFb && 'resizable,width=500,height=400');
  return;
}

function generateEventUrl(event, encode, boomEventUrlBase, comp_id, instance) {
  if (event.kind === 4) {
    return event.eventPageUrl || '';
  } else {
    var _event$repeat, _event$repeat2;

    return "".concat(boomEventUrlBase).concat((0, _commons.encodeId)("".concat(event.id)), "?").concat(encode ? encodeURIComponent("comp_id=".concat(comp_id, "&instance=").concat(instance, "&startDate=").concat((_event$repeat = event.repeat) !== null && _event$repeat !== void 0 && _event$repeat.type ? (0, _moment.default)(event.start).format('YYYY-MM-DD') : '')) : "comp_id=".concat(comp_id, "&instance=").concat(instance), "&startDate=").concat((_event$repeat2 = event.repeat) !== null && _event$repeat2 !== void 0 && _event$repeat2.type ? (0, _moment.default)(event.start).format('YYYY-MM-DD') : '');
  }
}

function copyLink(e, setCopyTooltipText, copiedTooltipText, eventUrl) {
  e.stopPropagation();
  let a = document.createElement('textarea');
  a.innerText = eventUrl;
  document.body.appendChild(a);
  a.setSelectionRange(0, 99999);
  a.select();
  document.execCommand('copy');
  a.remove();
  setCopyTooltipText(copiedTooltipText);
}