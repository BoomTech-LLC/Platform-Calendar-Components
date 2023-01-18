import React from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from '../helpers/commons';
import { PT_CLASSNAMES, SHAPE_LOCATION } from '../helpers/commonPropTypes';
import { getLocationOptions } from '../helpers/location';
import GlobalStyle from '../assets/styles/globalStyles';
import { LineBraker, Wrapper } from './styles';


const Location = ({
	data,
	tbdText,
	elipsis = false,
	linkCustomClassNames = [],
	textCustomClassNames = [],
	wrapperCustomClassNames = [],
	showIcon = true
}) => {
	if (!data) return null;

	const { isLink, value, href } = getLocationOptions(data, tbdText);

	
	return (
		<Wrapper
			className={combineClassNames([
				...wrapperCustomClassNames,
				...(isLink ? linkCustomClassNames : textCustomClassNames)
			])}
		>
			<GlobalStyle />
			{showIcon && <div className='icon-location' />}
			<LineBraker elipsis={elipsis}>
				{isLink ? (
					<a
						href={href}
						target='_blank'
						rel='noreferrer'
					>
						{value}
					</a>
				) : (
					<>{value}</>
				)}
			</LineBraker>
		</Wrapper>
	);
};

Location.propTypes = {
	data: SHAPE_LOCATION,
	tbdText: PropTypes.string,
	elipsis: PropTypes.bool,
	linkCustomClassNames: PT_CLASSNAMES,
	textCustomClassNames: PT_CLASSNAMES,
	wrapperCustomClassNames: PT_CLASSNAMES,
	showIcon: PropTypes.bool
};

export default Location;
