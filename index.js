import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import combinedReducers from './reducers'
import App from './app'

let store = createStore(combinedReducers,
  window.devToolsExtension && window.devToolsExtension())

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/page/1" />
        <Route path="/page/:page" component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'))
