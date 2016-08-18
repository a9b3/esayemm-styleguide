import styles from './layout-shell.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class LayoutShell extends Component {
  render() {
    return <div styleName='layout-shell'>
      Hello World!
    </div>
  }
}
