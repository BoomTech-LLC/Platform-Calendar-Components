"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tmargin: 0;\n\tword-break: break-word;\n\t& img {\n\t\tmax-width: 100%;\n\t}\n"])));

exports.Wrapper = Wrapper;

const Title = _styledComponents.default.h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tmargin-top: 0;\n\tmargin-bottom: 0.5rem;\n\tpadding-bottom: 0.5rem;\n\tborder-bottom-width: 1px;\n\tborder-bottom-style: solid;\n"])));

exports.Title = Title;

const Text = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tbackground-color: transparent !important;\n"])));

exports.Text = Text;