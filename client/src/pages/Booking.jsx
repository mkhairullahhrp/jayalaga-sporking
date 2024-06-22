// Booking.js
import React from "react";
import Navbar2 from "../components/Navbar2";
import Gambar1 from "../assets/img/cp.png";
import Rating from "../components/rating"; // Import komponen Rating
import { Link, useNavigate } from "react-router-dom";
import Navbar3 from "../components/Navbar3";

const Booking = () => {
  return (
    <>
      <hero>
        <Navbar3 />
        <Navbar2 />
      </hero>

      {/* INI KONTEN YANG SEWA DIMANA */}
      <section id="blog" className="">
        <div className="container">
          <div className="flex flex-wrap md:justify-start pt-1 pl-10 justify-start">
            <div className="w-full lg:w-1/2 xl:w-1/4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
                <a
                  href="#"
                  className="block font-semibold text-white text-xl text-primary hover:font-bold truncate p-4 bg-orange-500"
                >
                  Sewa dimana?
                </a>
                <div className="py-4 px-3">
                  <div className="mb-4">
                    <input
                      type="text"
                      id="search"
                      name="search"
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Masukkan kata kunci pencarian..."
                      style={{ borderWidth: "2px" }}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px" }}
                    />
                  </div>
                  <div className="text-center">
                    <button className="mt-5 py-2 px-4 bg-orange-500 text-white rounded-md font-semibold mx-auto">
                      Ayo Cari
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* INI KONTEN YANG GARUDA HALL */}

            <div className="w-full lg:w-1/ xl:w-3/4 pl-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 flex p-4 border-2">
                <img
                  src={Gambar1}
                  alt="sports-field"
                  className="w-30 h-40 mr-4 rounded"
                />

                <div className="py-4 px-3 flex-1">
                  <h3>
                    <a
                      href="#"
                      className="block font-semibold text-xl text-primary hover:font-bold truncate"
                    >
                      <Link to="/Booking2">Garuda Hall</Link>
                    </a>
                    <h5 className="ml-2">
                      Jl. Raja H. Fisabilillah No.5, Tlk. Tering, Kota Batam
                    </h5>

                    <button className="mt-3 ml-1 px-1 bg-orange-500 text-white rounded-md font-semibold">
                      Lapangan BluTangkis
                    </button>
                    <button className="ml-1 px-1 bg-orange-500 text-white rounded-md font-semibold">
                      Cafe and resto
                    </button>
                    <button className="ml-1 px-1 bg-orange-500 text-white rounded-md font-semibold">
                      Wifi
                    </button>
                    <button className="ml-1 px-1 bg-orange-500 text-white rounded-md font-semibold">
                      +3
                    </button>

                    <h5 className="mt-3 ml-2">IDR RP.150.000,00</h5>
                  </h3>
                </div>

                <div
                  style={{
                    borderLeft: "1px solid #ccc",
                    height: "160px",
                    margin: "0 20px",
                  }}
                ></div>

                <div>
                  <div className="mt-4">
                    <Rating />
                  </div>

                  <h3 className="mt-3 ml-10">Good</h3>
                  <h5 className="mt-1 ml-5" style={{ color: "grey" }}>
                    92 Views
                  </h5>

                  <button className="mt-5 ml-7 py-2 px-4 bg-orange-500 text-white rounded-md font-semibold mx-auto">
                    <Link to="/Booking2" style={{ color: "black" }}>
                      Booking
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
