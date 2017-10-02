import React from 'react';
import { Route, Router,Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import HomePage from '../HomePage'
import VisPage from '../vis-page'
import ErrorPage from '../ErrorPage'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <main className='wrap'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/visualisation" component={VisPage} />
        <Route component={ErrorPage}/>
      </Switch>
    </main>
  </Router>)

export default connect(()=>({}))(App);
