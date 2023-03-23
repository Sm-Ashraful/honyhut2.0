import React from "react";
import About from "../../components/aboutUs/about";
import Contact from "../../components/aboutUs/contactUs";
import Map from "../../components/aboutUs/map";

const AboutUs = () => {
  const center = [51.505, -0.09];
  const zoom = 13;
  return (
    <div className="relative top-24 md:top-40 h-auto">
      <About />
      <Contact />
    </div>
  );
};

export default AboutUs;
