import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { decreaseImgQuality } from '../helpers/blurryLoadableImage';
import { combineClassNames } from '../helpers/commons';
import { PT_CLASSNAMES } from '../helpers/commonPropTypes';
import GlobalStyle from '../assets/styles/globalStyles';
import { Image, Wrapper } from './styles';



const BlurryLoadableImg = ({
	url,
	showColorAsBackground = true,
	color,
	title,
	wrapperCustomClassNames = [],
	imgCustomClassNames = []
}) => {
	const [isOrigLoaded, setIsOrigLoaded] = useState(false);
	const [blurredImgLoadingFailed, setBlurredImgLoadingFailed] = useState(false);
	const [originalLoadingFailed, setOriginalLoadingFailed] = useState(false);

	if (!url) {
		if (!showColorAsBackground) return null;
		return (
			<Wrapper
				className={combineClassNames(wrapperCustomClassNames)}
				style={{ backgroundColor: blurredImgLoadingFailed ? 'transparent' : color }}
			/>
		);
	}

	return (
		<Wrapper
			className={combineClassNames(wrapperCustomClassNames)}
			style={{ backgroundColor: blurredImgLoadingFailed ? color : 'transparent' }}
		>
			<GlobalStyle />
			{blurredImgLoadingFailed && !isOrigLoaded && (
				<Image
					className={imgCustomClassNames}
					src={decreaseImgQuality(url)}
					title={title}
					alt={title}
					onError={() => setBlurredImgLoadingFailed(true)}
					blurred
				/>
			)}
			{!originalLoadingFailed && (
				<Image
					shown={isOrigLoaded}
					className={combineClassNames(imgCustomClassNames)}
					onLoad={() => setIsOrigLoaded(true)}
					src={url}
					title={title}
					alt={title}
					onError={() => setOriginalLoadingFailed(true)}
				/>
			)}
		</Wrapper>
	);
};

BlurryLoadableImg.propTypes = {
	url: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string,
	showColorAsBackground: PropTypes.bool,
	wrapperCustomClassNames: PT_CLASSNAMES,
	imgCustomClassNames: PT_CLASSNAMES
};

export default BlurryLoadableImg;
