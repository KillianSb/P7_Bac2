import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import RoutesApp from "./Routes/routes";
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <RoutesApp/>
      <Footer />
    </Router>
  </React.StrictMode>,
document.getElementById('root')
)