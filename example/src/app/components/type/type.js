import styles from './type.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

const cssHelper = {
  getValue(el, prop) {
    if (!el) return ''
    const ret = window.getComputedStyle(el, null).getPropertyValue(prop) || ''
    return ret
  },

  formatFontFamily(fontFamily) {
    return fontFamily.split(',')[0].replace(`"`, '').replace(`"`, '')
  },
}

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Type extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({})
    }, 0)
  }

  renderHeaders = () => {
    const elems = []
    for (let i = 0; i < 6; i++) {
      elems.push(
        <div styleName='headers' key={i}>
          <div className={`h${i+1}`} ref={el => this[`h${i+1}`] = el}>
            Header {i+1}
          </div>
          <div styleName='info'>
            {cssHelper.getValue(this[`h${i+1}`], 'font-size')} <br/>
            {cssHelper.getValue(this[`h${i+1}`], 'font-weight')} weight
          </div>
        </div>
      )
    }
    return elems
  }

  render() {
    return <div styleName='type'>
      <div styleName='row section'>
        <div styleName='capital' ref={el => this.el = el}>
          Aa
        </div>

        <div styleName='divider' />

        <div styleName='weights'>
          <div className='bold'>
            Bold
          </div>
          <div className='semi-bold'>
            Semi-Bold
          </div>
          <div>
            Regular
          </div>
          <div className='light'>
            Light
          </div>
          <div className='thin'>
            Thin
          </div>
        </div>

        <div styleName='divider' />

        <div>
          {cssHelper.formatFontFamily(cssHelper.getValue(this.el, 'font-family'))}
        </div>
      </div>

      <div styleName='section'>
        {this.renderHeaders()}
      </div>

      <div styleName='section regular' ref={el => this.paragraphEl = el}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
          velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
          volutpat sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
          velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
          volutpat sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
          velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
          volutpat sit amet.
        </div>

        <div styleName='info'>
            {cssHelper.getValue(this.paragraphEl, 'font-size')} <br/>
            {cssHelper.getValue(this.paragraphEl, 'font-weight')} weight
        </div>
      </div>
    </div>
  }
}
