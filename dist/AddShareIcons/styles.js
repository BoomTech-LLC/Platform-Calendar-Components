"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = exports.SectionTitle = exports.RowsWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const RowsWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: ", ";\n"])), props => props.order === 'horizontal' ? 'flex' : 'block');

exports.RowsWrapper = RowsWrapper;

const SectionTitle = _styledComponents.default.h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tmargin-top: 0;\n\tmargin-bottom: 0.5rem;\n\tpadding-bottom: 0.5rem;\n\t", "\n"])), props => props.titleBorderHidden ? "\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n      " : '');

exports.SectionTitle = SectionTitle;

const Divider = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\theight: 18px;\n\twidth: 1px;\n\tbackground-color: #2b5672;\n\tmargin-top: auto;\n\tmargin-bottom: 0.2rem;\n\tmargin-right: 1rem;\n"])));

exports.Divider = Divider;