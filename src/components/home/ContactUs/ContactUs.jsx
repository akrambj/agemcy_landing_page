const ContactUs = () => {
  return (
    <section className="w-screen h-screen oveflow-hidden ">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div>
          <h2 className="w-full text-center font-black text-3xl text-[#FE4AE2] ">
            CONTACTEZ-NOUS
          </h2>
          <p className="text-white mt-4 max-w-[90%] lg:max-w-[70%] text-sm mx-auto sm:text-lg lg:text-xl text-center">
            We are dedicated to embodying these values in every interaction we
            have, both with our clients and with each other.
          </p>
          <form className="my-8 text-xs md:text-base flex flex-col gap-4 mx-10 lg:mx-24">
            <div className="flex flex-col lg:flex-row w-full gap-4 mx-auto">
              <input
                className="bg-white w-full p-2 px-4 rounded-full"
                type="text"
                placeholder="Nom"
              />
              <input
                className="bg-white w-full p-2 px-4 rounded-full"
                type="text"
                placeholder="Prenom"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 mx-auto">
              <input
                className="bg-white w-full p-2 px-4 rounded-full"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-white w-full p-2 px-4 rounded-full"
                type="tel"
                placeholder="Telephone"
              />
            </div>
            <input
              className="bg-white p-2 px-4 rounded-full"
              type="text"
              placeholder="Sujet"
            ></input>
            <textarea
              className="flex flex-row w-full h-44 gap-4 mx-auto bg-white p-4 rounded-3xl"
              placeholder="Message..."
            />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
