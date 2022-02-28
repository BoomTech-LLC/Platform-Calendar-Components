import { copyLink, downloadSharer, openAddToUrl, openShareUrl } from "./addShare";

export const LOCATION_TYPES = {
  physical: 'physical', 
  online: 'online', 
  tbd: 'tbd'
}

export const LISTED_DETAILS_CONSTRUCTOR = {
  name: {
    iconName: 'name',
  },
  phone: {
    preposition: 'tel:',
    iconName: 'phone',
  },
  email: {
    preposition: 'mailto:',
    iconName: 'mail',
  },
  website: {
    preposition: '',
    iconName: 'world',
    validate: (value) => {
      if(value.indexOf('https://') === -1) return 'https://' + value
      return value
    }
  },
  location: {
    iconName: 'map-pin'
  }
}

export const ADD_SHARE_ICONS_CONSTRUCTOR = {
  TITLE: 'Add & Share',
  ADD_TO_ICONS: {
    rowId: 1,
    addToSectionName: 'Add to calendar',
    icons: [
      {
        type: 'google',
        clickHandler: openAddToUrl
      },
      {
        type: 'outlook',
        clickHandler: downloadSharer
      },
      {
        type: 'apple',
        clickHandler: downloadSharer
      },
      {
        type: 'yahoo',
        clickHandler: openAddToUrl
      }
    ],
  },
  SHARE_ICONS: {
    rowId: 2,
    shareSectionName: 'Share Event',
    copyActionTooltipText: 'Copy Event Url',
    copiedTooltipText: 'Copied',
    icons: [
      {
        type: 'facebook',
        clickHandler: openShareUrl
      },
      {
        type: 'linkedin',
        clickHandler: openShareUrl
      },
      {
        type: 'twitter',
        clickHandler: openShareUrl
      },
      {
        type: 'copy',
        clickHandler: copyLink
      }
    ],
  }
}