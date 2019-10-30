import React, { Component } from 'react'

import { NavLink, Redirect } from 'react-router-dom'

import './Styles/ArticleScreenStyle.css'

import artikelTeknologi from '../Assets/Images/artikel-teknologi.jpg'

import artikelBisnis from '../Assets/Images/artikel-bisnis.jpg'

class ArticleScreen extends Component {
  render() {
    return (
      <div id="article-screen">
        <NavLink
          className="preview"
          id="article-teknologi"
          to="/article/jaringan-5g"
        >
          <div className="content">
            <div className="title">
              <text>Perlukah Jaringan 5G Keluar Dengan Cepat?</text>
            </div>

            <div className="description">
              <text>
                Halo, readers ! Akhir-akhir ini, penggunaan internet di kalangan
                masyarakat meningkat pesat. Hal ini disebabkan oleh...
              </text>
            </div>
          </div>

          <div className="image">
            <img
              className="preview-img-1"
              src={artikelTeknologi}
              alt="preview-img-1"
            />
          </div>
        </NavLink>

        <NavLink
          className="preview"
          id="article-bisnis"
          to="/article/bisnis-online"
        >
          <div className="content">
            <div className="title">
              <text>Bisnis Online, Perlukah?</text>
            </div>

            <div className="description">
              <text>
                Hallo, readers! Di era yang modern ini, bisa dibilang bisnis
                sudah berkembang dengan cepat, sama halnya dengan perkembangan
                teknologi. Pengembangan bisnis...
              </text>
            </div>
          </div>

          <div className="image">
            <img
              className="preview-img-1"
              src={artikelBisnis}
              alt="preview-img-1"
            />
          </div>
        </NavLink>
      </div>
    )
  }
}

export default ArticleScreen
