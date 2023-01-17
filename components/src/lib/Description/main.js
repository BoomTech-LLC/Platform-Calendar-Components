import React, { useMemo } from 'react';
import parse from 'html-react-parser';
import { combineClassNames } from '../helpers/commons';
import PropTypes from 'prop-types';
import { PT_CLASSNAMES } from '../helpers/commonPropTypes';
import { Title, Wrapper } from './styles';

const Description = ({ title, children, wrapperCustomClassNames = [] }) => {
	const descriptionNode = useMemo(() => parse(children), [children]);

	if (!children) return null;

	return (
		<Wrapper className={combineClassNames([...wrapperCustomClassNames])}>
			{title && <Title>{title}</Title>}
			{descriptionNode && <Text>{descriptionNode}</Text>}
		</Wrapper>
	);
};

Description.propTypes = {
	title: PropTypes.string,
	children: PropTypes.string,
	wrapperCustomClassNames: PT_CLASSNAMES
};

export default Description;
