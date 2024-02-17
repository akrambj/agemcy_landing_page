import React from "react";
import { FaPlay } from "react-icons/fa";

const Work = ({ work }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <h2 className="text-4xl uppercase font-black text-white">
          {work.name}
        </h2>
        <p className="w-[50%] mx-auto opacity-70 text-white">
          {work.description}
        </p>
      </div>
      <div className="w-[50%] mx-auto cursor-pointer work relative">
        <div className="relative">
          <img src={work.img} alt={work.name} />
          <div className="absolute top-0 left-0 w-full h-[82%] rounded-md ">
            <img src={work.bg} alt="" />
          </div>
          <div className="opacity-0 absolute top-0 left-0 w-full h-[80%] overlay rounded-md flex items-center justify-center">
            <FaPlay className="text-white play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
