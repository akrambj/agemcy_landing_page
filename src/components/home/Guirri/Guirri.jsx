import Modal from "react-modal";
import { useState } from "react";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
  },
};

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";

const Guirri = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("open");
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="w-screen h-screen oveflow-hidden ">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-center mt-12">
          <h2 className="w-full capitalize text-center font-black text-3xl text-white ">
            Guirri Bat
          </h2>
          <p className="text-white mt-4 max-w-[90%] lg:max-w-[70%] text-sm mx-auto sm:text-lg lg:text-xl text-center">
            We are a digital agency helping buisiness and individuals establish
            a strong digital presence. We specialize in product development.
          </p>
          <div>
            <button
              className="font-semibold text-[#FE4AE2]"
              onClick={openModal}
            >
              Read more...
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel="Example Modal"
            >
              <div className="w-full text-right">
                <button
                  className="text-right text-white max-w-min ml-auto mr-0"
                  onClick={closeModal}
                >
                  x
                </button>
              </div>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

              <div>I am a modal</div>
            </Modal>
          </div>
          <SimpleSlider />
        </div>
      </div>
    </section>
  );
};

export default Guirri;
