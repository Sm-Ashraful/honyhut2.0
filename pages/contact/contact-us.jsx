import React from "react";
import Contact from "../../components/aboutUs/contactUs";
import HeroTop from "../../components/common/top-component";

const ContactUs = () => {
  return (
    <div className="relative w-full top-[8.09rem] md:top-[9.4rem] lg:top-[9.3rem]">
      <HeroTop title={`Contact Us`} />
      <Contact />
    </div>
  );
};

export default ContactUs;
