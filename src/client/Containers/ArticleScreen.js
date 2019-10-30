import React, { Component } from 'react'

import './Styles/ArticleScreenStyle.css'

import artikelTeknologi from '../Assets/Images/artikel-teknologi.jpg'

import artikelBisnis from '../Assets/Images/artikel-bisnis.jpg'

class ArticleScreen extends Component {
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

        <div className="article">
          <div className="title">
            <h1>Bisnis Online, Perlukah?</h1>
          </div>
          <div className="content">
            <div className="image">
              <img className="img-2" src={artikelBisnis} alt="img-2" />
              <text>
                photo by&nbsp;
                <a href="#">respective owners</a>
              </text>
            </div>
            <p>
              Hallo, readers! Di era yang modern ini, bisa dibilang bisnis sudah
              berkembang dengan cepat, sama halnya dengan perkembangan
              teknologi. Pengembangan bisnis adalah sebuah perjalanan yang cukup
              panjang. Kita tentu memilki tujuan untuk mengembangkan network,
              penjualan dan juga pendapatan kita. Namun, dibalik semua itu,
              tidak semua orang tahu apa yang menyebabkan suatu bisnis sulit
              mencapai tujuan utamanya.{' '}
            </p>
            <p>
              Terjun ke dalam bisnis sebenarnya adalah langkah yang baik,
              apabila kita memilih pilihan yang tepat. Bisnis Online bisa
              menjadi salah satunya. Sebelum membahas lebih lanjut, ada perlunya
              kita mengenal apa itu Bisnis Online. Bisnis Online adalah sebuah
              bisnis di internet yang menjual produk dan jasa mereka secara
              online. Banyaknya kompetitor di market ini menyebabkan kita harus
              terus mengembangkan bisnis kita sehingga kita bisa bersaing dan
              tidak tertinggal jauh.{' '}
            </p>
            <p>
              Untuk memulai bisnis online ini sendiri, merubah bisnis kita
              menjadi bisnis online. Bisnis online sebenarnya terbilang mahal
              karena sangat diperlukan kerja ekstra dan juga investasi waktu
              dalam mengatur database serta proses jual-beli yang memerlukan
              orang yang ahli dalam bidang tersebut.{' '}
            </p>
            <p>
              Kita perlu memperkenalkan bisnis kita ke dunia maya. Sama halnya
              ketika kita mempopulerkan bisnis kita di awal, kita memerlukan
              promosi dan juga berbagai iklan agar kita mulai dikenal oleh para
              konsumen yang mencari jasa atau produk yang sejenis dengan yang
              kita tawarkan. Mungkin karena di awal kita belum terlalu mengenal
              cara membuat website, pengiklanan secara online, progress kita
              dapat terbilang lambat di awal. Bisa saja kita menghabiskan banyak
              uang dan juga waktu untuk mengatur seluruhnya dan tidak
              mendapatkan hasil yang memuaskan.{' '}
            </p>
            <p>
              Dalam hal inilah, jasa dari bagian marketing dan e-commerce¬
              sangat diperlukan. Akan lebih baik jika kita mempercayakan hal ini
              kepada para ahlinya, walau kita harus mengeluarkan uang ekstra.
              Sebenarnya kita bisa memilih, antara kita sendiri yang
              mengembangkan website kita, ataupun meminta jasa orang lain untuk
              mengembangkan website kita. Kedua hal tersebut bisa dilakukan,
              hanya saja perlu sebuah keputusan untuk menentukan seberapa banyak
              investasi kita ke dalam proyek tersebut. Feedback dari konsumen
              juga diperlukan dalam rangka meningkatkan kualitas bisnis online
              kita sehingga nantinya dapat digunakan dengan baik oleh
              masyarakat.{' '}
            </p>
            <p>
              Readers, tahukah kamu ada beberapa kesalahan yang harus dihindari
              dalam pengembangan suatu bisnis online? Berikut
              kesalahan-kesalahannya.{' '}
            </p>
            <p>1. Promo dan service yang berlebihan</p>
            <p>
              Kesalahan pertama? Terlalu mengedepankan promo dan produk atau
              jasa gratis. Dalam pengembangan bisnis kita, tentu saja kita
              memerlukan sesuatu yang dapat membuat pelanggan kita menggunakan
              jasa kita kembali, seperti diskon ataupun memberikan sesuatu yang
              gratis. Cara inilah yang akan membahayakan bisnis online kita jika
              kita melakukannya secara berlebihan. Konsumen tentu tidak perlu
              membeli produk atau jasa kita jika kita memberikannya secara
              cuma-cuma bukan? Mungkin cara ini akan terasa efeknya di awal,
              namun lama kelamaan akan berdampak fatal apa bila dilakukan secara
              terus menerus, terutama produk atau jasa yang diberikan adalah
              produk yang membutuhkan banyak biaya.{' '}
            </p>
            <p>
              Starbucks dalam suatu waktu akan membagi-bagikan sampel kopi
              mereka, yang diletakkan dalam sebuah tray. Nantinya tray tersebut
              akan dibawa keliling untuk ditawarkan ke orang yang melewati toko
              mereka. (dalam sebuah mall) Dalam kasus ini, Starbucks hanya
              memberikan produk mereka secara gratis dan menguatkan bagian
              service mereka sehingga konsumen akan tertarik untuk membeli
              produk mereka.{' '}
            </p>
            <p>2. Tidak memberikan promo atau service sama sekali</p>
            <p>
              Kesalahan kedua, bisnis online kita sama sekali tidak memberikan
              service secara gratis. Berlebihan atau tidak sama sekali merupakan
              hal yang buruk, apalagi soal memberikan service kepada pelanggan.
              Dengan tidak memberikan promo ataupun produk atau jasa gratis,
              masyarakat akan sulit untuk mengenal bisnis online kita, menyukai
              atapun mempercayai bisnis online kita.{' '}
            </p>
            <p>
              Cara terbaik untuk tidak menyebabkan hal tersebut adalah dengan
              melihat kembali konten kita. Apakah material pemasaran kita sudah
              cukup baik? Apakah kita sudah memberikan service yang memiliki
              feedback yang baik? Jika sudah merasa baik, kita hanya cukup
              memberikan service yang terbilang cukup untuk konsumen kita agar
              kebutuhan mereka terpenuhi dan mereka akan tertarik untuk
              menggunakan produk atau jasa kita.{' '}
            </p>
            <p>3. Produk atau jasa yang tidak "menjual" </p>
            <p>
              Terakhir, sama sekali tidak "menjual". Menjual disini bukan
              berarti menjual produk atau jasa kita, melainkan apakah produk
              atau jasa kita menarik di mata pelanggan? Sangatlah tidak
              dianjurkan untuk hanya menaruh media sosial bisnis kita di
              website. Hal ini buruk dikarenakan pelanggan sama sekali tidak
              ingin repot-repot dan mereka tentu memerlukan informasi tentang
              produk ataupun jasa kita. Pastikan kita telah menjelaskan produk
              atau jasa kita dengan baik sehingga pelanggan mengerti apa yang
              kita jual, dan mereka akan tertarik dengan kegunaannya. Serta
              jangan lupa juga untuk menaruh iklanblablaba
            </p>
            <p>
              Jika kita telah menaruh deskripsi tentang produk atau jasa kita,
              mereka yang ingin membuka media sosial kita akan selalu melihat
              deskripsi tersebut dan mereka mulai penasaran apakah produk dan
              jasa kita memang berkualitas atau tidak.{' '}
            </p>

            <p>
              Berdasarkan kesalahan-kesalahan yang telah disebutkan diatas,
              bisnis online memang beresiko, namun jika kita dapat meminimalisir
              efek buruk dari kelemahan itu, bisnis kita akan dengan mudah
              berkembang dan efeknya akan lebih terasa juga apabila kita dapat
              mengatasi masalah-masalah yang timbul pada masa pengembangan dan
              juga jangan melakukan kesalahan-kesalahan yang dapat menghambat
              pengembangan bisnis online kita.
            </p>
            <p>Sumber :</p>
            <p>
              https://www.forbes.com/sites/forbesbusinesscouncil/2019/10/21/how-to-get-your-business-online/#36f14af26e76
            </p>
            <p>
              https://www.forbes.com/sites/forbescoachescouncil/2019/10/24/three-mistakes-that-can-hold-you-back-from-growing-your-online-service-business/#41014b3430f8
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleScreen
