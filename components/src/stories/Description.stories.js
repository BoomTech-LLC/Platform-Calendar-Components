import { D_CLASSNAMES, D_EVENT_2 } from '../lib/helpers/defaults'
import Desc from '../lib/Description/main'

export default {
    title: 'Components/Description',
    component: Desc,
}

const Template = args => <Desc { ...args } />

export const Description = Template.bind({})
Description.args = {
    title: 'Description',
    children: D_EVENT_2.desc,
    wrapperCustomClassNames: D_CLASSNAMES 
}