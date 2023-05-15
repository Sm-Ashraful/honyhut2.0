import React from "react";

const HeroTop = ({ title, subTitle = "" }) => {
  return (
    <div className="w-full bg-gradient-to-r from-white from-10% via-[#0073af] to-30%  to-primary to-90% py-[1rem] md:py-[2rem] flex flex-col justify-start items-center">
      <p className="mb-0 text-2xl uppercase font-bold tracking-widest text-white text-center w-full">
        {title}
      </p>
      <p className="text-primary">{subTitle}</p>
    </div>
  );
};

export default HeroTop;
