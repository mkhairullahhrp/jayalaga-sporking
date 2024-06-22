import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SporkingOren from '../assets/img/logo-oren.png'; 
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {;
  const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);

  const toggleUserPopup = () => {
    setIsUserPopupVisible(!isUserPopupVisible);
  };



  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed border-1">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <nav id="nav-menu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 w-full">
              <ul className="flex items-center justify-between w-full">
                <li className="flex items-center">
                  <img 
                    src={SporkingOren} 
                    alt="logoatas" 
                    style={{ width: '150px', height: 'auto', marginLeft: '30px' }}
                  />
                </li>
                <div className="flex items-center">
                  <li className="group">
                    <a href="#home" className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary">
                      <Link to="/HomePage" style={{ color: 'black' }}>Home</Link>
                    </a>
                  </li>
                  <li className="group">
                    <a href="#about" className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary">
                      <Link to="/Booking" style={{ color: 'black' }}>Booking</Link>
                    </a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary">
                      <Link to="/NewsPage" style={{ color: 'black' }}>News</Link>
                    </a>
                  </li>
                  <li className="group">
                    <a href="#contact" className="bg-primary text-base text-secondary outline-none px-4 rounded-sm py-2 mr-3 flex hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" onClick={toggleUserPopup}>
                      <FaRegUserCircle size="2em" />
                    </a>
                    {isUserPopupVisible && (
                      <div className="absolute top-14 right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                        <ul className="p-2">
                          <li className="py-2 px-4 hover:bg-gray-200"><Link to="/profile">Akun Saya</Link></li>
                          <li className="py-2 px-4 hover:bg-gray-200"><Link to="/Riwayat">Riwayat Booking</Link></li>
                          <li className="py-2 px-4 hover:bg-gray-200"><Link to="/Ubahpw">Logout</Link></li>
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
        
    </>
    );
};

export default Navbar;
