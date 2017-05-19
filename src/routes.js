import React from 'react'
import { Router, Route } from 'react-router'

import App from './App'
import Trossello from './Trossello'
import Jatis from './Jatis'
import Prrr from './Prrr'
import CoachQueue from './CoachQueue'

const Routes = ( props ) => {
  return <Router { ...props }>
    <Route path='/' component={ App }/>
    <Route path='/trossello' component={ Trossello }/>
    <Route path='/jatis' component={ Jatis }/>
    <Route path='/prrr' component={ Prrr }/>
    <Route path='/coachqueue' component={ CoachQueue }/>
  </Router>
}

export default Routes;
