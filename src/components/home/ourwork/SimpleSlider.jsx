import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pc from "../../../assets/imgs/works/pc.png";
import guiri from "../../../assets/imgs/works/guiri.png";
import Work from "./Work";

const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const works = [
    {
      name: "GUIRRI BAT",
      description:
        "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development.",
      img: pc,
      bg: guiri,
    },
    {
      name: "GUIRRI BAT",
      description:
        "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development.",
      img: pc,
      bg: guiri,
    },
    {
      name: "GUIRRI BAT",
      description:
        "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development.",
      img: pc,
      bg: guiri,
    },
    {
      name: "GUIRRI BAT",
      description:
        "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development.",
      img: pc,
      bg: guiri,
    },
    {
      name: "GUIRRI BAT",
      description:
        "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development.",
      img: pc,
      bg: guiri,
    },
  ];

  return (
    <div className="w-full flex items-center justify-between px-10 h-[120vh] ">
      <Slider ref={sliderRef} {...settings} className="w-[90%] mx-auto">
        {works.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
