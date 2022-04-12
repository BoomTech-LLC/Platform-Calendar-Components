"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

var _commons = require("./../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

var _registration = require("../helpers/registration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RegistrationButton = _ref => {
  var _event$registration, _event$tickets;

  let {
    cid,
    uid,
    text = 'Register',
    urlBase,
    event,
    globalRegistration,
    globalTickets,
    wrapperCustomClassNames = [],
    disabledBg = '"#c850ff'
  } = _ref;
  const registration = (_event$registration = event.registration) !== null && _event$registration !== void 0 ? _event$registration : globalRegistration;
  const tickets = (_event$tickets = event.tickets) !== null && _event$tickets !== void 0 ? _event$tickets : globalTickets;
  const show = (0, _registration.getShowRegistrationButtonStatus)(event, (tickets === null || tickets === void 0 ? void 0 : tickets.enabled) || (registration === null || registration === void 0 ? void 0 : registration.enabled));
  if (!show) return null;
  const url = (0, _registration.generateRegistrationURL)(cid, uid, event, registration, urlBase);
  const guestsOptions = (0, _registration.getGuestsOptions)(event, registration, tickets);
  if (!guestsOptions) return null;
  const {
    count,
    limit
  } = guestsOptions;
  const disabled = count >= limit;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _commons.combineClassNames)([_mainModule.default.register_button, ...wrapperCustomClassNames]),
    style: {
      backgroundColor: disabled ? disabledBg : null
    },
    disabled: disabled,
    onClick: () => window.open(url, '_blank')
  }, text);
};

RegistrationButton.propTypes = {
  cid: _commonPropTypes.PT_CID.isRequired,
  uid: _commonPropTypes.PT_UID.isRequired,
  urlBase: _propTypes.default.string.isRequired,
  event: _commonPropTypes.SHAPE_EVENT,
  text: _propTypes.default.string,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  globalRegistration: _commonPropTypes.SHAPE_REGISTRATION,
  globalTickets: _commonPropTypes.SHAPE_TICKETS,
  disabledBg: _propTypes.default.string
};
var _default = RegistrationButton;
exports.default = _default;