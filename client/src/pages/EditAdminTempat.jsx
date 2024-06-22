import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Gambar1 from "../assets/img/HeroHome.jpg";
import { FaCamera } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { LuParkingCircle } from "react-icons/lu";
import Rating from "../components/rating";

const EditAdminTempat = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedChoiceNavbar, setSelectedChoiceNavbar] = useState(null);
  const navigate = useNavigate();
  const [selectedChoiceTop, setSelectedChoiceTop] = useState(null);
  const [selectedChoiceBottom, setSelectedChoiceBottom] = useState(null);
  const [selectedChoiceBottom1, setSelectedChoiceBottom1] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      console.log("Uploading files:", selectedFiles);
      // Implement the upload logic here
    }
  };

  const handleTopChoiceClick = (choice) => {
    setSelectedChoiceTop(choice);
  };

  const handleBottomChoiceClick = (choice) => {
    setSelectedChoiceBottom(choice);
  };

  const handleBottom1ChoiceClick = (choice) => {
    setSelectedChoiceBottom1(choice);
  };

  const handleNavbarChoiceClick = (choice) => {
    setSelectedChoiceNavbar(choice);
  };

  const handleDaftarClick = () => {
    alert("Pendaftaran Anda Berhasil Mohon Menunggu Konformasi Selanjutnya");
    navigate("/AdminTempat"); // Navigasi ke halaman lain
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
            ></div>
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
                <Link to="/AdminProfile" className="flex-grow">
                  <button
                    onClick={() => handleNavbarChoiceClick("choice2")}
                    className={`w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                      selectedChoiceNavbar === "choice2"
                        ? "bg-orange-600 text-white"
                        : "bg-white-500 text-black hover:bg-orange-300 border-2"
                    }`}
                  >
                    Kelola Profile
                  </button>
                </Link>

                <Link to="/AdminTempat" className="flex-grow">
                  <button className=" w-full py-2 rounded-md font-semibold  bg-orange-600 text-white bg-white-500 text-black border-2">
                    Kelola Tempat Saya
                  </button>
                </Link>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="relative">
              <img
                src={Gambar1}
                alt="Main"
                style={{ height: "300px", width: "1300px" }}
              />
              <div className="absolute top-4 left-10 flex items-start">
                <img
                  src={Gambar2}
                  alt="Overlay"
                  className="object-cover border-4 border-white"
                  style={{ height: "270px", width: "300px" }}
                />
                <div className="ml-4 bg-transparant p-2 ">
                  <h2
                    className="block font-semibold text-xl text-primary hover:font-bold truncate"
                    style={{ fontSize: "30px" }}
                  >
                    Garuda Hall
                  </h2>
                  <div className="flex items-center">
                    <h4
                      className="block font-semibold text-primary hover:font-bold truncate"
                      style={{ fontSize: "40px", marginRight: "10px" }}
                    >
                      4.5
                    </h4>
                    <Rating />
                  </div>
                  <p>Jl. Raja H. Fisabilillah No.5, Tlk. Tering, Kota Batam</p>
                  <p>0822-8867-3200</p>

                  <button className="mt-5 py-2 px-4 bg-orange-500 text-white rounded-md font-semibold mx-auto">
                    Buka 10:00 - 21:00
                  </button>

                  <div
                    className="flex space-x-4 "
                    style={{ marginLeft: "600px" }}
                  >
                    <img
                      src={Gambar2}
                      alt="Overlay"
                      className="object-cover border-4 border-white "
                      style={{ height: "70px", width: "70px" }}
                    />
                    <img
                      src={Gambar2}
                      alt="Overlay"
                      className="object-cover border-4 border-white"
                      style={{ height: "70px", width: "70px" }}
                    />
                    <img
                      src={Gambar2}
                      alt="Overlay"
                      className="object-cover border-4 border-white"
                      style={{ height: "70px", width: "70px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 ">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
            <div className="">
              <div
                className="w-full"
                style={{
                  width: "780px",
                  height: "100px",
                  marginLeft: "450px",
                  marginRight: "",
                  marginTop: "",
                }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300 mt-5">
                  <div className="py-4 px-3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div className="mb-4 flex items-center">
                          <label
                            htmlFor="search"
                            className="mr-2"
                            style={{
                              fontSize: "18px",
                              color: "black",
                              marginRight: "30px",
                            }}
                          >
                            Nama.Tempat
                          </label>

                          <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder=""
                            className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            style={{
                              borderWidth: "2px",

                              color: "black",
                            }}
                          />
                        </div>

                        <div className="mb-4 flex items-center">
                          <label
                            htmlFor="search"
                            className="mr-2"
                            style={{
                              fontSize: "18px",
                              color: "black",
                              marginRight: "30px",
                            }}
                          >
                            Harga
                          </label>

                          <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder=""
                            className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            style={{
                              borderWidth: "2px",
                              marginLeft: "65px",
                              color: "black",
                            }}
                          />
                        </div>

                        <h1
                          htmlFor="search"
                          className="mr-2 mb-5"
                          style={{
                            fontSize: "18px",
                            color: "black",
                            marginRight: "30px",
                          }}
                        >
                          Pilih Waktu
                        </h1>
                      </div>

                      <h1>Lapangan 1</h1>
                      <h1 style={{ marginLeft: "auto" }}>Rp 75.000 / jam</h1>
                    </div>

                    <button
                      onClick={() => handleBottomChoiceClick("choice400")}
                      className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                        selectedChoiceBottom === "choice400"
                          ? "bg-orange-600 text-white"
                          : "bg-white-500 text-black hover:bg-orange-300 border-2"
                      }`}
                    >
                      Tersedia
                    </button>

                    <button
                      onClick={() => handleBottomChoiceClick("choice600")}
                      className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                        selectedChoiceBottom === "choice600"
                          ? "bg-orange-600 text-white"
                          : "bg-white-500 text-black hover:bg-orange-300 border-2"
                      }`}
                    >
                      Tidak Tersedia
                    </button>

                    <div className=" items-center mt-5 ml-2 ">
                      <div className="flex space-x-5 mb-4 ">
                        {[
                          "10:00",
                          "11:00",
                          "12:00",
                          "13:00",
                          "14:00",
                          "15:00",
                        ].map((sport, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleBottom1ChoiceClick(`choice${index + 1}`)
                            }
                            className={`py-1 px-4 rounded-md font-semibold transition duration-300 ease-in-out ${
                              selectedChoiceBottom1 === `choice${index + 1}`
                                ? "bg-orange-600 text-white"
                                : "bg-white-500 text-black hover:bg-orange-300 border-2"
                            }`}
                          >
                            {sport}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="items-center mt-5">
                      <div className="flex space-x-5 mb-4 ">
                        <button
                          onClick={() => handleBottom1ChoiceClick("choice100")}
                          className={`py-1 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                            selectedChoiceBottom1 === "choice100"
                              ? "bg-orange-600 text-white"
                              : "bg-white-500 text-black hover:bg-orange-300 border-2"
                          }`}
                        >
                          16:00
                        </button>

                        <button
                          onClick={() => handleBottom1ChoiceClick("choice200")}
                          className={`py-1 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                            selectedChoiceBottom1 === "choice200"
                              ? "bg-orange-600 text-white"
                              : "bg-white-500 text-black hover:bg-orange-300 border-2"
                          }`}
                        >
                          17:00
                        </button>

                        <button
                          onClick={() => handleBottom1ChoiceClick("choice300")}
                          className={`py-1 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                            selectedChoiceBottom1 === "choice300"
                              ? "bg-orange-600 text-white"
                              : "bg-white-500 text-black hover:bg-orange-300 border-2"
                          }`}
                        >
                          18:00
                        </button>

                        <button
                          onClick={() => handleBottom1ChoiceClick("choice400")}
                          className={`py-1 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                            selectedChoiceBottom1 === "choice400"
                              ? "bg-orange-600 text-white"
                              : "bg-white-500 text-black hover:bg-orange-300 border-2"
                          }`}
                        >
                          19:00
                        </button>

                        <button
                          onClick={() => handleBottom1ChoiceClick("choice500")}
                          className={`py-1 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                            selectedChoiceBottom1 === "choice500"
                              ? "bg-orange-600 text-white"
                              : "bg-white-500 text-black hover:bg-orange-300 border-2"
                          }`}
                        >
                          20:00
                        </button>

                        <button
                          onClick={() => handleBottom1ChoiceClick("choice600")}
                          className={`py-1 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                            selectedChoiceBottom1 === "choice600"
                              ? "bg-orange-600 text-white"
                              : "bg-white-500 text-black hover:bg-orange-300 border-2"
                          }`}
                        >
                          21:00
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="bg-orange-600 text-white rounded-md font-semibold mx-2"
                  style={{ height: "40px", width: "800px" }}
                >
                  Tambah Lapangan
                </button>
              </div>

              <div
                className="w-full"
                style={{
                  width: "420px",
                  height: "100px",
                  left: "20px",
                  minHeight: "100px",
                  height: "auto",
                }}
              >
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300 mt-5"
                  style={{ marginLeft: "80px" }}
                >
                  <div className="py-4 px-3">
                    <h1 style={{ color: "black" }}>Fasilitas</h1>
                    <h1
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                      }}
                    >
                      <FaRegUser
                        style={{
                          fontSize: "24px",
                          marginRight: "10px",
                          marginTop: "10px",
                          color: "orange",
                        }}
                      />
                      Lapangan Bulu Tangkis
                    </h1>

                    <h1
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                        color: "black",
                      }}
                    >
                      <FaWifi
                        style={{
                          fontSize: "24px",
                          marginRight: "10px",
                          color: "orange",
                        }}
                      />
                      Wifi
                    </h1>

                    <h1
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                        color: "black",
                      }}
                    >
                      <FiCoffee
                        style={{
                          fontSize: "24px",
                          marginRight: "10px",
                          color: "orange",
                        }}
                      />
                      Cafe and Resto
                    </h1>

                    <h1
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                        color: "black",
                      }}
                    >
                      <LuParkingCircle
                        style={{
                          fontSize: "24px",
                          marginRight: "10px",
                          color: "orange",
                        }}
                      />
                      Parking Area
                    </h1>
                  </div>
                </div>

                {/* Sewa Lainnya */}
                <div
                  className="w-full"
                  style={{ width: "420px", height: "100px" }}
                >
                  <div
                    className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300 mt-5"
                    style={{ marginLeft: "80px" }}
                  >
                    <div className="py-4 px-3">
                      <h1 style={{ color: "black" }}>Sewa Lainnya</h1>

                      {/* Tambahkan Tombol dengan Angka */}
                      <div className="flex justify-center items-center mt-5">
                        <h1
                          className="pr-5"
                          style={{
                            fontSize: "24px",
                            color: "black",
                          }}
                        >
                          Raket
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-5 ">
                <button
                  onClick={handleDaftarClick}
                  className="flex items-center py-2 mb-5 mr-5 px-4 bg-orange-500 text-white rounded-md font-semibold"
                >
                  Daftar
                </button>
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

export default EditAdminTempat;
