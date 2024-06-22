import React from "react";
import { Link } from "react-router-dom";
import LogoHero from "../assets/img/logo/Logo Sporking HD.png";

const Header = () => {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed">
        <div className="container w-100">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link to="/">
                <img className="w-[98px] h-[40px]" src={LogoHero} alt="Logo Hero" />
              </Link>
            </div>
            <div className="flex items-center px-4">
              {/* Hamburger */}
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              </button>
              {/* End of Hamburger */}
              <nav
                id="nav-menu"
                className="active:text-dark hidden absolute py-5 bg-secondary shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="/"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="/Booking"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                    >
                      Booking
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="NewsPage"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                    >
                      News
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href=""
                      className="rounded-lg text-base text-primary border border-primary  px-4 py-2 mr-3 flex hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                    >
                      <Link to="/login">Masuk</Link>
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href=""
                      className="rounded-lg bg-primary text-base text-white outline-none px-4 py-2 mr-3 flex hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      <Link to="/register">Daftar</Link>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <script src="../assets/js/Script.js"></script>
      </header>
    </>
  );
};

export default Header;
