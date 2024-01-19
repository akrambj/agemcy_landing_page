import { useEffect, useState } from "react";
import Value from "./Value";

const OurValues = () => {
  const [index, setIndex] = useState(0);

  const values = [
    "striving for excellence",
    "reliability",
    "integrity",
    "respect and friendship",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-[70vh] overflow-hidden bg-[#0A0A0A] text-white xs:bg-red-300 2xs:bg-red-500 sm:bg-green-300 md:bg-blue-300 lg:bg-[#0A0A0A] ">
      <div className="w-full h-full flex flex-col items-center justify-around py-2 md:flex-row ">
        <div className="text-center md:text-left  flex flex-col gap-3 md:w-[50%]  lg:items-center  lg:w-[40%]">
          <h2 className="uppercase font-semibold text-3xl lg:text-5xl">
            OUR <span className="text-primary ">VALUES</span>.
          </h2>
          <p className="text-[#B2B2B2] text-sm w-[92%] mx-auto md:mx-0 md:w-full sm:text-lg  lg:ml-auto lg:w-[73%] lg:text-xl lg:text-left ">
            We are dedicated to embodying these values in every interaction we
            have, both with our clients and with each other.
          </p>
        </div>
        <div className="w-[40%]  md:flex md:justify-center  lg:pr-10 ">
          <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]  flex flex-wrap gap-2 content-center  justify-center items-center rotate-[45deg]">
            {values.map((value, valIndex) => (
              <Value
                key={value}
                value={value}
                valIndex={valIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
