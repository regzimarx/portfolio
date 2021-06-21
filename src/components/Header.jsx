import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import '../sass/Header.scss'

function Header() {

  const collapse = useRef(null)

  const toggleCollapse = () => collapse.current.classList.toggle('show')

  return (
    <div className="Header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RA</a>
          <div className="navbar-nav flex-row">
              <a className="nav-link" href="#">
                <i className="bi bi-currency-dollar"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="bi bi-moon"></i>
              </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="flex-grow-0 collapse navbar-collapse" id="navbarNavAltMarkup" ref={collapse}>
            <div className="navbar-nav">
              <NavLink className="nav-link home" to="/" exact={true} onClick={()=>document.querySelector('.App').style.backgroundColor="#d7e8ff"}>Home</NavLink>
              <NavLink className="nav-link about" to="/about" onClick={()=>document.querySelector('.App').style.backgroundColor="#d7ddff"}>About</NavLink>
              <NavLink className="nav-link resume" to="/resume" onClick={()=>document.querySelector('.App').style.backgroundColor="#ffeed7"}>Resume</NavLink>
              <NavLink className="nav-link services" to="/services" onClick={()=>document.querySelector('.App').style.backgroundColor="#d7ffd7"}>Services</NavLink>
              <NavLink className="nav-link portfolio" to="/portfolio" onClick={()=>document.querySelector('.App').style.backgroundColor="#d7fffd"}>Portfolio</NavLink>
              <NavLink className="nav-link contact" to="/contact" onClick={()=>document.querySelector('.App').style.backgroundColor="#f4d7ff"}>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header