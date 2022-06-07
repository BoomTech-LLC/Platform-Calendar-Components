import React from 'react'
import styles from './../main.module.css'
import PropTypes from 'prop-types'
import { formatDate, formatTime } from '../../helpers/dateBox'
import { combineClassNames } from '../../helpers/commons'

const OneLineDateBox = ({
    start,
    end,
    locale,
    showIcons,
    dateFormat,
    timeFormat,
    allDay,
    wrapperCustomClassNames = [],
}) => {
    const { startDate, endDate } = formatDate(start, end, dateFormat, locale)
    const { startTime, endTime } = formatTime(
        start,
        end,
        timeFormat,
        allDay,
        locale
    )

    return (
        <div className={combineClassNames([...wrapperCustomClassNames, styles.two_line_start])}>
            {
                showIcons &&
                <div className='icon-clock' />
            }
            <span>{startDate} {startTime && !allDay ? startTime : null}</span>

            {
                start !== end &&
                <>
                    <span>-</span>
                    <span>{(endDate !== startDate) ? endDate : null} {(startTime && endTime) ? endTime : null}</span>
                </>
            }
        </div>
    )
}

OneLineDateBox.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    locale: PropTypes.string,
    showIcons: PropTypes.bool,
    dateFormat: PropTypes.string,
    timeFormat: PropTypes.string,
    allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    wrapperCustomClassNames: PropTypes.array,
    agenda: PropTypes.bool,
    allDayText: PropTypes.string
}

export default OneLineDateBox

