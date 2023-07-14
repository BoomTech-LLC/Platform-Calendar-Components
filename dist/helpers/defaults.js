"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.D_EVENT_1 = exports.D_GUEST_1 = exports.D_REGISTRATION = void 0;

var _commonPropTypes = require("./commonPropTypes");

const D_REGISTRATION = {
  cid: "123",
  enabled: true,
  general: {
    admin: "boomtech@.com",
    external: false,
    url: "https://www.wix-style-react.com/storybook/?activeTab=API&path=%2Fstory%2Fcomponents-layout--layout",
    countDount: _commonPropTypes.REGISTRATION_COUNTDOWN_OPTIONS[0]
  },
  guestsOptions: {
    isLimited: true,
    limit: 500,
    show: true
  }
};
exports.D_REGISTRATION = D_REGISTRATION;
const D_GUEST_1 = {
  id: "1",
  date: "",
  firstName: "Poxos",
  lastName: "Petros",
  tickets: []
};
exports.D_GUEST_1 = D_GUEST_1;
const D_EVENT_1 = {
  cid: "113371128461234",
  id: 1689317407500,
  key: "_1689317407500_2023-07-18T11:00:00+0400",
  uid: null,
  title: "Test event Integration",
  kind: 25,
  start: "2023-07-18T11:00:00+0400",
  startMs: 1689663600000,
  end: "2023-07-20T11:00:00+0400",
  endMs: 1689836400000,
  allDay: false,
  image: "https://scontent.fevn7-1.fna.fbcdn.net/v/t39.30808-6/359699661_130845433380470_6961697233248606181_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=1091cb&_nc_ohc=bU1p7K8WauYAX8j36lH&_nc_ht=scontent.fevn7-1.fna&edm=ABTKTjYEAAAA&oh=00_AfAVp1J3LxqNoskYpm6ZX8feS85q_J3QjqyWem20q8zEpg&oe=64B6C086",
  desc: 'sdfdsafasdsd <br /> <br /> <a href=https://www.facebook.com/events/778476757094021 target="_blank">Click to reserve</a>',
  color: "#3899ec",
  textColor: "#3899ec",
  borderColor: "#3899ec",
  backgroundColor: "#3899ec",
  repeat: null,
  location: {
    type: "physical",
    values: {
      physical: {
        name: "ArmEnergy",
        address: "ArmEnergy",
        phone: "",
        email: "",
        website: "",
        lat: null,
        lng: null
      },
      online: "",
      tbd: "Location is going to be announced"
    }
  },
  organizerId: "",
  categoryIds: [],
  registration: null,
  ticketEnabled: true,
  ticketIds: [],
  promocodes: [],
  emails: null,
  tags: [],
  invitations: {
    newInvites: [],
    alreadyInvited: []
  },
  guests: [],
  imageName: "359699661_130845433380470_6961697233248606181_n.jpg",
  syncedCalendarInfo: {
    id: "113371128461234",
    name: "Test event Integration"
  }
};
exports.D_EVENT_1 = D_EVENT_1;