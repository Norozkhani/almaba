import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";
import work1 from "../assets/images/Work/HSM-Cover1.png";
import work2 from "../assets/images/Work/HSM-Cover2.png";
import work3 from "../assets/images/Work/HSM-Cover3.png";
import work4 from "../assets/images/Work/HSM-Cover4.png";
import work5 from "../assets/images/Work/HSM-Cover5.png";

const Work = () => {
  return (
    <div
      id="work"
      name="work"
      className="w-3/4 h-3/4 flex flex-col justify-center items-end  max-md: h-screen"
    >
      <h2 className="font-poppins text-3xl sm:text-5xl pt-10 text-center">
        Some work done in the last year
      </h2>
      <div className="w-3/4 h-2/5">
        <Carousel className="">
          <Carousel.Item interval={1000}>
            <img src={work1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={work2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={work3} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={work4} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={work5} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
