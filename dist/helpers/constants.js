"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_SHARE_ICONS_CONSTRUCTOR = exports.LISTED_DETAILS_CONSTRUCTOR = exports.LOCATION_TYPES = void 0;

var _addShare = require("./addShare");

const LOCATION_TYPES = {
  physical: 'physical',
  online: 'online',
  tbd: 'tbd'
};
exports.LOCATION_TYPES = LOCATION_TYPES;
const LISTED_DETAILS_CONSTRUCTOR = {
  name: {
    iconName: 'name'
  },
  phone: {
    preposition: 'tel:',
    iconName: 'phone'
  },
  email: {
    preposition: 'mailto:',
    iconName: 'mail'
  },
  website: {
    preposition: '',
    iconName: 'world',
    validate: value => {
      if (value.indexOf('https://') === -1) return 'https://' + value;
      return value;
    }
  },
  location: {
    iconName: 'map-pin'
  }
};
exports.LISTED_DETAILS_CONSTRUCTOR = LISTED_DETAILS_CONSTRUCTOR;
const ADD_SHARE_ICONS_CONSTRUCTOR = {
  TITLE: 'Add & Share',
  ADD_TO_ICONS: {
    rowId: 1,
    addToSectionName: 'Add to calendar',
    icons: [{
      type: 'google',
      clickHandler: _addShare.openAddToUrl
    }, {
      type: 'outlook',
      clickHandler: _addShare.downloadSharer
    }, {
      type: 'apple',
      clickHandler: _addShare.downloadSharer
    }, {
      type: 'yahoo',
      clickHandler: _addShare.openAddToUrl
    }]
  },
  SHARE_ICONS: {
    rowId: 2,
    shareSectionName: 'Share Event',
    copyActionTooltipText: 'Copy Event Url',
    copiedTooltipText: 'Copied',
    icons: [{
      type: 'facebook',
      clickHandler: _addShare.openShareUrl
    }, {
      type: 'linkedin',
      clickHandler: _addShare.openShareUrl
    }, {
      type: 'twitter',
      clickHandler: _addShare.openShareUrl
    }, {
      type: 'copy',
      clickHandler: _addShare.copyLink
    }]
  }
};
exports.ADD_SHARE_ICONS_CONSTRUCTOR = ADD_SHARE_ICONS_CONSTRUCTOR;