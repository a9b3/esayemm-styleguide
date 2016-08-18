import styles from './click-copy.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

function clickToCopy(text) {
  const textArea = document.createElement('textarea')
  textArea.style.position = 'fixed';
  textArea.style.top = 0
  textArea.style.left = 0
  textArea.style.width = '2em'
  textArea.style.height = '2em'
  textArea.style.padding = '0'
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'
  textArea.style.background = 'transparent'
  textArea.value = text

  document.body.appendChild(textArea)
  textArea.select()

  const success = document.execCommand('copy')
  document.body.removeChild(textArea)
}

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class ClickCopy extends Component {
  static propTypes = {
    children: PropTypes.string,
  }

  state = {
    copied: false,
  }

  copy = (text) => {
    clickToCopy(text)

    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.setState({
      copied: true,
    })

    this.timeout = setTimeout(() => {
      this.setState({
        copied: false,
      })
    }, 1000)
  }

  render() {
    return <span onClick={this.copy.bind(null, this.props.children)} styleName='click-copy'>
      {
        this.state.copied
          ? 'Copied'
          : this.props.children
      }
    </span>
  }
}
