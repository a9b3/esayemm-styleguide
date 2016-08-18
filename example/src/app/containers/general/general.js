import styles from './general.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import colors from 'shared/colors.scss'
import Page from '../../components/page/page.js'
import Section from '../../components/section/section.js'
import Colors from '../../components/colors/colors.js'
import Type from '../../components/type/type.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Main extends Component {
  render() {
    return <Page title='General'>
      <Section title='Type' id='type'>
        <Type />
      </Section>

      <Section title='Colors' id='colors'>
        <Colors colors={colors} />
      </Section>
    </Page>
  }
}
