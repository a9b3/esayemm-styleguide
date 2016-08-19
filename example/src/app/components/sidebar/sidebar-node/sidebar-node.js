import styles from './sidebar-node.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class SidebarNode extends Component {
  static propTypes = {
    node: PropTypes.shape({
      displayName: PropTypes.string,
      link: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.any),
    }),
    className: PropTypes.string,
  }

  render() {
    const {
      node,
      className,
    } = this.props

    return <div className={`${className} ${styles['sidebar-node']}`}>
      {
        node.link.indexOf('#') !== -1
          ?
            <a href={node.link}>
              <div className={`${styles.title}`}>
                {node.displayName}
              </div>
            </a>
          :
            <Link to={node.link} activeClassName={`${styles.active}`}>
              <div className={`${styles.title}`}>
                {node.displayName}
              </div>
            </Link>
      }

      <div className={`${styles.children}`}>
        {node.children && node.children.map((node, i) => <SidebarNode node={node}
          key={i}
          className={className}
        />)}
      </div>
    </div>
  }
}
