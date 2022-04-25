import React from 'react'
import PropTypes from "prop-types";
import { PT_CLASSNAMES, SHAPE_CURRENCY, SHAPE_TICKET } from '../helpers/commonPropTypes'
import { combineClassNames } from './../helpers/commons'
import { getTicketDisplayPrice } from './../helpers/ticket'
import styles from './main.module.css'

const TicketPrice = ({
  ticket,
  currency,
  showCurrencyAs,
  Icon,
  wrapperCustomClassNames = []
}) => {
  
  return (
    <div className={ combineClassNames([styles.wrapper, ...wrapperCustomClassNames]) }>
      {Icon ? <Icon/> : <div className='icon-ticket' />}
      <div>
        {getTicketDisplayPrice({ticket, currency, showCurrencyAs})}
      </div>
    </div>
  )
}

TicketPrice.propTypes = {
  ticket: SHAPE_TICKET,
  Icon: PropTypes.any,
  currency: SHAPE_CURRENCY,
  showCurrencyAs: PropTypes.oneOf(['code', 'symbol']),
  wrapperCustomClassNames: PT_CLASSNAMES
}

export default TicketPrice