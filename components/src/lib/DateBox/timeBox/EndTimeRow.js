import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	gap: 8px;
`;

const Text = styled.p`
	margin: 0;
	${(props) =>
		props.oneLine
			? `  white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;`
			: ''}
`;

const EndTimeRow = ({
	datesEqual,
	allDay,
	startDateOnly,
	showIcons,
	oneLine,
	startTime,
	endTime,
	endDate,
	timeZoneToShow,
	agenda,
	allDayText
}) => {
	return (
		!(datesEqual && allDay && !agenda) &&
		!startDateOnly && (
			<Wrapper>
				{showIcons && <div className='icon-clock' />}
				<Text oneLine={oneLine}>
					{datesEqual && allDay && agenda
						? allDayText
						: datesEqual
						? `${startTime}${
								startTime === endTime ? '' : ` -${endTime}`
						  } ${timeZoneToShow}`
						: `${endDate}${endTime} ${timeZoneToShow}`}
				</Text>
			</Wrapper>
		)
	);
};

EndTimeRow.propTypes = {
	datesEqual: PropTypes.bool,
	startDate: PropTypes.string,
	startTime: PropTypes.string,
	timeZoneToShow: PropTypes.string,
	showIcons: PropTypes.bool,
	oneLine: PropTypes.bool,
	allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	startDateOnly: PropTypes.bool,
	endTime: PropTypes.string,
	endDate: PropTypes.string,
	agenda: PropTypes.bool,
	allDayText: PropTypes.string
};

export default EndTimeRow;
