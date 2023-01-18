import React from 'react';
import PropTypes from 'prop-types';
import { PT_CLASSNAMES, SHAPE_CURRENCY, SHAPE_TICKETS } from '../helpers/commonPropTypes';
import { combineClassNames } from './../helpers/commons';
import { calculateTicketsPriceRange } from './../helpers/ticket';
import GlobalStyle from '../assets/styles/globalStyles';
import { Wrapper } from './styles';

const TicketPrice = ({
	tickets,
	currency,
	showIcon = true,
	wrapperCustomClassNames = [],
	priceFormat
}) => {
	if (!tickets.length) return null;

	const priceRange = calculateTicketsPriceRange({ tickets, currency, priceFormat });

	return (
		<Wrapper className={combineClassNames(wrapperCustomClassNames)}>
			<GlobalStyle />
			{showIcon && <div className='icon-ticket' />}
			<div>{priceRange}</div>
		</Wrapper>
	);
};

TicketPrice.propTypes = {
	ticket: SHAPE_TICKETS,
	Icon: PropTypes.any,
	currency: SHAPE_CURRENCY,
	wrapperCustomClassNames: PT_CLASSNAMES,
	priceFormat: PropTypes.string
};

export default TicketPrice;
