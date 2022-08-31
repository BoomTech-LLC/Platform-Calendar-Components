import React from 'react';
import PropTypes from 'prop-types'
import errorImage from './../assets/images/error.png';
import styles from './main.module.css';
import { combineClassNames } from '../helpers/commons';

const ErrorPage = ({
  title = 'Oops! Something went wrong',
  pageCover = false
}) => {
	return (
		<div className={combineClassNames([styles.container, pageCover ? styles.page_cover : ''])}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.image_wrapper}>
				<img src={errorImage}/>
			</div>
		</div>
	);
};

ErrorPage.propTypes = {
  title: PropTypes.string,
  pageCover: PropTypes.bool
}

export default ErrorPage;
