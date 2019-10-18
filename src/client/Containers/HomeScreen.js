import React, { Component } from 'react'
import './Styles/HomeScreenStyle.css'
import ReactImage from '../Assets/react.png'
import regulusStarImage from '../Assets/regulusStar.jpg'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { username: null }
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }))
  }

  render() {
    const { username } = this.state
    return (
      <div className="home-screen">
        {/* {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )} */}
        <h1 />
        <img src={regulusStarImage} alt="Regulus" />
        <div className="info introduction">
          <div className="pallete logo">
            <h1>R</h1>
          </div>
          <div className="pallete logo-description">
            <text id="main">What is Regulus</text>
            <text id="sub">
              Regulus is an project apprentice group, that aims to foster
              students interests and talent in technology.
            </text>
          </div>
        </div>
      </div>
    )
  }
}
