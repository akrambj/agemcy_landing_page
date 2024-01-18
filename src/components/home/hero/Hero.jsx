import logo from "../../../assets/imgs/logo.svg";
import Button from "../../UI/Button";
const Hero = () => {
  return (
    <section className="w-full h-[100vh] overflow-hidden  xs:py-8 flex flex-col sm:py-2 md:flex-row justify-between md:gap-28 items-center py-14  hero">
      <div className="w-full  py-4 flex items-center justify-center md:justify-end md:w-[70%]  ">
        <div className=" w-[70%] xs:w-[60%] 2xs:w-[40%] flex items-center justify-center md:w-[70%] lg:w-[50%]  flex-wrap ">
          <img
            className="object-cover max-w-full md:max-w-[110%]"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-[80%] flex flex-col  md:text-left md:items-start  md:h-[50%] md:justify-end  items-center justify-center text-center  gap-5 overflow-hidden">
        <div className="flex flex-col items-center md:items-start  justify-end gap-4 md:gap-0">
          <h3 className="md:hidden uppercase text-2xl xs:text-3xl font-semibold text-[#A5A5A5] ">
            We are <br /> digital marketing
          </h3>
          <h2 className="uppercase  text-4xl xs:text-6xl font-bold letter tracking-[2px] md:tracking-[0px] bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Boosters.
          </h2>
          <p className="hidden md:block text-[#A5A5A5] text-sm xs:text-base xs:w-[90%] md:w-[70%] lg:text-lg">
            We are a digital agency helping businesses and individuals establish
            a strong digital presence. We specialize in product development.
          </p>
        </div>
        <p className="text-[#A5A5A5] md:hidden text-sm xs:text-base xs:w-[90%] md:w-[70%] md:text-lg">
          We are a digital agency helping businesses and individuals establish a
          strong digital presence. We specialize in product development.
        </p>
        <Button name={"Let's Talk ->"} />
      </div>
    </section>
  );
};

export default Hero;
