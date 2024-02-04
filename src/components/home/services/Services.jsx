import { useState, useEffect } from "react";
import Button from "../../UI/Button";
import webDevService from "../../../assets/imgs/webDevService.svg";
import designService from "../../../assets/imgs/designService.jpg";
import photographyService from "../../../assets/imgs/photographyService.jpg";
import marketingService from "../../../assets/imgs/marketingService.jpg";
import webDevServiceImg from "../../../assets/imgs/webDevServiceImg.svg";
import background from "../../../assets/imgs/services/background.png";
import backgroundDesktop from "../../../assets/imgs/services/backgroundDesktop.png";
import planet02 from "../../../assets/imgs/services/planet02.png";

const Services = () => {
  const services = [
    {
      title: "website",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.",
      bg: webDevService,
      img: webDevServiceImg,
    },
    {
      title: "design",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone02.",
      bg: designService,
      img: webDevServiceImg,
    },
    {
      title: "photography",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.03",
      bg: photographyService,
      img: webDevServiceImg,
    },
    {
      title: "marketing",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.04",
      bg: marketingService,
      img: webDevServiceImg,
    },
  ];

  const [serviceIndex, setServiceIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState(services[serviceIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    setSliderItems(services[serviceIndex]);
  }, [serviceIndex]);

  const handleSliderIndex = (itemIndex) => {
    setServiceIndex(itemIndex);
  };

  return (
    <section
      id="services"
      className="w-screen  h-screen overflow-hidden md:flex md:flex-col md:justify-center relative"
    >
      <div className="hidden md:block absolute left-0 top-[60%] w-[5%] opacity-50 hover:opacity-100 duration-300">
        <img className="" src={planet02} alt="planet0" />
      </div>
      <div className="absolute left-0 top-0 -z-10 w-full ">
        <img
          className="md:hidden w-full h-full object-cover"
          src={background}
          alt=""
        />
        <img
          className="hidden md:block w-full h-full object-cover"
          src={backgroundDesktop}
          alt=""
        />
      </div>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-[50%] flex items-center pt-10 justify-center h-[45%] md:h-full ">
          <div className="w-[90%] md:w-[80%]">
            <img
              className="w-full h-full object-contain"
              src={sliderItems.img}
              alt="service"
            />
          </div>
        </div>
        <div className="h-full md:w-[50%] flex flex-col items-center md:pl-32 md:pt-6 md:items-start md:text-left md:justify-between text-center gap-4 justify-center md:h-[70%] ">
          <h2 className="hidden md:block w-[140px] md:cursor-pointer hover:bg-white hover:text-primary duration-300 text-center bg-primary py-1 text-[#0A0A0A] font-black lg:py-2 lg:w-[170px] lg:text-xl">
            OUR SERVICES
          </h2>
          <div className="md:flex md:flex-col md:gap-5">
            <h5 className="text-base font-semibold text-white md:text-xl">
              We build you an amazing
            </h5>
            <h1 className="text-4xl md:text-6xl uppercase font-bold text-primary">
              {sliderItems.title}
            </h1>
            <p className="hidden md:block md:text-2xl  text-[#9F9F9F]  lg:mx-0  2xs:w-[80%] sm:w-[70%] md:w-[53%] md:mx-20 text-center mx-auto  md:text-left   lg:w-[64%]">
              {sliderItems.des}
            </p>
          </div>
          <p className="text-white w-[90%] mx-auto md:hidden">
            {sliderItems.des}
          </p>
          <div>
            <Button name={"Start your project"} />
          </div>
          <ul className="flex justify-center md:justify-start items-center gap-2 md:px-4 md:items-start md:w-[50%] lg:w-[30%]">
            {services.map((service, index) => (
              <li
                onClick={() => handleSliderIndex(index)}
                className={`${
                  serviceIndex === index ? "bg-primary" : "bg-gray-300"
                } w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full lg:cursor-pointer duration-300`}
                key={index}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
