import styles from './general.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import colors from 'shared/colors.scss'
import Page from '../../components/page/page.js'
import Section from '../../components/section/section.js'
import Colors from '../../components/colors/colors.js'
import Type from '../../components/type/type.js'
import CodeSnippet from '../../components/code-snippet/code-snippet.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Main extends Component {
  render() {
    return <Page title='General'>
      <Section title='Usage'>
        <div styleName='section'>
          Generic styles and some helpers meant to be used with css-modules.
        </div>

        <div styleName='section'>
          1. Install via npm
          <CodeSnippet>
            {`npm install esayemm-styles --save`}
          </CodeSnippet>
          2. Import global styles
          <CodeSnippet>
            {`// entry file \n`}
            {`import 'esayemm-styles/index.scss'`}
          </CodeSnippet>
          3. Use helper
          <CodeSnippet>
            {`// css file \n`}
            {`import 'esayemm-styles/shared.scss'\n\n`}
            {`.foo { composes: flex-row; }`}
          </CodeSnippet>
        </div>
      </Section>

      <Section title='Type' id='type'>
        <div styleName='section'>
        </div>

        <div styleName='section'>
          <Type />
        </div>
      </Section>

      <Section title='Colors' id='colors'>
        <Colors colors={colors} />
      </Section>
    </Page>
  }
}
