import { D_WRAPPER_CLASSNAMES, D_EVENT_1, D_EVENT_2, D_CLASSNAMES } from '../lib/helpers/defaults'
import BlurryLoadableImg from '../lib/BlurryLoadableImg/main'

export default {
    title: 'Components/BlurryLoadableImg',
    component: BlurryLoadableImg,
}

const Template = args => (
    <div style={{width: 400, height: 400}}>
        <BlurryLoadableImg { ...args } />
    </div>
)

export const WithImage = Template.bind({})
WithImage.args = {
    url: D_EVENT_1.image,
    color: D_EVENT_1.color,
    title: D_EVENT_1.title,
    showColorAsBackground: true,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    imgCustomClassNames: D_CLASSNAMES,
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
    url: D_EVENT_2.image,
    color: D_EVENT_2.color,
    title: D_EVENT_2.title,
    showColorAsBackground: true,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES,
    imgCustomClassNames: D_CLASSNAMES,
}