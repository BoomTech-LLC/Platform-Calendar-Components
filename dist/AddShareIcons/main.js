"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddShareIcons;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../helpers/constants");

var _commons = require("../helpers/commons");

var _commonPropTypes = require("../helpers/commonPropTypes");

var _AddShareIconsRow = _interopRequireDefault(require("./addShareIconsRow/AddShareIconsRow"));

var _styles = require("./styles");

var _globalStyles = _interopRequireDefault(require("../assets/styles/globalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AddShareIcons(_ref) {
  let {
    title = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.TITLE,
    comp_id,
    instance,
    titleBorderHidden = false,
    addToSectionName = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.addToSectionName,
    hideAddToIcons = false,
    shareSectionName = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.shareSectionName,
    hideShareIcons = false,
    boomEventUrlBase,
    event,
    copyActionTooltipText = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copyActionTooltipText,
    copiedTooltipText = _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copiedTooltipText,
    wrapperCustomClassNames = [],
    titleCustomClassNames = [],
    contentCustomClassNames = [],
    copyTooltipCustomClassNames = [],
    order = 'vertical',
    isMobile
  } = _ref;
  const [copyTooltipText, setCopyTooltipText] = (0, _react.useState)(copyActionTooltipText);
  if (hideAddToIcons && hideShareIcons) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)(wrapperCustomClassNames)
  }, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, {
    titleBorderHidden: titleBorderHidden,
    className: (0, _commons.combineClassNames)(titleCustomClassNames)
  }, title), /*#__PURE__*/_react.default.createElement(_styles.RowsWrapper, {
    order: order,
    className: (0, _commons.combineClassNames)(contentCustomClassNames)
  }, !hideAddToIcons && /*#__PURE__*/_react.default.createElement(_AddShareIconsRow.default, {
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS,
    sectionName: addToSectionName,
    event: event,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId
  }), order === 'horizontal' && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), !hideShareIcons && !_constants.SYNCED_EVENT_KINDS.includes(event.kind) && /*#__PURE__*/_react.default.createElement(_AddShareIconsRow.default, {
    comp_id: comp_id,
    instance: instance,
    sectionName: shareSectionName,
    event: event,
    boomEventUrlBase: boomEventUrlBase,
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.rowId,
    copyTooltipText: copyTooltipText,
    setCopyTooltipText: setCopyTooltipText,
    copiedTooltipText: copiedTooltipText,
    copyActionTooltipText: copyActionTooltipText,
    copyTooltipCustomClassNames: copyTooltipCustomClassNames,
    isMobile: isMobile
  })));
}

AddShareIcons.propTypes = {
  title: _propTypes.default.string,
  comp_id: _propTypes.default.string.isRequired,
  instance: _propTypes.default.string.isRequired,
  titleBorderHidden: _propTypes.default.bool,
  event: _propTypes.default.object.isRequired,
  boomEventUrlBase: _propTypes.default.string.isRequired,
  hideAddToIcons: _propTypes.default.bool,
  addToSectionName: _propTypes.default.string,
  hideShareIcons: _propTypes.default.bool,
  shareSectionName: _propTypes.default.string,
  copyActionTooltipText: _propTypes.default.string,
  copiedTooltipText: _propTypes.default.string,
  wrapperCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  titleCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  contentCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  copyTooltipCustomClassNames: _commonPropTypes.PT_CLASSNAMES,
  order: _propTypes.default.oneOf(['vertical', 'horizontal'])
};