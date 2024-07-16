import { useState } from "react";

const QandA = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen
          ? "bg-primary rounded-[15px]  h-[150px] md:h-[200px]"
          : "bg-white border-[3px] border-[#0A0A0A] rounded-[10px] h-16 md:h-20"
      }  w-[90%] md:w-full  duration-300 ease-in cursor-pointer hover:bg-primary h-16 `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2
        className={` ${
          isOpen
            ? "rounded-t-[15px]  text-white bg-black"
            : "rounded-0 text-black "
        } w-full py-2  font-semibold md:text-xl md:px-5 transition-all ease-in duration-300`}
      >
        {question.question}
      </h2>
        <p className={`text-white p-2 ${isOpen ? "opacity-100" : "opacity-0"} duration-200 text-sm md:text-lg md:w-[80%] md:mx-auto`}>
          {question.answer}
        </p>
    </div>
  );
};

export default QandA;
