"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRows = exports.SectionTitle = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\t& > h3 {\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 0.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n"])));

exports.Wrapper = Wrapper;

const SectionTitle = _styledComponents.default.h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t", "\n"])), props => props.titleBorderHidden ? '' : "\n            border-bottom-width: 1px;\n            border-bottom-style: solid;\n          ");

exports.SectionTitle = SectionTitle;

const WrapperRows = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\toverflow-wrap: anywhere;\n\tgap: 0.5rem;\n\t& > span {\n\t\tpointer-events: none;\n\t\tmargin-left: 0.5rem;\n\t}\n\t& > a {\n\t\tmargin-left: 0.5rem;\n\t}\n\n\t& a {\n\t\tcolor: inherit;\n\t}\n"])));

exports.WrapperRows = WrapperRows;