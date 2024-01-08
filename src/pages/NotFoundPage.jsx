import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="flex flex-col justify-center gap-5">
        <h1 className="font-bold capitalize text-2xl">
          This Page Does Not exsist
        </h1>
        <div className="text-center">
          <Link
            className="bg-green-500 px-10 py-2 rounded-md font-semibold text-white drop-shadow-xl"
            to={"/"}
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
