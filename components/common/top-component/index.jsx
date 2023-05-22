import React from "react";

const HeroTop = ({ title, subTitle = "" }) => {
  return (
    <div className=" w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex flex-col justify-start items-center">
      <div className="w-full vector-background h-full py-[1rem] md:py-[2rem]">
        <p className="font-jakarta   mb-0 text-2xl uppercase font-bold tracking-widest text-white text-center w-full">
          {title}
        </p>
        <p className="text-primary">{subTitle}</p>
      </div>
    </div>
  );
};

export default HeroTop;
