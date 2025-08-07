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

require("core-js/modules/es.string.trim.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.split.js");

var _moment = _interopRequireDefault(require("moment"));

var _commons = require("../helpers/commons");

var _location = require("./location");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function downloadSharer(e, type, event) {
  var _event$organizer;

  const organizer = (_event$organizer = event === null || event === void 0 ? void 0 : event.organizer) !== null && _event$organizer !== void 0 ? _event$organizer : {};
  e.stopPropagation();
  let desc = " ".concat(event.desc ? "".concat(event.desc.replace(/&lt/g, "<").replace(/&gt/g, ">").replace(/&nbsp/g, " "), "  ") : "", "\n  ").concat(organizer.name || organizer.phone || organizer.email || organizer.website ? "<p><b>Organizer</b></p>  " : "").concat(organizer.name ? "".concat(organizer.name, ",<br/>  ") : "").concat(organizer.phone ? "".concat(organizer.phone, ",<br/>  ") : "").concat(organizer.email ? "".concat(organizer.email, ",<br/>  ") : "").concat(organizer.website ? "".concat(organizer.website, ".<br/>  ") : "", "\n    ");
  let icsSharer = "https://calendar.boomte.ch/createIcsFile?title=".concat(event.title, "&desc=").concat(encodeURIComponent(type === "apple" ? desc.replace(/(<([^>]+)>)/gi, "").trim() : desc.trim()), "&start=").concat(formatForAddtoCalendar(event, "start"), "&end=").concat(formatForAddtoCalendar(event, "end"), "&address=").concat(encodeURIComponent((0, _location.getLocationDisplayName)(event.location)));
  window.location.href = icsSharer;
}

function openAddToUrl(e, type, event) {
  var _event$allDay;

  e.stopPropagation();
  let eventDescription = "";
  let url;

  switch (type) {
    case "google":
      eventDescription = event.desc ? createDesc(event, "google") : "";
      if ((_event$allDay = event.allDay) !== null && _event$allDay !== void 0 ? _event$allDay : event.all_day) url = "https://calendar.google.com/calendar/r/eventedit?text=" + encodeURIComponent(event.title) + "&dates=" + formatForAddtoCalendar(event, "start", type) + "/" + formatForAddtoCalendar(event, "end") + "&details=" + (event.desc ? eventDescription : "") + "&location=" + setLocation(event, "encode") + "&sprop=name";else url = "https://calendar.google.com/calendar/r/eventedit?text=" + encodeURIComponent(event.title) + "&dates=" + formatForAddtoCalendar(event, "start", type) + "/" + formatForAddtoCalendar(event, "end") + "&details=" + (event.desc ? eventDescription : "") + "&location=" + setLocation(event, "encode") + "&sprop=name";
      break;

    case "yahoo":
      eventDescription = event.desc ? createDesc(event, "yahoo") : "";
      if (event.all_day) url = "https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=allday" + "&TITLE=" + encodeURIComponent(event.title) + "&ST=" + formatForAddtoCalendar(event, "start", type) + "&ET=" + formatForAddtoCalendar(event, "end", "yahoo") + "&DESC=" + eventDescription + "&in_loc=" + setLocation(event);else url = "https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=" + encodeURIComponent(event.title) + "&ST=" + formatForAddtoCalendar(event, "start", type) + "&ET=" + formatForAddtoCalendar(event, "end") + "&DESC=" + eventDescription + "&in_loc=" + setLocation(event);
      break;

    default:
      console.error("undefined calendar type");
  }

  window.open(url, "_blank");
  return;
}

