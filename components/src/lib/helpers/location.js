import { validateURL } from "./commons";
import { LOCATION_TYPES } from "./constants";

export function getLocationOptions(data, tbdText) {
  const value = data.values[data.type];

  switch (data.type) {
    case LOCATION_TYPES.physical:
      return {
        isLink: true,
        value: value.name || value.address,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          value.address
        )}`,
      };
    case LOCATION_TYPES.online:
      return {
        isLink: true,
        value,
        href: validateURL(value),
      };
    default:
      return {
        isLink: false,
        value: tbdText || value,
      };
  }
}

export function getLocationDisplayName(eventLocation) {
  const location = eventLocation.values[eventLocation.type];
  return typeof location === "string" ? location : location.address;
}
