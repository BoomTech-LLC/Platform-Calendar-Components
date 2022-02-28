import Description from './lib/Description/index'
import GuestLimit from './lib/GuestLimit/index'
import BlurryLoadableImg from './lib/BlurryLoadableImg/index'
import RegistrationButton from './lib/RegistrationButton/index'
import DateBox from './lib/DateBox/index'
import ListedDetails from './lib/ListedDetails/index'
import Location from './lib/Location/index'
import AddShareIcons from './lib/AddShareIcons/index'
import CategoryItem from './lib/CategoryItem'
import { D_EVENT_1, D_REGISTRATION } from './lib/helpers/defaults'
import TicketList from './lib/TicketList/main'

function App() {
  let exampleEvent1 = {"id":343491,"title":"Open Air Poetry Reading and Discussion","start":"2021-04-21","end":"2021-04-27","allDay":1,"image":"https:\/\/static.wixstatic.com\/media\/11062b_b31efefcdf3846849b7fe93d9203f105~mv2_d_6200_4132_s_4_2.jpg","desc":"<p>Four amazing evenings of poetry reading and discussion! We will do a poetry reading from various poets followed by an interactive discussion. Each day there will be three poets whose works will be read and discussed.<br>If you want to attend and listen to some great poetry, please register. Our organizers will get back to you.<\/p>","color":"color-13","venue":{"name":"Virginia Road","address":"1485 Virginia Road, San Marino, CA 91108, USA","city":"","statesList":"","country":"","postal":"","phone":"","email":"","website":"","showMap":"1","showMapLink":"1","lat":"34.1204167","long":"-118.1201348"},"organizer":{"name":"","phone":"","website":"","email":""},"repeat":{"type":"","interval":"","end":"","advanced":"","exclude":""},"kind":"4","categories":[],"guests":[],"registration":null,"tickets":null};
  let exampleEvent2 = {"id":782910,"title":"Bisong Art Gallery","start":"2022-02-04T18:00","end":"2022-02-04T21:00","allDay":0,"image":"https:\/\/static.wixstatic.com\/media\/f4af14_0be51224659d4168a6b0d79a214548d3~mv2.jpg","desc":"<p>Bisong Art Gallery along with The D.R.E.A.M Affect Foundation is partnering with Prairie View A&amp;M Northwest Houston Center for a Black History Month Exhibition.<\/p><br><p>\"Culture: Our New Normal\" draws attention to the current events of black culture and how they continue to shape history. A portion of the proceeds will go to a scholarship fund for a Fine Art Student at PVAMU.<\/p>","color":"#9fe1e7","venue":{"address":"Prairie View A&M University, N.W. Houston Center, 9449 Grant Road, Houston, TX 77070, USA","email":"","name":"Prairie View A&M University","phone":"","showMap":"1","showMapLink":"1","website":"","lat":"29.9658645","long":"-95.5587025"},"organizer":{"email":"info@bisonggallery.com","name":"Bisong Art Gallery","phone":"713-498-3015","website":"www.bisonggallery.com"},"repeat":{"type":"","interval":"","end":"","advanced":""},"kind":"1","categories":[{"id":19412,"name":"Opening Reception","color":"#005FB0"}],"guests":[],"registration":null,"tickets":null}
  if(!exampleEvent1.allDay) {
    exampleEvent1.startTime = moment(exampleEvent1.start).format('HH:mm');
    exampleEvent1.endTime = moment(exampleEvent1.end).format('HH:mm');
  }
  
  // let exampleEvent2 = {"id":343490,"title":"Yoga at the Beach","start":"2021-04-26T13:00:00","end":"2021-04-26T14:00:00","allDay":0,"image":"https:\/\/static.wixstatic.com\/media\/11062b_30464ec0744e445198eb1b60f2b594c2~mv2_d_5327_3551_s_4_2.jpg","desc":"Leave your stress at the office! Come join us this Tuesday afternoon for yoga during your lunch break.","color":"color-8","venue":{"name":"Marina del Rey","address":"Marina del Rey, CA, USA","city":"","statesList":"","country":"","postal":"","phone":"","email":"","website":"","showMap":"1","showMapLink":"1","lat":"33.9802893","long":"-118.4517449"},"organizer":{"name":"","phone":"","website":"","email":""},"repeat":{"type":"","interval":"","end":"","advanced":"","exclude":""},"kind":"0","categories":[],"guests":[],"registration":null,"tickets":null};
  // if(!exampleEvent2.allDay) {
  //   exampleEvent2.startTime = moment(exampleEvent2.start).format('HH:mm');
  //   exampleEvent2.endTime = moment(exampleEvent2.end).format('HH:mm');
  // }

  const addons = [{"value":{"afterSubm":"0","afterShowForm":"0","afterPage":"0","afterUrl":"","backToForm":"Back to Form","afterUrlTab":"0","submit_once":false},"title":"Eventbrite","name":"eventbrite","open_in":1,"image":"Eventbrite.svg","description":"Monitor your Event Brite events through the Event Brite sync feature."},{"value":null,"title":"Google","name":"google","open_in":1,"image":"Google.svg","description":"Google Calendar sync allows you to integrate your events and sessions with your Boom Calendar."},{"value":{"registration":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":500,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}},"confirmation":{"subject":"Thank you for registering","desc":"<p style='color:black'>Hi {guestname},</p><p style='color:black'>Thanks for registering to our event. You can check your registration details below.</p><p style='color:black'>Looking forward to seeing you!</p>"},"reminder":{"subject":"You have an event coming up!","desc":"<p>Hi,</p><p>A friendly reminder on the upcoming event:</p><p>If there are any changes in your plans you can just hit reply to let us know.</p>","remTime":{"id":"time_option_2","value":"1 day before"}},"cancelation":{"subject":"An upcoming event has been canceled","desc":"<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>"}},"title":"Registration","name":"registration","open_in":0,"image":"Registration.svg","description":"Collect and manage event registrations with a customizable form and email template."}] 
  const registration = null


  return (
    <div className="App">
      {/* <Description
        title={'132'} 
        
      >
        {exampleEvent1.desc}
      </Description> */}
      <AddShareIcons
          comp_id={'comp-ky3hw27'}
          instance={'b75dQ3ITC3GqJcOOQOHXDDpNVVcSTMZtaSnLfUC-VJ4.eyJpbnN0YW5jZUlkIjoiNTgxMmVlNWQtNjVhOC00ODNiLTlhYjctOTg2OTVmMjMwYTg5IiwiYXBwRGVmSWQiOiIxM2I0YTAyOC0wMGZhLTcxMzMtMjQyZi00NjI4MTA2YjhjOTEiLCJzaWduRGF0ZSI6IjIwMjItMDEtMTdUMDg6MjA6MTUuMTE1WiIsInZlbmRvclByb2R1Y3RJZCI6IlByZW1pdW0iLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6ImExOWNkMGIwLTY2ZTUtNGZhZC1iMThiLTdkOGJiZDliYzNmMiIsInNpdGVPd25lcklkIjoiZjRhZjE0OGEtNWY4My00NzQ1LTg5Y2YtYWVlMWExNGVkMGFlIn0'}
          event={exampleEvent2}
          boomEventUrlBase={'https://calendar.boomte.ch/single/'}
          order='vertical'
          hideAddToIcons={false}
      />
      {/* <ListedDetails
          title='title' 
          id={'id'}
          // title={'venueTitle'}
          values = {
            {
              name: "Organizer name",
              email: "Organizer name",
              phone: "Organizer name",
              website: "http://nancylittlejohnfineart.com/"
            }
          }
          wrapperCustomClassNames={['wrapper-call']}
          textDetailsCustomClassNames={['textDetailsCustomClassNames']}
          linkDetailsCustomClassNames={['linkDetailsCustomClassNames']}
      /> */}
      <Location
        elipsis
        textCustomClassNames={['123']}
        linkCustomClassNames={['456']}
        wrapperCustomClassNames={['789']}
        data={{
          type: 'tbd',
          values: {
            physical: {
              address: 'Shengavit', 
              lat: 100, 

              lng: 200
            },
            tbd: '123132',
            online: 'figma.com/file/bphT1D8WXMzdWcwLSIZs9X/Platform-Calendar?node-id=991%3A8figma.com/file/bphT1D8WXMzdWcwLSIZs9X/Platform-Calendar?node-id=991%3A8figma.com/file/bphT1D8WXMzdWcwLSIZs9X/Platform-Calendar?node-id=991%3A8'
          }
            
        }}
      />
      
      <hr/>
      <RegistrationButton
          cid={'123'}
          text={'Pele'}
          urlBase='https://shahen.boomtechdev.com/calendar/model/registration.php/'
          event={D_EVENT_1}
          globalRegistration={D_REGISTRATION}
      />
      <GuestLimit
          foreword='Guests'
          event={D_EVENT_1}
          globalRegistration={D_REGISTRATION}
      /> 
      {/* <DateBox
        start="09/27/2021T12:30"
        end="09/27/2021T12:30"
        dateFormat='dddd, MMMM DD'
        timeFormat='am/pm'
        allDay={true}
        showIcons={true}
        type='dateBox'
        oneLine={false}
        direction='column'
        locale={'it'}
      /> */}
      <hr/>
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
        <hr/>
      <DateBox
        start="11/19/2021T17:00"
        end="11/19/2021T19:00"
        type='timeBox'
        dateFormat='dddd, MMMM DD, YYYY'
        timeFormat='am/pm'
        allDay={false}
        showIcons={true}
        oneLine={false}
        direction='row'
        showYear={true}
        year={2019}
        fixedHeight={true}
        // agenda={true}
      />
        {/* <DateBox
          start="09/27/2021T13:30"
          end="09/27/2022T13:30"
          // dateFormat="DD MMMM, YYYY"
          allDay={false}
          // agenda={true}
          showIcons={true}
          // type="dateBox"
          timeFormat='am/pm'
          showYear={true}
        />       */}

      {/* <CategoryItem
        category={{
          id: 454,
          name: 'My category',
          color: 'red'
        }}
        wrapperCustomClassNames={['customClassName']}
      /> */}
      <TicketList
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
      />

      <div style={{height: 150, width: 150}}>
        <BlurryLoadableImg
          // url={'https://drive.google.com/uc?id=1rJhGctvvf5L-3qfLe1zfgmleuSo-AhWB'}
          url={'https://static.wixstatic.com/media/02a1a0_003f068898e74254b5eff90f8e0ae71d~mv2.jpeg'}
          color={"red"}
          title={'title'}
          />
      </div>
    </div>
  )
}


const test_registration_addon =
  '{"value":{"registration":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":0,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}},"confirmation":{"subject":"Thank you for registering","desc":"<p>Hi {guestname},</p>\\n<p>Thanks for registering to our event. You can check your registration details below.</p>\\n<p>Looking forward to seeing you!</p>"},"reminder":{"subject":"You have an event coming up!","desc":"<p>Hi, {guestname}{guestname}</p>\\n<p>A friendly reminder on the upcoming event:</p>\\n<p>If there are any changes in your plans you can just hit reply to let us know.</p>","remTime":{"id":"time_option_2","value":"1 day before"}},"cancelation":{"subject":"An upcoming event has been canceled","desc":"<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>"}},"title":"Registration","name":"registration","open_in":0,"image":"Registration.svg","description":"Collect and manage event registrations with a customizable form and email template."}'

const test_event_registration =
  '{"id":10,"comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"806070","value":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":10,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"bjghgfhjghj","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}}}'

const test_ticket_addon =
  '{"value":{"fields":[{"id":0,"label":"tesxt","price":1,"limit":0,"type":"paid","limitNumber":2}],"general":{"open":true,"showPrices":true,"fee":0,"format":{"id":8,"value":"$100"},"currency":{"id":0,"code":"USD","value":"$ Dollars"},"showTicketLimit":true},"payment":{"cash":{"enable":true},"paypal":{"enable":false,"email":""},"stripe":{"enable":true,"account_id":""}},"promoCodes":[]},"title":"Ticket","name":"ticket","open_in":0,"image":"Ticket.svg","description":"Add different types of tickets to your events and sell them online or for cash."}'

const test_event_ticket =
  '{"id":28,"comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"fields":[{"id":0,"label":"tesxt","type":"paid","price":1,"limit":0,"limitNumber":3,"sold":[]}],"general":{"open":false,"showPrices":true,"fee":0,"format":{"id":8,"value":"$100"},"currency":{"id":0,"code":"USD","value":"$ Dollars"},"showTicketLimit":true},"payment":{"cash":{"enable":true},"stripe":{"enable":true},"paypal":{"enable":false}},"promoCodes":[]}}'

const test_event_guests =
  '[{"id":144,"created_at":"2021-09-02 13:14:49","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":2,"ticket_label":"tesxt"}],"first_name":"gd","last_name":"gdfg","email":"dfgdfg@fs.fd"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":360,"created_at":"2021-09-02T13:14:49.000000Z","updated_at":"2021-09-02T13:14:49.000000Z","option_id":"12","event_id":"808367","guest_id":"144","passed":0,"label":"tesxt"},{"id":361,"created_at":"2021-09-02T13:14:49.000000Z","updated_at":"2021-09-02T13:14:49.000000Z","option_id":"12","event_id":"808367","guest_id":"144","passed":0,"label":"tesxt"}]},{"id":145,"created_at":"2021-09-02 13:15:27","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":1,"ticket_label":"tesxt"}],"first_name":"sdfsd","last_name":"sdfsd","email":"fsdf@fsd.sdf"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":362,"created_at":"2021-09-02T13:15:27.000000Z","updated_at":"2021-09-02T13:15:27.000000Z","option_id":"12","event_id":"808367","guest_id":"145","passed":0,"label":"tesxt"}]},{"id":146,"created_at":"2021-09-02 13:15:48","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":1,"ticket_label":"tesxt"}],"first_name":"dfgdf","last_name":"gdf","email":"gdfgd@fsdf.sdf"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":363,"created_at":"2021-09-02T13:15:48.000000Z","updated_at":"2021-09-02T13:15:48.000000Z","option_id":"12","event_id":"808367","guest_id":"146","passed":0,"label":"tesxt"}]}]'


export default App