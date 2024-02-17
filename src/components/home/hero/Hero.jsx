import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/imgs/logo.svg";
import Button from "../../UI/Button";
import heroBg from "../../../assets/imgs/hero/heroBg.png";
const Hero = () => {
  const [scrolledToAbout, setScrolledToAbout] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutSectionTop = aboutRef.current.offsetTop;
        const aboutSectionHeight = aboutRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= aboutSectionTop - 300 &&
          window.scrollY <= aboutSectionTop + aboutSectionHeight;

        setScrolledToAbout(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef]);
  return (
    <section
      ref={aboutRef}
      className={`${
        scrolledToAbout ? "" : ""
      } duration-300 w-full h-[100vh] overflow-hidden relative xs:py-8 flex flex-col sm:py-2  md:flex-row justify-between  md:gap-28 items-center pt-16 md:pt-0 md:pb-0  pb-4  `}
    >
      <div className="absolute top-0 hero left-0 w-full h-full bg-red-300 -z-10">
        <img src={heroBg} alt="" />
      </div>
      <div className="w-full   py-4 flex items-center justify-center md:justify-end md:w-[70%]  ">
        <div
          className={`${
            scrolledToAbout ? "" : ""
          } about-img w-[60%] xs:w-[60%] 2xs:w-[40%] flex items-center justify-center md:w-[70%] lg:w-[50%]  flex-wrap `}
        >
          <img
            className="object-cover max-w-full md:max-w-[110%]"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div
        className={`w-full text-about md:w-[80%] flex flex-col  md:text-left md:items-start  md:h-[50%] md:justify-end  items-center justify-center text-center  gap-5 overflow-hidden`}
      >
        <div className="flex flex-col items-center md:items-start  justify-end gap-4 md:gap-0">
          <h3 className="uppercase text-3xl Textshadow  xs:text-3xl md:text-xl lg:text-4xl lg:leading-[45px] drop-shadow-lg text-white font-bold ">
            We are <br /> digital marketing
          </h3>
          <h2 className="uppercase  text-5xl xs:text-6xl font-black tracking-[-2px] md:tracking-[0px] text-gradient text-transparent bg-clip-text">
            Boosters.
          </h2>
          <p className="hidden md:block text-white drop-shadow-2xl text-sm xs:text-base xs:w-[90%] md:w-[70%] lg:text-lg">
            We are a digital agency helping businesses and individuals establish
            a strong digital presence. We specialize in product development.
          </p>
        </div>
        <p className="text-white md:hidden Textshadow  text-[12px] xs:text-base w-[90%] md:w-[70%] md:text-lg">
          We are a digital agency helping businesses and individuals establish a
          strong digital presence. We specialize in product development.
        </p>
        <Button name={"Let's Talk ->"} />
      </div>
    </section>
  );
};

export default Hero;
