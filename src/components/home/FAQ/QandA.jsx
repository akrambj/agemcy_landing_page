import { useState } from "react";

const QandA = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen
          ? "bg-primary rounded-[15px] max-h-[1000px] "
          : "bg-white border-[3px] border-[#0A0A0A] rounded-[10px] max-h-[100px]"
      }  w-[95%]  duration-300 cursor-pointer `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2
        className={` ${
          isOpen
            ? "rounded-t-[15px]  text-white bg-black"
            : "rounded-0 text-black "
        } w-full py-2  font-semibold md:text-xl md:px-5`}
      >
        {question.question}
      </h2>
      {isOpen && <p className="text-white p-2  text-sm">{question.answer}</p>}
    </div>
  );
};

export default QandA;
