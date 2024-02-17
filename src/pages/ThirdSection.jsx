import Faq from "../components/home/FAQ/Faq";
import Inovating from "../components/home/section/Inovating";
import OurValues from "../components/home/values/OurValues";
import background from "../assets/imgs/thirs/background.png";
import { useEffect, useRef, useState } from "react";
import OurWork from "../components/home/ourwork/OurWork";

const ThirdSection = () => {
  const [scrolledToThirdSection, setScrolledToThirdSection] = useState(false);
  const thirdSectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (thirdSectionRef.current) {
        const thirdSectionTop = thirdSectionRef.current.offsetTop;
        const thirdSectionHeight = thirdSectionRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= thirdSectionTop - 300 &&
          window.scrollY <= thirdSectionTop + thirdSectionHeight;

        setScrolledToThirdSection(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [thirdSectionRef]);

  return (
    <section
      ref={thirdSectionRef}
      className={`${
        scrolledToThirdSection ? "opacity-100" : "opacity-0"
      } relative duration-300`}
    >
      <div
        className={`absolute ${
          scrolledToThirdSection ? "thirdBg" : ""
        } w-full h-full top-0 left-0 -z-10 `}
      >
        <img className="w-full h-full object-cover" src={background} alt="" />
      </div>
      <Inovating scrolledToThirdSection={scrolledToThirdSection} />
      <OurValues scrolledToThirdSection={scrolledToThirdSection} />
      <OurWork />
      <Faq scrolledToThirdSection={scrolledToThirdSection} />
    </section>
  );
};

export default ThirdSection;
