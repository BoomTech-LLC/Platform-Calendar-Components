import React, { useRef } from 'react'
import styles from './main.module.css'
import PropTypes from 'prop-types'
import { getDateForDateBox } from '../helpers/dateBox'
import { combineClassNames } from '../helpers/commons'

const DateBox = ({ start, end, locale, wrapperCustomClassNames = [], direction = 'row', dayNumberSize }) => {
  const {
    day,
    week,
    month
  } = getDateForDateBox(start, end, locale)

  const container = useRef();

  // useLayoutEffect(() => {
  //   container.current.style.height = container.current.offsetHeight + 'px';
  // },[])

  return (
    <div className={combineClassNames([styles.container, styles[direction], ...wrapperCustomClassNames])} ref={container}>
      <div className={styles.day_of_month} style={{ fontSize: dayNumberSize }}>
        <p>{day}</p>
      </div>
      <div className={styles.month_day_of_week_parent}>
        <div className={styles.day_of_week}>
          <p>{month}</p>
        </div>
        <div className={styles.month}>
          <p>{week}</p>
        </div>
      </div>
    </div>
  )
}

export default DateBox

DateBox.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  locale: PropTypes.string,
  wrapperCustomClassNames: PropTypes.array,
  dayNumberSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
