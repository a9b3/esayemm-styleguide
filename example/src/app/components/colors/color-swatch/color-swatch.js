import styles from './color-swatch.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import ClickCopy from '../../../components/click-copy/click-copy.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class ColorSwatch extends Component {
  static propTypes = {
    color: PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  }

  render() {
    const {
      key,
      value,
    } = this.props.color

    return <div styleName='color-swatch'>
      <div styleName='color' style={{
        backgroundColor: value,
      }}/>
      <div styleName='hex'>
        <ClickCopy>
          {value}
        </ClickCopy>
      </div>
      <div styleName='key'>
        <ClickCopy>
          {`$${key}`}
        </ClickCopy>
      </div>
    </div>
  }
}
