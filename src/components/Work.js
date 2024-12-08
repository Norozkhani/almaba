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
      className="w-screen h-screen flex flex-col justify-center items-center max-md:h-2/3"
    >
      <h2 className="font-poppins text-3xl sm:text-3xl pt-10 text-center">
        Previous Projects by ALMABA AB
      </h2>
      <p className="font-poppins w-screen px-5 text-l sm:text-xl text-left pt-6 md:w-4/5 xl:w-1/2">
        Over the years, ALMABA AB has successfully completed a wide range of
        projects, showcasing our expertise in delivering high-quality steel
        structures. Our portfolio includes collaborations with prominent
        companies, where we've contributed from the planning phase all the way
        through to the final assembly.
        <br /> <br />
        Some of the key projects we've worked on involve complex installations
        in industries such as manufacturing, infrastructure, and large-scale
        construction. Each project highlights our commitment to precision,
        efficiency, and client satisfaction.
        <br /> <br />
        Below, you can explore some of our featured works. Feel free to get in
        touch if you'd like to learn more about any of these projects or discuss
        how we can assist with your next venture!
      </p>

      <div className="w-full sm:w-3/4 lg:w-1/2 mt-10">
        <Carousel className="h-full">
          <Carousel.Item>
            <img
              className="d-block w-full h-60 sm:h-80 lg:h-auto object-cover"
              src={work1}
              alt="Project 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-60 sm:h-80 lg:h-auto object-cover"
              src={work2}
              alt="Project 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-60 sm:h-80 lg:h-auto object-cover"
              src={work3}
              alt="Project 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-60 sm:h-80 lg:h-auto object-cover"
              src={work4}
              alt="Project 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-60 sm:h-80 lg:h-auto object-cover"
              src={work5}
              alt="Project 5"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
