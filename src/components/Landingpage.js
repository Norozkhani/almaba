import React from "react";
import "../assets/landingpage.css";
import arrow from "../assets/images/arrow-down.svg";
import HeaderBG from "../assets/images/ALMABAHeader.svg";
import HeaderMobile from "../assets/images/ALMABAHeader-mobile.svg";
import { Link } from "react-scroll";

const Landingpage = () => {
  return (
    <div
      name="home"
      id="home"
      className="bg-black w-screen h-screen flex justify-center items-center relative"
    >
      <div className="iframe-container absolute w-full h-full z-20 overflow-hidden">
        <div className="iframe-desktop hidden md:block w-full h-full">
          <iframe
            src="https://my.spline.design/untitled-dd3d448390466430c3a71eb725fc871e/"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Logo"
          ></iframe>
        </div>
        <div className="iframe-mobile md:hidden w-full h-full">
          <iframe
            src="https://my.spline.design/untitled-bb4055b2fa056bdb53191048a1dada9e/"
            frameborder="0"
            width="100%"
            height="100%"
            title="logo"
          ></iframe>
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        className="z-30 bottom-0 absolute"
      >
        <img
          src={arrow}
          alt="arrow pointing downwards"
          className="animate-bounce"
        />
      </Link>

      <img
        src={HeaderBG}
        alt="Landing page header background"
        className="object-cover w-screen h-screen absolute hidden md:block z-0"
      />
      <img
        src={HeaderMobile}
        alt="Landing page header background for mobile"
        className="object-cover w-screen h-screen absolute md:hidden z-0"
      />
    </div>
  );
};

export default Landingpage;
