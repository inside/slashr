import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import App from './app'

render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/page/1" />
        <Route path="/page/:page" component={App} />
      </Route>
    </Router>,
    document.getElementById('root'))
