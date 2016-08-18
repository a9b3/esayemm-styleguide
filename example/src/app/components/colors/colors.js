import styles from './colors.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import ColorSwatch from './color-swatch/color-swatch.js'

const colorHelper = {
  groupColorsByNamingConvention(colors) {
    const groupKeys = Object.keys(colors).reduce((map, key) => {
      const groupKey = key.split('_')[0]
      map[groupKey] = map[groupKey] || []
      map[groupKey].push({ key, value: colors[key] })
      return map
    }, {})
    return groupKeys
  },
}

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Colors extends Component {
  static propTypes = {
    colors: PropTypes.any,
  }

  renderGroupedColors(groupedColors) {
    return Object.keys(groupedColors).map(key => {
      const colors = groupedColors[key]

      return <div styleName='color-group'>
        <div styleName='title'>
          {key}
        </div>

        <div styleName='swatches'>
          {colors.map(color => <ColorSwatch color={color} />)}
        </div>
      </div>
    })
  }

  render() {
    const {
      colors,
    } = this.props

    const groupedColors = colorHelper.groupColorsByNamingConvention(colors)
    return <div styleName='colors'>
      {this.renderGroupedColors(groupedColors)}
    </div>
  }
}
