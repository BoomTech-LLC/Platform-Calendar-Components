"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddShareIcons;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./main.module.css"));

require("../assets/styles/icons.css");

var _constants = require("../helpers/constants");

var _commons = require("../helpers/commons");

var _addShare = require("../helpers/addShare");

var _commonPropTypes = require("../helpers/commonPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AddShareIcons(props) {
  const {
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
    order = 'vertical'
  } = props;
  const [copyTooltipText, setCopyTooltipText] = (0, _react.useState)(copyActionTooltipText);
  if (hideAddToIcons && (hideShareIcons || !hideShareIcons && +event.kind === 4)) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default.add_share_icons_block, _mainModule.default[order], ...wrapperCustomClassNames])
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _commons.combineClassNames)([titleBorderHidden ? '' : _mainModule.default.bordered, ...titleCustomClassNames])
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _commons.combineClassNames)([_mainModule.default[order], ...contentCustomClassNames])
  }, !hideAddToIcons && /*#__PURE__*/_react.default.createElement(AddShareIconsRow, {
    constructor: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS,
    sectionName: addToSectionName,
    event: event,
    rowId: _constants.ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId
  }), !hideShareIcons && +event.kind !== 4 && /*#__PURE__*/_react.default.createElement(AddShareIconsRow, {
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
    copyTooltipCustomClassNames: copyTooltipCustomClassNames
  })));
}

const AddShareIconsRow = /*#__PURE__*/(0, _react.memo)(_ref => {
  let {
    comp_id,
    instance,
    constructor,
    rowId,
    sectionName,
    event,
    setCopyTooltipText,
    boomEventUrlBase,
    copiedTooltipText,
    copyTooltipText,
    copyActionTooltipText,
    copyTooltipCustomClassNames
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.add_share_icons_row
  }, /*#__PURE__*/_react.default.createElement("div", null, sectionName), /*#__PURE__*/_react.default.createElement("div", null, constructor.icons.map(btn => {
    const isCopyLink = btn.type === 'copy';
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: "".concat(event.id, "-").concat(event.startDate, "-add-share-").concat(btn.type)
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _commons.combineClassNames)(['icon-' + btn.type, isCopyLink ? _mainModule.default.hoverable : '']),
      onMouseOut: () => isCopyLink && setTimeout(() => setCopyTooltipText(copyActionTooltipText), 300),
      onClick: e => {
        if (rowId === 1) return btn.clickHandler(e, btn.type, event);

        if (rowId === 2) {
          let eventUrl = (0, _addShare.generateEventUrl)(event, !isCopyLink, boomEventUrlBase, comp_id, instance);
          return isCopyLink ? btn.clickHandler(e, setCopyTooltipText, copiedTooltipText, eventUrl) : btn.clickHandler(e, btn.type, eventUrl);
        }
      }
    }), isCopyLink && /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _commons.combineClassNames)([_mainModule.default.copy_tooltip, ...copyTooltipCustomClassNames])
    }, copyTooltipText));
  })));
});
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