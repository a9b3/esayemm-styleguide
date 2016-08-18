import styles from './layout.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Page from '../../components/page/page.js'
import Section from '../../components/section/section.js'
import LayoutShell from './layout-shell/layout-shell.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Layout extends Component {
  render() {
    return <Page title='Layout'>
      <Section title='With Sidebar'>
        <LayoutShell />
      </Section>
    </Page>
  }
}
