import {
  copyLink,
  downloadSharer,
  openAddToUrl,
  openShareUrl,
} from "./addShare";
import { PLAN_NAMES } from "./commonPropTypes";

export const LOCATION_TYPES = {
  physical: "physical",
  online: "online",
  tbd: "tbd",
};

export const LISTED_DETAILS_CONSTRUCTOR = {
  name: {
    iconName: "name",
  },
  phone: {
    preposition: "tel:",
    iconName: "phone",
  },
  email: {
    preposition: "mailto:",
    iconName: "mail",
  },
  website: {
    preposition: "",
    iconName: "world",
    validate: (value) => {
      if (value.indexOf("https://") === -1) return "https://" + value;
      return value;
    },
  },
  location: {
    iconName: "map-pin",
  },
};

export const ADD_SHARE_ICONS_CONSTRUCTOR = {
  TITLE: "Add & Share",
  ADD_TO_ICONS: {
    rowId: 1,
    addToSectionName: "Add to calendar",
    icons: [
      {
        type: "google",
        clickHandler: openAddToUrl,
      },
      {
        type: "outlook",
        clickHandler: downloadSharer,
      },
      {
        type: "apple",
        clickHandler: downloadSharer,
      },
      {
        type: "yahoo",
        clickHandler: openAddToUrl,
      },
    ],
  },
  SHARE_ICONS: {
    rowId: 2,
    shareSectionName: "Share Event",
    copyActionTooltipText: "Copy Event Url",
    copiedTooltipText: "Copied",
    icons: [
      {
        type: "facebook",
        clickHandler: openShareUrl,
      },
      {
        type: "linkedin",
        clickHandler: openShareUrl,
      },
      {
        type: "twitter",
        clickHandler: openShareUrl,
      },
      {
        type: "copy",
        clickHandler: copyLink,
      },
    ],
  },
};

export const PAYMENT_STATUSES = {
  paid: "paid",
  unpaid: "unpaid",
};

export const PAYMENT_TYPES = {
  cash: "cash",
  paypal: "paypal",
  stripe: "stripe",
};

export const SYNCED_EVENT_KINDS = [20, 21, 22, 23, 24, 25];

export const APP_LIMITATIONS = {
  [PLAN_NAMES[0]]: {
    tickets: 10,
    guests: 10,
  },
  [PLAN_NAMES[1]]: {
    tickets: 25,
    guests: 25,
  },
  [PLAN_NAMES[2]]: {
    tickets: 100,
    guests: null,
  },
  [PLAN_NAMES[3]]: {
    tickets: null,
    guests: null,
  },
};
