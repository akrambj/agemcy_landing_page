import { useState, useEffect } from "react";
import Button from "../../UI/Button";

import website from "../../../assets/imgs/services/website.png";
import graphicdesign from "../../../assets/imgs/services/graphicdesign.png";
import marketing from "../../../assets/imgs/services/marketing.png";

const Services = () => {
  const services = [
    {
      title: "website",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.",
      bg: website,
    },
    {
      title: "design",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone",
      bg: website,
    },
    {
      title: "photography",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone",
      bg: website,
    },
    {
      title: "marketing",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone",
      bg: website,
    },
  ];

  const [serviceIndex, setServiceIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState(services[serviceIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    setSliderItems(services[serviceIndex]);
  }, [serviceIndex]);

  const handleSliderIndex = (itemIndex) => {
    setServiceIndex(itemIndex);
  };

  const slideStyle = {
    transform: `translateX(-${serviceIndex * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <section className="w-screen min-h-screen services h-screen  flex flex-col text-center py-4 lg:py-10 justify-center overflow-hidden gap-4">
      <h2 className="text-4xl  text-primary font-bold lg:text-5xl">OUR SERVICES</h2>
      <div className="flex flex-col h-full gap-4 md:flex-row ">
        <div className="w-full md:w-[50%] h-full flex items-center pt-10 md:pt-0 justify-center md:h-full ">
          <div className="w-[80%] md:w-[90%] lg:w-[60%] xs:h-full h-full md:h-full lg:h-full flex items-center justify-center ">
            <div style={slideStyle} className="w-full h-full md:h-[40%] lg:h-[70%] flex">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`w-full h-full rounded-md object-cover flex-shrink-0 bg-cover bg-center flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    serviceIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={service.bg} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[50%] h-full  flex flex-col items-center md:items-start md:text-left  text-center gap-4 justify-center">
          <div className="md:flex md:flex-col md:gap-5">
            <h1 className="text-4xl md:text-3xl lg:text-5xl uppercase font-bold text-primary">
              {sliderItems.title}
            </h1>
            <p className="hidden md:block md:text-sm  lg:text-3xl text-white lg:mx-0  2xs:w-[80%] sm:w-[70%] md:w-[90%]  text-center mx-auto  md:text-left md:mx-0   lg:w-[64%]">
              {sliderItems.des}
            </p>
          </div>
          <p className="text-white w-[90%] mx-auto md:hidden text-sm">
            {sliderItems.des}
          </p>
          <div>
            <Button name={"Start your project"} />
          </div>
          <ul className="flex justify-center md:justify-start items-center gap-2 md:px-4 md:items-start md:w-[50%] lg:w-[30%]">
            {services.map((_, index) => (
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
