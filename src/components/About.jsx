import React from 'react'

import '../sass/About.scss'

function About() {

  return (
    <div className="About animate__animated animate__backInUp">
      <div className="container">
        <h1>About me.</h1>
        <h2>Web Developer</h2>
        <div className="contact-details row">
          <div className="item col-md-6 col-lg-6">
              <i class="bi bi-envelope-fill"></i>
              <span>gjalinsangao@gmail.com</span>
          </div>
          <div className="item col-md-6 col-lg-6">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Midsayap, North Cotabato</span>
          </div>
          <div className="item col-md-6 col-lg-6">
            <i className="bi bi-telephone-fill"></i>
            <span>+639381514536</span>
          </div>
          <div className="item col-md-6 col-lg-6">
            <i className="bi bi-skype"></i>
            <span>Regzimarx John Alinsangao</span>
          </div>
        </div>
        <p>I am a rising intermediate web developer. I have 6 months of experience as a full-stack web developer in a web development agency after graduation. I am currently working as a Technical Support Representative but continue to harness my web development skills.</p>

        <h2>Tech Stack</h2>
        <p>I have fun learning new tech stacks and tools and so far I have mastered some and have experience with tech stacks below.</p>
        <div className="row tech-items">
          <div className="item col-md-6 col-lg-3">
            <span>
              <i className="devicon-bootstrap-plain colored"></i>
              Bootstrap
            </span>
          </div>
          <div className="item col-md-6 col-lg-3">
            <span>
              <i class="devicon-tailwindcss-plain colored"></i>
                Tailwind CSS
            </span>
            </div>
          <div className="item col-md-6 col-lg-3">
            <span>
              <i class="devicon-sass-original colored"></i>
                Sass
            </span>
          </div>
          <div className="item col-md-6 col-lg-3">
             <span>
             <i class="devicon-django-plain colored"></i>
              Django
            </span>
          </div>
          <div className="item col-md-6 col-lg-3">
             <span>
             <i class="devicon-laravel-plain colored"></i>
              Laravel
            </span>
          </div>
          <div className="item col-md-6 col-lg-3">
             <span>
             <i class="devicon-react-original colored"></i>
              React
            </span>
          </div>
          <div className="item col-md-6 col-lg-3">
             <span>
               <i class="devicon-vscode-plain colored"></i>
              VS Code
            </span>
          </div>
        </div>

        <h2></h2>
        <div className="testimonials">

        </div>
      </div>
    </div>
  )

}

export default About