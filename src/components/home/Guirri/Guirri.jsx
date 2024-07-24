import { useState, useEffect } from "react";
import Frame from "../../../assets/imgs/Frame.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Guirri = () => {
  const works = [
    {
      thumbnail: Frame,
      title: "Work 01",
      description: "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development."
    },
    {
      thumbnail: Frame,
      title: "Work 02",
      description: "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development."
    },
    {
      thumbnail: Frame,
      title: "Work 03",
      description: "We are a digital agency helping businesses and individuals establish a strong digital presence. We specialize in product development."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [workItem, setWorkItem] = useState(works[currentIndex]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWorkItem(works[currentIndex]);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((i) => (i >= works.length - 1 ? i : i + 1));
  };

  const back = () => {
    setCurrentIndex((i) => (i <= 0 ? i : i - 1));
  };

  const getTranslateXValue = () => {
    if (screenSize <= 405) {
      return currentIndex * 34.5; // Example value for large screens (e.g., desktops)
    } else if (screenSize <= 500) {
      return currentIndex * 34.3; // Example value for medium screens (e.g., tablets)
    } else if  (screenSize <= 600){
      return currentIndex * 34; // Example value for small screens (e.g., mobile)
    } else if (screenSize <= 800) {
      return currentIndex * 33.9
    } else if (screenSize <= 1000) {
      return currentIndex * 33.8
    } else {
      return currentIndex * 33.9
    }
  };

  const slideStyle = {
    transform: `translateX(-${getTranslateXValue()}%)`,
    transition: 'transform 0.5s ease-in-out',
    width: `${works.length * 100}%`,
    display: 'flex',
    gap: "10px"
  };

  const slideItemStyle = {
    width: `${100 / works.length}%`,
    flexShrink: 0,
  };

  return (
    <section className="w-screen min-h-screen overflow-hidden  md:py-10 lg:py-0">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="w-full text-center flex flex-col gap-10 lg:gap-4 ">
          <h2 className="w-full capitalize text-center font-black xs:text-5xl text-4xl text-white">
            {workItem.title}
          </h2>
          <p className="text-white mt-4 w-[90%] xs:text-xl text-lg  mx-auto sm:text-lg md:text-xl text-center lg:text-2xl lg:w-[60%]">
            {workItem.description}
          </p>
          <div>
            <button className="xs:text-lg font-semibold text-primary lg:text-3xl">Read more...</button>
          </div>
          <div className="flex items-center justify-between px-2 w-full lg:px-52">
            <button className="text-white" onClick={back}>
              <MdOutlineKeyboardArrowLeft className={`text-8xl ${currentIndex === 0 ? "" : "text-primary"} `} />
            </button>
            <div className="overflow-hidden w-[75%] lg:w-[60%] mx-auto">
              <div style={slideStyle} className="">
                {works.map((work, index) => (
                  <div key={index} style={slideItemStyle} className="flex items-center justify-center ">
                    <img src={work.thumbnail} alt={`work-${index}`} />
                  </div>
                ))}
              </div>
            </div>
            <button className="text-white" onClick={next}>
              <MdOutlineKeyboardArrowRight className={`text-8xl ${currentIndex === works.length - 1 ? "" : "text-primary"}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guirri;
