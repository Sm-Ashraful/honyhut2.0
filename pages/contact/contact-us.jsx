import React from "react";
import Contact from "../../components/aboutUs/contactUs";
import HeroTop from "../../components/common/top-component";

const ContactUs = () => {
  return (
    <div className="relative w-full">
      <HeroTop title={`Contact Us`} />
      <Contact />
    </div>
  );
};

export default ContactUs;
