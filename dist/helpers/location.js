"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationOptions = getLocationOptions;

require("core-js/modules/web.dom-collections.iterator.js");

var _commons = require("./commons");

var _constants = require("./constants");

function getLocationOptions(data) {
  var _data$values, _data$values$physical, _data$values2, _data$values2$physica;

  const value = data.values[data.type];

  switch (data.type) {
    case _constants.LOCATION_TYPES.physical:
      return {
        isLink: ((_data$values = data.values) === null || _data$values === void 0 ? void 0 : (_data$values$physical = _data$values.physical) === null || _data$values$physical === void 0 ? void 0 : _data$values$physical.lat) && ((_data$values2 = data.values) === null || _data$values2 === void 0 ? void 0 : (_data$values2$physica = _data$values2.physical) === null || _data$values2$physica === void 0 ? void 0 : _data$values2$physica.lng),
        value: value.address,
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
        value
      };
  }
}