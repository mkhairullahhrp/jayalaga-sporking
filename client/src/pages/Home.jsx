import React from "react";
import "../index.css";
import Header from "../components/Header";
import BookNow from "../components/BookNow";
import BookingDisplay from "../components/BookingDisplay";
import MobileDisplay from "../components/MobileDisplay";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// img
import LogoHero from "../assets/img/logo/Logo Sporking HD.png";
import BgBookingDisplay from "../assets/img/promo/blob-scene-haikei.svg";
import fieldimg from "../assets/img/heroimg.jpg";

const Home = () => {
  return (
    <>
      {/* section header */}
      <Header />
      {/* end of section header */}

      {/* section Hero */}
      <section id="home" className="pb-5">
        <div className="relative flex items-center h-screen">
          <img
            src={fieldimg}
            alt="Mobile Devices"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container">
            <div className="relative z-10 px-4">
              <div className="w-full self-center px-4 lg:w-1/2 mt-10">
                <img className="w-[354px] h-[77]" src={LogoHero} alt="Logo Hero" />
                <div className="ml-5">
                  <p className="font-medium text-white mb-5 leading-relaxed max-w-full">
                    <span className="text-primary font-extrabold">Sporking</span> is a
                    multiplatform-based application that can be used for booking and more.
                  </p>
                  <a
                    href="AddTempat"
                    className="rounded-lg text-base font-semibold text-white bg-primary py-3 px-8 hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    Daftarkan Tempatmu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end of section Hero */}

      {/* section book */}
      <section id="booknow" className="pt-10 pb-28">
        <BookNow />
      </section>
      {/* end of section book */}

      {/* section mobile display */}
      <section id="mobileDisplay" className=" pb-28">
        <div className="container">
          <MobileDisplay />
        </div>
      </section>
      {/* section mobile display */}

      {/* section booking display */}
      <section
        id="bookingDisplay"
        style={{
          backgroundImage: `url(${BgBookingDisplay})`,
        }}
        className="pt-10 pb-10 bg-cover"
      >
        <div className="container">
          <BookingDisplay />
        </div>
      </section>
      {/* end of section booking display */}

      {/* section news */}
      <section id="news" className="pt-20 pb-28">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h1 className="font-semibold text-primary text-3xl mb-5 sm:text-4xl lg:text-3xl">
                Berita terkini seputar olahraga di sini!
              </h1>
              <div className="border-b-4 border-primary w-14 mx-auto rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center">
            <NewsCard img="sports" title="Mbappe pindah ke MU" />
            <NewsCard img="football" title="Ronaldo lebih dari Messi" />
            <NewsCard img="swimming" title="Thiago Silva Pindah" />
            <NewsCard img="run" title="Thiago Silva Pindah" />
            <div className="w-full text-center mt-10 lg:text-center">
              <a
                href=""
                className="text-primary border-2 hover:bg-primary hover:text-white border-primary py-3 px-8 z-10 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
              >
                <Link to="/NewsPage">Baca Selengkapnya</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end of section news */}

      {/* section footer */}
      <Footer />
      {/* end of section footer */}
    </>
  );
};

export default Home;
