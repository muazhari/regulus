import React, { Component } from 'react'
import './Styles/HomeScreenStyle.css'
import ReactImage from '../Assets/react.png'
import regulusStarImage from '../Assets/regulusStar.jpg'

import regulusLogo from '../Assets/Images/regulus-logo.jpg'

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
        <div className="image cover">
          <img className="banner" src={regulusStarImage} alt="Regulus" />
        </div>

        <div className="flex-container introduction" id="what-is-regulus">
          <div className="flex-cell col-6 image">
            <img
              className="regulus-logo"
              src={regulusLogo}
              alt="Regulus Logo"
            />
          </div>
          <div className="flex-cell col-6 description">
            <text className="main">What is Regulus</text>
            <text className="sub">
              Regulus is an project apprentice group, that aims to foster
              students interests and talent in technology.
            </text>
          </div>
        </div>

        <div className="flex-container introduction" id="vision">
          <div className="flex-cell col-6 description">
            <text className="main">Vision</text>
            <text className="sub">
              Membantu generasi muda meningkatkan kreatifitas, keaktifan, serta
              sifat inovatif, dan produktif dalam bidang teknologi dan dapat
              menjadi manusia yang lebih berbakti, teladan serta bermanfaat bagi
              masyarakat
            </text>
          </div>
          <div className="flex-cell col-6 image">
            <img
              className="regulus-logo"
              src={regulusLogo}
              alt="Regulus Logo"
            />
          </div>
        </div>

        <div className="flex-container introduction" id="mission">
          <div className="flex-cell col-6 image">
            <img
              className="regulus-logo"
              src={regulusLogo}
              alt="Regulus Logo"
            />
          </div>
          <div className="flex-cell col-6 description">
            <text className="main">Mission</text>

            <ol>
              <li>
                <text className="sub">
                  Membuat program kegiatan yang mengasah kreatifitas dan
                  membangun kemandirian
                </text>
              </li>
              <li>
                <text className="sub">
                  Mengembangkan rasa sosial, tanggung jawab, dan saling
                  menghargai antar anggota.
                </text>
              </li>
              <li>
                <text className="sub">
                  Memperluas jaringan koneksi untuk mendapatkan lebih banyak
                  pengetahuan.
                </text>
              </li>
              <li>
                <text className="sub">
                  Membantu anggota dengan memberika pondasi yang cukup untuk
                  mereka kedepannya
                </text>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
