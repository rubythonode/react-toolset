import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import '../../styles/react-toolset.scss'
import { button as buttonCls } from '../../styles'

const classNames = cx.bind(buttonCls)

const Button = ({
  role,
  size,
  tag,
  isStretched,
  isSelected,
  link,
  isFlat,
  className,
  children,
  ...props
}) => {
  const tagName = link ? 'a' : (tag || 'button')
  const style = isFlat ? 'flat' : 'rounded'

  return React.createElement(tagName, {
    href: (link || null),
    className: classNames('Button', `Button-${role}`, `Button-${size}`, `Button-is-${style}`, { 'Button-is-stretched': isStretched }, { 'Button-is-selected': isSelected }, className),
    ...props,
  }, children)
}

Button.propTypes = {
  role: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tag: PropTypes.oneOf(['button', 'div', 'a']),
  /** Whether the button takes up the full width of its container */
  isStretched: PropTypes.bool,
  /** Whether to apply a depressed styling to the button to make it look on or selected */
  isSelected: PropTypes.bool,
  /** Whether flat button or rounded button */
  isFlat: PropTypes.bool,
  /** Value of href to apply to the button if and `<a>` element is being used for the button */
  link: PropTypes.string,
  /** Name of extra class to apply to the root element */
  className: PropTypes.string,
  /** Button label. */
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  role: 'default',
  size: 'medium',
  tag: 'button',
  isStretched: false,
  isFlat: false,
}

export default Button
