import QandA from "./QandA";

const Faq = () => {
  const questionsandanswers = [
    {
      question: "How much do you charge for a website?",
      answer:
        "Prices differ depending on the complexity of the project, technologies to be used, the design, company size,etc. They range from 500 to 10.000 american dollars",
    },
    {
      question: "Do you have an affiliates program ",
      answer:
        "Prices differ depending on the complexity of the project, technologies to be used, the design, company size,etc. They range from 500 to 10.000 american dollars",
    },
    {
      question:
        "Can you do the development part of my website if I already have the UI?",
      answer:
        "Prices differ depending on the complexity of the project, technologies to be used, the design, company size,etc. They range from 500 to 10.000 american dollars",
    },
    {
      question:
        "Can you do the development part of my website if I already have the UI?",
      answer:
        "Prices differ depending on the complexity of the project, technologies to be used, the design, company size,etc. They range from 500 to 10.000 american dollars",
    },
    {
      question:
        "Can you do the development part of my website if I already have the UI?",
      answer:
        "Prices differ depending on the complexity of the project, technologies to be used, the design, company size,etc. They range from 500 to 10.000 american dollars",
    },
    {
      question:
        "Can you do the development part of my website if I already have the UI?",
      answer:
        "Prices differ depending on the complexity of the project, technologies to be used, the design, company size,etc. They range from 500 to 10.000 american dollars",
    },
  ];
  return (
    <section className="w-screen h-screen oveflow-hidden ">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div>
          <h2 className="font-black text-3xl text-white">FAQs</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center md:w-[600px]">
          {questionsandanswers.map((question, index) => (
            <QandA key={index} question={question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
