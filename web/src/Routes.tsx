import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Landing from './pages/Landing'
import OrphanageMap from './pages/OrphanagesMap'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/app'>
          <OrphanageMap />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;