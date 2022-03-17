export const D_WRAPPER_CLASSNAMES = [
    'default-wrapper-className-1',
    'default-wrapper-className-2'
]

export const D_CLASSNAMES = [
    'default-className-1',
    'default-className-2'
]

export const D_LINK_CLASSNAMES = [
    'default-link-className-1'
]

export const D_CATEGORY = {
    id: '1',
    name: 'Sport', 
    color: '#2ab7ca',
    selected: true
}

export const D_UNCATEGORISED = {
    id: '0',
    name: 'Uncategorised', 
    color: '#d5d3d3',
    selected: true
}

export const D_GUEST_1 = {
    id: '1',
    date: '',
    firstName: 'Poxos',
    lastName: 'Petros',
    tickets: []
}

export const D_REGISTRATION = {
  cid: null,
  enabled: true,
  general: {
    admin: 'bommtech@gmail.com',
    external: false,
    url: '',
    countDown: '15 mins'
  },
  guestsOptions: {
    isLimited: true,
    limit: 500,
    show: true,
  },
  form: {
    firstName: {
      name: 'firstName',
      enabled: true,
      required: true,
      label: 'First name'
    },
    lastName: {
      name: 'lastName',
      enabled: true,
      required: true,
      label: 'Last name'
    },
    email: {
      name: 'email',
      enabled: true,
      required: true,
      label: 'Email address'
    },
    phone: {
      name: 'phone',
      enabled: false,
      required: false,
      label: 'Phone number'
    },
    address: {
      name: 'address',
      enabled: false,
      required: false,
      label: 'Address'
    },
    comments: {
      name: 'comments',
      enabled: false,
      required: false,
      label: 'Comments'
    },
    number: {
      name: 'number',
      enabled: false,
      required: false,
      label: 'Number field'
    },
    checkbox: {
      name: 'checkbox',
      enabled: true,
      required: true,
      label: 'Check Box',
      selection: [
        {
          id: 'selection-checkbox-1',
          checked: false,
          label: 'Option 1'
        },
        {
          id: 'selection-checkbox-2',
          checked: false,
          label: 'Option 2'
        },
        {
          id: 'selection-checkbox-3',
          checked: false,
          label: 'Option 3'
        },
      ]
    },
    radio: {
      name: 'radio',
      enabled: true,
      required: true,
      label: 'Single choice',
      selection: [
        {
          id: 'selection-radio-4',
          checked: false,
          label: 'Option 1'
        },
        {
          id: 'selection-radio-5',
          checked: false,
          label: 'Option 2'
        },
        {
          id: 'selection-radio-6',
          checked: false,
          label: 'Option 3'
        },
      ]
    },
  },
  emails: {
    enabled: true,
    options: {
      confirmation: {
        enabled: true,
        subject: 'Thank you for registering',
        contact: 'If you have any questions please contact the organizer',
        desc: '<p>Hi {guestname},<\/p><br /><p>Thanks for registering to our event. You can check your registration details below.<\/p><br /><p>Looking forward to seeing you!<\/p>'
      },
      reminder: {
        enabled: true,
        subject: 'You have an event coming up!',
        contact: 'If you have any questions please contact the organizer',
        desc: '<p>Hi,<\/p><br /><p>A friendly reminder on the upcoming event:<\/p><br /><p>If there are any changes in your plans you can just hit reply to let us know.<\/p>',
        before: '1 day'
      },
      cancellation: {
        enabled: true,
        contact: 'If you have any questions please contact the organizer',
        subject: 'An upcoming event has been canceled',
        desc: '<p>Hi,<\/p><br /><p>We are sorry to inform you that the below event has been canceled.<\/p><br /><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.<\/p>'      
      }
    }
  },
  texts: {
    toPage: 'Register',
    submit: 'Submit',
    thanksTitle: 'Registration completed successfully!',
    thanksBody: 'Please check your registered email address',
    guestsInfoPrefix: 'Guests: '
  }
}

export const D_EVENT_1 = {
    id: 123,
    key: '1234',
    title: 'Test Event',
    start: '2023-02-02',
    end: '2023-02-09',
    allDay: true,
    image: 'https://wallpaperaccess.com/full/685509.jpg',
    desc: '',
    color: '#fff45b',
    repeat: null,
    location: {
        type: 'physical',
        values: {
            physical: {
              name: "Park Slope, Brooklyn",
              address: 'Iris Watson P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620 (372) 587-2335',
              email: "poetrysociety@gmail.com",
              phone: "+1 247-938-5750",
              website: "poetrysociety.io",
              lat: 33.9802893,
              lng: -118.4517449
            },
            online: 'https://zoom.us/',
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

export const D_EVENT_2 = {
  id: '12345',
  title: 'Bisong Art Gallery',
  start: '2022-02-04T18:00',
  end: '2022-02-04T21:00',
  allDay: 0,
  image: '',
  desc: '<p>Bisong Art Gallery along with The D.R.E.A.M Affect Foundation is partnering with Prairie View A&amp;M Northwest Houston Center for a Black History Month Exhibition.</p><br><p>"Culture: Our New Normal" draws attention to the current events of black culture and how they continue to shape history. A portion of the proceeds will go to a scholarship fund for a Fine Art Student at PVAMU.</p>',
  color: '#9fe1e7',
  organizer: {
    name: "Andrew",
    email: "andrewsmith@gmail.com",
    phone: "+1 317-738-5700",
    website: "andrewsmith.com"
  },
  repeat: { type: '', interval: '', end: '', advanced: '' },
  kind: '1',
  categories: [{ id: 19412, name: 'Opening Reception', color: 'deepskyblue' }],
  guests: [],
  registration: null,
  tickets: null,
};

