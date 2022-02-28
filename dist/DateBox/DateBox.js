"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateBox = require("../helpers/dateBox");

var _commons = require("../helpers/commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateBox = _ref => {
  let {
    start,
    end,
    locale,
    wrapperCustomClassNames = [],
    direction = 'row',
    dayNumberSize
  } = _ref;
  const {
    day,
    week,
    month
  } = (0, _dateBox.getDateForDateBox)(start, end, locale);
  const container = (0, _react.useRef)(); // useLayoutEffect(() => {
  //   container.current.style.height = container.current.offsetHeight + 'px';
  // },[])

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.container, _mainModule.default[direction], ...wrapperCustomClassNames]),
    ref: container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.day_of_month,
    style: {
      fontSize: dayNumberSize
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, day)), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.month_day_of_week_parent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.day_of_week
  }, /*#__PURE__*/_react.default.createElement("p", null, month)), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.month
  }, /*#__PURE__*/_react.default.createElement("p", null, week))));
};

var _default = /*#__PURE__*/(0, _react.memo)(DateBox);

exports.default = _default;
DateBox.propTypes = {
  start: _propTypes.default.string,
  end: _propTypes.default.string,
  locale: _propTypes.default.string,
  wrapperCustomClassNames: _propTypes.default.array,
  dayNumberSize: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};