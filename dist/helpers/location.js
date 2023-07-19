"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationOptions = getLocationOptions;
exports.getLocationDisplayName = getLocationDisplayName;

require("core-js/modules/web.dom-collections.iterator.js");

var _commons = require("./commons");

var _constants = require("./constants");

function getLocationOptions(data, tbdText) {
  const value = data.values[data.type];

  switch (data.type) {
    case _constants.LOCATION_TYPES.physical:
      return {
        isLink: true,
        value: value.name || value.address,
        href: "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(value.address))
      };

    case _constants.LOCATION_TYPES.online:
      return {
        isLink: true,
        value,
        href: (0, _commons.validateURL)(value)
      };

    default:
      return {
        isLink: false,
        value: tbdText || value
      };
  }
}

function getLocationDisplayName(eventLocation) {
  const location = eventLocation.values[eventLocation.type];
  return typeof location === "string" ? location : location.address;
}