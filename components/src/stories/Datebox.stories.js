import Dateboxes from '../lib/DateBox'
import { D_WRAPPER_CLASSNAMES } from '../lib/helpers/defaults'
import './main.css'

export default {
  title: "Components/Dateboxes",
  component: Dateboxes,
}

const Template = args => <Dateboxes {...args} />

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
  showTimeZone: false,
  timeZone: '',
  allDayText: 'All Day',
  oneLine: false,
  fixedHeight: false,
  dayNumberSize: 40,
  wrapperCustomClassNames: D_WRAPPER_CLASSNAMES
}

export const TimeBox = Template.bind({})
TimeBox.args = {
  start: "09/27/2021T12:30",
  end: "09/27/2021T14:30",
  dateFormat: 'dddd, MMMM DD',
  timeFormat: 'am/pm',
  allDay: false,
  showIcons: true,
  showTimeZone: true,
  timeZone: 'GMT +4',
  allDayText: 'All Day',
  oneLine: false,
  fixedHeight: false,
  wrapperCustomClassNames: D_WRAPPER_CLASSNAMES
}