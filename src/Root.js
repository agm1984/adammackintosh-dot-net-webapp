import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { configureStore, history } from './store/'
import client from './components/apolloClient'
import Desktop from './components/desktop/Workstation'
import Register from './components/auth/register'
import SignIn from './components/auth/signin/AuthView'
import AdminApp from './components/AdminApp'
import './app.css'

const store = configureStore()

/**
 * The Root Component is responsible for loading the Windows 98 Portfolio
 * and the Admin Sign Up and Sign In Views. Any other views are protected.
 */
const Root = () => (
  <ApolloProvider store={store} client={client}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={withRouter(Desktop)} />
        <Route exact path="/admin/register" component={withRouter(Register)} />
        <Route exact path="/admin/signin" component={withRouter(SignIn)} />
        <Route path="/admin" component={withRouter(AdminApp)} />
      </Switch>
    </ConnectedRouter>
  </ApolloProvider>
)

export default Root
