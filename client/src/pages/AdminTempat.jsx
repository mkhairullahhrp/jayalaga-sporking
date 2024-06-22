import React, { useState } from "react";
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/pasfoto.png";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import Gambar1 from "../assets/img/HeroHome.jpg";
import { FaCamera } from "react-icons/fa6";
import Rating from "../components/rating";

const AdminTempat = () => {
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

                <Link to="/AminTempat" className="flex-grow">
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
                  Tempat
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
                  Alamat
                </h1>
                <input
                  type="file"
                  id="photo-upload"
                  name="photo-upload"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="mt-5 block w-full text-sm text-gray-900 border border-gray-300 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  style={{ padding: "10px", borderWidth: "2px" }}
                />
              </div>

              <div className="ml-60">
                {selectedFiles.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-orange-600">
                      {selectedFiles.length} file(s) selected:
                    </p>
                    <ul className="text-sm text-gray-600">
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                    <button
                      onClick={handleUpload}
                      className="mt-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-Orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Upload
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-end mt-5 ">
              <Link to="/EditAdminTempat" >
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

export default AdminTempat;
