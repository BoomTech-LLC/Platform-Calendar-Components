import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'
import { combineClassNames } from './../helpers/commons'
import { PLAN_NAMES, PLAN_NAME_TYPE, PT_CID, PT_CLASSNAMES, PT_UID, SHAPE_EVENT, SHAPE_REGISTRATION, SHAPE_TICKETS } from '../helpers/commonPropTypes'
import { getShowRegistrationButtonStatus, generateRegistrationURL, getGuestsOptions } from '../helpers/registration'
import { APP_LIMITATIONS } from '../helpers/constants'

const RegistrationButton = ({
  cid,
  uid,
  text = 'Register',
  urlBase,
  event,
  globalRegistration,
  tickets,
  wrapperCustomClassNames = [],
  disabledClassName = '',
  planName = PLAN_NAMES[3]
}) => {
  const registration = event.registration ?? globalRegistration;
  const hasTickets = event.ticketEnabled && tickets?.length;
  const eventTickets = hasTickets ? [...tickets] : null;

  const show = getShowRegistrationButtonStatus(event, registration?.enabled);
  if (!show) return null;

  const url = generateRegistrationURL(cid, uid, event, registration, urlBase);
  const guestsOptions = getGuestsOptions(event, registration, eventTickets);
  if(!guestsOptions) return null;

  const { count, limit } = guestsOptions;
  const limitByPlan = APP_LIMITATIONS[planName][hasTickets ? 'tickets' : 'guests'];
  const disabled = typeof limit !== 'string' && (count >= limit || (limitByPlan && count >= limitByPlan));
  
  return (
    <button
      className={combineClassNames([styles.register_button, ...wrapperCustomClassNames, disabled ? disabledClassName : null])}
      disabled={disabled}
      onClick={() => window.open(url, '_blank')}
    >
      { text }
    </button>
  )
}

RegistrationButton.propTypes = {
  cid: PT_CID.isRequired,
  uid: PT_UID.isRequired,
  urlBase: PropTypes.string.isRequired,
  event: SHAPE_EVENT,
  text: PropTypes.string,
  wrapperCustomClassNames: PT_CLASSNAMES,
  globalRegistration: SHAPE_REGISTRATION,
  globalTickets: SHAPE_TICKETS,
  disabledClassName: PropTypes.string,
  planName: PLAN_NAME_TYPE
}


export default RegistrationButton