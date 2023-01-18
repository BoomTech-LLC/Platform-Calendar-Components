import React from 'react';
import PropTypes from 'prop-types';

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

const StartTimeRow = ({ showIcons, datesEqual, oneLine, startDate, startTime, timeZoneToShow }) => {
	return (
		<Wrapper>
			{showIcons && <div className={datesEqual ? 'icon-date' : 'icon-clock'} />}
			<Text oneLine={oneLine}>
				{`${startDate} ${datesEqual ? '' : `${startTime} ${timeZoneToShow}`}`}
			</Text>
		</Wrapper>
	);
};

StartTimeRow.propTypes = {
	datesEqual: PropTypes.bool,
	startDate: PropTypes.string,
	startTime: PropTypes.string,
	timeZoneToShow: PropTypes.string,
	showIcons: PropTypes.bool,
	oneLine: PropTypes.bool
};

export default StartTimeRow;
