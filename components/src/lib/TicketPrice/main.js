import React from 'react'
import PropTypes from "prop-types";
import { PT_CLASSNAMES, SHAPE_CURRENCY, SHAPE_TICKETS } from '../helpers/commonPropTypes'
import { combineClassNames } from './../helpers/commons'
import { calculateTicketsPriceRange } from './../helpers/ticket'
import styles from './main.module.css'

const TicketPrice = ({
  tickets,
  currency,
  showCurrencyAs,
  Icon,
  wrapperCustomClassNames = []
}) => {
  if(!tickets.length) return null;

  const priceRange = calculateTicketsPriceRange({tickets, currency, showCurrencyAs})
  
  return (
    <div className={ combineClassNames([styles.wrapper, ...wrapperCustomClassNames]) }>
      {Icon ? <Icon/> : <div className='icon-ticket' />}
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
  showCurrencyAs: PropTypes.oneOf(['code', 'symbol']),
  wrapperCustomClassNames: PT_CLASSNAMES
}

export default TicketPrice