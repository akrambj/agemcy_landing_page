import { useState, useEffect } from "react";
import Button from "../../UI/Button";
import webDevService from "../../../assets/imgs/webDevService.svg";
import webDevServiceImg from "../../../assets/imgs/webDevServiceImg.svg";

const Services = () => {
  const services = [
    {
      title: "website",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.",
      bg: webDevService,
      img: webDevServiceImg,
    },
    {
      title: "website02",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone02.",
      bg: "red",
      img: webDevServiceImg,
    },
    {
      title: "website03",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.03",
      bg: "blue",
      img: webDevServiceImg,
    },
    {
      title: "website04",
      des: "Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.04",
      bg: "green",
      img: webDevServiceImg,
    },
  ];

  const [serviceIndex, setServiceIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState(services[serviceIndex]);

  useEffect(() => {
    setSliderItems(services[serviceIndex]);
  }, [serviceIndex]);

  const handleSliderIndex = (itemIndex) => {
    setServiceIndex(itemIndex);
  };

  return (
    <section className="w-screen h-screen overflow-hidden md:flex md:flex-col md:justify-center">
      <div className="w-full h-full md:h-[70%] lg:h-[90%] flex flex-col items-center justify-center relative md:flex-row border-[5px] border-[#0A0A0A]">
        <div
          style={{
            backgroundImage: `url(${sliderItems.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[30%] relative md:h-full md:w-[50%]"
        >
          <div className="w-full h-full absolute top-0 left-0  service-overlay"></div>
        </div>
        <div className="w-full text-center h-[70%] md:w-[60%] md:h-full bg-[#0A0A0A]  text-white flex  justify-end md:justify-center lg:justify-around lg:py-10 pb-3 flex-col gap-7 md:gap-4">
          <h2 className="hidden md:block w-[140px] text-center bg-primary py-1 text-[#0A0A0A] font-bold">
            OUR SERVICES
          </h2>
          <div className="flex flex-col md:w-[70%] md:mx-auto md:text-left  lg:w-[80%] lg:gap-5">
            <div>
              <h5 className="text-xl font-semibold">We build you an amazing</h5>
              <h1 className="text-5xl uppercase font-bold text-primary">
                {sliderItems.title}
              </h1>
            </div>
            <div className="absolute top-[5%] w-[90%] left-5 h-[35%] md:w-[50%] md:h-[60%] md:left-[5%] md:top-[20%] lg:w-[53%] lg:h-[65%] ">
              <img
                className="w-full h-full object-contain"
                src={sliderItems.img}
                alt=""
              />
            </div>
            <p className="hidden lg:block text-[#9F9F9F]  lg:mx-0  2xs:w-[80%] sm:w-[70%] md:w-[53%] md:mx-20 text-center mx-auto  md:text-left  lg:text-lg lg:w-[64%]">
              {sliderItems.des}
            </p>
          </div>
          <p className="text-[#9F9F9F] lg:hidden 2xs:w-[80%] sm:w-[70%] md:w-[53%] md:mx-20 text-center mx-auto  md:text-left ">
            {sliderItems.des}
          </p>
          <div className="text-center md:text-left md:w-[70%] mx-auto  lg:w-[80%]">
            <Button name={"Start your project"} />
          </div>
          <ul className="flex justify-center items-center gap-2  md:items-start md:w-[50%] lg:w-[30%]">
            {services.map((service, index) => (
              <li
                onClick={() => handleSliderIndex(index)}
                className={`${
                  serviceIndex === index ? "bg-primary" : "bg-gray-300"
                } w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full lg:cursor-pointer`}
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
