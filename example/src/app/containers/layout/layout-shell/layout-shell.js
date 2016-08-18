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
      <div styleName='sidebar'>
        <div styleName='inner'>
          Sidebar
          <div styleName='long-item'>
            Long-item
          </div>
        </div>
      </div>
      <div styleName='content'>
        <div styleName='inner'>
          Sidebar
          <div styleName='long-item'>
            Long-item
          </div>
        </div>
      </div>
    </div>
  }
}
