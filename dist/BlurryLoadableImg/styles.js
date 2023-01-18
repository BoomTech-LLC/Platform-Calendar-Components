"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n"])));

exports.Wrapper = Wrapper;

const Image = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: block;\n\tobject-fit: cover;\n\tmax-height: ", ",\n\t\t", ";\n"])), props => props.shown ? '999999px' : '0', props => props.blurred ? "filter: blur(30px);\n\t\t\t\t\t-webkit-filter: blur(30px);\n\t\t\t\t\t-moz-filter: blur(30px);\n\t\t\t\t\t-o-filter: blur(30px);\n\t\t\t\t\t-ms-filter: blur(30px);\n\t\t\t\t\ttransform: scale(1.05);" : '');

exports.Image = Image;