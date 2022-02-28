import React from 'react'
import styles from './main.module.css'
import PropTypes from 'prop-types'
import { formatDate, formatTime } from '../helpers/dateBox'
import { combineClassNames } from '../helpers/commons'

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
}) => {

  const { startDate, endDate } = formatDate(start, end, dateFormat, locale)
  const { startTime, endTime } = formatTime(
    start,
    end,
    timeFormat,
    allDay,
    locale
  )
  const timeZoneToShow = (allDay || !showTimeZone) ? '' : timeZone
  const datesEqual = startDate === endDate

  if (datesEqual && allDay && agenda) {
    return (
      <div className={combineClassNames([styles.all_day_text_parent, ...wrapperCustomClassNames])}>
        <p>{allDayText}</p>
        {fixedHeight && <p className={styles.hidden}>hidden row</p>}
      </div>
    )
  }

  const showHiddenRow = datesEqual && (allDay || agenda) && fixedHeight;

  return (
    <div className={combineClassNames([...wrapperCustomClassNames, styles.timebox_wrapper])}>
      {!(datesEqual && agenda) &&
        <div className={styles.two_line_start}>
          {
            showIcons && 
            <div className={datesEqual ? 'icon-date' : styles.start_date_icon + ' icon-clock'}/>
          }
          <p className={oneLine ? styles.oneLine : 'undefined'}>
            {
              startDate + (datesEqual ? '' : startTime + ' ' + timeZoneToShow)
            }
          </p>
        </div>
      }

      {!(datesEqual && allDay) &&
        <div className={styles.two_line_end}>
          {
            showIcons && 
            <div className={(datesEqual ? styles.start_date_icon : '') + ' icon-clock'} />
          }
          <p className={oneLine ? styles.oneLine : null}>
          {
            datesEqual ? 
            (startTime.trim() + (startTime === endTime ? '' : ' -' + endTime) + ' ' + timeZoneToShow) :
            endDate + endTime + ' ' + timeZoneToShow 
          }
          </p>
        </div>
      }
      {
        showHiddenRow ?
        <div className={combineClassNames([styles.two_line_start, styles.hidden])}>
          <p className={oneLine ? styles.oneLine : undefined}>
            hidden row
          </p>
        </div> :
        null
      }
    </div>
  )
}

export default TimeBox

TimeBox.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  showIcons: PropTypes.bool,
  wrapperCustomClassNames: PropTypes.array,
  oneLine: PropTypes.bool,
  fixedHeight: PropTypes.bool
}
