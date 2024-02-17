import scrollVideo from "../../../assets/videos/scrollVid.mp4";
import stars from "../../../assets/imgs/animation/stars.webp";
import galaxy from "../../../assets/imgs/animation/galaxy.webp";

const Animation02 = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img className="w-full h-full object-cover" src={galaxy} alt="" />
      </div>
      <div className="w-full h-full bg-red-300 z-10">
        {/* <video
          className="w-full h-full object-cover"
          src={scrollVideo}
          autoPlay
          muted
          loop={true}
        /> */}
      </div>
    </section>
  );
};

export default Animation02;
