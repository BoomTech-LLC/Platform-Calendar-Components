import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from '../helpers/commons'
import { PT_CLASSNAMES, SHAPE_LOCATION } from '../helpers/commonPropTypes'
import { getLocationOptions } from '../helpers/location'

const Location = ({
  data,
  elipsis = false,
  linkCustomClassNames = [],
  textCustomClassNames = [],
  wrapperCustomClassNames = []
}) => {
  
  if(!data) return null
  
  const { isLink, value, href } = getLocationOptions(data)

  return (
    <div className={ combineClassNames([styles.wrapper, ...wrapperCustomClassNames, ...(isLink ? linkCustomClassNames : textCustomClassNames)]) }>
      <div className='icon-location' />
      <div className={ elipsis ? styles.text_elipsis : '' }>
        {
          isLink ?
          
          <a
            href={ href }
            target='_blank'
          >
            { value }
          </a> :

          <>
            { value }
          </>
        }
      </div>
    </div>
  )
}

Location.propTypes = {
  data: SHAPE_LOCATION,
  elipsis: PropTypes.bool,
  linkCustomClassNames: PT_CLASSNAMES,
  textCustomClassNames: PT_CLASSNAMES,
  wrapperCustomClassNames: PT_CLASSNAMES,
}

export default Location