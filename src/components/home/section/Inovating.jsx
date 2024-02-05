const Inovating = () => {
  return (
    <section className="w-screen h-[100vh] overflow ">
      <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
        <div className="flex flex-col items-center gap-1 text-center text-white ">
          <h2 className="uppercase font-bold text-4xl Textshadow">
            INNOVATIVE MARKETING
          </h2>
          <h4 className="text-4xl text-white sm:hidden">For</h4>
          <h2 className="uppercase font-bold text-4xl text-primary">
            <span className="hidden sm:inline text-4xl capitalize font-medium text-white ">
              For
            </span>{" "}
            Modern World
          </h2>
        </div>
        <div className="text-center">
          <p className="text-white w-[90%] mx-auto sm:text-lg sm:w-[80%] md:w-[65%] md:text-xl lg:w-[50%] xl:w-[40%]">
            At redspot, we{"'"}re passionately dedicated to providing innovative
            marketing solutions that keep your business ahead of the curve in an
            ever-changing digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inovating;
