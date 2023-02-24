import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from "./Routes/routes"
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <RoutesApp/>
      <Footer />
    </Router>
  </React.StrictMode>,
)