import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/HeaderComponentStyle.css'
import regulusStarImage from '../Assets/regulusStar.jpg'

import regulusLogo from '../Assets/Images/regulus-logo.jpg'

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header-component">
        <div className="logo">
          <div className="image ">
            <img className="regulus-logo" src={regulusLogo} alt="Regulus" />
          </div>
          <div className="description">
            <text className="main">Regulus</text>
            <text className="sub">Collaboration in motion</text>
          </div>
        </div>
        <div className="navigation">
          <NavLink className="nav-link" to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink className="nav-link" to="/about">
            <h4>About</h4>
          </NavLink>
          <NavLink className="nav-link" to="/article">
            <h4>Article</h4>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default HeaderComponent
