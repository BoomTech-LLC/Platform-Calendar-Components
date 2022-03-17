import { D_EVENT_1, D_EVENT_2, D_LINK_CLASSNAMES, D_WRAPPER_CLASSNAMES } from '../lib/helpers/defaults'
import ListedDetails from '../lib/ListedDetails/main'

export default {
    title: 'Components/ListedDetails',
    component: ListedDetails,
}

const Template = args => (
    <div style={{maxWidth: 500}}>
        <ListedDetails { ...args } />
    </div>
)

export const Venue = Template.bind({})
Venue.args = {
    id: D_EVENT_2.id, 
    title: 'Venue',
    titleBorderHidden: false,
    values: D_EVENT_1.location.values.physical,
    textDetailsCustomClassNames: [],
    linkDetailsCustomClassNames: D_LINK_CLASSNAMES,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    rowSpace: .25
}

export const Organizer = Template.bind({})
Organizer.args = {
    id: D_EVENT_2.id,
    title: 'Organizer',
    titleBorderHidden: false,
    values: D_EVENT_2.organizer,
    textDetailsCustomClassNames: [],
    linkDetailsCustomClassNames: D_LINK_CLASSNAMES,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    rowSpace: .25
}