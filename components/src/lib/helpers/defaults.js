import { REGISTRATION_COUNTDOWN_OPTIONS } from "./commonPropTypes"

export const D_REGISTRATION = {
    cid: '123',
    enabled: true,
    general: {
      admin: 'boomtech@.com',
      external: false,
      url: 'https://www.wix-style-react.com/storybook/?activeTab=API&path=%2Fstory%2Fcomponents-layout--layout',
      countDount: REGISTRATION_COUNTDOWN_OPTIONS[0]
    },
    guestsOptions: {
      isLimited: true,
      limit: 500,
      show: true,
    },
}

export const D_GUEST_1 = {
    id: '1',
    date: '',
    firstName: 'Poxos',
    lastName: 'Petros',
    tickets: []
}

export const D_EVENT_1 = {
    id: 123,
    key: '1234',
    title: 'Test Event',
    // 2022-03-22T00:00
    start: '2028-03-21',
    end: '2028-03-22',
    allDay: true,
    image: 'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/119137409_630205620987179_2291743291067237405_n.png?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=xUpUchW2oMQAX-qiv4g&_nc_ht=scontent.fevn1-4.fna&oh=00_AT9s9qzNpo_LtoBwj206_8ty5AEIlKGMQhoBMeB1JQ9SAA&oe=62203A58',
    desc: '',
    color: 'yellow',
    repeat: null,
    location: {
        type: 'tbd',
        values: {
            tbd: 'Location is going to be announced'
        }
    },
    organizer: {
        name: '',
        phone: '',
        website: '',
        email: '',
    },
    kind: 1,
    categoryIds: [],
    guests: [
        D_GUEST_1
    ],
    registration: D_REGISTRATION,
    tickets: null,
}