import React from "react";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import About from "../../components/About/About";
import FormWithMap from "../../components/FormWithMap/FormWithMap";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <HowItWorks />
      <About />
      <FormWithMap />
    </>
  );
};

export default HomePage;
