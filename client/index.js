import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import ScrollToTop from './scrollToTop'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="ahoaho-2022-mugiho.au.auth0.com"
      clientId="2a0WTZvEMhXlRPwcMt1qgSS0lgw4cqrB"
      redirectUri={window.location.origin}
      audience="https://coffee/api"
    >
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
