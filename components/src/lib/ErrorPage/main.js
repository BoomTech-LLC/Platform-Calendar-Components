import React from 'react';
import PropTypes from 'prop-types';
import errorImage from './../assets/images/error.png';
import { ImageWrapper, Title, Wrapper } from './styles';

const ErrorPage = ({ title = 'Oops! Something went wrong', pageCover = false }) => {
	return (
		<Wrapper pageCover={pageCover}>
			<Title>{title}</Title>
			<ImageWrapper>
				<img src={errorImage} />
			</ImageWrapper>
		</Wrapper>
	);
};

ErrorPage.propTypes = {
	title: PropTypes.string,
	pageCover: PropTypes.bool
};

export default ErrorPage;
