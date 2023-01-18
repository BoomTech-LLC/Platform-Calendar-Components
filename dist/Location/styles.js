"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineBraker = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tgap: 0.5rem;\n"])));

exports.Wrapper = Wrapper;

const LineBraker = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tword-break: break-word;\n\n\t", "\n"])), props => props.elipsis ? "overflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;" : '');

exports.LineBraker = LineBraker;