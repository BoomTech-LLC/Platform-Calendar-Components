"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TimeZoneRow = _ref => {
  let {
    showIcons,
    timeZone,
    convertDate
  } = _ref;
  const choosedTimezone = convertDate ? _momentTimezone.default.tz.guess() : timeZone;
  const timezoneDisplayName = "GMT".concat(_momentTimezone.default.tz(choosedTimezone).format("Z"), " \u2022 ").concat(choosedTimezone);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.two_line_end
  }, showIcons && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-world"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: _mainModule.default.oneLine
  }, timezoneDisplayName));
};

TimeZoneRow.propTypes = {
  showIcons: _propTypes.default.bool,
  timeZone: _propTypes.default.string,
  convertDate: _propTypes.default.bool
};
var _default = TimeZoneRow;
exports.default = _default;