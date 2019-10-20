import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/FooterComponentStyle.css'
import regulusStarImage from '../Assets/regulusStar.jpg'

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer-component">
        <div className="logo">
          {/* <img className="image" src={regulusStarImage} alt="Regulus" /> */}
          <text className="image">R</text>
          <div className="text">
            <text className="main">Regulus</text>
            <text className="sub">Collaboration in motion</text>
          </div>
        </div>
        <div className="navigation">
          <NavLink className="nav-link" to="/contact">
            <h4>Contact Us</h4>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default FooterComponent
