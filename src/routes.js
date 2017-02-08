import React from 'react'
import { Router, Route } from 'react-router'

import App from './App'
import Trossello from './Trossello'

const Routes = ( props ) => {
    return <Router { ...props }>
      <Route path='/' component={ App }/>
      <Route path='/trossello' component={ Trossello }/>
    </Router>
}

export default Routes;
