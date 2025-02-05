import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const SharedLayout = () => {
  return (
    <main className="w-full  flex  flex-col overflow-x-hidden">
        <div>
          <Header />
        </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default SharedLayout;
