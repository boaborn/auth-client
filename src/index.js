import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Signout from './components/auth/Signout'
import Feature from './components/Feature'
import reducers from './reducers'

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  }, // initial state
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={ Welcome } />
        <Route path="/signup" exact component={ Signup } />
        <Route path="/signout" exact component={ Signout } />
        <Route path="/feature" exact component={ Feature } />
        <Route path="/signin" exact component={ Signin } />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
