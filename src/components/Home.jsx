import React from 'react'

import '../sass/Home.scss'

function Home() {

  return (
    <div className="Home">
      <div className="container">
        <div className="hero row">
          <div className="col-md-6 col-lg-6 hero-text">
            <h1>Regzimarx Alinsangao</h1>
            <h2>Hi! I'm a web developer specializing in Django Web Framework and ReactJS</h2>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-github"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 hero-img">
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home