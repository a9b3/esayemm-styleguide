import React from 'react'
import {
  Route,
  IndexRedirect,
  IndexRoute,
} from 'react-router'
import Shell from './containers/shell/shell.js'
import General from './containers/general/general.js'
import Layout from './containers/layout/layout.js'

export default (
  <Route path='/' component={Shell}>
    <IndexRedirect to='general' />
    <Route path='general' component={General} />
    <Route path='layout' component={Layout} />
  </Route>
)
