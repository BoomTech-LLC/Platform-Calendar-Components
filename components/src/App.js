import Description from "./lib/Description/index";
import GuestLimit from "./lib/GuestLimit/index";
import BlurryLoadableImg from "./lib/BlurryLoadableImg/index";
import RegistrationButton from "./lib/RegistrationButton/index";
import DateBox from "./lib/DateBox/index";
import ListedDetails from "./lib/ListedDetails/index";
import Location from "./lib/Location/index";
import AddShareIcons from "./lib/AddShareIcons/index";
import CategoryItem from "./lib/CategoryItem";
import { D_EVENT_1, D_REGISTRATION } from "./lib/helpers/defaults";
import TicketPrice from "./lib/TicketPrice/main";
import { CURRENCY_TYPES } from "./lib/helpers/commonPropTypes";

function App() {
  let exampleEvent1 = {
    id: 343491,
    title: "Open Air Poetry Reading and Discussion",
    start: "2021-04-21",
    end: "2021-04-27",
    allDay: 1,
    image:
      "https://static.wixstatic.com/media/11062b_b31efefcdf3846849b7fe93d9203f105~mv2_d_6200_4132_s_4_2.jpg",
    desc: "<p>Four amazing evenings of poetry reading and discussion! We will do a poetry reading from various poets followed by an interactive discussion. Each day there will be three poets whose works will be read and discussed.<br>If you want to attend and listen to some great poetry, please register. Our organizers will get back to you.</p>",
    color: "color-13",
    venue: {
      name: "Virginia Road",
      address: "1485 Virginia Road, San Marino, CA 91108, USA",
      city: "",
      statesList: "",
      country: "",
      postal: "",
      phone: "",
      email: "",
      website: "",
      showMap: "1",
      showMapLink: "1",
      lat: "34.1204167",
      long: "-118.1201348",
    },
    organizer: { name: "", phone: "", website: "", email: "" },
    repeat: { type: "", interval: "", end: "", advanced: "", exclude: "" },
    kind: "4",
    categories: [],
    guests: [],
    registration: null,
    tickets: null,
  };
  let exampleEvent2 = {
    id: 101,
    user_id: "677ce83bf331232e2b6bc0de",
    calendar_id: "80",
    title: "Event 1",
    start: "2025-10-27T15:15:00",
    end: "2025-10-27T20:00:00",
    time_zone: "Asia/Yerevan",
    all_day: 0,
    color: "#3899ec",
    image: "",
    desc: "",
    kind: 1,
    ticket_enabled: 1,
    seatmap_enabled: 1,
    calendar_registration: {
      cid: 80,
      enabled: true,
      emailsEnabled: true,
      general: {
        admin: "nareksargsyan713@yahoo.com",
        external: false,
        url: "",
        countDown: false,
      },
      guestsOptions: {
        isLimited: true,
        limit: 500,
        show: true,
      },
      form: {
        firstName: {
          name: "firstName",
          enabled: true,
          required: true,
          label: "",
        },
        lastName: {
          name: "lastName",
          enabled: true,
          required: true,
          label: "",
        },
        email: {
          name: "email",
          enabled: true,
          required: true,
          label: "",
        },
        phone: {
          name: "phone",
          enabled: true,
          required: true,
          label: "",
        },
        address: {
          name: "address",
          enabled: false,
          required: false,
          label: "",
        },
        comments: {
          name: "comments",
          enabled: false,
          required: false,
          label: "",
        },
        number: {
          name: "number",
          enabled: false,
          required: false,
          label: "",
        },
        checkbox: {
          name: "checkbox",
          enabled: false,
          required: false,
          label: "",
          selection: [
            {
              id: "selection-checkbox-1",
              checked: false,
              label: "",
            },
            {
              id: "selection-checkbox-2",
              checked: false,
              label: "",
            },
            {
              id: "selection-checkbox-3",
              checked: false,
              label: "",
            },
          ],
        },
        radio: {
          name: "radio",
          enabled: false,
          required: false,
          label: "",
          selection: [
            {
              id: "selection-radio-4",
              checked: false,
              label: "",
            },
            {
              id: "selection-radio-5",
              checked: false,
              label: "",
            },
            {
              id: "selection-radio-6",
              checked: false,
              label: "",
            },
          ],
        },
      },
      texts: {
        toPage: "",
        submit: "",
        thanksTitle: "",
        thanksBody: "",
        guestsInfoPrefix: "",
      },
    },
    registration: {
      cid: 80,
      enabled: true,
      emailsEnabled: true,
      general: {
        admin: "nareksargsyan713@yahoo.com",
        external: false,
        url: "",
        countDown: false,
      },
      guestsOptions: {
        isLimited: true,
        limit: 500,
        show: true,
      },
      form: {
        firstName: {
          name: "firstName",
          enabled: true,
          required: true,
          label: "",
        },
        lastName: {
          name: "lastName",
          enabled: true,
          required: true,
          label: "",
        },
        email: {
          name: "email",
          enabled: true,
          required: true,
          label: "",
        },
        phone: {
          name: "phone",
          enabled: true,
          required: true,
          label: "",
        },
        address: {
          name: "address",
          enabled: false,
          required: false,
          label: "",
        },
        comments: {
          name: "comments",
          enabled: false,
          required: false,
          label: "",
        },
        number: {
          name: "number",
          enabled: false,
          required: false,
          label: "",
        },
        checkbox: {
          name: "checkbox",
          enabled: false,
          required: false,
          label: "",
          selection: [
            {
              id: "selection-checkbox-1",
              checked: false,
              label: "",
            },
            {
              id: "selection-checkbox-2",
              checked: false,
              label: "",
            },
            {
              id: "selection-checkbox-3",
              checked: false,
              label: "",
            },
          ],
        },
        radio: {
          name: "radio",
          enabled: false,
          required: false,
          label: "",
          selection: [
            {
              id: "selection-radio-4",
              checked: false,
              label: "",
            },
            {
              id: "selection-radio-5",
              checked: false,
              label: "",
            },
            {
              id: "selection-radio-6",
              checked: false,
              label: "",
            },
          ],
        },
      },
      texts: {
        toPage: "",
        submit: "",
        thanksTitle: "",
        thanksBody: "",
        guestsInfoPrefix: "",
      },
    },
    settings: {
      header: {
        titlesTexts: {
          map: "",
          card: "",
          agenda: "",
        },
        buttonsTexts: {
          day: "",
          map: "",
          card: "",
          next: "",
          prev: "",
          week: "",
          month: "",
          today: "",
          agenda: "",
        },
        titleInCenter: false,
        titlesDisabled: {
          map: false,
          card: false,
          agenda: false,
        },
        buttonsDisabled: {
          all: false,
          day: false,
          map: false,
          card: false,
          next: false,
          prev: false,
          week: false,
          month: false,
          print: true,
          title: false,
          today: false,
          agenda: false,
          search: false,
          addEvent: false,
        },
      },
      appearance: {
        type: "tooltip",
        defaultView: "dayGridMonth",
        proportions: 1.3,
        showAddToIcons: true,
        showShareIcons: true,
      },
      categories: {
        show: true,
        inFooter: true,
      },
      mapOptions: {
        style: 0,
      },
      mwdOptions: {
        maxTime: "20:00:00",
        minTime: "08:00:00",
        showTime: false,
        lightMode: false,
        showHours: true,
        dailyRowsLimit: 7,
        fixedWeekCount: false,
        highlightToday: true,
        weekDaysHidden: [],
        showWeekNumbers: false,
        showTitleOnMobile: false,
        showSkeletonOnMobile: false,
      },
      cardOptions: {
        limit: 6,
        reversed: false,
        cardsInRow: 3,
        spaceBetweenCards: 5,
        shownOnlyUpcomings: false,
      },
      localization: {
        firstDay: 0,
        isHour12: false,
        language: "en",
        timeZone: "Asia/Yerevan",
        convertDate: true,
        defaultDate: 3,
        showTimeZone: true,
      },
      agendaOptions: {
        limit: 20,
        style: "modern",
        reversed: false,
        shownOnlyUpcomings: true,
      },
    },
    payment_settings: {
      methods: {
        cash: {
          connected: true,
        },
        paypal: {
          connected: false,
          email: "",
        },
        stripe: {
          connected: false,
          token: "",
        },
      },
      options: {
        currency: {
          code: "USD",
          id: 0,
          symbol: "$",
          value: "$ Dollar",
        },
        fee: "Absorb fee",
        priceFormat: "$100",
      },
    },
    premium_plan: "business",
    categories: [],
    organizers: [
      {
        id: 54,
        created_at: "2025-10-27T11:10:47.000000Z",
        updated_at: "2025-10-27T11:10:47.000000Z",
        user_id: "677ce83bf331232e2b6bc0de",
        calendar_id: 80,
        email: "",
        name: "",
        phone: "",
        website: "",
        pivot: {
          event_id: 101,
          organizer_id: 54,
        },
      },
    ],
    location: {
      type: "tbd",
      values: {
        physical: {
          name: "",
          address: "",
          phone: "",
          email: "",
          website: "",
          lat: null,
          lng: null,
          id: null,
        },
        online: "",
        tbd: "Location is going to be announced",
      },
    },
    repeat: null,
    additional_info: null,
    guests: [],
    emails: [],
    tickets: [],
    promo_codes: [],
    calendar: {
      id: 80,
      created_at: "2025-10-27T11:07:57.000000Z",
      updated_at: "2025-10-28T08:13:13.000000Z",
      user_id: "677ce83bf331232e2b6bc0de",
      name: "Cal 9",
      type: "Registration/Tickets",
      country: "AM",
      ip: "5.77.193.125",
      published: 1,
      defaults: [
        {
          name: "categories",
          value: [
            {
              id: 1,
              color: "#008000",
              name: "Sport",
            },
            {
              id: 2,
              color: "#800070",
              name: "Art",
            },
          ],
        },
        {
          name: "emails",
          value: [
            {
              type: "confirmation",
              value: {
                enabled: true,
                subject: "Thank you for registering",
                contact:
                  "If you have any questions please contact the organizer",
                desc: "<p>Hi {guestname},</p><p></p><p>Thanks for registering to our event. You can check your registration details below.</p><p></p><p>Looking forward to seeing you!</p>",
              },
            },
            {
              type: "reminder",
              value: {
                enabled: true,
                subject: "You have an event coming up!",
                contact:
                  "If you have any questions please contact the organizer",
                before: "1 day",
                desc: "<p>Hi,</p><p></p><p>A friendly reminder on the upcoming event:</p><p></p><p>If there are any changes in your plans you can just hit reply to let us know.</p>",
              },
            },
            {
              type: "cancellation",
              value: {
                enabled: true,
                subject: "An upcoming event has been canceled",
                contact:
                  "If you have any questions please contact the organizer",
                desc: "<p>Hi,</p><p></p><p>We are sorry to inform you that the below event has been canceled.</p><p></p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>",
              },
            },
            {
              type: "notification",
              value: {
                enabled: true,
                subject: "You have a new guest!",
                contact: "If you have any questions please contact us",
                desc: "<p>Hi,</p><p></p><p>You have a new guest!</p>",
              },
            },
          ],
        },
        {
          name: "payment_settings",
          value: {
            methods: {
              cash: {
                connected: true,
              },
              paypal: {
                connected: false,
                email: "",
              },
              stripe: {
                connected: false,
                token: "",
              },
            },
            options: {
              currency: {
                code: "USD",
                id: 0,
                symbol: "$",
                value: "$ Dollar",
              },
              fee: "Absorb fee",
              priceFormat: "$100",
            },
          },
        },
      ],
    },
    seatmaps: [],
    allDay: false,
    language: "en",
    timeFormat: "24h",
    showTimeZone: true,
    key: "101",
    ticketEnabled: true,
  };

  if (!exampleEvent1.allDay) {
    exampleEvent1.startTime = moment(exampleEvent1.start).format("HH:mm");
    exampleEvent1.endTime = moment(exampleEvent1.end).format("HH:mm");
  }

  // let exampleEvent2 = {"id":343490,"title":"Yoga at the Beach","start":"2021-04-26T13:00:00","end":"2021-04-26T14:00:00","allDay":0,"image":"https:\/\/static.wixstatic.com\/media\/11062b_30464ec0744e445198eb1b60f2b594c2~mv2_d_5327_3551_s_4_2.jpg","desc":"Leave your stress at the office! Come join us this Tuesday afternoon for yoga during your lunch break.","color":"color-8","venue":{"name":"Marina del Rey","address":"Marina del Rey, CA, USA","city":"","statesList":"","country":"","postal":"","phone":"","email":"","website":"","showMap":"1","showMapLink":"1","lat":"33.9802893","long":"-118.4517449"},"organizer":{"name":"","phone":"","website":"","email":""},"repeat":{"type":"","interval":"","end":"","advanced":"","exclude":""},"kind":"0","categories":[],"guests":[],"registration":null,"tickets":null};
  // if(!exampleEvent2.allDay) {
  //   exampleEvent2.startTime = moment(exampleEvent2.start).format('HH:mm');
  //   exampleEvent2.endTime = moment(exampleEvent2.end).format('HH:mm');
  // }

  // const addons = [
  //   {
  //     value: {
  //       afterSubm: "0",
  //       afterShowForm: "0",
  //       afterPage: "0",
  //       afterUrl: "",
  //       backToForm: "Back to Form",
  //       afterUrlTab: "0",
  //       submit_once: false,
  //     },
  //     title: "Eventbrite",
  //     name: "eventbrite",
  //     open_in: 1,
  //     image: "Eventbrite.svg",
  //     description:
  //       "Monitor your Event Brite events through the Event Brite sync feature.",
  //   },
  //   {
  //     value: null,
  //     title: "Google",
  //     name: "google",
  //     open_in: 1,
  //     image: "Google.svg",
  //     description:
  //       "Google Calendar sync allows you to integrate your events and sessions with your Boom Calendar.",
  //   },
  //   {
  //     value: {
  //       registration: {
  //         open: true,
  //         general: {
  //           limit_type: "limited",
  //           page_url: "",
  //           site_type: 1,
  //           limit: 500,
  //           adminInfo: "",
  //           show_guest: true,
  //         },
  //         fields: [
  //           {
  //             id: 1,
  //             type: "phone",
  //             placeholder: "Phone Number",
  //             label: "",
  //             required: false,
  //             active: false,
  //           },
  //           {
  //             id: 2,
  //             type: "address",
  //             placeholder: "Address",
  //             label: "",
  //             required: false,
  //             active: false,
  //           },
  //           {
  //             id: 3,
  //             type: "date",
  //             placeholder: "Date",
  //             label: "",
  //             required: false,
  //             active: false,
  //           },
  //           {
  //             id: 4,
  //             type: "text",
  //             placeholder: "Your comments",
  //             label: "",
  //             required: false,
  //             active: false,
  //           },
  //           {
  //             id: 5,
  //             type: "person",
  //             placeholder: "How many guests?",
  //             label: "",
  //             required: false,
  //             active: false,
  //           },
  //           {
  //             id: 6,
  //             type: "comment",
  //             placeholder: "Anything else we need to know?",
  //             label: "",
  //             required: false,
  //             active: false,
  //           },
  //         ],
  //         defFields: {
  //           form_title: "",
  //           form_desc: "",
  //           first_name: "",
  //           last_name: "",
  //           email: "",
  //         },
  //         texts: {
  //           rsvp: "Register",
  //           submit: "Submit",
  //           thank_title: "Registration completed successfully!",
  //           thank_body: "Please check your registered email address",
  //         },
  //         emails: { notif: true, remind: true, cancel: true },
  //       },
  //       confirmation: {
  //         subject: "Thank you for registering",
  //         desc: "<p style='color:black'>Hi {guestname},</p><p style='color:black'>Thanks for registering to our event. You can check your registration details below.</p><p style='color:black'>Looking forward to seeing you!</p>",
  //       },
  //       reminder: {
  //         subject: "You have an event coming up!",
  //         desc: "<p>Hi,</p><p>A friendly reminder on the upcoming event:</p><p>If there are any changes in your plans you can just hit reply to let us know.</p>",
  //         remTime: { id: "time_option_2", value: "1 day before" },
  //       },
  //       cancelation: {
  //         subject: "An upcoming event has been canceled",
  //         desc: "<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>",
  //       },
  //     },
  //     title: "Registration",
  //     name: "registration",
  //     open_in: 0,
  //     image: "Registration.svg",
  //     description:
  //       "Collect and manage event registrations with a customizable form and email template.",
  //   },
  // ];
  // const registration = null;

  return (
    <div className="App">
      {/* <Description
        title={'132'} 
        
      >
        {exampleEvent1.desc}
      </Description> */}
      {/* <AddShareIcons
        comp_id={"comp-ky3hw27"}
        instance={
          "b75dQ3ITC3GqJcOOQOHXDDpNVVcSTMZtaSnLfUC-VJ4.eyJpbnN0YW5jZUlkIjoiNTgxMmVlNWQtNjVhOC00ODNiLTlhYjctOTg2OTVmMjMwYTg5IiwiYXBwRGVmSWQiOiIxM2I0YTAyOC0wMGZhLTcxMzMtMjQyZi00NjI4MTA2YjhjOTEiLCJzaWduRGF0ZSI6IjIwMjItMDEtMTdUMDg6MjA6MTUuMTE1WiIsInZlbmRvclByb2R1Y3RJZCI6IlByZW1pdW0iLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6ImExOWNkMGIwLTY2ZTUtNGZhZC1iMThiLTdkOGJiZDliYzNmMiIsInNpdGVPd25lcklkIjoiZjRhZjE0OGEtNWY4My00NzQ1LTg5Y2YtYWVlMWExNGVkMGFlIn0"
        }
        event={exampleEvent2}
        boomEventUrlBase={"https://calendar.boomte.ch/single/"}
        order="horizontal"
        hideAddToIcons={false}
      /> */}
      {/* <ListedDetails
        title="title"
        id={"id"}
        // title={'venueTitle'}
        values={{
          name: "Organizer name",
          email: "Organizer name",
          phone: "Organizer name",
          website: "http://nancylittlejohnfineart.com/",
        }}
        wrapperCustomClassNames={["wrapper-call"]}
        textDetailsCustomClassNames={["textDetailsCustomClassNames"]}
        linkDetailsCustomClassNames={["linkDetailsCustomClassNames"]}
      /> */}
      {/* <Location
        elipsis
        textCustomClassNames={["123"]}
        linkCustomClassNames={["456"]}
        wrapperCustomClassNames={["789"]}
        data={{
          type: "physical",
          values: {
            physical: {
              name: "",
              address: "",
              phone: "",
              email: "",
              website: "",
              lat: null,
              lng: null,
            },
            online: "",
            tbd: "Location is going to be announced",
          },
        }}
      /> */}
      {/*

      <hr />
      
       */}

      {/* <RegistrationButton
        cid={"123"}
        text={"Register Now"}
        urlBase="https://shahen.boomtechdev.com/calendar/model/registration.php/"
        event={{
          id: 96,
          user_id: "677ce83bf331232e2b6bc0de",
          calendar_id: 66,
          title: "Event 1",
          start: "2025-10-23T13:00:00",
          end: "2025-10-23T20:00:00",
          time_zone: "Asia/Yerevan",
          all_day: 0,
          color: "#3899ec",
          image: "",
          desc: "",
          kind: 1,
          categoryIds: [],
          organizerId: 50,
          registration: {
            cid: 66,
            enabled: true,
            emailsEnabled: true,
            general: {
              admin: "nareksargsyan713@yahoo.com",
              external: false,
              url: "",
              countDown: false,
            },
            guestsOptions: {
              isLimited: true,
              limit: 500,
              show: true,
            },
            form: {
              firstName: {
                name: "firstName",
                enabled: true,
                required: true,
                label: "",
              },
              lastName: {
                name: "lastName",
                enabled: true,
                required: true,
                label: "",
              },
              email: {
                name: "email",
                enabled: true,
                required: true,
                label: "",
              },
              phone: {
                name: "phone",
                enabled: true,
                required: true,
                label: "",
              },
              address: {
                name: "address",
                enabled: false,
                required: false,
                label: "",
              },
              comments: {
                name: "comments",
                enabled: false,
                required: false,
                label: "",
              },
              number: {
                name: "number",
                enabled: false,
                required: false,
                label: "",
              },
              checkbox: {
                name: "checkbox",
                enabled: false,
                required: false,
                label: "",
                selection: [
                  {
                    id: "selection-checkbox-1",
                    checked: false,
                    label: "",
                  },
                  {
                    id: "selection-checkbox-2",
                    checked: false,
                    label: "",
                  },
                  {
                    id: "selection-checkbox-3",
                    checked: false,
                    label: "",
                  },
                ],
              },
              radio: {
                name: "radio",
                enabled: false,
                required: false,
                label: "",
                selection: [
                  {
                    id: "selection-radio-4",
                    checked: false,
                    label: "",
                  },
                  {
                    id: "selection-radio-5",
                    checked: false,
                    label: "",
                  },
                  {
                    id: "selection-radio-6",
                    checked: false,
                    label: "",
                  },
                ],
              },
            },
            texts: {
              toPage: "",
              submit: "",
              thanksTitle: "",
              thanksBody: "",
              guestsInfoPrefix: "",
            },
          },
          ticketIds: [],
          seatmapIds: [],
          guests: [],
          organizers: [
            {
              id: 50,
              created_at: "2025-10-23T09:23:16.000000Z",
              updated_at: "2025-10-23T09:23:16.000000Z",
              user_id: "677ce83bf331232e2b6bc0de",
              calendar_id: 66,
              email: "",
              name: "",
              phone: "",
              website: "",
              pivot: {
                event_id: 96,
                organizer_id: 50,
              },
            },
          ],
          location: {
            type: "tbd",
            values: {
              physical: {
                name: "",
                address: "",
                phone: "",
                email: "",
                website: "",
                lat: null,
                lng: null,
              },
              online: "",
              tbd: "Location is going to be announced",
            },
          },
          categories: [],
          repeat: null,
          tags: [],
          emails: null,
          invitations: {
            newInvites: [],
            alreadyInvited: [],
          },
          tickets: [],
          seatmaps: [],
          uid: "677ce83bf331232e2b6bc0de",
          cid: "66",
          key: "_96",
          allDay: false,
          startMs: 1761210000000,
          endMs: 1761217200000,
          textColor: "#3899ec",
          borderColor: "#3899ec",
          backgroundColor: "#3899ec",
          ticketEnabled: true,
          promocodes: [],
          seatmapEnabled: true,
        }}
        globalRegistration={D_REGISTRATION}
        disabledBg="lightgreen"
        planName=""
        convertDate={true}
      /> */}

      {/* <GuestLimit
        foreword="Guests"
        event={D_EVENT_1}
        globalRegistration={D_REGISTRATION}
      /> */}

      <DateBox
        dateFormat={"dddd, DD MMMM, YYYY"}
        start={exampleEvent2.start}
        showIcons={true}
        end={exampleEvent2.end}
        type="timeBox"
        event={exampleEvent2}
        locale={exampleEvent2.language}
        timeFormat={exampleEvent2.timeFormat}
        timeZone={exampleEvent2.time_zone}
        allDay={exampleEvent2.allDay}
        allDayText={"All Day"}
        showTimeZone={exampleEvent2.showTimeZone}
        convertDate={exampleEvent2?.settings?.localization?.convertDate}
      />
      {/* <DateBox
        start="09/27/2021T12:30"
        end="09/27/2021T13:30"
        dateFormat='dddd, MMMM DD, YYYY'
        timeFormat='am/pm'
        allDay={false}
        showIcons={true}
        oneLine={false}
        direction='row'
        /> */}
      <hr />
      {/* <DateBox
        start="2022-04-15T13:15"
        end="2022-04-16T15:13"
        dateFormat="dddd, DD MMMM, YYYY"
        allDay={false}
        showIcons={true}
        // showYear={true}
        // startDateOnly={true}
        agenda={true}
        type=""
        timeFormat='am/pm'
      /> */}

      {/* <CategoryItem
        category={{
          id: 454,
          name: "My category",
          color: "red",
        }}
        wrapperCustomClassNames={["customClassName"]}
      /> */}

      {/* <TicketList
        enabled={true}
        tickets={[
          {
            label: 'A-23 seat',
            currency: '$',
            price: 30,
            quantity: 2,
          },
          {
            label: 'A-24 seat',
            currency: '$',
            price: 25,
            quantity: 1,
          },
        ]}
      /> */}
      {/* <div style={{ height: 150, width: 150 }}>
        <BlurryLoadableImg
          //url={'https://drive.google.com/uc?id=1a2F01bYsAl1-33f19W0wqmXrEeljxuc3'}
          url={'https://static.wixstatic.com/media/02a1a0_003f068898e74254b5eff90f8e0ae71d~mv2.jpeg'}
          color={"red"}
          title={'title'}
        />
      </div> */}
      {/* <TicketPrice
        tickets={test_tickets}
        currency={CURRENCY_TYPES[0]}
        showCurrencyAs="symbol"
      /> */}
    </div>
  );
}

