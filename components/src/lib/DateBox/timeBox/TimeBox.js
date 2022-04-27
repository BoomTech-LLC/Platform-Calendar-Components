import React from 'react'
import styles from './../main.module.css'
import PropTypes from 'prop-types'
import StartTimeRow from './StartTimeRow'
import EndTimeRow from './EndTimeRow'
import { formatDate, formatTime } from '../../helpers/dateBox'
import { combineClassNames } from '../../helpers/commons'

const TimeBox = ({
  start,
  end,
  showIcons,
  locale,
  dateFormat,
  timeFormat,
  allDay,
  showTimeZone,
  timeZone,
  wrapperCustomClassNames = [],
  agenda,
  allDayText,
  oneLine,
  fixedHeight,
  startDateOnly,
}) => {
  const { startDate, endDate } = formatDate(start, end, dateFormat, locale)
  const { startTime, endTime } = formatTime(
    start,
    end,
    timeFormat,
    allDay,
    locale
  )
  const timeZoneToShow = (allDay || !showTimeZone) ? '' : timeZone;
  const datesEqual = startDate === endDate

  if (datesEqual && allDay && agenda) {
    return (
      <div className={combineClassNames([styles.all_day_text_parent, ...wrapperCustomClassNames])}>
        <p>{allDayText}</p>
        {fixedHeight && <p className={styles.hidden}/>}
      </div>
    )
  }

  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;

  return (
    <div className={combineClassNames([...wrapperCustomClassNames, styles.timebox_wrapper])}>
      
      <StartTimeRow
          showIcons={showIcons}
          datesEqual={datesEqual}
          oneLine={oneLine}
          startDate={startDate}
          startTime={startTime}
          timeZoneToShow={timeZoneToShow}
      />

      <EndTimeRow
        datesEqual={datesEqual}
        allDay={allDay}
        startDateOnly={startDateOnly}
        showIcons={showIcons}
        oneLine={oneLine}
        startTime={startTime}
        endTime={endTime}
        endDate={endDate}
        timeZoneToShow={timeZoneToShow}
      />

      {
        showHiddenRow &&
          <div className={combineClassNames([styles.two_line_start, styles.hidden])}>
            <p className={oneLine ? styles.oneLine : undefined}>
              hidden row
            </p>
          </div>
      }
    </div>
  )
}

TimeBox.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  showIcons: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array,
  oneLine: PropTypes.bool,
  fixedHeight: PropTypes.bool,
  startDateOnly: PropTypes.bool
}

export default TimeBox

