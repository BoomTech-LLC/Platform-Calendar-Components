import React from 'react';
import PropTypes from 'prop-types'
import errorImage from './../assets/images/error.png';
import styles from './main.module.css';

const ErrorPage = ({
  title = 'Oops! Something went wrong'
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.image_wrapper}>
				<img src={errorImage}/>
			</div>
		</div>
	);
};

ErrorPage.propTypes = {
  title: PropTypes.string,
}

export default ErrorPage;
