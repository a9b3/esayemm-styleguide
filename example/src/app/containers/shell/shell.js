import styles from './shell.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Sidebar from '../../components/sidebar/sidebar.js'
import navNodes from '../../services/nav-nodes.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Shell extends Component {
  render() {
    return <div styleName='shell'>
      <div styleName='sidebar'>
        <Sidebar
          title={'Styleguide'}
          nodes={navNodes.nodes}
        />
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}
