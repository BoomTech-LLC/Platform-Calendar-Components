import React from 'react';
import PropTypes from 'prop-types';
import styles from './../main.module.css'

const StartTimeRow = ({
    showIcons,
    datesEqual,
    oneLine,
    startDate,
    startTime,
    timeZoneToShow
}) => {
    return(
        <div className={styles.two_line_start}>
            {
                showIcons &&
                <div className={datesEqual ? 'icon-date' : 'icon-clock'}/>
            }
            <p className={oneLine ? styles.oneLine : undefined}>
            {
                `${startDate} ${datesEqual ? '' : `${startTime} ${timeZoneToShow}`}`
            }
            </p>
        </div>
    )
}

StartTimeRow.propTypes = {
    datesEqual: PropTypes.bool,
    startDate: PropTypes.string,
    startTime: PropTypes.string,
    timeZoneToShow: PropTypes.string,
    showIcons: PropTypes.bool,
    oneLine: PropTypes.bool,
  }

export default StartTimeRow;