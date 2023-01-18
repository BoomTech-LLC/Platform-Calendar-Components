"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyTooltip = exports.Button = exports.Content = exports.SectionTitle = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\t& > div:last-of-type {\n\t\tposition: relative;\n\t},\n    ", "\n"])), props => props.order === 'horizontal' ? "\n    flex-direction: column;\n    &:first-of-type {\n        padding-right: calc(1rem - 1px);\n    }\n    &:last-of-type{\n\t\tpadding-left: 1rem;\n    }\n    " : '');

exports.Wrapper = Wrapper;

const SectionTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tmargin-top: 0.15rem;\n\tmargin-bottom: 0.15rem;\n\tmargin-right: ", ";\n"])), props => props.order === 'horizontal' ? '0' : '0.4rem');

exports.SectionTitle = SectionTitle;

const Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tmargin-top: 0.15rem;\n\tmargin-bottom: 0.15rem;\n\tposition: relative;\n"])));

exports.Content = Content;

const Button = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tall: initial;\n\tcursor: pointer;\n\tmargin-right: 0.8rem;\n\n\t&:hover + span {\n\t\tvisibility: visible;\n\t\tz-index: 999;\n\t\topacity: 1;\n\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 100%;\n\t\t\tright: 0.75rem;\n\t\t\tmargin-left: 0.25rem;\n\t\t\tborder-width: 0.25rem;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: rgba(85, 85, 85, 0.897) transparent transparent transparent;\n\t\t}\n\t}\n"])));

exports.Button = Button;

const CopyTooltip = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\tvisibility: hidden;\n\twidth: max-content;\n\tbackground-color: rgba(85, 85, 85, 0.897);\n\tcolor: #fff;\n\ttext-align: center;\n\tborder-radius: 0.3rem;\n\tpadding: 0.3rem;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translateY(calc(-100% - 0.25rem));\n\tz-index: -1;\n\topacity: 0;\n\ttransition: opacity 0.3s;\n\toverflow-wrap: anywhere;\n"])));

exports.CopyTooltip = CopyTooltip;