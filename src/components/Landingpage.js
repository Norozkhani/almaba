import React, { useEffect, useState } from "react";
import "../assets/landingpage.css";
import arrow from "../assets/images/arrow-down.svg";
import HeaderBG from "../assets/images/ALMABAHeader.svg";
import HeaderMobile from "../assets/images/ALMABAHeader-mobile.svg";

const Landingpage = () => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setZoomed(true);
    }, 700);

    return () => clearTimeout(zoomTimeout);
  }, []);

  return (
    <div
      className={`bg-black w-screen h-screen flex justify-center items-center ${
        zoomed ? "zoomed" : ""
      }`}
    >
      <div className="text-white text-center font-mono subpixel-antialiased font-black z-10 md:flex md:justify-center">
        <h1
          className={`hidden md:inline-block text-white text-center font-mono subpixel-antialiased font-black   text-9xl ${
            zoomed ? "zoomed" : ""
          } md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
        >
          ALMABA
        </h1>
        <div className="md:hidden grid grid-rows-3 relative">
          <span className="text-9xl md:text-9xl">AL</span>
          <span className="text-9xl md:text-9xl">MA</span>
          <span className="text-9xl md:text-9xl">BA</span>
        </div>
      </div>
      <img
        src={arrow}
        alt="arrow pointing downwards"
        className="animate-bounce z-10 bottom-0 absolute"
      />

      <img
        src={HeaderBG}
        alt="Landing page header background"
        className="object-cover w-screen h-screen absolute hidden md:block"
      />
      <img
        src={HeaderMobile}
        alt="Landing page header background for mobile"
        className="object-cover w-screen h-screen absolute md:hidden"
      />
    </div>
  );
};

export default Landingpage;
