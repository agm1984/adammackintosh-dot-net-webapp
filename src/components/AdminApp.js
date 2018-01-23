import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './nav/Nav'
import Auth from './auth'
import Dashboard from './dashboards/dashboard'
import Profile from './profile/Profile'
import PersonList from './list/person/index'
import PersonCreate from './create/person/index'
import PersonView from './view/person/index'
import PersonEdit from './edit/person/index'
import ArticleList from './list/article/index'
import ArticleCreate from './create/article/index'
import ArticleView from './view/article/index'
import ArticleEdit from './edit/article/index'
import DevTools from './dashboards/devtools'
import NotFoundPage from './404'
import Footer from './Footer'

/**
 * The Admin App Component is responsible for rendering admin CRUD functionality
 * that is only available to signed in users.
 */
const AdminApp = () => ([
  <Nav key="NavBar" />,
  <Auth key="AuthGateway">
    <Switch>
      <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Route exact path="/admin/profile" component={Profile} />
      <Route exact path="/admin/people" component={PersonList} />
      <Route exact path="/admin/people/create" component={PersonCreate} />
      <Route exact path="/admin/people/view/:person_serialNumber" component={PersonView} />
      <Route exact path="/admin/people/edit/:person_serialNumber" component={PersonEdit} />
      <Route exact path="/admin/articles" component={ArticleList} />
      <Route exact path="/admin/articles/create" component={ArticleCreate} />
      <Route exact path="/admin/articles/view/:article_slug" component={ArticleView} />
      <Route exact path="/admin/articles/edit/:article_slug" component={ArticleEdit} />
      <Route exact path="/admin/devtools" component={DevTools} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Auth>,
  <Footer key="Footer" />,
])

export default AdminApp
