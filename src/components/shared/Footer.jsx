import Socials from "../data/Socials";

const Footer = () => {
  return (
    <footer className="w-screen py-5 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 border-t-8 border-solid border-primary ">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h2 className="text-primary font-bold text-2xl sm:text-4xl ">
          Don{"'"}t settle for mediocrity
        </h2>
        <h4 className="text-white font-semibold text-lg sm:text-xl w-[90%]  sm:w-[70%]">
          Choose excellence and let{"'"}s create something awesome together.
        </h4>
        <button className="text-white border-l-4 pl-1 border-solid border-primary sm:text-lg">
          Lets create together {"->"}
        </button>
      </div>
      <div className="flex justify-center items-center gap-5">
        {Socials.map((social, index) => (
          <a
            className="text-primary text-xl sm:text-2xl"
            key={index}
            href={social.link}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
