import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/HeaderComponentStyle.css'
import regulusStarImage from '../Assets/regulusStar.jpg'

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header-component">
        <div id="logo">
          <img id="image" src={regulusStarImage} alt="Regulus" />
          <div id="text">
            <h2 id="main">Regulus</h2>
            <h4 id="sub">Collaboration in motion</h4>
          </div>
        </div>
        <div id="navigation">
          <NavLink id="nav-link" to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink id="nav-link" to="/about">
            <h4>About</h4>
          </NavLink>
          <NavLink id="nav-link" to="/article">
            <h4>Article</h4>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default HeaderComponent
