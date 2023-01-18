import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Appartement from './pages/Appartement/'
import Survey from './pages/Survey'
import Header from './components/Header/'
import Error from './components/Error'
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route 
            exact path='/'
            component={Home}
          />
          <Route 
            path='/survey'
            component={Survey}
          />
          <Route 
            path='/appartement'
            component={Appartement}
          />
          <Route 
            path='*'
            component={Error}
          />
      </Routes>
    </Router>
  </React.StrictMode>,
document.getElementById('root')
)