const test_registration_addon =
  '{"value":{"registration":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":0,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}},"confirmation":{"subject":"Thank you for registering","desc":"<p>Hi {guestname},</p>\\n<p>Thanks for registering to our event. You can check your registration details below.</p>\\n<p>Looking forward to seeing you!</p>"},"reminder":{"subject":"You have an event coming up!","desc":"<p>Hi, {guestname}{guestname}</p>\\n<p>A friendly reminder on the upcoming event:</p>\\n<p>If there are any changes in your plans you can just hit reply to let us know.</p>","remTime":{"id":"time_option_2","value":"1 day before"}},"cancelation":{"subject":"An upcoming event has been canceled","desc":"<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>"}},"title":"Registration","name":"registration","open_in":0,"image":"Registration.svg","description":"Collect and manage event registrations with a customizable form and email template."}';

const test_event_registration =
  '{"id":10,"comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"806070","value":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":10,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"bjghgfhjghj","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}}}';

const test_ticket_addon =
  '{"value":{"fields":[{"id":0,"label":"tesxt","price":1,"limit":0,"type":"paid","limitNumber":2}],"general":{"open":true,"showPrices":true,"fee":0,"format":{"id":8,"value":"$100"},"currency":{"id":0,"code":"USD","value":"$ Dollars"},"showTicketLimit":true},"payment":{"cash":{"enable":true},"paypal":{"enable":false,"email":""},"stripe":{"enable":true,"account_id":""}},"promoCodes":[]},"title":"Ticket","name":"ticket","open_in":0,"image":"Ticket.svg","description":"Add different types of tickets to your events and sell them online or for cash."}';

