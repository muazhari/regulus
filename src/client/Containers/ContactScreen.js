import React, { Component } from 'react'
import './Styles/ContactScreenStyle.css'
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
        <h1>Contact Us</h1>
        <div className="flex-container contact-form">
          <form action="?name=&email=&message=" method="post">
            <div className="flex-cell col-6 identifier">
              <label htmlFor="name">
                <text>Name</text>
                <input type="text" name="name" id="name" />
              </label>

              <label htmlFor="email">
                <text>Email</text>
                <input type="text" name="email" id="email" />
              </label>

              <input type="submit" />
            </div>

            <div className="flex-cell col-6 text-box">
              <label htmlFor="text-box">
                <text>Message</text>
                <textarea
                  cols="100"
                  rows="15"
                  id="text-box"
                  name="message"
                  placeholder="Let us know!"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactScreen
