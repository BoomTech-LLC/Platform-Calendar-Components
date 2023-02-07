import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { decreaseImgQuality } from "../helpers/blurryLoadableImage";
import { combineClassNames } from "../helpers/commons";
import { PT_CLASSNAMES } from "../helpers/commonPropTypes";

const BlurryLoadableImg = ({
  url,
  showColorAsBackground = true,
  color,
  title,
  wrapperCustomClassNames = [],
  imgCustomClassNames = [],
}) => {
  const [isOrigLoaded, setIsOrigLoaded] = useState(false);
  const [blurredImgLoadingFailed, setBlurredImgLoadingFailed] = useState(false);
  const [originalLoadingFailed, setOriginalLoadingFailed] = useState(false);
  const wrapperClassNames = combineClassNames([
    styles.imgWrapper,
    ...wrapperCustomClassNames,
  ]);

  if (!url) {
    if (!showColorAsBackground) return null;
    return (
      <div
        className={wrapperClassNames}
        style={{
          backgroundColor: blurredImgLoadingFailed ? "transparent" : color,
        }}
      />
    );
  }

  return (
    <div
      className={wrapperClassNames}
      style={{
        backgroundColor: blurredImgLoadingFailed ? color : "transparent",
      }}>
      {blurredImgLoadingFailed && !isOrigLoaded && (
        <img
          className={combineClassNames([
            styles.blurred,
            ...imgCustomClassNames,
          ])}
          src={decreaseImgQuality(url)}
          title={title}
          alt={title}
          onError={() => setBlurredImgLoadingFailed(true)}
        />
      )}
      {!originalLoadingFailed && (
        <img
          className={combineClassNames([
            ...imgCustomClassNames,
            isOrigLoaded ? styles.shown : styles.hidden,
          ])}
          onLoad={() => {
            setIsOrigLoaded(true);
          }}
          src={url}
          title={title}
          alt={title}
          onError={() => setOriginalLoadingFailed(true)}
        />
      )}
    </div>
  );
};

BlurryLoadableImg.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  showColorAsBackground: PropTypes.bool,
  wrapperCustomClassNames: PT_CLASSNAMES,
  imgCustomClassNames: PT_CLASSNAMES,
};

export default BlurryLoadableImg;
