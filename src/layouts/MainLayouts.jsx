import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Partners from "../components/Partners/Partners";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import About from "../components/About/About";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <About />
      <Footer />
    </>
  );
};

export default MainLayouts;
