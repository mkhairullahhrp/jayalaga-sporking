import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import Navbar3 from "../components/Navbar3";
import Gambar2 from "../assets/img/person-circle.png";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";

const AddTempat = () => {
  const [selected, setSelected] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      console.log("Uploading files:", selectedFiles);
      // Implement the upload logic here
    }
  };

  const handleButtonClick = (index) => {
    setSelected(index);
  };

  const handleDaftarClick = () => {
    alert('Pendaftaran Anda Berhasil Mohon Menunggu Konformasi Selanjutnya');
    navigate("/AddTempatKosong"); // Navigasi ke halaman lain
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
            <div className="items-center  ml-2">
              <div className="flex justify-center space-x-5 mb-4 py-2 px-3 w-full">
                <h1
                  className="ml-2 flex justify-center"
                  style={{ fontSize: "24px", color: "orange" }}
                >
                  Daftarkan Layanan Olahraga Anda
                </h1>
              </div>
            </div>

            <hr className="mb-5" />

            <div className="w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border-2 border-gray-300">
                <div className="py-4 px-20">
                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className=""
                      style={{ fontSize: "14px" }}
                    >
                      Nama Tempat
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      style={{ borderWidth: "2px", marginLeft: "128px" }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-8"
                      style={{ fontSize: "14px" }}
                    >
                      No.Telp
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      style={{ borderWidth: "2px", marginLeft: "120px" }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-8"
                      style={{ fontSize: "14px" }}
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
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
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "105px",
                        }}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2 ">
                            <button
                              onClick={() => handleButtonClick(0)}
                              className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                                selected === 0
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-300 text-orange hover:bg-orange-300"
                              }`}
                            >
                              <FaCheck
                                className={`transition duration-300 ${
                                  selected === 0
                                    ? "text-white"
                                    : "text-transparent"
                                }`}
                                size={14}
                              />
                            </button>
                            <span style={{ fontSize: "14px" }}>Futsal</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleButtonClick(1)}
                              className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                                selected === 1
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-300 text-orange hover:bg-orange-300"
                              }`}
                            >
                              <FaCheck
                                className={`transition duration-300 ${
                                  selected === 1
                                    ? "text-white"
                                    : "text-transparent"
                                }`}
                                size={14}
                              />
                            </button>
                            <span style={{ fontSize: "14px" }}>Volly</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleButtonClick(2)}
                              className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                                selected === 2
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-300 text-black hover:bg-orange-300"
                              }`}
                            >
                              <FaCheck
                                className={`transition duration-300 ${
                                  selected === 2
                                    ? "text-white"
                                    : "text-transparent"
                                }`}
                                size={14}
                              />
                            </button>
                            <span style={{ fontSize: "14px" }}>Sepak Bola</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleButtonClick(3)}
                              className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                                selected === 3
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-300 text-black hover:bg-orange-300"
                              }`}
                            >
                              <FaCheck
                                className={`transition duration-300 ${
                                  selected === 3
                                    ? "text-white"
                                    : "text-transparent"
                                }`}
                                size={14}
                              />
                            </button>
                            <span style={{ fontSize: "14px" }}>Basket</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 ">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleButtonClick(4)}
                              className={`flex items-center justify-center w-5 h-5 rounded-full font-semibold transition duration-300 ease-in-out ${
                                selected === 4
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-300 text-black hover:bg-orange-300"
                              }`}
                            >
                              <FaCheck
                                className={`transition duration-300 ${
                                  selected === 4
                                    ? "text-white"
                                    : "text-transparent"
                                }`}
                                size={14}
                              />
                            </button>
                            <span style={{ fontSize: "14px" }}>
                              Bulu Tangkis
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Alamat Tempat
                    </label>

                    <textarea
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      style={{
                        borderWidth: "2px",
                        marginLeft: "110px",
                        height: "100px", // Adjust the height as needed
                        resize: "vertical", // Allows users to resize the textarea vertically
                      }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className="mr-2"
                      style={{ fontSize: "14px" }}
                    >
                      Fasilitas
                    </label>

                    <textarea
                      id="search"
                      name="search"
                      placeholder=""
                      className="mt-1 p-1 block w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      style={{
                        borderWidth: "2px",
                        marginLeft: "135px",
                        height: "100px", // Adjust the height as needed
                        resize: "vertical", // Allows users to resize the textarea vertically
                      }}
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <label
                      htmlFor="search"
                      className=""
                      style={{ fontSize: "14px", marginRight: "105px" }}
                    >
                      Tambahkan Foto
                    </label>
                    <input
                      type="file"
                      id="photo-upload"
                      name="photo-upload"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      style={{ padding: "20px", borderWidth: "2px" }}
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
                  <button
                    onClick={handleDaftarClick}
                    className="flex items-center py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
                  >
                    Daftar
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

export default AddTempat;
