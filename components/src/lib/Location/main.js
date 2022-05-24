import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from '../helpers/commons'
import { PT_CLASSNAMES, SHAPE_LOCATION } from '../helpers/commonPropTypes'
import { getLocationOptions } from '../helpers/location'

const Location = ({
  data,
  tbdText,
  elipsis = false,
  linkCustomClassNames = [],
  textCustomClassNames = [],
  wrapperCustomClassNames = [],
  showIcon = true
}) => {

  if (!data) return null

  const { isLink, value, href } = getLocationOptions(data, tbdText)

  return (
    <div className={combineClassNames([styles.wrapper, ...wrapperCustomClassNames, ...(isLink ? linkCustomClassNames : textCustomClassNames)])}>
      {showIcon && <div className='icon-location' />}
      <div className={combineClassNames([styles.line_breaker, elipsis ? styles.text_elipsis : ''])}>
        {
          isLink ?

            <a
              href={href}
              target='_blank'
              rel='noreferrer'
            >
              {value}
            </a> :

            <>
              {value}
            </>
        }
      </div>
    </div>
  )
}

Location.propTypes = {
  data: SHAPE_LOCATION,
  tbdText: PropTypes.string,
  elipsis: PropTypes.bool,
  linkCustomClassNames: PT_CLASSNAMES,
  textCustomClassNames: PT_CLASSNAMES,
  wrapperCustomClassNames: PT_CLASSNAMES,
  showIcon: PropTypes.bool
}

export default Location