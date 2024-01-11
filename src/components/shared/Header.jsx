import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const menuItems = [
    { name: "home", link: "/" },
    { name: "services", link: "#services" },
    { name: "agency", link: "#agency" },
    { name: "values", link: "#values" },
    { name: "FAQs", link: "#FAQs" },
  ];
  const socialMedia = [
    { icon: <FaXTwitter />, link: "https://twitter.com/x" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
  ];

  console.log("selectedLink:", selectedLink);
  console.log("menuToggle:", menuToggle);
  return (
    <header className="w-screen flex items-center justify-between p-5 ">
      <div className="logo"></div>
      <div className="nav flex items-center gap-10 flex-row-reverse">
        <div className="menuIcon">
          <span className="relative z-50">
            {menuToggle ? (
              <IoClose
                onClick={() => setMenuToggle(!menuToggle)}
                className="text-white text-5xl font-bold lg:cursor-pointer"
              />
            ) : (
              <HiMenuAlt3
                onClick={() => setMenuToggle(!menuToggle)}
                className="text-[#FF01F4] text-5xl font-bold lg:cursor-pointer"
              />
            )}
          </span>
          <div
            className={`menu  ${
              menuToggle ? "h-screen" : "h-0"
            } bg-primary  absolute top-0 left-0 w-screen z-10 flex flex-col  items-center justify-center`}
          >
            <ul className="w-full h-full flex flex-col justify-center gap-10 px-10">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className={`text-6xl capitalize font-black 
                    ${selectedLink === index ? "text-white headText" : ""} 
                    ${menuToggle ? "opacity-30" : "opacity-0"}`}
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
              <div className="flex items-center justify-between px-4">
                <ul className="w-full flex items-center gap-2">
                  {socialMedia.map((media, index) => (
                    <li
                      key={index}
                      className="w-[30px] h-[30px] border-2 border-white rounded-full flex items-center justify-center p-5"
                    >
                      <a className="text-white text-xl" href={media.link}>
                        {media.icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="md:flex items-center gap-7 flex-row-reverse hidden">
                  <Link
                    to={"contact"}
                    className={`${
                      menuToggle ? "opacity-100" : "opacity-0"
                    } w-[200px]  `}
                  >
                    <button className="head-btn w-full py-3 rounded-2xl text-[13px] uppercase text-white font-semibold lg:text-base lg:py-4 lg:hover:bg-white lg:hover:text-primary transition-all duration-300">
                      start your project
                    </button>
                  </Link>
                  <div className=" h-[100px] w-[2px] bg-white"></div>
                  <h2 className=" text-2xl w-[230px] text-white font-black hidden lg:block">
                    Let{"'"}s get cracking
                  </h2>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="md:flex items-center gap-3 capitalize font-black text-xl hidden">
          <Link to={"/contact"}>contact</Link>
          <Link to={"/contact"}>work</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
