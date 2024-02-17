import { useState, useEffect, useRef } from "react";
import Button from "../../UI/Button";
import webDevService from "../../../assets/imgs/webDevService.svg";
import designService from "../../../assets/imgs/designService.jpg";
import photographyService from "../../../assets/imgs/photographyService.jpg";
import marketingService from "../../../assets/imgs/marketingService.jpg";
import webDevServiceImg from "../../../assets/imgs/webDevServiceImg.svg";
import background from "../../../assets/imgs/services/background.png";
import backgroundDesktop from "../../../assets/imgs/services/backgroundDesktop.png";
import planet02 from "../../../assets/imgs/services/planet02.png";
import service01 from "../../../assets/imgs/services/service01.png";
import service02 from "../../../assets/imgs/services/service02.png";
import service03 from "../../../assets/imgs/services/service03.png";
import service04 from "../../../assets/imgs/services/service04.png";
import service05 from "../../../assets/imgs/services/service05.png";
import pinkball from "../../../assets/imgs/services/pinkball.png";

const Services = () => {
  const services = [
    {
      title: "website",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.",
      img: service01,
    },
    {
      title: "design",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone02.",
      img: service02,
    },
    {
      title: "photography",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.03",
      img: service03,
    },
    {
      title: "marketing",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.04",
      img: service04,
    },
    {
      title: "marketing",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.04",
      img: service05,
    },
  ];

  const [main, setMain] = useState(services[0]);
  const [sideOne, setSideOne] = useState(services[1]);
  const [sideTwo, setSideTwo] = useState(services[2]);
  const [animate, setAnimate] = useState(false); // State to trigger animation

  const handleClickSideOne = () => {
    setMain(sideOne);
    setSideOne(main);
    setAnimate(true); // Trigger animation
    setTimeout(() => setAnimate(false), 2000);
  };

  const handleClickSideTwo = () => {
    setMain(sideTwo);
    setSideTwo(sideOne);
    setSideOne(main);
    setAnimate(true); // Trigger animation
    setTimeout(() => setAnimate(false), 300); // Turn off animation after 300msa
  };

  return (
    <section className="relative w-full min-h-screen py-10 flex flex-col items-center justify-center gap-10">
      <div className="w-full h-full absolute -z-10">
        <img
          src={backgroundDesktop}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      {/* <div>
        <h2 className="text-primary font-bold text-4xl my-10 bg-red-300">
          OUR SERVICES
        </h2>
      </div> */}
      {/* <div className="text-white flex  flex-col gap-2 text-center w-[70%] mx-auto z-10 bg-red-300">
        <h2 className="text-5xl font-bold text-white uppercase">
          {main.title}
        </h2>
        <p className="w-[80%] mx-auto text-sm">{main.des}</p>
        <button className="text-primary capitalize">read more...</button>
      </div> */}

      {/* <div className="flex w-full items-center justify-between bg-red-300 h-screen">
        <div className="bg-green-300 flex items-start w-[20%] h-full justify-start flex-col">
          <img
            src={sideOne.img}
            className={`cursor-pointer ${
              animate ? "ali02" : ""
            } duration-300 -scale-50 hover:rotate-45 border-2 bg-red-300`}
            alt=""
            onClick={handleClickSideOne}
          />
        </div>
        <div>
          <img src={pinkball} alt="" />
        </div>
        <div
          className={`cursor-pointer scale-150 rotate-[180deg]  ${
            animate ? "ali" : ""
          } z-0 p-2 transition-all duration-300 `}
        >
          <img
            src={main.img}
            // className={`cursor-pointer scale-150 ${animate ? "ali" : ""} z-0`}
            alt=""
          />
        </div>
        <div>
          <img src={pinkball} alt="" />
        </div>
        <div>
          <img
            src={sideTwo.img}
            className={`cursor-pointer ${
              animate ? "ali02" : ""
            } -scale-50 duration-300`}
            alt=""
            onClick={handleClickSideTwo}
          />
        </div>
      </div> */}

      <div className="w-full h-screen flex justify-between items-center gap-[1%]">
        <div className="relative w-[20%] h-full  flex items-center justify-end">
          <img
            src={sideOne.img}
            className={`cursor-pointer ${
              animate ? "ali02" : ""
            } duration-300 -scale-50  absolute -left-32 top-1/4 object-contain`}
            alt=""
            onClick={handleClickSideOne}
          />
        </div>
        <div className="w-[3%] h-full  flex items-center ">
          <img src={pinkball} alt="" />
        </div>
        <div className="w-[45%] h-full  flex items-center justify-center">
          <img
            src={main.img}
            className={`cursor-pointer scale-150 ${animate ? "ali" : ""} z-0`}
            alt=""
          />
        </div>
        <div className="w-[3%] flex items-center justify-center h-full ">
          <img src={pinkball} alt="" />
        </div>
        <div className="w-[20%] h-full  relative">
          <img
            src={sideTwo.img}
            className={`cursor-pointer ${
              animate ? "ali02" : ""
            } -scale-50 duration-300 absolute top-1/4 -right-32`}
            alt=""
            onClick={handleClickSideTwo}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
