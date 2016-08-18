import styles from './sidebar.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import SidebarNode from './sidebar-node/sidebar-node.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Sidebar extends Component {
  static propTypes = {
    title: PropTypes.any,
    nodes: PropTypes.arrayOf(PropTypes.shape({
      displayName: PropTypes.string,
      link: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.any),
    })),
  }

  renderNodes = (nodes) => {
    return nodes.map((node, i) => <SidebarNode
      node={node}
      key={i}
    />)
  }

  render() {
    return <div styleName='sidebar'>
      <div styleName='title'>
        {this.props.title}
      </div>
      <div styleName='content'>
        {this.renderNodes(this.props.nodes)}
      </div>
      <div styleName='footer'>
        <div styleName='footer-inner'>
          <a href="#"><i className='fa fa-github'></i></a>
          <a href="#"><i className='fa fa-linkedin'></i></a>
        </div>
      </div>
    </div>
  }
}
