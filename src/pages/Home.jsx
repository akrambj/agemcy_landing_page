import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";

const Home = () => {
  return (
    <main className="w-screen overflow-hidden">
      <Services />
      <Hero />
    </main>
  );
};

export default Home;
