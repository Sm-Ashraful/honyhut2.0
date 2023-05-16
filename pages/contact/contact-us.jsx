import React from "react";
import Contact from "../../components/aboutUs/contactUs";
import HeroTop from "../../components/common/top-component";

const ContactUs = () => {
  return (
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem] ">
      <HeroTop title={`Contact Us`} />
      <Contact />
    </div>
  );
};

export default ContactUs;
