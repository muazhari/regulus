import React, { Component } from 'react'

import './Styles/AboutScreenStyle.css'
// import './Scripts/carousel'

class AboutScreen extends Component {
  render() {
    return (
      <div className="about-screen">
        <h1>About Screen</h1>

        <h3>Our Team</h3>

        <div className="carousel">
          <button
            type="button"
            className="carousel-button-prev carousel-button"
            data-dir="prev"
          >
            <text>&lt;</text>
          </button>
          <div className="carousel-container">
            <div className="carousel-list">
              <div className="carousel-item">1</div>
              <div className="carousel-item">2</div>
              <div className="carousel-item">3</div>
              <div className="carousel-item">4</div>
              <div className="carousel-item">5</div>
              <div className="carousel-item">6</div>
              <div className="carousel-item">7</div>
              <div className="carousel-item">8</div>
              <div className="carousel-item">9</div>
              <div className="carousel-item">10</div>
            </div>
          </div>
          <button
            type="button"
            className="carousel-button-next carousel-button"
            data-dir="next"
          >
            <text>&gt;</text>
          </button>
        </div>
      </div>
    )
  }
}

export default AboutScreen
