import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Services from './Services'

import '../sass/App.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
