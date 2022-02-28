import React from 'react'
import styles from './main.module.css'
import '../assets/styles/icons.css'
import PropTypes from 'prop-types'
import { combineClassNames } from '../helpers/commons'
import { PT_CLASSNAMES } from '../helpers/commonPropTypes'

const CategoryItem = (props) => {
  
  if(!props.category || !props.category.id) return null

  const { 
    category: {
      id,
      name, 
      color, 
    },
    wrapperCustomClassNames = []
  } = props

  if(!id) return null

  return (
    <div style={{ color }} className={combineClassNames([styles.category_item, ...wrapperCustomClassNames])}>
      <span className="icon-tag" />
      <span>{name}</span>
    </div>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string, 
    color: PropTypes.string,
    selected: PropTypes.bool
  }),
  wrapperCustomClassNames: PT_CLASSNAMES
}

export default CategoryItem