import React, { Component } from 'react'
import './Styles/HomeScreenStyle.css'
import { Carousel } from 'react-responsive-carousel'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import regulusStarImage from '../Assets/regulusStar.jpg'

import regulusLogo from '../Assets/Images/regulus-logo.jpg'
import regulusBanner from '../Assets/Images/banner.jpg'
import clarence from '../Assets/Images/clarence.jpg'
import kharisma from '../Assets/Images/kharisma.jpg'
import shane from '../Assets/Images/shane.jpg'
import riyanto from '../Assets/Images/riyanto.jpg'
import jason from '../Assets/Images/jason.jpg'
import karen from '../Assets/Images/karen.jpg'
import michael from '../Assets/Images/michael.jpg'

import carlos from '../Assets/Images/carlos.jpg'

import 'pure-react-carousel/dist/react-carousel.es.css'

const teamProfile = (index, image, name, quote) => {
  return (
    <Slide className="slide" index={index}>
      <div className="image">
        <img src={image} alt="profile" />
      </div>
      <div className="description">
        <text className="name">{name}</text>
        <text className="quote">{quote}</text>
      </div>
    </Slide>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const teamData = [
      {
        image: clarence,
        name: 'Clarence',
        quote: 'halloo',
      },
      {
        image: michael,
        name: 'Michael',
        quote: 'halloo',
      },
      {
        image: karen,
        name: 'Karen',
        quote: 'halloo',
      },
      {
        image: kharisma,
        name: 'Kharisma',
        quote: 'halloo',
      },
      { image: shane, name: 'Shane', quote: 'halloo' },
      {
        image: riyanto,
        name: 'Riyanto',
        quote: 'halloo',
      },
      {
        image: jason,
        name: 'Jason',
        quote: 'halloo',
      },
      {
        image: carlos,
        name: 'Carlos',
        quote: 'halloo',
      },
    ]

    return (
      <div id="home-screen">
        <div className="image cover">
          <img src={regulusBanner} alt="banner" />
        </div>

        <div className="flex-container introduction" id="what-is-regulus">
          <div className="flex-cell col-6 image">
            <img src={regulusLogo} alt="regulus" />
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
              Sebuah kelompok yang mengedepankan sikap disiplin dan mampu
              menduduki posisi teratas dalam masa Project Apprentice.
            </text>
          </div>
          <div className="flex-cell col-6 image">
            <img
              src="https://s3.amazonaws.com/ellevate-app-uploads-production/blog_posts/7542/featured_image/large/07.19.2016.elle.jpg?1468961151"
              alt="vision"
            />
          </div>
        </div>

        <div className="flex-container introduction" id="mission">
          <div className="flex-cell col-6 image">
            <img
              width="500"
              height="500"
              src="http://startupsnepal.com/images/easyblog_images/186/Entrepreneurs-brainstorming-in-The-Library-a-municipal-coworking-space.-Photo-courtesy-of-the-Tel-Aviv-municipality-2-1168x657.jpg"
              alt="mission"
            />
          </div>
          <div className="flex-cell col-6 description">
            <text className="main">Mission</text>

            <ol>
              <li>
                <text className="sub">
                  Menerapkan sistem kerja yang fleksibel dimana setiap anggota
                  kelompok bisa membantu pekerjaan sesama anggota,
                </text>
              </li>
              <li>
                <text className="sub">
                  Melaksanakan kegiatan-kegiatan di dalam Project Apprentice
                  dengan tepat waktu,
                </text>
              </li>
              <li>
                <text className="sub">
                  Mengerjakan Project Apprentice dengan maksimal, yang dimana
                  pada QC ke-3, tidak terlihat kesalahan yang berarti.
                </text>
              </li>
            </ol>
          </div>
        </div>

        <div id="our-team">
          <div className="title">
            <h1>Our team</h1>
          </div>
          <CarouselProvider
            className="carousel"
            naturalSlideWidth={100}
            naturalSlideHeight={37}
            totalSlides={teamData.length}
          >
            <ButtonBack className="button-back">
              <IoIosArrowBack />
              Back
            </ButtonBack>
            <Slider className="slider">
              {teamData &&
                teamData.map((data, i) =>
                  teamProfile(i, data.image, data.name, data.quote)
                )}
            </Slider>
            <ButtonNext className="button-next">
              Next
              <IoIosArrowForward />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    )
  }
}
