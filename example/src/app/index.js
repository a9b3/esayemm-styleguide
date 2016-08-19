// app entry point
import '!style-loader!css-loader!font-awesome/css/font-awesome.css'
import '!style-loader!css-loader!highlight.js/styles/monokai_sublime.css'
import 'global.scss'

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createStore from './store.js'
import { AppContainer } from 'react-hot-loader'
import Root from './root.js'

if (CONFIG.debug === false && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}

const store = createStore()
const history = syncHistoryWithStore(
  useScroll(() => browserHistory)(),
  store
)

render(
  <AppContainer>
    <Root
      store={store}
      history={history}
    />
  </AppContainer>,
  document.getElementById('mount')
)

if (module.hot) {
  let HotRoot = require('./root.js').default

  module.hot.accept('global.scss', () => {
    require('global.scss')
  })
  module.hot.accept('./root.js', () => {
    render(
      <AppContainer>
        <HotRoot
          store={store}
          history={history}
        />
      </AppContainer>,
      document.getElementById('mount')
    )
  })
}
