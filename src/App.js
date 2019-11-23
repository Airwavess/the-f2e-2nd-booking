import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.component'
import Reservation from './pages/Reservation/Reservation.component'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/reservation/:roomId'>
          <Reservation />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
