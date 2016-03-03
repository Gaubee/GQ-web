import {Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Login from './containers/Login'
import Register from './containers/Register'
import Developer from './containers/Developer'
import configure from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = configure()

const rootRoute = {
  childRoutes: [Login, Register, Developer]
}

console.log(rootRoute);

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={rootRoute}></Router>
</Provider>, document.getElementById('root'))
