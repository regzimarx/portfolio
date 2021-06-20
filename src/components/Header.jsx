import React, { useState, useRef } from 'react'

import '../sass/Header.scss'

function Header() {

  const collapse = useRef(null)

  const toggleCollapse = () => collapse.current.classList.toggle('show')

  return (
    <div className="Header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rgmrz</a>
          <div className="navbar-nav flex-row">
              <a className="nav-link" href="#">Support</a>
              <a className="nav-link" href="#">Dark Mode</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="flex-grow-0 collapse navbar-collapse" id="navbarNavAltMarkup" ref={collapse}>
            <div className="navbar-nav">
              <a className="nav-link" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Resume</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Portfolio</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header