"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImgCached = exports.decreaseImgQuality = void 0;

const decreaseImgQuality = function decreaseImgQuality(url) {
  let decreaseTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
  return "https://images.weserv.nl/?url=".concat(url, "&w=100&h=100&q=").concat(decreaseTo, "&fit=inside&we");
};

exports.decreaseImgQuality = decreaseImgQuality;

const isImgCached = url => {
  var image = new Image();
  image.src = url;
  return image.complete;
};

exports.isImgCached = isImgCached;