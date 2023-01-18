import React from 'react';
import styles from './main.module.css';
import PropTypes from 'prop-types';
import { getDateForDateBox } from '../helpers/dateBox';
import { combineClassNames } from '../helpers/commons';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	${(props) =>
		props.direction === 'column'
			? `  display: flex;
          align-items: center;`
			: ''}
`;

const DayOfMonth = styled.div`
	line-height: 0.9;
	& p {
		margin-top: 0;
		margin-right: 0.3rem;
		margin-bottom: 0;
		margin-left: 0;
	}

	@media only screen and (max-width: 650px) {
		.day_of_month p {
			margin-right: 0;
		}
	}
`;

const MonthDayOfWeek = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	height: 100%;
`;

const DayOfWeek = styled.div`
`
const DateBox = ({ start, end, locale, wrapperCustomClassNames = [], direction = 'row' }) => {
	const { day, week, month } = getDateForDateBox(start, end, locale);

	return (
		<Wrapper
			direction={direction}
			className={combineClassNames(wrapperCustomClassNames)}
		>
			<DayOfMonth>
				<p>{day}</p>
			</DayOfMonth>
			<MonthDayOfWeek>
				<div>
					<p>{month}</p>
				</div>
				<div>
					<p>{week}</p>
				</div>
			</MonthDayOfWeek>
		</Wrapper>
	);
};

export default DateBox;

DateBox.propTypes = {
	start: PropTypes.string,
	end: PropTypes.string,
	locale: PropTypes.string,
	wrapperCustomClassNames: PropTypes.array,
	font: PropTypes.string
};
