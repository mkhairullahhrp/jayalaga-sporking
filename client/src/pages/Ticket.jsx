import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import { HiMiniTicket } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { PiCourtBasketballLight } from "react-icons/pi";

const Ticket = () => {
  const [selectedChoiceBottom1, setSelectedChoiceBottom1] = useState(null);
  const [selected, setSelected] = useState(null);

  const [selectedChoiceNavbar, setSelectedChoiceNavbar] = useState(null);

  const handleNavbarChoiceClick = (choice) => {
    setSelectedChoiceNavbar(choice);
  };

  const handleBottom1ChoiceClick = (choice) => {
    setSelectedChoiceBottom1(choice);
  };

  const handleButtonClick = (index) => {
    setSelected(index);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          color: "white",
        }}
      >
        {/* Navbar */}
        <div>
          <Navbar3 />
        </div>

        {/* Profile Content */}
        <div
          style={{
            flex: "1",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "orange",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "flex-start" }}
            className="ml-20"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "100px",
                marginLeft: "20px",
              }}
              className="mb-5"
            >
              <div style={{ marginRight: "20px" }}>
                <img
                  src={Gambar2}
                  alt="Profile"
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid #FF7F50",
                  }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: "30px" }}>Riwayat</h2>
                <p style={{ fontSize: "18px" }}>Rifan.bapak012</p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "white",
              color: "black",
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "20px",
            }}
          >
            <div className="flex items-center mb-3">
              <Link to="/Riwayat" onClick={() => history.goBack()}>
                <IoMdArrowBack
                  style={{ fontSize: "40px", color: "orange" }}
                  className="ml-5"
                />
              </Link>

              <div className="flex items-center justify-center flex-grow">
                <div className="flex items-center">
                  <HiMiniTicket
                    style={{ fontSize: "40px", color: "orange" }}
                    className="ml-5"
                  />
                  <h1
                    className="ml-2"
                    style={{ fontSize: "30px", color: "orange" }}
                  >
                    E-Ticket Anda
                  </h1>
                </div>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="">
              <div className=" bg-orange-500  rounded-xl shadow-lg overflow-hidden mb-10 border-2 ">
                <div className="py-4 px-20">
                  <div className="flex">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-2 border-2 border-gray-300">
                      <div className="px-6 py-4">
                        {/* Informasi Produk */}
                        <h1
                          className="ml-2 mb-2 flex justify-center mb-4"
                          style={{ fontSize: "20px", color: "orange" }}
                        >
                          Penyewaan Lapangan Berhasil
                        </h1>
                        <hr className=" mb-4" />
                        <div className="flex items-center mb-4">
                          <img
                            src={Gambar2}
                            alt="Profile"
                            style={{
                              width: "130px",
                              height: "100px",
                              objectFit: "cover",
                              border: "1px solid #FF7F50",
                            }}
                          />
                          <div>
                            <h2 className="text-xl font-semibold ml-3">
                              Garuda Hall
                            </h2>
                            <p className="text-gray-500 ml-3">
                              Jl. Raja H. Fisabilillah No.5, Tlk. Tering,
                              KotaBatam
                            </p>
                            <p className="text-gray-500 ml-3">
                              0822-8867-3200{" "}
                            </p>
                            <p className="text-gray-500 ml-3">
                              Buka 10:00 - 21:00
                            </p>
                          </div>
                        </div>

                        <hr className="border-t border-gray-300 my-4 " />

                        <h1
                          className="ml-2 mb-2 flex justify-center mb-4 font-bold"
                          style={{ fontSize: "20px", color: "orange" }}
                        >
                          Sabtu, 3 Januari 2023
                        </h1>

                        <hr className="border-t border-gray-300 my-4 " />

                        <div className="flex justify-between mb-4">
                          <div>
                            <p className="font-semibold">Lapangan 2</p>
                            <button className="bg-orange-500 text-white px-2 py-1 rounded-md font-semibold mt-2">
                              18:00
                            </button>
                            <button className="bg-orange-500 text-white px-2 py-1 rounded-md font-semibold ml-2">
                              18:00
                            </button>
                          </div>
                          <div>
                            <p className="font-semibold">Jumlah:</p>
                            <p></p>
                            <p></p>
                          </div>
                          <div>
                            <p className="font-semibold">Total:</p>
                            <p>Rp 200.000,00</p>
                          </div>
                        </div>

                        <div className="flex justify-between mb-4">
                          <div>
                            <p className="font-semibold">Raket</p>
                          </div>
                          <div>
                            <p className="ml-20">2x</p>
                          </div>
                          <div>
                            <p>Rp 200.000,00</p>
                          </div>
                        </div>

                        <hr className="border-t border-gray-300 my-4 " />
                        <div>
                          <button className="py-2 px-4 bg-white  rounded-md font-semibold border-2 border-gray-500 mb-2 w-full  ">
                            <h1 className="flex justify-start">
                              Pilih Metode Pembayaran
                            </h1>
                            <img
                              src="data:image/png;base64,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"
                              alt="Profile"
                              style={{
                                width: "50px",
                                height: "50px",
                              }}
                            />
                          </button>
                        </div>

                        {/* Tombol Pembayaran */}
                        <button className="bg-orange-500 text-white py-4 font-semibold w-full ">
                          Total Pembayaran Rp.400.0000
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg mb-2 border-2 border-gray-300 ml-4">
                      <div className="px-6 py-4">
                        <div className="ml-4">
                          {/* Content */}
                          <div className="w-full ">
                            <div className="bg-gray-200 ">
                              <div className="rounded-xl shadow-lg overflow-hidden mb-2 border-2 border-gray-300">
                                <a
                                  href="#"
                                  className="block font-semibold text-white text-xl text-primary hover:font-bold truncate p-2 bg-orange-500  "
                                >
                                  Garuda Hall
                                </a>
                                <div className="py-4 px-3 ml-10 mr-10">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <PiCourtBasketballLight
                                      size="3rem"
                                      style={{ marginRight: "10px" }}
                                    />
                                    <div>
                                      <h1>Lapangan 2</h1>
                                      <h5>
                                        Sabtu, 3 Januari 2023 | Pukul 18.00
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h1
                              className="ml-2 mb-2 flex justify-center"
                              style={{ fontSize: "20px", color: "orange" }}
                            >
                              Booking Code
                            </h1>
                            <h1
                              className="ml-2 mb-2 flex justify-center mb-4"
                              style={{ fontSize: "20px", color: "orange" }}
                            >
                              3123182
                            </h1>

                            <div className="flex justify-center">
                              <img
                                src={Gambar2}
                                alt="Profile"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  objectFit: "cover",
                                  border: "1px solid #FF7F50",
                                }}
                              />
                            </div>
                            <div className="flex justify-center mt-3">
                              <p>Tunjukkan tiket ini ke pengelola lapangan </p>
                            </div>

                            <div className="flex justify-center space-x-5 mb-4 py-2 px-3 w-full">
                              <button className=" w-full py-2 rounded-md font-semibold   text-black  text-black border-2">
                              Lihat & Download E-Tiket
                              </button>
                            </div>
                            <div className="flex justify-center space-x-5 mb-4 py-2 px-3 w-full">
                              <button className=" w-full py-2 rounded-md font-semibold   text-black  text-black border-2">
                              Bagikan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "auto" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Ticket;
