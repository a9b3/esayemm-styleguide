import styles from './section.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
  }

  render() {
    console.log(this.props.id)
    return <div styleName='section' id={this.props.id}>
      <div styleName='title'>
        {this.props.title}
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}
