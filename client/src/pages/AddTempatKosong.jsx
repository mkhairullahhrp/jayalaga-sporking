import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import Veriv from "../components/Veriv"

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
                <Link to="/AddTempatKosong2" className="flex-grow">
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

                <Link to="/AddTempatKosong" className="flex-grow">
                  <button className=" w-full py-2 rounded-md font-semibold  bg-orange-600 text-white bg-white-500 text-black border-2">
                    Kelola Tempat Saya
                  </button>
                </Link>

                
              </div>
            </div>

            <hr className="mb-5" />

            <div className="w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
                <div className="py-4 px-20">
                  

                <div>
          <Veriv />
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

      <Modal
        show={activeModal === "Daftar"}
        onClose={closeModal}
        title="Berhasil"
      >
        <p>Pendaftaran Anda Berhasil Mohon Menunggu Konformasi Selanjutnya</p>
      </Modal>
    </>
  );
};

export default Ubahpw;