function formatForAddtoCalendar(event, key, type) {
  var _event$allDay2;

  let fullStart, fullEnd;
  let format;
  const allDay = (_event$allDay2 = event.allDay) !== null && _event$allDay2 !== void 0 ? _event$allDay2 : event.all_day;

  if (allDay) {
    format = "YYYYMMDD";
    fullStart = (0, _moment.default)(event.start);

    if (event.end !== event.start) {
      fullEnd = (0, _moment.default)(event.end).add(1, "days");
    } else {
      fullEnd = (0, _moment.default)(event.end);

      if (type !== "yahoo") {
        fullEnd = (0, _moment.default)(event.end).add(1, "days");
      }
    }
  } else {
    format = "YYYYMMDD[T]HHmmss";
    fullStart = (0, _moment.default)(event.start);
    fullEnd = (0, _moment.default)(event.end);
  }

  if (type === "yahoo" && allDay && event.end !== event.start) {
    fullEnd = (0, _moment.default)(fullEnd).subtract(1, "day");
  }

  return (key === "start" ? fullStart : fullEnd).format(format);
}

function setLocation(event, key) {
  let displayString = "";

  if (event.location.type === "physical") {
    displayString = event.location.values.physical.address;
  } else {
    displayString = event.location.values[event.location.type];
  }

  return key === "encode" ? encodeURIComponent(displayString) : displayString;
}

const plainTextFromHTML = htmlStr => {
  let div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.textContent || div.innerText || "";
};

const createDesc = (event, type) => {
  var _event$organizer2, _Object$values;

  console.log(event, "event");
  const organizer = (_event$organizer2 = event.organizer) !== null && _event$organizer2 !== void 0 ? _event$organizer2 : {};
  return "".concat(event.desc ? "".concat(encodeURIComponent(type === "yahoo" ? plainTextFromHTML(event.desc) : event.desc)) : "").concat(((_Object$values = Object.values(organizer)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0 ? "%0D%0A%0D%0AOrganizer Details:%0D%0A" : "", "\n    ").concat(organizer.name ? "".concat(encodeURIComponent(organizer.name), "%0D%0A") : "", "\n    ").concat(organizer.phone ? "".concat(encodeURIComponent(organizer.phone), "%0D%0A") : "", "\n    ").concat(organizer.email ? "".concat(encodeURIComponent(organizer.email), "%0D%0A") : "", "\n    ").concat(organizer.website ? "".concat(encodeURIComponent(organizer.website)) : "");
};

function openShareUrl(e, type, eventUrl) {
  e.stopPropagation();
  let base,
      isFb = type === "facebook";

  switch (type) {
    case "facebook":
      base = "https://facebook.com/sharer/sharer.php?u=";
      break;

    case "linkedin":
      base = "https://www.linkedin.com/sharing/share-offsite/?url=";
      break;

    case "twitter":
      base = "https://x.com/intent/post?url=";
      break;

    default:
      console.error("undefined share url type");
  }

  window.open(base + eventUrl, !isFb && "_blank", isFb && "resizable,width=500,height=400");
  return;
}

function generateEventUrl(event, boomEventUrlBase, comp_id, encode) {
  if (event.kind === 4) {
    return event.eventPageUrl || "";
  } else {
    var _event$origId, _event$repeat;

    const url = "".concat(boomEventUrlBase, "?cid=").concat(comp_id, "&eventId=").concat((0, _commons.decodeId)("".concat((_event$origId = event.origId) !== null && _event$origId !== void 0 ? _event$origId : event.id))).concat(event !== null && event !== void 0 && (_event$repeat = event.repeat) !== null && _event$repeat !== void 0 && _event$repeat.type || event !== null && event !== void 0 && event.repeated ? "&startDate=" + event.start.split("T")[0] : "").concat(event.kind == 0 ? "&source=default" : "");
    return encode ? encodeURIComponent(url) : url;
  }
}

function copyLink(e, setCopyTooltipText, copiedTooltipText, eventUrl) {
  e.stopPropagation();
  let a = document.createElement("textarea");
  a.innerText = eventUrl;
  document.body.appendChild(a);
  a.setSelectionRange(0, 99999);
  a.select();
  document.execCommand("copy");
  a.remove();
  setCopyTooltipText(copiedTooltipText);
}