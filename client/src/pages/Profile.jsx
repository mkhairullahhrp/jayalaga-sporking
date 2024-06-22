import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/person-circle.png";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Profile = () => {
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
                <h2 style={{ fontSize: "30px" }}>Bapak Rifan</h2>
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
                    className=" w-full py-2 rounded-md font-semibold  bg-orange-600 text-white bg-white-500 text-black border-2"
        
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
                  <button
                    onClick={() => handleNavbarChoiceClick("choice3")}
                    className={`w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                      selectedChoiceNavbar === "choice3"
                        ? "bg-orange-600 text-white"
                        : "bg-white-500 text-black hover:bg-orange-300 border-2"
                    }`}
                  >
                    Riwayat Booking
                  </button>
                </Link>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
                <div className="py-4 px-20">
                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Nama
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px", marginLeft: "128px" }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px", marginLeft: "100px" }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      No.Telp
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px", marginLeft: "120px" }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px", marginLeft: "130px" }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Jenis Kelamin
                    </label>

                    <div className="flex items-center space-x-4">
                      <div
                        className="flex items-center space-x-2"
                        style={{ marginLeft: "80px" }}
                      >
                        <span style={{ fontSize: "14px" }}>Laki-Laki</span>
                        <button
                          onClick={() => handleButtonClick(0)}
                          className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                            selected === 0
                              ? "bg-orange-600 text-white"
                              : "bg-gray-300 text-black hover:bg-orange-300"
                          }`}
                        >
                          <FaCheck
                            className={`transition duration-300 ${
                              selected === 0 ? "text-white" : "text-transparent"
                            }`}
                            size={14}
                          />
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span style={{ fontSize: "14px" }}>Perempuan</span>
                        <button
                          onClick={() => handleButtonClick(1)}
                          className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                            selected === 1
                              ? "bg-orange-600 text-white"
                              : "bg-gray-300 text-black hover:bg-orange-300"
                          }`}
                        >
                          <FaCheck
                            className={`transition duration-300 ${
                              selected === 1 ? "text-white" : "text-transparent"
                            }`}
                            size={14}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Alamat
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px", marginLeft: "120px" }}
                    />
                  </div>

                  <div className="flex justify-end mt-5 ">
                    <button className="py-2 px-4 bg-orange-500 text-white rounded-md font-semibold">
                      Edit
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

export default Profile;
