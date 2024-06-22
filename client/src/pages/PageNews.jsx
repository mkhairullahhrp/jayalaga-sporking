import Logo from "../assets/img/logo.png";
import person from "../assets/img/person-circle.png";
import insta from "../assets/img/instagram.png";
import gplogo from "../assets/img/gpstorelogo.png";
import foot from "../assets/img/Footer.png";
import fotlov from "../assets/img/fotlove.png";
import icontwitter from "../assets/img/twitter.png";
import iconfacebook from "../assets/img/facebook.png";
import arrowleft from "../assets/img/arrowleft.png";
import imgpn from "../assets/img/imgpn.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const PageNews = () => {
  return (
    <section>
      {/* Navbar */}
      <div className="flex justify-between items-center px-[41px] py-[22px] shadow-custom fixed top-0 w-full bg-white z-10">
        <Link to="/HomePage">
          <img src={Logo} alt="Sporking Logo" />
        </Link>
        <div className="flex items-center gap-11">
          <Link to="/HomePage" className="font-dm text-[15px] font-bold hover:text-primary">
            Home
          </Link>
          <Link to="/Booking2" className="font-dm text-[15px] font-bold hover:text-primary">
            Booking
          </Link>
          <Link to="/NewsPage" className="text-primary font-dm text-[15px] font-bold">
            News
          </Link>
          <Link to="/profile">
            <img src={person} alt="User Profile" className="w-[58px]" />
          </Link>
        </div>
      </div>
      {/* Navbar End */}

      {/* Isi Page News Start */}
      <div className="px-[100px] mt-[129px] mb-[28px]">
        <div className="container"></div>
        <div>
          <Link to="/NewsPage">
            <img src={arrowleft} alt="Back to Home" />
          </Link>
        </div>
      </div>
      <div className="px-[41px]">
        <hr className="my-[31px] text-secondary border-2" />
      </div>

      <div>
        <h1 className="text-center font-dm font-bold text-[30px]">
          Real Madrid juara LaLiga 2023/24 setelah <br />
          Barcelona kalah dari Girona
        </h1>
        <p className="text-center font-md font-normal text-[24px] text-secondary mt-[11px]">
          Selasa, 7 Mei 2024
        </p>
        <img src={imgpn} alt="News Image" className="mx-auto mt-[55px]" />
        <div className="mt-[54px] mx-auto">
          <p className="text-left px-[41px] font-dm text-[24px] font-normal py-2">
            Real Madrid dipastikan juara La Liga 2023/24 setelah Barcelona
            menelan kekalahan 2-4 atas Girona dalam Jornada ke-34 di Stadion
            Montilivi pada Minggu dini hari WIB.
          </p>
          <p className="text-left px-[41px] font-dm text-[24px] font-normal py-2">
            Barcelona sempat dua kali unggul melalui gol Andreas Christensen dan
            penalti Robert Lewandowski sebelum tim tuan rumah melakukan comeback
            berkat brace Portu, dengan dua lainnya lewat Artem Dovbyk, dan
            Miguel Gutierrez.
          </p>
          <p className="text-left px-[41px] font-dm text-[24px] font-normal py-2">
            Kekalahan ini membuat Barcelona tidak bisa lagi mengejar Real Madrid
            dalam klasemen saat ini. Barcelona saat ini turun ke peringkat tiga
            dengan 73 poin, tertinggal 14 poin dari Los Blancos.
          </p>
          <p className="text-left px-[41px] font-dm text-[24px] font-normal py-2">
            Portu lalu kembali mencatatkan namanya di papan skor pada menit
            ke-75. Girona memperbesar keunggulan jadi 4-2.
          </p>
          <p className="text-left px-[41px] font-dm text-[24px] font-normal py-2">
            Barcelona berusaha keras untuk mencetak gol di sisa pertandingan,
            tetapi usaha mereka sia-sia. Girona menang dengan skor 4-2.
          </p>
          <p className="text-left px-[41px] font-dm text-[24px] font-normal py-2">
            Hasil itu pun otomatis membuat Real Madrid resmi jadi juara La Liga
            Spanyol musim ini. Ini merupakan gelar La Liga ke-36 bagi Real
            Madrid.
          </p>
        </div>
        <a
          href="#"
          className="font-dm text-[24px] font-normal px-[41px] flex flex-row-reverse text-primary py-[59px]"
        >
          Lihat Berita Lainnya
        </a>
      </div>
      {/* Isi Page News Ends */}

      {/* Footer Start */}
      <div className="bg-[#FF8400] px-[41px] py-[50px]">
        <div className="flex items-center justify-around">
          <div className="text-center">
            <img src={foot} alt="Footer Logo" />
            <p className="font-dm text-[18px] font-normal text-left text-white">
              Sporking is a multiplatform-based <br />
              application that can be used for <br />
              booking and more.
            </p>
          </div>
          <div className="text-left">
            <h1 className="py-3 font-dm text-[18px] font-bold text-left text-white">
              Contact Us
            </h1>
            <div className="font-dm text-[18px] font-normal text-left text-white">
              <p>+62 854-4123-5553</p>
              <p>sporking@gmail.com</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="py-2 font-dm text-[18px] font-bold text-left text-white">
              Follow Us
            </h1>
            <div className="flex justify-center items-center gap-2 py-4">
              <a href="#">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="#">
                <img src={icontwitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={iconfacebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="py-2 font-dm text-[18px] font-bold text-left text-white">
              Lebih Mudah dengan aplikasi
            </h1>
            <img src={gplogo} alt="Google Play Logo" className="py-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-3 px-2 text-primary">
        Crafted with{" "}
        <a href="#">
          <img src={fotlov} alt="Love" />
        </a>{" "}
        by JAYALAGA. All Rights Reserved.
      </div>
      {/* Footer End */}
    </section>
  );
};

export default PageNews;