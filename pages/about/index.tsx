import React from "react";

import HeroTop from "@/components/common/top-component";
import About from "@/components/aboutUs";
import AboutServey from "@/components/aboutUs/about-servay";
import AboutProduct from "@/components/aboutUs/about-products";

const AboutUs = () => {
  return (
    <div className="w-full  relative top-[8.09rem] md:top-[9.4rem] lg:top-[9.3rem]  ">
      <HeroTop
        title={`About Us`}
        subTitle="Focus your passion, and success will follow you"
      />
      <About />
      <AboutServey />
      <AboutProduct />
    </div>
  );
};

export default AboutUs;
