"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nall: unset;\nwidth: fit-content;\nbackground-color: #8437ff;\ncolor: white;\nmin-height: 38px;\npadding: 12px 16px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncursor: pointer;\nbox-sizing: border-box;\nposition: relative;\n\n", "\n"])), props => props.disabled ? "cursor: auto;" : '');

exports.Button = Button;