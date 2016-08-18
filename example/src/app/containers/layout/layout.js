import styles from './layout.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Page from '../../components/page/page.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Layout extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  render() {
    return <Page title='Layout'>
      Hello World!
    </Page>
  }
}
