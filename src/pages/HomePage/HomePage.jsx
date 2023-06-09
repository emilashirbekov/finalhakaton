import React from "react";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import About from "../../components/About/About";
import Checkout from "../../components/Payment/CheckOut";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <HowItWorks />
      <About />
      <Checkout />
    </>
  );
};

export default HomePage;
