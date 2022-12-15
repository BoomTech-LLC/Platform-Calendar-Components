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

var _constants = require("../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RegistrationButton = _ref => {
  var _event$registration;

  let {
    cid,
    uid,
    text = 'Register',
    urlBase,
    event,
    globalRegistration,
    tickets,
    wrapperCustomClassNames = [],
    disabledClassName = '',
    planName = _commonPropTypes.PLAN_NAMES[3]
  } = _ref;
  const registration = (_event$registration = event.registration) !== null && _event$registration !== void 0 ? _event$registration : globalRegistration;
  const hasTickets = event.ticketEnabled && (tickets === null || tickets === void 0 ? void 0 : tickets.length);
  const eventTickets = hasTickets ? [...tickets] : null;
  const show = (0, _registration.getShowRegistrationButtonStatus)(event, registration === null || registration === void 0 ? void 0 : registration.enabled);
  if (!show) return null;
  const url = (0, _registration.generateRegistrationURL)(cid, uid, event, registration, urlBase);
  const guestsOptions = (0, _registration.getGuestsOptions)(event, registration, eventTickets);
  if (!guestsOptions) return null;
  const {
    count,
    limit
  } = guestsOptions;
  const limitByPlan = _constants.APP_LIMITATIONS[planName][hasTickets ? 'tickets' : 'guests'];
  const disabled = typeof limit !== 'string' && (count >= limit || limitByPlan && count >= limitByPlan);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _commons.combineClassNames)([_mainModule.default.register_button, ...wrapperCustomClassNames, disabled ? disabledClassName : null]),
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
  disabledClassName: _propTypes.default.string,
  planName: _commonPropTypes.PLAN_NAME_TYPE
};
var _default = RegistrationButton;
exports.default = _default;