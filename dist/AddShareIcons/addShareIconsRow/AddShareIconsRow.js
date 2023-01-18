"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addShare = require("../../helpers/addShare");

var _commons = require("../../helpers/commons");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AddShareIconsRow = _ref => {
  let {
    comp_id,
    constructor,
    rowId,
    sectionName,
    event,
    setCopyTooltipText,
    boomEventUrlBase,
    copiedTooltipText,
    copyTooltipText,
    copyActionTooltipText,
    copyTooltipCustomClassNames,
    isMobile,
    order
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    className: "add_share_icons_row",
    order: order
  }, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, sectionName), /*#__PURE__*/_react.default.createElement(_styles.Content, null, constructor.icons.map(btn => {
    const isCopyLink = btn.type === 'copy';
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: "".concat(event.id, "-").concat(event.startDate, "-add-share-").concat(btn.type)
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      isCopyLink: true,
      className: 'icon-' + btn.type,
      onMouseOut: () => isCopyLink && setTimeout(() => setCopyTooltipText(copyActionTooltipText), 300),
      onClick: e => {
        if (rowId === 1) return btn.clickHandler(e, btn.type, event);

        if (rowId === 2) {
          let eventUrl = (0, _addShare.generateEventUrl)(event, boomEventUrlBase, comp_id);

          if (isCopyLink) {
            btn.clickHandler(e, setCopyTooltipText, copiedTooltipText, eventUrl);
          } else {
            btn.clickHandler(e, btn.type, eventUrl);
          }
        }
      }
    }), !isMobile && isCopyLink && /*#__PURE__*/_react.default.createElement(_styles.CopyTooltip, {
      className: (0, _commons.combineClassNames)(copyTooltipCustomClassNames)
    }, copyTooltipText));
  })));
};

var _default = AddShareIconsRow;
exports.default = _default;