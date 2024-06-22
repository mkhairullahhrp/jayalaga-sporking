import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SporkingOren from "../assets/img/logo-oren.png";
import { IoFilter } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import Rating from "../components/rating";
import Modal from "./Modal";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const toggleUserPopup = () => {
    setIsUserPopupVisible(!isUserPopupVisible);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed border-1">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <nav
              id="nav-menu"
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 w-full"
            >
              <ul className="flex items-center justify-between w-full">
                <li className="flex items-center">
                  <img
                    src={SporkingOren}
                    alt="logoatas"
                    style={{
                      width: "150px",
                      height: "auto",
                      marginLeft: "30px",
                    }}
                  />
                </li>
                <div className="flex items-center">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary"
                    >
                      <Link to="/HomePage" style={{ color: "black" }}>
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary"
                    >
                      <Link to="/Booking" style={{ color: "black" }}>
                        Booking
                      </Link>
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary"
                    >
                      <Link to="/NewsPage" style={{ color: "black" }}>
                        News
                      </Link>
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="bg-primary text-base text-secondary outline-none px-4 rounded-sm py-2 mr-3 flex hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                      onClick={toggleUserPopup}
                    >
                      <FaRegUserCircle size="2em" />
                    </a>
                    {isUserPopupVisible && (
                      <div className="absolute top-14 right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                        <ul className="p-2">
                          <li className="py-2 px-4 hover:bg-gray-200">
                            <Link to="/Profile">Profile</Link>
                          </li>
                          <li className="py-2 px-4 hover:bg-gray-200">
                            <Link to="/settings">Settings</Link>
                          </li>
                          <li className="py-2 px-4 hover:bg-gray-200">
                            <Link to="/logout">Logout</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex items-center pt-14">
        <button
          onClick={() => {
            onClose;
          }}
          className="py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
        >
          More
        </button>
        <button
          onClick={() => openModal("filter")}
          className="flex items-center py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
        >
          <CiFilter size="1.5em" style={{ marginRight: "5px" }} />
          Filter
        </button>
        <button
          onClick={() => openModal("urutkan")}
          className="flex items-center py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
        >
          <IoFilter size="1.5em" style={{ marginRight: "5px" }} />
          Urutkan
        </button>
        <button
          onClick={() => openModal("harga")}
          className="flex items-center py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
        >
          <FaRegMoneyBillAlt size="1.5em" style={{ marginRight: "5px" }} />
          Harga
        </button>
        <button
          onClick={() => openModal("bintang")}
          className="flex items-center py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
        >
          <CiStar size="1.5em" style={{ marginRight: "5px" }} />
          Bintang
        </button>
        <button
          onClick={() => openModal("jenisOlahraga")}
          className="flex items-center py-2 ml-10 px-4 bg-orange-500 text-white rounded-md font-semibold"
        >
          <MdSportsGymnastics size="1.5em" style={{ marginRight: "5px" }} />
          Jenis Olahraga
        </button>

        <div className=" ml-2 pb-1 py-4 px-5 size-70">
          <div className="mb-4 mt-2">
            <label htmlFor="search" className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
              <input
                type="text"
                id="search"
                name="search"
                className="py-2 block pl-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search"
                style={{ borderWidth: "2px" }}
              />
            </label>
          </div>
        </div>
      </div>

      <Modal show={activeModal === "more"} onClose={closeModal} title="More">
        <p>More content here...</p>
      </Modal>

      {/* INI ISI POP-UP YANG FILTER SEMUANYA */}

      <Modal
        show={activeModal === "filter"}
        onClose={closeModal}
        title="Filter"
      >
        <div style={{ margin: "20px 0" }} />

        <h1 className="mt-5">Urutkan</h1>
        <div
          className="flex items-center mt-5"
          style={{ flexDirection: "column" }}
        >
          <div className="flex items-center mt-5">
            <button
              onClick={() => handleChoiceClick("choice20")}
              className={`py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                selectedChoice === "choice20"
                  ? "bg-orange-600 text-white"
                  : "bg-white-500 text-black hover:bg-orange-300 border-2"
              }`}
              style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
            ></button>
            <p className="ml-1">Direkomendasikan</p>

            <button
              onClick={() => handleChoiceClick("choice19")}
              className={`ml-10 py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                selectedChoice === "choice19"
                  ? "bg-orange-600 text-white"
                  : "bg-white-500 text-black hover:bg-orange-300 border-2"
              }`}
              style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
            ></button>
            <p className="ml-1">Rating Tertinggi</p>
          </div>

          <div
            className="flex items-center mt-5"
            style={{ flexDirection: "column" }}
          >
            <div className="flex items-center mt-5">
              <button
                onClick={() => handleChoiceClick("choice17")}
                className={`ml-3 py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                  selectedChoice === "choice17"
                    ? "bg-orange-600 text-white"
                    : "bg-white-500 text-black hover:bg-orange-300 border-2"
                }`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
              ></button>
              <p className="ml-1">Harga Termahal</p>

              <button
                onClick={() => handleChoiceClick("choice16")}
                className={`ml-10 py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                  selectedChoice === "choice6"
                    ? "bg-orange-600 text-white"
                    : "bg-white-500 text-black hover:bg-orange-300 border-2"
                }`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
              ></button>
              <p className="ml-1">Paling Banyak Dicari</p>
            </div>
          </div>

          <div
            className="flex items-center mt-5"
            style={{ flexDirection: "column" }}
          >
            <div className="flex items-center mt-5 mr-10">
              <button
                onClick={() => handleChoiceClick("choice5")}
                className={` py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                  selectedChoice === "choice5"
                    ? "bg-orange-600 text-white"
                    : "bg-white-500 text-black hover:bg-orange-300 border-2"
                }`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
              ></button>
              <p className="ml-1">Harga Termurah</p>
            </div>
          </div>
        </div>

        <div></div>
        <hr className="mt-5" />
        <h1 className="mt-5">Harga</h1>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 000
          </button>

          <button
            onClick={() => handleChoiceClick("choice4")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice4"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 999.999,99
          </button>
        </div>

        <hr className="mt-5" />

        <h2 className="mt-5 ml-10">Sering Digunakan</h2>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice2")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice2"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 50.000,00
          </button>

          <button
            onClick={() => handleChoiceClick("choice2")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice2"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 100.000,00
          </button>
        </div>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 50.000,00
          </button>

          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 150.000,00
          </button>
        </div>

        <hr className="mt-5" />

        <p>Rating Bintang</p>
        <div className="mt-4">
          <Rating />
        </div>

        <hr className="mt-5" />

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice1")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice1"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Futsal
          </button>

          <button
            onClick={() => handleChoiceClick("choice2")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice2"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Basket
          </button>

          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Volly
          </button>
        </div>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice4")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice4"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Badminton
          </button>

          <button
            onClick={() => handleChoiceClick("choice5")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice5"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            minny soccer
          </button>
        </div>

        <hr className="mt-5" />
      </Modal>

      {/* INI ISI POP-UP YANG RATING */}
      <Modal
        show={activeModal === "bintang"}
        onClose={closeModal}
        title="Bintang"
      >
        <p>Rating Bintang</p>
        <div className="mt-4">
          <Rating />
        </div>

        <hr className="mt-5" />
      </Modal>

      {/* INI ISI POP-UP YANG URUTKAN */}
      <Modal
        show={activeModal === "urutkan"}
        onClose={closeModal}
        title="Urutkan"
      >
        <div
          className="flex items-center mt-5"
          style={{ flexDirection: "column" }}
        >
          <div className="flex items-center mt-5">
            <button
              onClick={() => handleChoiceClick("choice2")}
              className={`py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                selectedChoice === "choice2"
                  ? "bg-orange-600 text-white"
                  : "bg-white-500 text-black hover:bg-orange-300 border-2"
              }`}
              style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
            ></button>
            <p className="ml-1">Direkomendasikan</p>

            <button
              onClick={() => handleChoiceClick("choice1")}
              className={`ml-10 py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                selectedChoice === "choice1"
                  ? "bg-orange-600 text-white"
                  : "bg-white-500 text-black hover:bg-orange-300 border-2"
              }`}
              style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
            ></button>
            <p className="ml-1">Rating Tertinggi</p>
          </div>

          <div
            className="flex items-center mt-5"
            style={{ flexDirection: "column" }}
          >
            <div className="flex items-center mt-5">
              <button
                onClick={() => handleChoiceClick("choice3")}
                className={`ml-3 py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                  selectedChoice === "choice3"
                    ? "bg-orange-600 text-white"
                    : "bg-white-500 text-black hover:bg-orange-300 border-2"
                }`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
              ></button>
              <p className="ml-1">Harga Termahal</p>

              <button
                onClick={() => handleChoiceClick("choice4")}
                className={`ml-10 py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                  selectedChoice === "choice4"
                    ? "bg-orange-600 text-white"
                    : "bg-white-500 text-black hover:bg-orange-300 border-2"
                }`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
              ></button>
              <p className="ml-1">Paling Banyak Dicari</p>
            </div>
          </div>

          <div
            className="flex items-center mt-5"
            style={{ flexDirection: "column" }}
          >
            <div className="flex items-center mt-5 mr-10">
              <button
                onClick={() => handleChoiceClick("choice5")}
                className={` py-1 px-2 rounded-full font-semibold mx-1 mb-1 transition duration-300 ease-in-out ${
                  selectedChoice === "choice5"
                    ? "bg-orange-600 text-white"
                    : "bg-white-500 text-black hover:bg-orange-300 border-2"
                }`}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }} // Menjadikan button bulat dan kecil
              ></button>
              <p className="ml-1">Harga Termurah</p>
            </div>
          </div>
        </div>

        <div></div>
        <hr className="mt-5" />
      </Modal>

      {/* INI ISI POP-UP YANG HARGA */}
      <Modal show={activeModal === "harga"} onClose={closeModal} title="Harga">
        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice1")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice1"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 000
          </button>

          <button
            onClick={() => handleChoiceClick("choice1")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice1"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 999.999,99
          </button>
        </div>

        <hr className="mt-5" />

        <h2>Sering Digunakan</h2>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice2")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice2"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 50.000,00
          </button>

          <button
            onClick={() => handleChoiceClick("choice2")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice2"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 100.000,00
          </button>
        </div>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 50.000,00
          </button>

          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            IDR 150.000,00
          </button>
        </div>

        <hr className="mt-5" />
      </Modal>

      {/* INI ISI POP-UP YANG JENIS OLAHRAGA */}
      <Modal
        show={activeModal === "jenisOlahraga"}
        onClose={closeModal}
        title="Jenis Olahraga"
      >
        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice1")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice1"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Futsal
          </button>

          <button
            onClick={() => handleChoiceClick("choice2")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice2"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Basket
          </button>

          <button
            onClick={() => handleChoiceClick("choice3")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice3"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Volly
          </button>
        </div>

        <div className="flex items-center mt-5">
          <button
            onClick={() => handleChoiceClick("choice4")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice4"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            Badminton
          </button>

          <button
            onClick={() => handleChoiceClick("choice5")}
            className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
              selectedChoice === "choice5"
                ? "bg-orange-600 text-white"
                : "bg-white-500 text-black hover:bg-orange-300 border-2"
            }`}
          >
            minny soccer
          </button>
        </div>

        <hr className="mt-5" />
      </Modal>
    </>
  );
};

export default Navbar;
