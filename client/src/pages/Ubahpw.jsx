import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Ubahpw = () => {
  const [selectedChoiceBottom1, setSelectedChoiceBottom1] = useState(null);
  const [selected, setSelected] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);
  const [selectedChoiceNavbar, setSelectedChoiceNavbar] = useState(null);

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const toggleUserPopup = () => {
    setIsUserPopupVisible(!isUserPopupVisible);
  };

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
                <h2 style={{ fontSize: "30px" }}>Ubahpw</h2>
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
                    onClick={() => handleNavbarChoiceClick("choice2")}
                    className={`w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                      selectedChoiceNavbar === "choice2"
                        ? "bg-orange-600 text-white"
                        : "bg-white-500 text-black hover:bg-orange-300 border-2"
                    }`}
                  >
                    Profile
                  </button>
                </Link>

                <Link to="/Ubahpw" className="flex-grow">
                  <button
                    
                    className=" w-full py-2 rounded-md font-semibold  bg-orange-600 text-white bg-white-500 text-black border-2"
        
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
                  <div className="mb-4 flex flex-col items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Masukkan Password Saat Ini
                    </label>
                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px" }}
                    />
                  </div>

                  <div className="mb-4 flex flex-col items-center mt-10">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Password Baru
                    </label>
                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      style={{ borderWidth: "2px" }}
                    />
                  </div>


                  <div className="flex justify-center mt-5 ">
                    <button className="py-2 px-4 bg-orange-500 text-white rounded-md font-semibold">
                      Ubah Password
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

      <Modal show={activeModal === "Daftar"} onClose={closeModal} title="Berhasil">
        <p>Pendaftaran Anda Berhasil Mohon Menunggu Konformasi Selanjutnya</p>
      </Modal>
    </>
  );
};

export default Ubahpw;
