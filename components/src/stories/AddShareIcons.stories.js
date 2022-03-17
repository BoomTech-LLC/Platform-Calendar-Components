import { D_WRAPPER_CLASSNAMES, D_EVENT_1 } from '../lib/helpers/defaults'
import AddShareIcons from '../lib/AddShareIcons/main'

export default {
    title: 'Components/AddShareIcons',
    component: AddShareIcons,
}

const Template = args => (
    <div style={{maxWidth: 500}}>
        <AddShareIcons { ...args } />
    </div>
)

export const Horizontal = Template.bind({})

export const Vertical = Template.bind({})
Vertical.args = {
    title: 'Add & Share',
    comp_id: 'demo-comp_id',
    instance: 'demo-instance',
    titleBorderHidden: false,
    event: D_EVENT_1,
    boomEventUrlBase: 'https://calendar.boomte.ch/single/',
    hideAddToIcons: false,
    addToSectionName: 'Add to',
    hideShareIcons: false,
    shareSectionName: 'Share',
    copyActionTooltipText: 'Copy',
    copiedTooltipText: 'Copied',
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    titleCustomClassNames: [],
    contentCustomClassNames: [],
    copyTooltipCustomClassNames: [],
    order: 'vertical'
}

Horizontal.args = {
    title: 'Add & Share',
    comp_id: 'demo-comp_id',
    instance: 'demo-instance',
    titleBorderHidden: false,
    event: D_EVENT_1,
    boomEventUrlBase: 'https://calendar.boomte.ch/single/',
    hideAddToIcons: false,
    addToSectionName: 'Add to',
    hideShareIcons: false,
    shareSectionName: 'Share',
    copyActionTooltipText: 'Copy',
    copiedTooltipText: 'Copied',
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    titleCustomClassNames: [],
    contentCustomClassNames: [],
    copyTooltipCustomClassNames: [],
    order: 'horizontal'
}