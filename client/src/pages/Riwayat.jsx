import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiCourtBasketballLight } from "react-icons/pi";

const Riwayat = () => {
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
            <div className="items-center mt-5 ml-2">
              <div className="flex justify-center space-x-5 mb-4 py-2 px-3 w-full">
                <Link to="/Profile" className="flex-grow">
                  <button
                    onClick={() => handleNavbarChoiceClick("choice1")}
                    className={`w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                      selectedChoiceNavbar === "choice1"
                        ? "bg-orange-600 text-white"
                        : "bg-white-500 text-black hover:bg-orange-300 border-2"
                    }`}
                  >
                    Profile
                  </button>
                </Link>

                <Link to="/Ubahpw" className="flex-grow">
                  <button
                    onClick={() => handleNavbarChoiceClick("choice2")}
                    className={`w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                      selectedChoiceNavbar === "choice2"
                        ? "bg-orange-600 text-white"
                        : "bg-white-500 text-black hover:bg-orange-300 border-2"
                    }`}
                  >
                    Keamanan Password
                  </button>
                </Link>

                <Link to="/Riwayat" className="flex-grow">
                  <button className=" w-full py-2 rounded-md font-semibold  bg-orange-600 text-white bg-white-500 text-black  border-2">
                    Riwayat Booking
                  </button>
                </Link>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 ">
                <div className="py-4 px-20">
                  <div className="flex">
                    <div className="mr-10 text-black  w-50">
                      {/* Sidebar */}
                      <div className="p-4">
                        <div className="flex-1 overflow-y-auto">
                          <ul className="py-4">
                            <li className="px-4 py-2 hover:bg-orange-500">
                              <Link to="/Riwayat">Semua</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-orange-500">
                              <Link to="/Riwayat">Belum Selesai</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-orange-500">
                              <Link to="/Riwayat">Selesai</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l border-gray-300"></div>

                    <div className="ml-4">
                      {/* Content */}
                      <div className="w-full ">
                        <div className="bg-gray-200 ">
                        <div className="rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
                          <a
                            href="#"
                            className="block font-semibold text-white text-xl text-primary hover:font-bold truncate p-4 bg-orange-500"
                          >
                            Garuda Hall
                          </a>
                          <div className="py-4 px-3">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <PiCourtBasketballLight
                                size="5em"
                                style={{ marginRight: "10px" }}
                              />
                              <div>
                                <h1>Lapangan 2</h1>
                                <h5>Sabtu, 3 Januari 2023</h5>
                                <h5>Pukul 18.00</h5>
                              </div>
                              <div className="text-center">
                                <button className="ml-2 mt-5 py-2 px-4 bg-orange-500 text-white rounded-md font-semibold mx-auto">
                                  Chat Penyewa
                                </button>
                              </div>
                            </div>
                            </div>
                            <div className="text-center bg-white py-2">
                              <Link to="/Ticket">
                              <h1 className="text-orange-500">
                                Lihat E-Ticket
                              </h1>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-5 ">
                    <button className="py-2 px-4 bg-white text-orange-500 rounded-md font-semibold border-2 border-orange-500">
                      Selengkapnya
                    </button>
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

export default Riwayat;
