import moment from "moment";
import { decodeId } from "../helpers/commons";
import { getLocationDisplayName } from "./location";

export function downloadSharer(e, type, event) {
  const organizer = event?.organizer ?? {};
  e.stopPropagation();
  let desc = ` ${
    event.desc
      ? `${event.desc
          .replace(/&lt/g, "<")
          .replace(/&gt/g, ">")
          .replace(/&nbsp/g, " ")}  `
      : ""
  }
  ${
    organizer.name || organizer.phone || organizer.email || organizer.website
      ? "<p><b>Organizer</b></p>  "
      : ""
  }${organizer.name ? `${organizer.name},<br/>  ` : ""}${
    organizer.phone ? `${organizer.phone},<br/>  ` : ""
  }${organizer.email ? `${organizer.email},<br/>  ` : ""}${
    organizer.website ? `${organizer.website}.<br/>  ` : ""
  }
    `;
  let icsSharer = `https://calendar.boomte.ch/createIcsFile?title=${
    event.title
  }&desc=${encodeURIComponent(
    type === "apple" ? desc.replace(/(<([^>]+)>)/gi, "").trim() : desc.trim()
  )}&start=${formatForAddtoCalendar(
    event,
    "start"
  )}&end=${formatForAddtoCalendar(event, "end")}&address=${encodeURIComponent(
    getLocationDisplayName(event.location)
  )}`;
  window.location.href = icsSharer;
}

export function openAddToUrl(e, type, event) {
  e.stopPropagation();
  let eventDescription = "";
  let url;
  switch (type) {
    case "google":
      eventDescription = event.desc ? createDesc(event, "google") : "";
      if (event.allDay ?? event.all_day)
        url =
          "https://calendar.google.com/calendar/r/eventedit?text=" +
          encodeURIComponent(event.title) +
          "&dates=" +
          formatForAddtoCalendar(event, "start", type) +
          "/" +
          formatForAddtoCalendar(event, "end") +
          "&details=" +
          (event.desc ? eventDescription : "") +
          "&location=" +
          setLocation(event, "encode") +
          "&sprop=name";
      else
        url =
          "https://calendar.google.com/calendar/r/eventedit?text=" +
          encodeURIComponent(event.title) +
          "&dates=" +
          formatForAddtoCalendar(event, "start", type) +
          "/" +
          formatForAddtoCalendar(event, "end") +
          "&details=" +
          (event.desc ? eventDescription : "") +
          "&location=" +
          setLocation(event, "encode") +
          "&sprop=name";
      break;
    case "yahoo":
      eventDescription = event.desc ? createDesc(event, "yahoo") : "";
      if (event.all_day)
        url =
          "https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=allday" +
          "&TITLE=" +
          encodeURIComponent(event.title) +
          "&ST=" +
          formatForAddtoCalendar(event, "start", type) +
          "&ET=" +
          formatForAddtoCalendar(event, "end", "yahoo") +
          "&DESC=" +
          eventDescription +
          "&in_loc=" +
          setLocation(event);
      else
        url =
          "https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=" +
          encodeURIComponent(event.title) +
          "&ST=" +
          formatForAddtoCalendar(event, "start", type) +
          "&ET=" +
          formatForAddtoCalendar(event, "end") +
          "&DESC=" +
          eventDescription +
          "&in_loc=" +
          setLocation(event);
      break;
    default:
      console.error("undefined calendar type");
  }
  window.open(url, "_blank");
  return;
}

function formatForAddtoCalendar(event, key, type) {
  let fullStart, fullEnd;
  let format;
  const allDay = event.allDay ?? event.all_day;
  if (allDay) {
    format = "YYYYMMDD";
    fullStart = moment(event.start);
    if (event.end !== event.start) {
      fullEnd = moment(event.end).add(1, "days");
    } else {
      fullEnd = moment(event.end);
      if (type !== "yahoo") {
        fullEnd = moment(event.end).add(1, "days");
      }
    }
  } else {
    format = "YYYYMMDD[T]HHmmss";
    fullStart = moment(event.start);
    fullEnd = moment(event.end);
  }
  if (type === "yahoo" && allDay && event.end !== event.start) {
    fullEnd = moment(fullEnd).subtract(1, "day");
  }

  return (key === "start" ? fullStart : fullEnd).format(format);
}

export function setLocation(event, key) {
  let displayString = "";
  if (event.location.type === "physical") {
    displayString = event.location.values.physical.address;
  } else {
    displayString = event.location.values[event.location.type];
  }

  return key === "encode" ? encodeURIComponent(displayString) : displayString;
}

const plainTextFromHTML = (htmlStr) => {
  let div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.textContent || div.innerText || "";
};

const createDesc = (event, type) => {
  console.log(event, "event");
  const organizer = event.organizer ?? {};
  return `${
    event.desc
      ? `${encodeURIComponent(
          type === "yahoo" ? plainTextFromHTML(event.desc) : event.desc
        )}`
      : ""
  }${
    Object.values(organizer)?.length > 0
      ? "%0D%0A%0D%0AOrganizer Details:%0D%0A"
      : ""
  }
    ${organizer.name ? `${encodeURIComponent(organizer.name)}%0D%0A` : ""}
    ${organizer.phone ? `${encodeURIComponent(organizer.phone)}%0D%0A` : ""}
    ${organizer.email ? `${encodeURIComponent(organizer.email)}%0D%0A` : ""}
    ${organizer.website ? `${encodeURIComponent(organizer.website)}` : ""}`;
};

export function openShareUrl(e, type, eventUrl) {
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
      base = "http://twitter.com/share?url=";
      break;
    default:
      console.error("undefined share url type");
  }
  window.open(
    base + eventUrl,
    !isFb && "_blank",
    isFb && "resizable,width=500,height=400"
  );
  return;
}

export function generateEventUrl(event, boomEventUrlBase, comp_id, encode) {
  if (event.kind === 4) {
    return event.eventPageUrl || "";
  } else {
    const url = `${boomEventUrlBase}?cid=${comp_id}&eventId=${decodeId(
      `${event.origId ?? event.id}`
    )}${
      event?.repeat?.type || event?.repeated
        ? "&startDate=" + event.start.split("T")[0]
        : ""
    }`;
    return encode ? encodeURIComponent(url) : url;
  }
}

export function copyLink(e, setCopyTooltipText, copiedTooltipText, eventUrl) {
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
