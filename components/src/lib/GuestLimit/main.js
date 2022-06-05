import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from './../helpers/commons'
import { PT_CLASSNAMES, SHAPE_EVENT, SHAPE_GUEST, SHAPE_REGISTRATION, SHAPE_TICKETS } from '../helpers/commonPropTypes'
import { getGuestsOptions, getShowRegistrationButtonStatus } from '../helpers/registration'

const GuestLimit = ({
    foreword = 'Guests Limit',
    event,
    globalRegistration,
    tickets,
    wrapperCustomClassNames = [],
    showIcon = false
}) => {

  const registration = event.registration ?? globalRegistration;
  const eventTickets = (!event.ticketEnabled || !tickets?.length) ? null : [...tickets];

  const show = getShowRegistrationButtonStatus(event, registration?.enabled)
  if(!show) return null

  if(
    !eventTickets && // q1
    (!registration.guestsOptions.isLimited || !registration.guestsOptions.show)
  ) return null

  const guestsOptions = getGuestsOptions(event, registration, eventTickets)
  if(!guestsOptions) return null

  const { count, limit } = guestsOptions

  return (
    <div className={combineClassNames([styles.guest_limit_parent, ...wrapperCustomClassNames])}>
      {showIcon && <span className="icon-guests"/>}
      <p>
        {foreword}: {count} / {limit}
      </p>
    </div>
  )
}

GuestLimit.propTypes = {
    foreword: PropTypes.string,
    event: SHAPE_EVENT,
    globalRegistration: SHAPE_REGISTRATION,
    tickets: SHAPE_TICKETS,
    wrapperCustomClassNames: PT_CLASSNAMES,
    showIcon: PropTypes.bool
}

export default GuestLimit