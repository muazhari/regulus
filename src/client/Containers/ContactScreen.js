import React, { Component } from 'react'
import './Styles/contactScreenStyle.css'
import ReactImage from '../Assets/react.png'
import regulusStarImage from '../Assets/regulusStar.jpg'

class ContactScreen extends Component {
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
      <div className="contact-screen">
        {/* {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )} */}
        <h1>Contact Screen</h1>
      </div>
    )
  }
}

export default ContactScreen
