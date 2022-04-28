import React from 'react'
import PropTypes from 'prop-types'
import DateBoxComponent from './DateBox'
import TimeBox from './timeBox/TimeBox'

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
  dayNumberSize = 40,
  startDateOnly = false,
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
        startDateOnly={startDateOnly}
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
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  locale: PropTypes.string,
  showIcons: PropTypes.bool,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  showTimeZone: PropTypes.bool,
  timeZone: PropTypes.string,
  wrapperCustomClassNames: PropTypes.array,
  agenda: PropTypes.bool,
  type: PropTypes.string,
  allDayText: PropTypes.string,
  oneLine: PropTypes.bool,
  direction: PropTypes.string,
  fixedHeight: PropTypes.bool,
  dayNumberSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startDateOnly: PropTypes.bool
}

export default DateBox