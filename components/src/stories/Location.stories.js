import { D_WRAPPER_CLASSNAMES, D_EVENT_1, D_LINK_CLASSNAMES } from '../lib/helpers/defaults'
import Location from '../lib/Location/main'

export default {
    title: 'Components/Location',
    component: Location,
}

const Template = args => (
    <div style={{maxWidth: 500}}>
        <Location { ...args } />
    </div>
)

export const Physical = Template.bind({})
Physical.args = {
    data: D_EVENT_1.location,
    elipsis: true,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    linkCustomClassNames: D_LINK_CLASSNAMES,
    textCustomClassNames: [],
}

export const Online = Template.bind({})
Online.args = {
    data: {
        ...D_EVENT_1.location,
        type: 'online'
    },
    elipsis: true,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    linkCustomClassNames: D_LINK_CLASSNAMES,
    textCustomClassNames: [],
}

export const Tbd = Template.bind({})
Tbd.args = {
    data: {
        ...D_EVENT_1.location,
        type: 'tbd'
    },
    elipsis: true,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    linkCustomClassNames: D_LINK_CLASSNAMES,
    textCustomClassNames: [],
}