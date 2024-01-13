import logo from "../../../assets/imgs/logo.svg";
const Hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden  flex flex-col justify-center items-center py-10 gap-10 sm:bg-red-300">
      <div className="w-full h-[45%]  flex items-center justify-center">
        <div className=" w-[70%] flex items-center justify-center  flex-wrap">
          <img className="object-cove2r" src={logo} alt="" />
        </div>
      </div>
      <div className="w-full h-[45%] flex flex-col items-center justify-center text-center gap-5 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="uppercase text-2xl font-semibold text-[#A5A5A5] ">
            We are <br /> digital marketing
          </h3>
          <h2 className="uppercase text-4xl font-bold letter tracking-[2px] bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Boosters.
          </h2>
        </div>
        <p className="text-[#A5A5A5] text-sm">
          We are a digital agency helping businesses and individuals establish a
          strong digital presence. We specialize in product development.
        </p>
        <button className="bg-[#FF01F4] text-white w-[200px] text-xl font-bold rounded-3xl py-2">
          Let{"'"}s Talk {"->"}
        </button>
      </div>
    </section>
  );
};

export default Hero;
