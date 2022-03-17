import { D_EVENT_1, D_REGISTRATION, D_WRAPPER_CLASSNAMES } from '../lib/helpers/defaults'
import GuestLimitComponent from '../lib/GuestLimit/main'

export default {
    title: 'Components/GuestLimit',
    component: GuestLimitComponent,
}

const Template = args => <GuestLimitComponent { ...args } />

export const GuestLimit = Template.bind({})

GuestLimit.args = {
    foreword: 'Guests: ',
    event: D_EVENT_1,
    guests: [],
    globalRegistration: D_REGISTRATION,
    globalTickets: {},
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES
}