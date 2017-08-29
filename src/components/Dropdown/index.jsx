import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

export class Option extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
  }
}

export class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.object,
    maxHeight: PropTypes.number,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    position: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.oneOf(['light', 'dark']),
    icon: PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      size: PropTypes.number,
    }),
    hasLabel: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    className: {},
    maxHeight: 200,
    onBlur: () => {},
    onFocus: () => {},
    onSelect: null,
    position: 'left',
    type: 'light',
    icon: {
      type: 'githubOcticons',
      name: 'GoTriangleDown',
      size: 16,
    },
    hasLabel: true,
  }

  constructor (props) {
    super(props)
    this.state = {
      current: -1,
      isFocused: false,
      isOpened: false,
      length: this.getOptions(props.children).length,
    }
  }

  getOptions (children) {
    return Children.toArray(children)
      .filter(child => child.type === Option)
  }
}
