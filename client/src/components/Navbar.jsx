import React from 'react';
import { Link } from 'react-router-dom';
import SporkingPutih from '../assets/img/logo-putih.png';


const Navbar = () => {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block py-6">
              <img src={SporkingPutih} alt="logoatas" style={{ width: '150px', height: 'auto' ,paddingLeft:'10px' }} />
              </a>
            </div>
            <div className="flex items-center px-4">
              {/* for Hamburger */}
              {/* <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              </button> */}

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary"
                    >
                      <Link to="/HomePage">Home</Link>
                    </a>
                  </li>
                  <li className="group">
                  
                    <a
                      href="#about"
                      className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary"
                    >
                    <Link to="/Booking">Booking</Link>
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-secondary py-2 mx-6 flex group-hover:text-primary"
                    >
                      News
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-primary border border-primary  px-4 rounded-sm py-2 mr-3 flex hover:bg-primary hover:text-secondary hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Masuk
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="bg-primary text-base text-secondary outline-none px-4 rounded-sm py-2 mr-3 flex hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Daftar
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