const test_event_ticket =
  '{"id":28,"comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"fields":[{"id":0,"label":"tesxt","type":"paid","price":1,"limit":0,"limitNumber":3,"sold":[]}],"general":{"open":false,"showPrices":true,"fee":0,"format":{"id":8,"value":"$100"},"currency":{"id":0,"code":"USD","value":"$ Dollars"},"showTicketLimit":true},"payment":{"cash":{"enable":true},"stripe":{"enable":true},"paypal":{"enable":false}},"promoCodes":[]}}';

const test_event_guests =
  '[{"id":144,"created_at":"2021-09-02 13:14:49","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":2,"ticket_label":"tesxt"}],"first_name":"gd","last_name":"gdfg","email":"dfgdfg@fs.fd"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":360,"created_at":"2021-09-02T13:14:49.000000Z","updated_at":"2021-09-02T13:14:49.000000Z","option_id":"12","event_id":"808367","guest_id":"144","passed":0,"label":"tesxt"},{"id":361,"created_at":"2021-09-02T13:14:49.000000Z","updated_at":"2021-09-02T13:14:49.000000Z","option_id":"12","event_id":"808367","guest_id":"144","passed":0,"label":"tesxt"}]},{"id":145,"created_at":"2021-09-02 13:15:27","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":1,"ticket_label":"tesxt"}],"first_name":"sdfsd","last_name":"sdfsd","email":"fsdf@fsd.sdf"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":362,"created_at":"2021-09-02T13:15:27.000000Z","updated_at":"2021-09-02T13:15:27.000000Z","option_id":"12","event_id":"808367","guest_id":"145","passed":0,"label":"tesxt"}]},{"id":146,"created_at":"2021-09-02 13:15:48","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":1,"ticket_label":"tesxt"}],"first_name":"dfgdf","last_name":"gdf","email":"gdfgd@fsdf.sdf"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":363,"created_at":"2021-09-02T13:15:48.000000Z","updated_at":"2021-09-02T13:15:48.000000Z","option_id":"12","event_id":"808367","guest_id":"146","passed":0,"label":"tesxt"}]}]';

