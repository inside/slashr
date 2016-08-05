import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import {zoomReducer} from './reducers'
import App from './app'

let reducers = combineReducers({
  zoomState: zoomReducer,
})
let store = createStore(reducers,
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
