import Animation from "../components/home/animation/Animation";
import Hero from "../components/home/hero/Hero";
import Inovating from "../components/home/section/Inovating";
import Services from "../components/home/services/Services";

const Home = () => {
  return (
    <main className="w-screen overflow-x-hidden">
      <Animation />
      <Hero />
      <Services />
      <Inovating />
    </main>
  );
};

export default Home;
