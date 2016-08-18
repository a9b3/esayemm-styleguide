import styles from './page.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Page extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return <div styleName='page'>
      <div styleName='title'>
        {this.props.title}
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>

      <div styleName='footer'>
        <div styleName='footer-inner'>
          <div styleName='end'>
            Obligatory Footer <br />
            &copy; Sam Lau 2016
          </div>
        </div>
      </div>
    </div>
  }
}
