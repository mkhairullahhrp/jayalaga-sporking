import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import Gambar1 from "../assets/img/HeroHome.jpg";
import { FaCamera } from "react-icons/fa6";

const AdminProfile = () => {
  const [selectedChoiceBottom1, setSelectedChoiceBottom1] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);
  const [selectedChoiceNavbar, setSelectedChoiceNavbar] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      console.log("Uploading files:", selectedFiles);
      // Implement the upload logic here
    }
  };

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
                  <button className=" w-full py-2 rounded-md font-semibold  bg-orange-600 text-white bg-white-500 text-black border-2">
                    Kelola Profile
                  </button>
                </Link>

                <Link to="/AdminTempat" className="flex-grow">
                  <button
                    onClick={() => handleNavbarChoiceClick("choice2")}
                    className={`w-full py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                      selectedChoiceNavbar === "choice2"
                        ? "bg-orange-600 text-white"
                        : "bg-white-500 text-black hover:bg-orange-300 border-2"
                    }`}
                  >
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
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Efek bayangan teks
                  }}
                >
                  <FaCamera
                    style={{
                      color: "orange",
                      fontSize: "34px",
                      position: "fixed",
                      right: "195px",
                      bottom: "90px",
                    }}
                  />
                </div>

                <div className="ml-4 bg-transparant p-2 ">
                  <div style={{ position: "relative" }}>
                    <FaCamera
                      style={{
                        color: "orange",
                        fontSize: "34px",
                        position: "absolute",
                        left: "850px",
                      }}
                    />
                    {/* Gambar atau elemen lain di sini */}
                  </div>
                </div>
                <div className="ml-4 bg-transparant p-2 ">
                  <div
                    className="flex space-x-4 "
                    style={{ marginLeft: "600px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
            <div className="py-4 px-20">
              <div>
                <h1
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block", // Membuat elemen sejajar ke samping
                    marginRight: "10px", // Memberi jarak antara kedua elemen
                  }}
                >
                  Nama Tempat
                </h1>
                <h1
                  className="border-2 border-gray-300 rounded-xl "
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block",
                    padding: "5px",
                    paddingLeft: "2rem",
                    width: "87%",
                    marginLeft: "20px",
                  }}
                >
                  Profile
                </h1>
              </div>

              <div className="mt-5">
                <h1
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block", // Membuat elemen sejajar ke samping
                    marginRight: "60px", // Memberi jarak antara kedua elemen
                  }}
                >
                  No Telpon
                </h1>
                <h1
                  className="border-2 border-gray-300 rounded-xl"
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block",
                    padding: "5px",
                    paddingLeft: "2rem",
                    width: "87%",
                  }}
                >
                  0822-8867-3200
                </h1>
              </div>

              <div className="mt-5">
                <h1
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block", // Membuat elemen sejajar ke samping
                    marginRight: "100px", // Memberi jarak antara kedua elemen
                  }}
                >
                  Email
                </h1>
                <h1
                  className="border-2 border-gray-300 rounded-xl"
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block",
                    padding: "5px",
                    paddingLeft: "2rem",
                    width: "87%",
                  }}
                >
                  hillgaruda@gmail.com
                </h1>
              </div>

              <div className="mt-5">
                <h1
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block", // Membuat elemen sejajar ke samping
                    marginRight: "65px", // Memberi jarak antara kedua elemen
                  }}
                >
                  Jam Buka
                </h1>
                <h1
                  className="border-2 border-gray-300 rounded-xl"
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block",
                    padding: "5px",
                    paddingLeft: "2rem",
                    width: "87%",
                  }}
                >
                  10.00 - 21.00
                </h1>
              </div>

              <div className="mt-5">
                <h1
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block", // Membuat elemen sejajar ke samping
                    marginRight: "85px", // Memberi jarak antara kedua elemen
                  }}
                >
                  Alamat
                </h1>
                <h1
                  className="border-2 border-gray-300 rounded-xl"
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block",
                    padding: "5px",
                    paddingLeft: "2rem",
                    width: "87%",
                  }}
                >
                  Jl. Raja H. Fisabilillah No.5, Tlk. Tering, Kota Batam
                </h1>
              </div>

              <div className="mb-4 flex items-center">
              <h1
                  style={{
                    color: "black",
                    fontSize: "18px",
                    display: "inline-block", // Membuat elemen sejajar ke samping
                    marginRight: "85px", // Memberi jarak antara kedua elemen
                  }}
                >
                  Foto
                </h1>
                <img
                    src={Gambar2}
                    alt="Overlay"
                    className="object-cover border-2 border-white object-cover  border-black mt-5 ml-5"
                    style={{ height: "70px", width: "70px" }}
                  />
              </div>

              

              <div className="flex justify-end mt-5 ">
                <Link to="/EditAdminProfile" >
                <button className="py-2 px-4 bg-orange-500 text-white rounded-md font-semibold">
                  Edit
                </button>
                </Link>
                
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

export default AdminProfile;
