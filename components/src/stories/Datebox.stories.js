import DateboxComponent from '../lib/DateBox'
import { D_WRAPPER_CLASSNAMES } from '../lib/helpers/defaults'
import './main.css'

export default {
  title: "Components/Datebox",
  component: DateboxComponent,
}

const Template = args => <DateboxComponent {...args} />

export const Datebox = Template.bind({})
Datebox.args = {
    start: "09/27/2021T12:30",
    end: "09/27/2021T12:30",
    dateFormat: 'dddd, MMMM DD',
    timeFormat: 'am/pm',
    allDay: true,
    showIcons: true,
    type: 'timebox',
    direction: 'column',
    locale: 'it',
    showTimeZone: false,
    timeZone: '',
    allDayText: 'All Day',
    oneLine: false,
    fixedHeight: false,
    dayNumberSize: 40,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES
}