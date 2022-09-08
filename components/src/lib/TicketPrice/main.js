import React from 'react'
import PropTypes from "prop-types";
import { PT_CLASSNAMES, SHAPE_CURRENCY, SHAPE_TICKETS } from '../helpers/commonPropTypes'
import { combineClassNames } from './../helpers/commons'
import { calculateTicketsPriceRange } from './../helpers/ticket'
import styles from './main.module.css'

const TicketPrice = ({
  tickets,
  currency,
  showIcon = true,
  wrapperCustomClassNames = [],
  priceFormat
}) => {
  if (!tickets.length) return null;

  const priceRange = calculateTicketsPriceRange({ tickets, currency, priceFormat })

  return (
    <div className={combineClassNames([styles.wrapper, ...wrapperCustomClassNames])}>
      {showIcon && <div className='icon-ticket' />}
      <div>
        {priceRange}
      </div>
    </div>
  )
}

TicketPrice.propTypes = {
  ticket: SHAPE_TICKETS,
  Icon: PropTypes.any,
  currency: SHAPE_CURRENCY,
  wrapperCustomClassNames: PT_CLASSNAMES,
  priceFormat: PropTypes.string
}

export default TicketPrice