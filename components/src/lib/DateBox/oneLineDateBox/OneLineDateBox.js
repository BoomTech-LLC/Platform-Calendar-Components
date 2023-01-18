import React from 'react';
import PropTypes from 'prop-types';
import { formatDate, formatTime } from '../../helpers/dateBox';
import { combineClassNames } from '../../helpers/commons';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	gap: 8px;
	& p {
		margin: 0;
	}
`;

const OneLineDateBox = ({
	start,
	end,
	locale,
	showIcons,
	dateFormat,
	timeFormat,
	allDay,
	wrapperCustomClassNames = []
}) => {
	const { startDate, endDate } = formatDate(start, end, dateFormat, locale);
	const { startTime, endTime } = formatTime(start, end, timeFormat, allDay, locale);

	return (
		<Wrapper className={combineClassNames(wrapperCustomClassNames)}>
			{showIcons && <div className='icon-clock' />}
			<span>
				{startDate} {startTime && !allDay ? startTime : null}
			</span>

			{start !== end && (
				<>
					<span>-</span>
					<span>
						{endDate !== startDate ? endDate : null}{' '}
						{startTime && endTime ? endTime : null}
					</span>
				</>
			)}
		</Wrapper>
	);
};

OneLineDateBox.propTypes = {
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired,
	locale: PropTypes.string,
	showIcons: PropTypes.bool,
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.string,
	allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	wrapperCustomClassNames: PropTypes.array,
	agenda: PropTypes.bool,
	allDayText: PropTypes.string
};

export default OneLineDateBox;
