import React, { Component } from 'react'

import './Styles/QuoteScreenStyle.css'

import designQuote from '../Assets/Images/design-quote.jpg'

class QuoteScreen extends Component {
  render() {
    return (
      <div id="quotes-screen">
        <div className="quote">
          <div className="title">
            <h1>The Design Quote</h1>
          </div>
          <div className="content">
            <div className="image">
              <img className="img-1" src={designQuote} alt="img-1" />
              <text>
                photo by&nbsp;
                <a href="/">Regulus</a>
              </text>
            </div>

            <p>
              "Don't you see that the Lion is silent and yet feared while the
              Dog barks constantly and is despised?"
            </p>

            <p>- Imam Shafi'i</p>

            <p>
              Dalam kehidupan, sering kali kita berhadapan dengan orang lain
              bersama dengan tingkah lakunya tersendiri yang beragam. Baik itu
              di lingkungan keluarga, kampus, maupun pekerjaan, kita akan
              menemukan tingkah laku seseorang yang reaktif dan ketika sedang
              berhadapan dengan sebuah masalah. Bahkan orang tersebut akan
              bersikap arogan ketika merasa terhadang dan terhalangi. Pada sisi
              yang lain, adapula orang yang diam dan tidak bereaksi dalam
              menghadapi situasi tersebut.
            </p>

            <p>
              Dari contoh di atas, terdapat dua contoh sikap berlawanan, yakni
              suka berkoar - koar dan pendiam. Jika duasikap berlawanan ini
              dibandingkan, maka terlihat jelas bahwa arah pikir orang lebih
              susah untuk ditebak, sedangkan orang yang berkoar akan dapat
              dengan mudah ditebak cara dan maksud berpikirnya.
            </p>

            <p>
              Tidak semua orang pantas untuk ditanggapi dengan waktu berharga
              yang kita miliki, sebab mereka yang membenci kita hanya bertujuan
              untuk menghalangi kita dari tujuan yang ingin kita capai. Lebih
              baik kita mengalah saja kepada orang - orang yang mau menjatuhkan
              atau memprovokasi kita. Jika tidak, maka kita akan terhasut
              emosinya dan menjadi sama seperti mereka<u>.</u>Daripada
              diteruskan dan terjadi beradu mulut yang tiada akhirnya, sikap
              diam bisa menjadi salah satu penyelamat. Sikap ini dapat membuat
              kita terselamatkan dari rasa susah, hina dan sakit hati akibat
              menanggapi orang - orang yang suka mengusik kita.
            </p>

            <p>
              Mencegah sebuah perdebatan atau pembahasan yang tidak berarti
              merupakan sebuah tindakan paling mulia yang bisa kita lakukan
              dimanapun dan kapanpun, sebab sikap diam terhadap orang yang bodoh
              adalah suatu kemuliaan. Begitu pula diam untuk menjaga kehormatan
              adalah suatu kebaikan.
            </p>

            <p>
              Oleh karena itu, kita harus bijaksana dalam menggunakan waktu kita
              untuk menanggapi atau berdebat kepada orang lain. Ketahuilah kapan
              waktunya untuk berdebat dan kapan waktunya untuk diam. Jadilah
              seperti seekor singa yang ditakuti karena sikap diamnya daripada
              menjadi seperti seekor anjing yang dihina karena sikapnya yang
              senang berkoar!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default QuoteScreen
