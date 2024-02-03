import scrollVideo from "../../../assets/videos/scrollVid.mp4";
import sky from "../../../assets/imgs/animation/sky.webp";
import stars from "../../../assets/imgs/animation/stars.webp";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Animation = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({ scale: 1 + (scrollY * 40) / window.innerHeight });
      // Do not set animationComplete to true here
    };

    const onComplete = () => {
      setAnimationComplete(true);
    };

    startAnimation().then(onComplete); // Set animationComplete after animation is complete
  }, [scrollY, controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const threshold = 200 * window.innerHeight;
  const overflowProperty = scrollY < threshold ? "hidden" : "scroll";
  const sectionHeight = animationComplete ? "100vh" : `${window.innerHeight}px`;

  return (
    <section
      className={`${
        animationComplete ? "relative " : "fixed z-[999] top-0 left-0 "
      } w-full duration-300 services flex items-center justify-center`}
      style={{ overflow: overflowProperty, height: sectionHeight }}
    >
      <motion.div
        className="w-full h-full absolute z-[98]"
        initial={{ rotate: 0 }}
        animate={controls}
        transition={{ duration: 0.2 }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={{ position: "fixed", top: 0, left: 0 }}
      >
        <img
          className="absolute -top-[30%] opacity-50 hover:opacity-100 duration-300  z-[99]"
          src={stars}
          alt="stars"
        />
        <img className="w-full h-full object-cover" src={sky} alt="animation" />
      </motion.div>
      <motion.div
        className={`z-0 relative h-full w-full`}
        transition={{ duration: 0.5 }}
      >
        <video
          className="w-full h-full object-cover"
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
