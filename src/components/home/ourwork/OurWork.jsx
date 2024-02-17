import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
// import testimonial01 from "../../../assets/imgs/testemonials/testemonial01.svg";
const OurWork = () => {
  const [scrolledToTestimonials, setScrolledToTestimonials] = useState(false);
  const testemonialsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (testemonialsRef.current) {
        const testimonialsSectionTop = testemonialsRef.current.offsetTop;
        const testimonialsSectionHeight = testemonialsRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= testimonialsSectionTop - 300 &&
          window.scrollY <= testimonialsSectionTop + testimonialsSectionHeight;

        setScrolledToTestimonials(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [testemonialsRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const testemonials = [
    {
      firstname: "Isabelle",
      lastname: "L",
      testemony:
        "Nous sommes ravis de la rénovation de notre appartement ! L'équipe a été à l'écoute de nos besoins et a su apporter des solutions créatives. Un service impeccable du début à la fin",
      position: "company position",
      // img: testimonial01,
      rate: 5,
    },
    {
      firstname: "Nicolas",
      lastname: "Bt",
      testemony:
        "le résultat a surpassé nos attentes ! Leur équipe compétente et dévouée a géré chaque étape avec professionnalisme !",
      position: "company position",
      // img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Marie",
      lastname: "H",
      testemony:
        "Travailler avec Guirri-Bat a été une expérience agréable. Ils ont fait preuve d'un haut niveau de compétence et ont réussi à transformer notre espace en un lieu moderne et fonctionnel. Merci pour tout!",
      position: "company position",
      // img: testimonial01,
      rate: 5,
    },
    {
      firstname: "Thomas",
      lastname: "G",
      testemony:
        "Guirri-Bat a été recommandé par un ami, et je suis enchanté par le résultat. Leur équipe a fait preuve d'un engagement exceptionnel envers la qualité et a livré notre projet dans les délais prévus",
      position: "company position",
      // img: testimonial01,
      rate: 4,
    },
    {
      firstname: "Émilie",
      lastname: "P",
      testemony:
        "Choisir Guirri-Bat pour la construction de notre maison a été la meilleure décision. Ils ont su combiner efficacité, créativité et respect des délais. Nous sommes ravis du résultat final et les recommandons sans hésitation.",
      position: "company position",
      // img: testimonial01,
      rate: 5,
    },
  ];

  return (
    <section id="ourwork" className="">
      <SimpleSlider items={testemonials} />
    </section>
  );
};

export default OurWork;
