import React from 'react';
import PropTypes from 'prop-types';
import styles from './../main.module.css'

const EndTimeRow = ({
    datesEqual,
    allDay,
    startDateOnly,
    showIcons,
    oneLine,
    startTime,
    endTime,
    endDate,
    timeZoneToShow,
    agenda,
    allDayText
}) => {
    return(
        !(datesEqual && allDay && !agenda) && !startDateOnly &&
            <div className={styles.two_line_end}>
                {
                    showIcons &&
                    <div className='icon-clock'/>
                }
                <p className={oneLine ? styles.oneLine : undefined}>
                {
                    datesEqual && allDay && agenda ? allDayText :
                    datesEqual ? `${startTime}${startTime === endTime ? '' : ` -${endTime}`} ${timeZoneToShow}` :
                    `${endDate}${endTime} ${timeZoneToShow}`
                }
                </p>
            </div>
    )
}

EndTimeRow.propTypes = {
    datesEqual: PropTypes.bool,
    startDate: PropTypes.string,
    startTime: PropTypes.string,
    timeZoneToShow: PropTypes.string,
    showIcons: PropTypes.bool,
    oneLine: PropTypes.bool,
    allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    startDateOnly: PropTypes.bool,
    endTime: PropTypes.string,
    endDate: PropTypes.string,
    agenda: PropTypes.bool,
    allDayText: PropTypes.string
  }

export default EndTimeRow;