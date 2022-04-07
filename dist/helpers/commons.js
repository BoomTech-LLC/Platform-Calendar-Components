"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineClassNames = combineClassNames;
exports.parseJson = parseJson;
exports.validateURL = validateURL;
exports.stopPropagation = exports.isObjectEmpty = exports.encodeId = exports.isDefined = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

const isDefined = value => value != null;

exports.isDefined = isDefined;

function combineClassNames(classNames) {
  var _classNames$join;

  if (!classNames || classNames.length === 0) return '';
  return (_classNames$join = classNames.join(' ')) !== null && _classNames$join !== void 0 ? _classNames$join : '';
}

const encodeId = str => {
  const id = str.split("");
  let i;

  for (i = 0; i < id.length; i++) {
    switch (id[i]) {
      case "1":
        id[i] = "H9";
        break;

      case "2":
        id[i] = "A8";
        break;

      case "3":
        id[i] = "J7";
        break;

      case "4":
        id[i] = "M6";
        break;

      case "5":
        id[i] = "R5";
        break;

      case "6":
        id[i] = "O4";
        break;

      case "7":
        id[i] = "L3";
        break;

      case "8":
        id[i] = "W2";
        break;

      case "9":
        id[i] = "U1";
        break;

      case "0":
        id[i] = "K0";
        break;

      default:
    }
  }

  const l = id.length;
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (i = 0; i < l * 2 + 2; i = i + Math.ceil(Math.random() * 3)) {
    id.splice(i, 0, chars[Math.ceil(Math.random() * 26)]);
  }

  return id.join('');
};

exports.encodeId = encodeId;

const isObjectEmpty = obj => !Object.values(obj).some(x => x !== null && x !== '');

exports.isObjectEmpty = isObjectEmpty;

const stopPropagation = e => e.stopPropagation();

exports.stopPropagation = stopPropagation;

function parseJson(obj) {
  try {
    JSON.parse(obj);
  } catch (e) {
    return obj;
  }

  return JSON.parse(obj);
}

function validateURL(url) {
  if (url.indexOf('http') !== 0 && url.indexOf('file://') !== 0) return 'https://' + url;
  return url;
}