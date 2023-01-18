"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tgap: 8px;\n"])));
const Text = styled.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tmargin: 0;\n\t", "\n"])), props => props.oneLine ? "  white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;" : '');

const StartTimeRow = _ref => {
  let {
    showIcons,
    datesEqual,
    oneLine,
    startDate,
    startTime,
    timeZoneToShow
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: datesEqual ? 'icon-date' : 'icon-clock'
  }), /*#__PURE__*/_react.default.createElement(Text, {
    oneLine: oneLine
  }, "".concat(startDate, " ").concat(datesEqual ? '' : "".concat(startTime, " ").concat(timeZoneToShow))));
};

StartTimeRow.propTypes = {
  datesEqual: _propTypes.default.bool,
  startDate: _propTypes.default.string,
  startTime: _propTypes.default.string,
  timeZoneToShow: _propTypes.default.string,
  showIcons: _propTypes.default.bool,
  oneLine: _propTypes.default.bool
};
var _default = StartTimeRow;
exports.default = _default;