import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "../data/Socials";
import logo from "../../assets/imgs/header/logo.png";
const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [showServices, setShowServices] = useState(false);

  const menuItems = [
    { name: "home", link: "/" },
    { name: "services", link: "#services" },
    { name: "agency", link: "#agency" },
    { name: "values", link: "#values" },
    { name: "FAQs", link: "#FAQs" },
  ];

  const services = [
    "Web design and development",
    "Mobile design and development",
    "Social media content creation",
    "Payed ads currently unavailable",
  ];

  const toggleMenu = () => {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
    if (menuToggle === false) {
      setShowServices(false);
    }
  };

  const containerVariant = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 }, // Changed from -50 to 50 for reverse animation
    visible: { y: 0, opacity: 1 },
  };

  const linksVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
        delay: 0.2,
      },
    },
  };

  console.log("show", showServices);
  return (
    <header className="fixed md:flex  w-screen flex items-center justify-between py-5 lg:px-[100px] lg:py-12 z-[99] ">
      <div className="blury-bg lg:px-10 flex items-center justify-end px-5 sm:justify-between w-full">
        <div className="logo w-40 hidden sm:block">
          <a href="#" className="">
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav flex items-center gap-10 ">
          <ul className="md:flex items-center gap-4 hidden">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`capitalize font-black text-xl hover:text-primary duration-300
            ${selectedLink === index ? "text-primary headText" : "text-white"} 
            `}
              >
                <a
                  onClick={() => {
                    setSelectedLink(index);
                    setMenuToggle(false);
                  }}
                  href={menuItem.link}
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="menuIcon z-[999] cursor-pointer">
            <div
              className={`menuicon z-50 ${menuToggle ? "openMenu" : ""}`}
              onClick={toggleMenu}
            >
              <span className="line-1 bg-primary"></span>
              <span className="line-2 bg-primary"></span>
              <span className="line-3 bg-primary"></span>
            </div>
            <AnimatePresence>
              {menuToggle && (
                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`menu h-screen z-10 -top-5 lg:-top-12 bg-primary px-0 overflow-hidden absolute -left-0 lg:-left-28 w-screen flex flex-col items-center justify-center`}
                >
                  <ul className="w-full h-full flex flex-col justify-center gap-10 px-5 md:px-10 ">
                    {menuItems.map((menuItem, index) => (
                      <motion.li
                        onMouseOver={() =>
                          index === 1 ? setShowServices(true) : ""
                        }
                        key={index}
                        variants={itemVariants}
                        className={`text-6xl capitalize font-black 
            ${selectedLink === index ? "text-white headText" : ""} 
            lg:hover:opacity-100 lg:hover:text-white transition-all duration-300 object-contain w-60`}
                      >
                        <a
                          onClick={() => {
                            setSelectedLink(index);
                            setMenuToggle(false);
                          }}
                          href={menuItem.link}
                        >
                          {menuItem.name}
                        </a>
                      </motion.li>
                    ))}
                    {showServices && (
                      <ul className="w-[40%] h-[70%] hidden absolute translate-x-[70%] translate-y-[30%] top-0 left-0 lg:flex  py-5 flex-col gap-5 ">
                        {services.map((service, index) => (
                          <motion.li
                            variants={itemVariants}
                            key={index}
                            className="capitalize opacity-5  text-3xl font-bold cursor-pointer hover:text-white duration-300  text-left"
                          >
                            {service}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-between  ">
                      <ul className="w-full flex items-center gap-2">
                        {Socials.map((media, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="w-[30px] h-[30px] border-2 border-white rounded-full flex items-center justify-center p-5"
                          >
                            <a className="text-white text-xl" href={media.link}>
                              {media.icon}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        className="md:flex items-center gap-7 flex-row-reverse hidden  mx-20"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        exit={{ opacity: 0, y: 50 }}
                      >
                        <Link
                          to={"contact"}
                          className={`${
                            menuToggle ? "opacity-100" : "opacity-0"
                          } w-[200px]  `}
                        >
                          <button className="head-btn w-full py-3 rounded-2xl text-[13px] uppercase text-white font-semibold lg:text-base lg:py-4 lg:hover:bg-white lg:hover:text-primary transition-all duration-300  ">
                            start your project
                          </button>
                        </Link>
                        <motion.div
                          className=" h-[100px] w-[2px] bg-white"
                          variants={itemVariants}
                        ></motion.div>
                        <motion.h2
                          className=" text-2xl w-[230px] text-white font-black hidden lg:block"
                          variants={itemVariants}
                        >
                          Let{"'"}s get cracking
                        </motion.h2>
                      </motion.div>
                    </div>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
