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

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-[70vh] overflow-hidden bg-[#0A0A0A] text-white">
      <div className="w-full h-full flex flex-col items-center justify-around py-2">
        <div className="text-center flex flex-col gap-3">
          <h2 className="uppercase font-semibold text-3xl">
            OUR <span className="text-primary">VALUES</span>.
          </h2>
          <p className="text-[#B2B2B2] text-sm w-[92%] mx-auto">
            We are dedicated to embodying these values in every interaction we
            have, both with our clients and with each other.
          </p>
        </div>
        <div className="w-[250px] h-[250px]  flex flex-wrap gap-2 content-center  justify-center items-center rotate-[45deg] ">
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
    </section>
  );
};

export default OurValues;
