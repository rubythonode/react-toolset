import React, { Children } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import Icon from '../../icons/Icon'
import List from '../../elements/List'
import ListItem from '../../elements/List/ListItem'
import style from './style.scss'

const classNames = cx.bind(style)

const Breadcrumb = ({ className, icon, children }) => {
  const iconStyle = Object.assign({}, {
    type: 'materialDesign',
    name: 'MdNavigateNext',
    size: 20,
  }, icon)
  return (<List type="horizontal" className={classNames(className.root)}>
    {Children.map(children, (child, i) => {
      return (
        <ListItem key={i} className={classNames(className.list)}>
          {child}
          {i !== children.length - 1 &&
            <Icon
              className={classNames('Breadcrumb__icon', className.icon)}
              {...iconStyle} />
          }
        </ListItem>
      )
    })}
  </List>)
}

Breadcrumb.propTypes = {
  /** Custom classes to style Breadcrumb */
  className: PropTypes.shape({
    /** Style for List element */
    root: PropTypes.string,
    /** Style for ListItem element */
    list: PropTypes.string,
    /** Style for Icon element */
    icon: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  /** Icon used between links */
  icon: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
  }),
}

Breadcrumb.defaultProps = {
  className: {},
  icon: {
    type: 'materialDesign',
    name: 'MdNavigateNext',
    size: 20,
  },
}

export default Breadcrumb
