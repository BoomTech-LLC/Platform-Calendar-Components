import Buttons from '../lib/RegistrationButton'
import { DEMO_CID, DEMO_UID, D_EVENT_1, D_REGISTRATION, D_WRAPPER_CLASSNAMES } from '../lib/helpers/defaults'
import './main.css'

export default {
  title: "Components/Buttons",
  component: Buttons,
}

const Template = args => <Buttons {...args} />

export const Registration = Template.bind({})
Registration.args = {
  text: 'Register',
  uid: DEMO_UID,
  cid: DEMO_CID,
  urlBase: 'https://shahen.boomtechdev.com/calendar/model/registration.php/',
  event: D_EVENT_1,
  globalRegistration: D_REGISTRATION,
  globalTickets: [],
  wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
}