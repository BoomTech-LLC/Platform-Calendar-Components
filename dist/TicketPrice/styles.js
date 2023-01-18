"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tgap: 0.5rem;\n\talign-items: center;\n\t& > div:first-of-type {\n\t\tmargin-top: 2px;\n\t}\n\t& > div:nth-of-type(2) {\n\t\tflex-direction: column;\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t}\n"])));

exports.Wrapper = Wrapper;