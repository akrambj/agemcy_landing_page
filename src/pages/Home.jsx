import Animation from "../components/home/animation/Animation";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";

const Home = () => {
  return (
    <main className="w-screen overflow-x-hidden flex flex-col gap-5">
      <Animation />
      <Hero />
      <Services />
    </main>
  );
};

export default Home;
