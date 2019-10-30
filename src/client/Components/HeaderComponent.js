import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import './Styles/HeaderComponentStyle.css'
import regulusStarImage from '../Assets/regulusStar.jpg'

import regulusLogo from '../Assets/Images/regulus-logo.jpg'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="header-component">
        <div className="logo">
          <NavLink id="img-nav" to="/">
            <img id="nav-img-container" src={regulusLogo} alt="Regulus" />
          </NavLink>
          <div className="description">
            <text className="main">Regulus</text>
            <text className="sub">Collaboration in motion</text>
          </div>
        </div>

        <div className="navigation">
          <NavLink className="NavLink" to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink className="NavLink" to="/article">
            <h4>Article</h4>
          </NavLink>
          <NavLink className="NavLink" to="/quote">
            <h4>Quote</h4>
          </NavLink>
          <NavLink className="NavLink" to="/contact">
            <h4>Contact</h4>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default HeaderComponent
