import React from "react";

const BtnSolid = ({ btnText, btnImage }) => {
  return (
    <div className="transition-all duration-1000 ">
      <button className="py-5 px-8 w-full h-full flex justify-between   items-center bg-customTheme hover:bg-white hover:text-customTheme text-customText border text-[10px] md:text-[18px] rounded-md text-center">
        <span className="">{btnImage}</span>
        <span className="pl-3 font-semibold">{btnText}</span>
      </button>
    </div>
  );
};

export default BtnSolid;