const test_ticket = {
  id: 423,
  name: "ticket 2",
  type: "Ticket",
  price: { type: "Paid", amount: 5 },
  plans: [{ cycle: "Monthly", price: 1, duration: 1, id: 0 }],
  sales: {
    type: "Fixed",
    Dynamic: { start: "On event date" },
    Fixed: { start: "2022-04-20T00:00", end: "2022-04-21T00:00" },
  },
  limit: {
    type: "Limited",
    quantity: 20,
    show: true,
    perOrder: { min: null, max: null },
  },
  description: "",
};

const test_tickets = [
  {
    id: 598,
    name: "as",
    type: "Ticket",
    price: { type: "Paid", amount: 1 },
    plans: [{ cycle: "Monthly", price: 1, duration: 1, id: 0 }],
    sales: {
      type: "Fixed",
      Dynamic: { start: "On event date" },
      Fixed: { start: "2022-04-24T00:00", end: "2022-04-25T00:00" },
    },
    limit: {
      type: "Limited",
      quantity: 20,
      show: true,
      perOrder: { min: null, max: null },
    },
    description: "",
  },
  {
    name: "fsdsdf",
    type: "Ticket",
    price: { type: "Paid", amount: 5 },
    plans: [{ cycle: "Monthly", price: 1, duration: 1, id: 0 }],
    sales: {
      type: "Fixed",
      Dynamic: { start: "On event date" },
      Fixed: { start: "2022-04-25T00:00", end: "2022-04-26T00:00" },
    },
    limit: {
      type: "Limited",
      quantity: 20,
      show: true,
      perOrder: { min: null, max: null },
    },
    description: "",
    id: 665,
  },
  {
    name: "424234",
    type: "Ticket",
    price: { type: "Paid", amount: 13 },
    plans: [{ cycle: "Monthly", price: 1, duration: 1, id: 0 }],
    sales: {
      type: "Fixed",
      Dynamic: { start: "On event date" },
      Fixed: { start: "2022-04-25T00:00", end: "2022-04-26T00:00" },
    },
    limit: {
      type: "Limited",
      quantity: 20,
      show: true,
      perOrder: { min: null, max: null },
    },
    description: "",
    id: 666,
  },
  {
    name: "fsdfsdf",
    type: "Plan",
    price: { type: "Paid", amount: 1 },
    plans: [
      { cycle: "Monthly", price: 4, duration: 1, id: 0 },
      { cycle: "Monthly", price: 15, duration: 1, id: 1 },
      { cycle: "Monthly", price: 242, duration: 1, id: 2 },
    ],
    sales: {
      type: "Fixed",
      Dynamic: { start: "On event date" },
      Fixed: { start: "2022-04-25T00:00", end: "2022-04-26T00:00" },
    },
    limit: {
      type: "Limited",
      quantity: 20,
      show: true,
      perOrder: { min: null, max: null },
    },
    description: "",
    id: 667,
  },
  {
    name: "fsdfsdf",
    type: "Donation",
    price: { type: "Paid", amount: 1 },
    plans: [{ cycle: "Monthly", price: 1, duration: 1, id: 0 }],
    sales: {
      type: "Fixed",
      Dynamic: { start: "On event date" },
      Fixed: { start: "2022-04-25T00:00", end: "2022-04-26T00:00" },
    },
    limit: {
      type: "Limited",
      quantity: 20,
      show: true,
      perOrder: { min: null, max: null },
    },
    description: "",
    id: 668,
  },
];

export default App;
