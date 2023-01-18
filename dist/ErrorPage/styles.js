"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWrapper = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 24px;\n\t", "\n"])), props => props.pageCover ? "  position: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tz-index: 999999;\n\t\t\t" : '');

exports.Wrapper = Wrapper;

const Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\ttext-align: center;\n\tfont-size: 40px;\n\tletter-spacing: 0.02em;\n\tcolor: var(--wsr-text-color-primary);\n\tfont-family: var(--typography1539259966-wsr-font-family, inherit);\n\tmargin: 0;\n\n\t@media only screen and (max-width: 500px) {\n\t\t.title {\n\t\t\tfont-size: 28px;\n\t\t}\n\t}\n"])));

exports.Title = Title;

const ImageWrapper = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: flex;\nwidth: 50%;\nmax-width: 500px;\njustify-content: center;\nalign-items: center;\nmargin-top: 40px;\n& img{\n\twidth: 100%;\n}\n"])));

exports.ImageWrapper = ImageWrapper;