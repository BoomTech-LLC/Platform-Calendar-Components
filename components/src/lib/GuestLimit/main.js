import React from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { combineClassNames } from "./../helpers/commons";
import {
  PT_CLASSNAMES,
  SHAPE_EVENT,
  SHAPE_REGISTRATION,
  SHAPE_TICKETS,
} from "../helpers/commonPropTypes";
import {
  getGuestsOptions,
  getShowRegistrationButtonStatus,
} from "../helpers/registration";

const GuestLimit = ({
  foreword = "Guests Limit",
  event,
  globalRegistration,
  hasTickets,
  wrapperCustomClassNames = [],
  showIcon = false,
}) => {
  const registration = event.registration ?? globalRegistration;

  const show = getShowRegistrationButtonStatus(event, registration?.enabled);
  if (!show) return null;

  if (
    hasTickets ||
    !registration.guestsOptions.isLimited ||
    !registration.guestsOptions.show
  )
    return null;

  const guestsOptions = getGuestsOptions(event, registration);
  if (!guestsOptions) return null;

  const { count, limit } = guestsOptions;

  return (
    <div
      className={combineClassNames([
        styles.guest_limit_parent,
        ...wrapperCustomClassNames,
      ])}
    >
      {showIcon && <span className="icon-guests" />}
      <p>
        {foreword}: {`${count} / ${Math.max(count, limit)}`}
      </p>
    </div>
  );
};

GuestLimit.propTypes = {
  foreword: PropTypes.string,
  event: SHAPE_EVENT,
  globalRegistration: SHAPE_REGISTRATION,
  hasTickets: PropTypes.bool,
  wrapperCustomClassNames: PT_CLASSNAMES,
  showIcon: PropTypes.bool,
};

export default GuestLimit;
