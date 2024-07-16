import Faq from "../components/home/FAQ/Faq";
import Inovating from "../components/home/section/Inovating";
import OurValues from "../components/home/values/OurValues";
import background from "../assets/imgs/thirs/background.png";
import ContactUs from "../components/home/ContactUs/ContactUs";
import Guirri from "../components/home/Guirri/Guirri";

const ThirdSection = () => {
  return (
    <section className="relative">
      <div className="absolute  w-full h-full top-0 left-0 -z-10 ">
        <img className="w-full h-full object-cover" src={background} alt="" />
      </div>
      <Inovating />
      <OurValues />
      <Faq />
      {/* <Guirri /> */}
      {/* <ContactUs /> */}
    </section>
  );
};

export default ThirdSection;
