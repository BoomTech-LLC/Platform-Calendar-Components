import React from 'react'
import PropTypes from 'prop-types'
import { PT_CLASSNAMES, SHAPE_GUEST_TICKET } from '../helpers/commonPropTypes'
import { combineClassNames } from '../helpers/commons'
import styles from './main.module.css'

const TicketList = ({
  enabled = false,
  tickets = [],
  wrapperCustomClassNames = []
  }) => {
  
  if(!enabled || tickets.length === 0) return null
  
  return (
    <div className={ combineClassNames([styles.wrapper, ...wrapperCustomClassNames]) }>
      <div className='icon-ticket' />
      <div>
        {
          tickets.map(ticket => {
            return (
              <div key={ ticket.label + ticket.limit }>
                <span>
                  { `${ ticket.quantity } x ${ ticket.label }` }
                </span>
                {
                  ticket.price ?
                  <span className={ styles.price }>
                    { `${ ticket.currency }${ ticket.price }` }
                  </span> : 
                  null
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

TicketList.propTypes = {
  enabled: PropTypes.bool,
  tickets: PropTypes.arrayOf(SHAPE_GUEST_TICKET),
  wrapperCustomClassNames: PT_CLASSNAMES
}

export default TicketList