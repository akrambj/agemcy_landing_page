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
    // Update sliderItems when index changes
    setSliderItems(services[serviceIndex]);
  }, [serviceIndex]);

  const handleSliderIndex = (itemIndex) => {
    setServiceIndex(itemIndex);
  };

  return (
    <section className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div
          style={{
            backgroundImage: `url(${sliderItems.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[30%] relative"
        >
          <div className="w-full h-full absolute top-0 left-0  service-overlay"></div>
        </div>
        <div className="w-full text-center h-[70%] bg-[#0A0A0A] text-white flex items-center justify-end pb-3 flex-col gap-7 ">
          <div className="flex flex-col ">
            <h5 className="text-xl font-semibold">We build you an amazing</h5>
            <h1 className="text-5xl uppercase font-bold text-primary">
              {sliderItems.title}
            </h1>
            <div className="w-[90%]  h-[40%] absolute top-[5%] left-[50%] translate-x-[-50%] ">
              <img
                className="w-full mx-auto h-full "
                src={sliderItems.img}
                alt=""
              />
            </div>
          </div>
          <p className="text-[#9F9F9F]">{sliderItems.des}</p>
          <Button name={"Start your project"} />
          <ul className="flex justify-center items-center gap-2">
            {services.map((service, index) => (
              <li
                onClick={() => handleSliderIndex(index)}
                className={`${
                  serviceIndex === index ? "bg-primary" : "bg-gray-300"
                } w-[10px] h-[10px] rounded-full `}
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
