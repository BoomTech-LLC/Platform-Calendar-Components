import React, { useMemo } from 'react'
import parse from 'html-react-parser';
import styles from './main.module.css'
import { combineClassNames } from '../helpers/commons'
import PropTypes from 'prop-types'
import { PT_CLASSNAMES } from '../helpers/commonPropTypes';

const Description = ({ title, children, wrapperCustomClassNames = [] }) => {

  const descriptionNode = useMemo(() => parse(children), [children]);
  
  if(!children) return null;

  return (
    <div className={combineClassNames([styles.description, ...wrapperCustomClassNames])}>
      {title && <h3 className={styles.description_title}>{title}</h3>}
      {descriptionNode}
    </div>
  )
}

Description.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  wrapperCustomClassNames: PT_CLASSNAMES
}

export default Description