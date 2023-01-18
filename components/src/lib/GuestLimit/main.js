import React from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from './../helpers/commons';
import {
	PT_CLASSNAMES,
	SHAPE_EVENT,
	SHAPE_REGISTRATION,
} from '../helpers/commonPropTypes';
import { getGuestsOptions, getShowRegistrationButtonStatus } from '../helpers/registration';
import GlobalStyle from '../assets/styles/globalStyles';
import { Wrapper } from './styles';

const GuestLimit = ({
	foreword = 'Guests Limit',
	event,
	globalRegistration,
	hasTickets,
	wrapperCustomClassNames = [],
	showIcon = false
}) => {
	const registration = event.registration ?? globalRegistration;

	const show = getShowRegistrationButtonStatus(event, registration?.enabled);
	if (!show) return null;

	if (hasTickets || !registration.guestsOptions.isLimited || !registration.guestsOptions.show)
		return null;

	const guestsOptions = getGuestsOptions(event, registration);
	if (!guestsOptions) return null;

	const { count, limit } = guestsOptions;

	return (
		<Wrapper className={combineClassNames(wrapperCustomClassNames)}>
			<GlobalStyle />
			{showIcon && <span className='icon-guests' />}
			<p>
				{foreword}: {`${count} / ${limit}`}
			</p>
		</Wrapper>
	);
};

GuestLimit.propTypes = {
	foreword: PropTypes.string,
	event: SHAPE_EVENT,
	globalRegistration: SHAPE_REGISTRATION,
	hasTickets: PropTypes.bool,
	wrapperCustomClassNames: PT_CLASSNAMES,
	showIcon: PropTypes.bool
};

export default GuestLimit;
