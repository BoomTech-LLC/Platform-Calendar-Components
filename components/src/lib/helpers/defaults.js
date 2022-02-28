export const D_REGISTRATION = {
    enabled: true,
    external: false,
    showGuests: true,
    guestsLimited: false,
    guestsLimit: 500
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
    start: '2022-02-02',
    end: '2022-02-09',
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