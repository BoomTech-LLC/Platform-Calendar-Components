"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n    & img {\n        height: 100%;\n        width: 100%;\n        display: block;\n        object-fit: cover;\n    }\n    & img.hidden {\n        max-height: 0;\n    }\n    & img.shown {\n        max-height: 999999px;\n    }\n"])));

exports.Wrapper = Wrapper;