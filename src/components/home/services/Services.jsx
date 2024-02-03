import { useState, useEffect } from "react";
import Button from "../../UI/Button";
import webDevService from "../../../assets/imgs/webDevService.svg";
import designService from "../../../assets/imgs/designService.jpg";
import photographyService from "../../../assets/imgs/photographyService.jpg";
import marketingService from "../../../assets/imgs/marketingService.jpg";
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
    setSliderItems(services[serviceIndex]);
  }, [serviceIndex]);

  const handleSliderIndex = (itemIndex) => {
    setServiceIndex(itemIndex);
  };

  return (
    <section className="w-screen h-screen overflow-hidden md:flex md:flex-col md:justify-center services">
      <div className="w-full h-full  flex flex-col items-center justify-center relative md:items-center md:px-10 md:flex-row-reverse ">
        <div className="bg-red-300 w-[50%] h-full flex flex-col justify-center gap-20">
          <h2 className="hidden md:block w-[140px] text-center bg-primary py-1 text-[#0A0A0A] font-black lg:py-2 lg:w-[170px] lg:text-xl">
            OUR SERVICES
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <h5 className="text-xl font-semibold">We build you an amazing</h5>
              <h1 className="text-5xl uppercase font-bold text-primary">
                {sliderItems.title}
              </h1>
              <p className="hidden lg:block text-[#9F9F9F]  lg:mx-0  2xs:w-[80%] sm:w-[70%] md:w-[53%] md:mx-20 text-center mx-auto  md:text-left  lg:text-lg lg:w-[64%]">
                {sliderItems.des}
              </p>
            </div>
            <div className="text-center md:text-left md:w-[70%] mx-auto flex flex-col gap-4  lg:w-[80%]">
              <Button name={"Start your project"} />
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
        </div>
        <div className="w-[50%] h-full bg-green-300">
          <div className="">
            <img
              className="w-full h-full object-contain"
              src={sliderItems.img}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
