import React, { Component } from 'react'

import { NavLink, Redirect } from 'react-router-dom'

import './Styles/ArticleScreenStyle.css'

import artikelTeknologi from '../Assets/Images/artikel-teknologi.jpg'

import artikelBisnis from '../Assets/Images/artikel-bisnis.jpg'

class ArticleTeknologiScreen extends Component {
  render() {
    return (
      <div id="article-screen">
        <div className="article">
          <div className="title">
            <h1>Perlukah Jaringan 5G Keluar Dengan Cepat?</h1>
          </div>
          <div className="content">
            <div className="image">
              <img className="img-1" src={artikelTeknologi} alt="img-1" />
              <text>
                photo by&nbsp;
                <a href="#">respective owners</a>
              </text>
            </div>
            <p>
              Halo, readers ! Akhir-akhir ini, penggunaan internet di kalangan
              masyarakat meningkat pesat. Hal ini disebabkan oleh
              aktivitas-aktivitas ataupun transaksi yang berbasis online. Tentu
              dengan seiringnya perkembangan jaman, teknologi-teknologi yang ada
              akan selalu berkembang. Teknologi tersebut bertujuan untuk
              memudahkan hidup kita. Contohnya, jaringan internet. Di Indonesia
              sendiri, jaringan internet sudah terlihat perkembangannya sehingga
              penggunanya dapat dengan mudah memanfaatkan jaringan yang ada
              tersebut.
            </p>
            <p>
              Jaringan internet ini sendiri digunakan baik untuk mengirimkan
              pesan maupun maupun menerima pesan atau informasi. Selain itu,
              transaksi bisnis juga dapat dilakukan secara online. Di samping
              itu, proses jual beli barang dan pengiriman barang dapat dilakukan
              juga secara online oleh toko-toko yang bersangkutan.
            </p>
            <p>
              Jaringan internet yang mungkin bisa digunakan untuk proses
              transaksi tersebut adalah sebuah jaringan yang kini sedang
              berkembang pesat, yaitu jaringan 5G. Indonesia kini sedang
              menikmati perkembangan jaringan 4G, yang dapat dikatakan belum
              terlalu mencakup daerah-daerah terpencil. Sehingga, bisa dikatakan
              bahwa jaringan 5G masih belum bisa diimplementasikan di Indonesia.
            </p>
            <p>
              Namun, 5G sudah bisa dikatakan bukanlah sebuah ide lagi, melainkan
              sudah dapat direalisasikan ke dalam implementasi jaringan
              internet. Mungkin dalam waktu dekat negara kita akan dapat
              menikmati kemudahan yang diberikan oleh jaringan 5G ini. Sebelum
              kita menggunakannya, ada baiknya kita mengetahui apa itu jaringan
              5G.
            </p>
            <p>
              Readers, tahukah kalian pengertian dari jaringan 5G? Jaringan 5G
              adalah sebuah jaringan yang tentu seratus kali lebih cepat dari
              jaringan LTE dan dapat mengirimkan data dengan delay hanya
              beberapa milisekon saja. Singkatnya, jaringan 5G lebih bagus
              dibandingkan jaringan-jaringan yang sudah ada. Teknologi ini
              diterapkan juga di dalam handphone yang sudah memiliki kemampuan
              untuk menangkap sinyal 5G. Contohnya Samsung Galaxy S10 5G, Note
              10 Plus 5G, OnePlus 7 Pro 5G, dan lain-lain.
            </p>
            <p>
              Qualcomm, sebuah perusahaan publik asal Amerika Serikat yang
              bergerak di industri komunikasi, kini sedang bergerak cepat dengan
              terus membuat inovasi-inovasi untuk handphone-handphone yang
              mendukung jaringan 5G. Direktur Qualcomm, Cristiano Amon
              menyatakan bahwa mereka ingin bekerjasama dengan Xiaomi walaupun
              kerjasama tersebut cukup beresiko. "Ketika kita melihat kesempatan
              kita di depan untuk 5G, kita akan melihat kesempatan untuk
              menciptakan pemenang." tutur Cristiano.
            </p>
            <p>
              Qualcomm menganggap kalau merilis 5G dengan cepat akan menyebabkan
              ketidakstabilan dalam sistemnya, sehingga mereka yakin kalau 5G
              lebih baik dirilis secara bertahap. Hal ini menunjukkan kalau
              mayoritas dari pengguna jaringan 4G tidak perlu terburu-buru untuk
              beralih ke jaringan 5G. Sangat tidak dianjurkan untuk merilis
              sebuah jaringan internet yang tidak siap bukan?
            </p>
            <p>
              Tentu untuk perkembangan 5G ini membutuhkan waktu yang cukup lama
              agar dapat mendunia. Iklan-iklan yang mempromosikan jaringan 5G
              juga masih terbilang sedikit. Mungkin saja jaringan 5G membutuhkan
              waktu yang lebih lama lagi untuk mencakup daerah-daerah terpencil.
              Jaringan 5G diterapkan untuk mengisi kekosongan ataupun kecacatan
              yang ditimbulkan jaringan 4G.
            </p>
            <p>
              Jaringan 5G juga punya beberapa kelemahan yang fatal di saat
              perkembangannya. Pertama, masalah biaya. Untuk merealisasikan
              jaringan 5G tentu diperlukan biaya yang sangat mahal. Hal ini
              disebabkan oleh meningkatnya tarif internet dari provider
              masing-masing (efek dari naiknya penggunaan data) dan distribusi
              jaringan 5G di daerah terpencil yang dapat dikatakan belum
              maksimal.
            </p>
            <p>
              Kedua, jaringan 5G membutuhkan transmitter yang banyak untuk
              sinyal. Jika jumlahnya terlalu sedikit, maka sinyal akan mudah
              hilang. Jaringan 5G lebih sulit menembus tembok dibandingkan
              dengan jaringan 2.4G (untuk masalah Wi-Fi), dikarenakan jaringan
              5G memiliki gelombang yang lebih pendek dibandingkan dengan
              jaringan 2.4G.
            </p>
            <p>
              Berdasarkan keraguan dan juga kelemahan yang sudah disebutkan di
              atas, tentu saja jaringan 5G tidak perlu diimplementasikan dengan
              terburu-buru. Provider internet bisa saja meluncurkan jaringan 5G
              secara bertahap dengan mengadakan uji coba jaringan ataupun
              penyesuaian harga agar masyarakat baik di kota maupun daerah dapat
              menikmatinya dengan setara.
            </p>
            <p>
              Di masa yang akan mendatang, mungkin jaringan 4G akan mulai turun
              kualitasnya. Pertanyaannya adalah seberapa cepat itu akan terjadi
              dan kapan jaringan 4G akan ditinggalkan oleh konsumennya. Hal ini
              yang menguatkan mengapa kita tidak perlu terburu-buru dalam
              merangkai jaringan 5G.
            </p>
            <p>
              Berdasarkan pernyataan-pernyataan diatas, dapat disimpulkan kalau
              jaringan 5G adalah sebuah teknologi yang memaksa kita untuk
              "menunggu dan melihat" apakah jaringan tersebut akan muncul dan
              merata di Indonesia. Jadi mari kita nantikan jaringan 5G yang
              tentu akan menjadi benefit yang besar bagi negara kita. Bagaimana
              readers? Sudah mulai mengenal jaringan 5G? Tulis komentar kalian
              di bawah ya!
            </p>
            <p>Source :</p>
            <p>
              https://techcrunch.com/2019/03/02/5g-phones-are-here-but-theres-no-rush-to-upgrade/
            </p>
            <p>
              https://sea.mashable.com/tech/2416/faster-5g-phones-are-coming-even-though-nobody-has-a-5g-phone-yet
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleTeknologiScreen
