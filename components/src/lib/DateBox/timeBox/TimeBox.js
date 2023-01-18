import React from 'react';
import PropTypes from 'prop-types';
import StartTimeRow from './StartTimeRow';
import EndTimeRow from './EndTimeRow';
import { formatDate, formatTime } from '../../helpers/dateBox';
import { combineClassNames } from '../../helpers/commons';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

const TimeBox = ({
	start,
	end,
	showIcons,
	locale,
	dateFormat,
	timeFormat,
	allDay,
	showTimeZone,
	timeZone,
	wrapperCustomClassNames = [],
	agenda,
	allDayText,
	oneLine,
	startDateOnly
}) => {
	const { startDate, endDate } = formatDate(start, end, dateFormat, locale);
	const { startTime, endTime } = formatTime(start, end, timeFormat, allDay, locale);
	const timeZoneToShow = allDay || !showTimeZone ? '' : timeZone;
	const datesEqual = startDate === endDate;

	return (
		<Wrapper className={combineClassNames(wrapperCustomClassNames)}>
			<StartTimeRow
				showIcons={showIcons}
				datesEqual={datesEqual}
				oneLine={oneLine}
				startDate={startDate}
				startTime={startTime}
				timeZoneToShow={timeZoneToShow}
			/>
			<EndTimeRow
				datesEqual={datesEqual}
				allDay={allDay}
				startDateOnly={startDateOnly}
				showIcons={showIcons}
				oneLine={oneLine}
				startTime={startTime}
				endTime={endTime}
				endDate={endDate}
				timeZoneToShow={timeZoneToShow}
				agenda={agenda}
				allDayText={allDayText}
			/>
		</Wrapper>
	);
};
TimeBox.propTypes = {
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired,
	showIcons: PropTypes.bool,
	locale: PropTypes.string,
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.string,
	allDay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	showTimeZone: PropTypes.bool,
	timeZone: PropTypes.string,
	wrapperCustomClassNames: PropTypes.array,
	agenda: PropTypes.bool,
	allDayText: PropTypes.string,
	oneLine: PropTypes.bool,
	startDateOnly: PropTypes.bool
};
export default TimeBox;
