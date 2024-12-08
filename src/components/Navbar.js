import React, { useState } from "react";
import logo from "../assets/images/ALMABA-LOGO-SMALL.svg";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-6 z-50 text-white text-xl font-poppins bg-black bg-opacity-25">
      <img
        src={logo}
        alt="company logo in white"
        className="justify-left z-50 max-sm:hidden"
      />
      <div className="hidden md:flex gap-x-6">
        <h3 className="hover:animate-pulse">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </h3>
        <h3 className="hover:animate-pulse">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </h3>
        <h3 className="hover:animate-pulse">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </h3>
        <h3 className="hover:animate-pulse">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </h3>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50 right-0">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
