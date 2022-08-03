import React from 'react';
import PropTypes from 'prop-types'
import ErrorImage from './../assets/images/Error.svg';
import styles from './main.module.css';

const ErrorPage = ({
  title = 'Oops! Something went wrong'
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.image_wrapper}>
				<ErrorImage/>
			</div>
		</div>
	);
};

ErrorPage.propTypes = {
  title: PropTypes.string,
}

export default ErrorPage;
