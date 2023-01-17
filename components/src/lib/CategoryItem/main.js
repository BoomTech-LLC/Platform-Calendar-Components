import React from 'react';
import PropTypes from 'prop-types';
import { combineClassNames } from '../helpers/commons';
import { PT_CLASSNAMES } from '../helpers/commonPropTypes';
import GlobalStyle from '../assets/styles/globalStyles';
import { Wrapper } from './styles';

const CategoryItem = (props) => {
	if (!props.category || !props.category.id) return null;

	const {
		category: { id, name, color },
		wrapperCustomClassNames = []
	} = props;

	if (!id) return null;

	return (
		<Wrapper
			style={{ color }}
			className={combineClassNames(wrapperCustomClassNames)}
		>
			<GlobalStyle />
			<span className='icon-tag' />
			<span>{name}</span>
		</Wrapper>
	);
};

CategoryItem.propTypes = {
	category: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		color: PropTypes.string,
		selected: PropTypes.bool
	}),
	wrapperCustomClassNames: PT_CLASSNAMES
};

export default CategoryItem;
