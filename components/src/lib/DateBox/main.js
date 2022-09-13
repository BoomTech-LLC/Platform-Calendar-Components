import React from 'react'
import PropTypes from 'prop-types'
import DateBoxComponent from './DateBox'
import TimeBox from './timeBox/TimeBox'
import OneLineDateBox from './oneLineDateBox/OneLineDateBox'

const DateBox = ({
  start,
  end = '9999-12-12',
  locale = 'en',
  showIcons = true,
  dateFormat = 'DD/MM/YYYY',
  timeFormat = 'am/pm',
  allDay = true,
  showTimeZone = false,
  timeZone = '',
  wrapperCustomClassNames = [],
  agenda = false,
  type = 'dateBox',
  allDayText = 'All Day',
  oneLine = false,
  direction = 'row',
  fixedHeight = false,
  font = 'normal normal normal 14px / 16px Helvetica',
  startDateOnly = false,
  ticketEnabled = false
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
        ticketEnabled={ticketEnabled}
      />
    )
  }
  if (type === 'oneLineDateBox') {
    return (
      <OneLineDateBox
        start={start}
        end={end}
        locale={locale}
        showIcons={showIcons}
        timeFormat={timeFormat}
        dateFormat={dateFormat}
        allDay={allDay}
        wrapperCustomClassNames={wrapperCustomClassNames}
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
      font={font}
    />
  )
}

DateBox.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
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
  font: PropTypes.string,
  startDateOnly: PropTypes.bool
}

export default DateBox