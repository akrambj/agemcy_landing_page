const Button = ({ name }) => {
  return (
    <button className="bg-primary text-white  w-[200px] text-xl font-bold rounded-3xl py-3 lg:cursor-pointer lg:hover:bg-white lg:hover:text-primary duration-300 md:py-2">
      {name}
    </button>
  );
};

export default Button;
