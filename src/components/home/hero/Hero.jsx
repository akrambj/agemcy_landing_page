import logo from "../../../assets/imgs/logo.svg";
import Button from "../../UI/Button";
const Hero = () => {
  return (
    <section className="w-full h-[100vh] overflow-hidden  xs:py-8 flex flex-col sm:py-2  md:flex-row justify-between md:gap-4 items-center pt-10  md:pt-0 md:pb-0  pb-16  hero ">
      <div className="w-full   py-4 flex items-center justify-center  md:w-1/2  md:h-full">
        <div className="w-[60%] xs:w-[70%]  2xs:w-[40%] md:pt-0   lg:w-[70%]  xl:w-[50%] flex items-center justify-center md:w-[70%]  xs:pt-32 flex-wrap ">
          <img
            className="object-cover max-w-full md:max-w-[110%]"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:h-full  flex flex-col  md:text-left md:items-start   items-center justify-center text-center  gap-5 lg:gap-10 overflow-hidden">
        <div className="flex flex-col items-center md:items-start  justify-end gap-4 md:gap-0 lg:gap-3">
          <h3 className="uppercase text-3xl Textshadow  xs:text-3xl md:text-xl lg:text-5xl lg:leading-[65px] drop-shadow-lg text-white font-bold ">
            We are <br /> digital marketing
          </h3>
          <h2 className="uppercase  text-5xl xs:text-6xl font-black tracking-[-2px] md:tracking-[0px] text-gradient text-transparent bg-clip-text lg:text-7xl">
            Boosters.
          </h2>
          <p className="hidden md:block text-white drop-shadow-2xl text-sm xs:text-base xs:w-[90%] md:w-[70%] lg:w-[80%] lg:text-2xl">
            We are a digital agency helping businesses and individuals establish
            a strong digital presence. We specialize in product development.
          </p>
        </div>
        <p className="text-white md:hidden Textshadow  text-[12px] xs:text-base w-[90%] md:w-[70%] md:text-lg">
          We are a digital agency helping businesses and individuals establish a
          strong digital presence. We specialize in product development.
        </p>
        <Button name={"Let's Talk ->"}  />
      </div>
    </section>
  );
};

export default Hero;
