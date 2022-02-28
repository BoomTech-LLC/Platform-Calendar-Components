import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from './../helpers/commons'
import { PT_CLASSNAMES, SHAPE_GUEST, SHAPE_REGISTRATION, SHAPE_TICKETS } from '../helpers/commonPropTypes'
import { getGuestsOptions, getShowRegistrationButtonStatus } from '../helpers/registration'

const GuestLimit = ({
    foreword = 'Guests Limit',
    event,
    globalRegistration,
    globalTickets,
    wrapperCustomClassNames = []    
}) => {

  const registration = event.registration ?? globalRegistration
  const tickets = event.tickets ?? globalTickets
  
  const show = getShowRegistrationButtonStatus(event, tickets?.enabled || registration?.enabled)
  if(!show) return null
  if(!tickets?.list?.length && (registration.guestsLimited || !registration.showGuests)) return null

  const guestsOptions = getGuestsOptions(event, registration, tickets)
  if(!guestsOptions) return null

  const { count, limit } = guestsOptions

  return (
    <div className={combineClassNames([styles.guest_limit_parent, ...wrapperCustomClassNames])}>
      <p>
        {foreword}: {count} / {limit}
      </p>
    </div>
  )
}

GuestLimit.propTypes = {
    foreword: PropTypes.string,
    guests: PropTypes.arrayOf(PropTypes.shape(SHAPE_GUEST)),
    globalRegistration: SHAPE_REGISTRATION,
    globalTickets: SHAPE_TICKETS,
    wrapperCustomClassNames: PT_CLASSNAMES
}

export default GuestLimit