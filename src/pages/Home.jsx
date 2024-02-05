import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import ThirdSection from "./ThirdSection";

const Home = () => {
  return (
    <main className="w-screen overflow-x-hidden">
      {/* <Animation /> */}
      <Hero />
      <Services />
      <ThirdSection />
    </main>
  );
};

export default Home;
