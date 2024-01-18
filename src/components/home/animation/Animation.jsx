import scrollVideo from "../../../assets/videos/scrollVid.mp4";
import scrollImg from "../../../assets/imgs/scrollImg.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Animation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const scrollThreshold = 1;

    if (scroll > scrollThreshold && !isScrolled) {
      setIsScrolled(true);
    } else if (scroll <= scrollThreshold && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  console.log("scroll:", isScrolled);

  return (
    <section className="w-full h-screen services overflow-hidden relative flex items-center justify-center">
      <motion.div
        className={`w-full h-full absolute ${
          isScrolled ? "hidden" : ""
        } z-[99]`}
        initial={{ scale: 1 }}
        animate={{ scale: isScrolled ? 1.5 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-full h-full object-cover" src={scrollImg} alt="" />
      </motion.div>
      <motion.div
        className={` ${
          isScrolled ? "w-full h-full " : "w-[31%] h-[330px] mx-auto"
        } z-0 relative`}
        animate={{
          width: isScrolled ? "100%" : "31%",
          height: isScrolled ? "100%" : "330px",
        }}
        transition={{ duration: 0.5 }}
      >
        <video
          className={`w-full h-full object-cover`}
          src={scrollVideo}
          autoPlay
          muted
          loop={true}
        />
      </motion.div>
    </section>
  );
};

export default Animation;
