const Value = ({ value, valIndex, index }) => {
  return (
    <div
      className={`${
        valIndex === index ? "bg-primary " : "bg-white "
      } w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] flex items-center justify-center  transition-all duration-300 ease-in`}
    >
      <h5
        className={`${
          valIndex === index
            ? " text-whtie font-bold"
            : " text-black font-semibold"
        }  rotate-[-45deg] text-center capitalize transition-all duration-300 ease-in`}
      >
        {value}
      </h5>
    </div>
  );
};

export default Value;
