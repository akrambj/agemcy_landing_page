import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import ThirdSection from "./ThirdSection";
import Animation from "../components/home/animation/Animation";
import Animation02 from "../components/home/animation/Animation02";

const Home = () => {
  return (
    <main className="w-screen overflow-x-hidden">
      {/* <Animation02 /> */}
      <Hero />
      <Services />
      <ThirdSection />
    </main>
  );
};

export default Home;
