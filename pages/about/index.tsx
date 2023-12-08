import About from "./partials/About";
import AboutServey from "./partials/about-servay";
import HeroTop from "@/components/common/top-component";

const AboutUs = () => {
  return (
    <div className="w-full  relative ">
      <HeroTop
        title={`About Us`}
        subTitle="Focus your passion, and success will follow you"
      />
      <About />
      <AboutServey />
    </div>
  );
};

export default AboutUs;
