import React from 'react'
import DateBoxComponent from './DateBox'
import TimeBox from './TimeBox'

const DateBox = ({
  start,
  end,
  locale = 'en',
  showIcons = true,
  dateFormat = 'dddd, MMMM DD YYYY',
  timeFormat = 'am/pm',
  allDay = true,
  showTimeZone = false,
  timeZone = '',
  wrapperCustomClassNames = [],
  agenda = false,
  type = 'timeBox',
  allDayText = 'All Day',
  oneLine = false,
  direction = 'row',
  fixedHeight = false,
  dayNumberSize = 40
}) => {
  if (type === 'timeBox') {
    return (
      <TimeBox
        start={start}
        end={end}
        locale={locale}
        showIcons={showIcons}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        allDay={allDay}
        showTimeZone={showTimeZone}
        timeZone={timeZone}
        wrapperCustomClassNames={wrapperCustomClassNames}
        agenda={agenda}
        allDayText={allDayText}
        oneLine={oneLine}
        fixedHeight={fixedHeight}
      />
    )
  }
  return (
    <DateBoxComponent
      start={start}
      end={end}
      locale={locale}
      wrapperCustomClassNames={wrapperCustomClassNames}
      direction={direction}
      dayNumberSize={dayNumberSize}
    />
  )
}

DateBox.propTypes = {


}

export default DateBox